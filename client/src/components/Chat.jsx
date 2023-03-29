import React from "react";
import Avatar from "react-avatar";
import "./Chat.css";
import { TbSearch, TbDotsVertical } from "react-icons/tb";
import { MdAttachFile } from "react-icons/md";
import SocialMediaApp from "./SocialMediaApp";

function Chat() {
  return (
    <div className="chat" class="overflow-hidden overflow-y-auto ">
      <div className="chat__header" class="flex justify-between ">
        <Avatar
          name="Tharindu Sanjitha"
          src="https://img.freepik.com/free-vector/hand-drawn-flag-isolated-white-background_53876-15782.jpg?w=360"
          size="40"
          round={true}
        />

        <div
          className="chat__headerInfo"
          class="text-neople-800 dark:text-neon-300 "
        >
          <h3>Page Name</h3>
        </div>

        <div
          className="chat__headerRight"
          class="flex text-neople-800 dark:text-neon-300 "
        >
          <a href="your link here">
            {" "}
            <TbSearch />
          </a>
          <a href="your link here">
            {" "}
            <MdAttachFile />
          </a>
          <a href="your link here">
            {" "}
            <TbDotsVertical />
          </a>
        </div>
      </div>

      <div className="chat__body" class="absolute ">
        <SocialMediaApp />
      </div>
    </div>
  );
}

export default Chat;
