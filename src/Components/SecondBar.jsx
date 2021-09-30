import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiChevronsLeft, FiSettings, FiFilter } from "react-icons/fi";
import { BsFileEarmarkSpreadsheet, BsTable } from "react-icons/bs";
import {
  BiDotsVerticalRounded,
  BiBuilding,
  BiSpreadsheet,
  BiPlus,
} from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { FaSortAmountDown, FaLayerGroup } from "react-icons/fa";

import "../CSS/SecondBar.css";

function SecondBar() {
  const [sorts, setSorts] = useState(2);
  return (
    <div className="SecondBar">
      <div className="firstPart_SecondBar">
        <div className="fItem_fPart_SB">
          <AiOutlineEye className=" eyeIcon_SB " />
          <h5>HR Overview</h5>
        </div>
        <div className="sItem_fPart_SB">
          <FiChevronsLeft className="iconSB" />
          <FiSettings className="icons_SB gearIcon_SB iconSB" />
        </div>
      </div>
      <div className="secondPart_SecondBar">
        <div className="firstPart_SPart_SB">
          <div className="fpart_FPartSpart_SB Parts_FPartSpart_SB">
            <BsFileEarmarkSpreadsheet />
            <h5>Sheet</h5>
            <BiDotsVerticalRounded />
          </div>
          <div className="spart_FPartSpart_SB Parts_FPartSpart_SB">
            <BiBuilding />
            <h5>Departments</h5>
            <BiDotsVerticalRounded />
          </div>
          <div className="tpart_FPartSpart_SB Parts_FPartSpart_SB">
            <BiSpreadsheet />
            <h5>Location</h5>
            <BiDotsVerticalRounded />
          </div>
          <div className="Parts_FPartSpart_SB">
            <BiPlus className="icons_SB plusIcon_SB " />
          </div>
        </div>
        <div className="secondPart_SPart_SB">
          <div className="Parts_SPartSpart_SB bgColor_Part_SB">
            <BsTable className="icons_sPart_SB " />
            <h5>Table</h5>
          </div>
          <div className="Parts_SPartSpart_SB">
            <FiFilter className="icons_sPart_SB " />
            <h5>Filter</h5>
          </div>
          <div className="Parts_SPartSpart_SB">
            <FaLayerGroup className="icons_sPart_SB " />
            <h5>Group</h5>
          </div>
          <div className="Parts_SPartSpart_SB bgColor_Part_SB">
            <FaSortAmountDown className="icons_sPart_SB " />
            <h5 className="sortCount_SB">{sorts}</h5>
            <h5>Sorts</h5>
          </div>
          <div className="Parts_SPartSpart_SB">
            <GoSettings className="icons_sPart_SB " />
            <h5>Customize</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondBar;
