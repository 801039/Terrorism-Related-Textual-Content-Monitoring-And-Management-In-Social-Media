import React from "react";
import "./SidebarChat.css";
import Avatar from "react-avatar";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar
        name="Tharindu Sanjitha"
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1625843938622/x6dBrA6-h.jpeg"
        size="40"
        round={true}
      />

      <div className="sidebarChat__info">
        <h2>User Name</h2>
        <p>User description ...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
