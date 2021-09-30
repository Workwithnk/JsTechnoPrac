import React from "react";
import Portal from "./Components/Portal";
import SecondBar from "./Components/SecondBar";
import TopBar from "./Components/TopBar";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <SecondBar />
      <Portal />
    </div>
  );
}

export default App;
