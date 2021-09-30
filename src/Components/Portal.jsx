import React from "react";
import LeftPortal from "./LeftPortal.jsx";
import RightPortal from "./RightPortal";
import { BrowserRouter } from "react-router-dom";

import "../CSS/Portal.css";

function Portal() {
  return (
    <div className="Portal">
      <BrowserRouter>
        <LeftPortal />
        <RightPortal />
      </BrowserRouter>
    </div>
  );
}

export default Portal;
