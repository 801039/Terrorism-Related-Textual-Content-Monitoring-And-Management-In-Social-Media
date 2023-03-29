import React from "react";
import "./Sidebar.css";
import {
  TbMessage,
  TbBellRinging,
  TbDotsVertical,
  TbSearch,
} from "react-icons/tb";
import Avatar from "react-avatar";
// import ReactSearchBox from "react-search-box";
import SidebarChat from "./SidebarChat";
import SidebarLogo from './SidebarLogo';

function Sidebar() {
  return (
    <div className="sidebar" class="fixed h-5/6 overflow-hidden">
      <div className="sidebar__header">
        <Avatar
          name="Tharindu Sanjitha"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1625843938622/x6dBrA6-h.jpeg"
          size="40"
          round={true}
        />

        <div className="sidebar__headerRight">
          <a href="your link here">
            {" "}
            <TbMessage />
          </a>
          <a href="your link here">
            {" "}
            <TbBellRinging />
          </a>
          <a href="your link here">
            {" "}
            <TbDotsVertical />
          </a>
        </div>
      </div>

      <div className="sidebar__search">
        <TbSearch />

        <div className="sidebar__searchContainer">
          <input
            class="bg-neople-50 dark:bg-neon-900"
            type="text"
            placeholder="Search Page"
          />
        </div>
      </div>

      <div className="sidebar__chats" class="h-5/6 overflow-y-auto">
        <SidebarChat />

        <div className="sidebar__chats">
          <SidebarLogo />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
