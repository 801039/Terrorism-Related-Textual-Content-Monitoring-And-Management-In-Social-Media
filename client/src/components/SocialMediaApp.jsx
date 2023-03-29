import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SocialMediaApp() {
  const [posts, setPosts] = useState([]);

  function createPost(content) {
    setPosts([{ id: Date.now(), content }, ...posts]);
  }

  function editPost(id, newContent) {
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          post.content = newContent;
        }
        return post;
      })
    );
  }

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div class="text-neople-700 dark:text-neon-200">
      <CreatePostForm createPost={createPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          editPost={editPost}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

function CreatePostForm({ createPost }) {
  const [content, setContent] = useState("");

  function handleSubmit() {
    createPost(content);
    setContent("");

    let jsonContent = {
      "post" : content
    }

    axios.post("http://localhost:3005", jsonContent,
    {
      headers: {
        "Content-Type": "application/json",
      }, 
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  
  }

  function postCheck(e) {
    e.preventDefault();
    const Content = JSON.stringify({ content: e.target[0].value });

    if (content === "") {
      toast.error('Post cannot be empty', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
        });
      return;
    }

    axios.post("http://localhost:5000/predict", Content, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.data.prediction === "0") {
        toast.error('Your post violates our community standards, Try editing your post', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
          });
      }
      else {
        toast.success("Posted successfully");
        handleSubmit();
      }
    }

    ).catch((err) => {
      toast.error('Error Validating Post, Check Console')
      console.log(err);
    });
  }

  return (
    <form onSubmit={postCheck}>
      <input class="text-neople-700 dark:text-neon-200 bg-neon-100 dark:bg-neople-800"
        type="text"
        placeholder="Write your post here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}

function Post({ post, editPost, deletePost }) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(post.content);

  function handleDelete() {
    deletePost(post.id);
  }

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    setEditing(false);
    editPost(post.id, content);
  }

  return (
    <div class="text-neople-700 dark:text-neon-200 ">
      {editing ? (
        <>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{post.content}</p>
          <button onClick={handleEdit}>
            <MdEdit />
          </button>
          <button onClick={handleDelete}>
            <MdDelete />
          </button>
        </>
      )}
    </div>
  );
}

export default SocialMediaApp;
