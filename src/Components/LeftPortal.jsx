import React from "react";
import { BiPlus } from "react-icons/bi";
import { AiFillFolder } from "react-icons/ai";
import "../CSS/LeftPortal.css";
import { NavLink } from "react-router-dom";

function LeftPortal() {
  return (
    <div className="LeftPart_Portal">
      <a className="Button_Lpart_Portal">
        <BiPlus className="plus_LPart_Portal" />
        <h5>New Folder</h5>
      </a>
      <ul>
        <NavLink to="/">
          <li className=" employee_LPart_Portal  list_LPart_Portal">
            <div className="SubPart_LPart_Portal">
              <AiFillFolder className="icon_LPart_Portal" />
              <h5>Employee</h5>
            </div>
            <div>
              <span>10</span>
            </div>
          </li>
        </NavLink>
        <NavLink to="/daysOff">
          <li className="list_LPart_Portal">
            <div className="SubPart_LPart_Portal">
              <AiFillFolder className="icon_LPart_Portal" />
              <h5>Days Off</h5>
            </div>
            <div>
              <span>6</span>
            </div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default LeftPortal;
