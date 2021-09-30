import React, { useState } from "react";
import { BiCopy, BiSearch } from "react-icons/bi";
import { IoColorPaletteOutline, IoNotificationsOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { AiOutlineUserAdd, AiOutlineShareAlt } from "react-icons/ai";
import Logo from "../Images/logo.png";
import user from "../Images/user1.jpeg";
import "../CSS/TopBar.css";

function TopBar() {
  const [notification, setNotification] = useState(0);
  return (
    <div className="TopBar">
      <div className="firstPart_TopBar">
        <div className="fItem_Fpart_TB subPart_fPart_TB">
          <BiCopy className="icons_TB" />
          <h5>Boards</h5>
        </div>
        <div className="fItem_Fpart_TB subPart_fPart_TB">
          <BiSearch className="icons_TB" />
          <h5>Search</h5>
        </div>
        <div className="fItem_Fpart_TB subPart_fPart_TB">
          <IoColorPaletteOutline className="icons_TB" />
          <h5>Theme Color</h5>
        </div>
        <div className="fItem_Fpart_TB subPart_fPart_TB">
          <FiActivity className="icons_TB" />
          <h5>Activity Log</h5>
        </div>
      </div>
      <div className="middleImage_TB">
        <img src={Logo} alt="Logo image" />
      </div>
      <div className="thirdPart_TopBar">
        <div className="fItem_Tpart_TB subPart_tPart_TB">
          <AiOutlineUserAdd className="icons_TB" />
          <h5>Invite</h5>
        </div>

        <div className="tItem_Tpart_TB subPart_tPart_TB">
          <AiOutlineShareAlt className="icons_TB" />
          <h5>Share</h5>
        </div>
        <div className="tItem_Tpart_TB subPart_tPart_TB">
          <IoNotificationsOutline className="icons_TB" />
          <h5>{notification}</h5>
        </div>
        <div className="image_Tpart_TB ">
          <img src={user} alt="user logo" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
