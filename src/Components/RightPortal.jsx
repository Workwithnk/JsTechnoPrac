import React from "react";
import { Switch, Route } from "react-router-dom";
import Employee from "./Employee.jsx";
import DaysOff from "./DaysOff.jsx";
import "../CSS/RightPortal.css";

function RightPortal() {
  return (
    <div className="RightPart_Portal">
      <Switch>
        <Route exact path="/" component={Employee} />
        <Route path="/daysOff" component={DaysOff} />
      </Switch>
    </div>
  );
}

export default RightPortal;
