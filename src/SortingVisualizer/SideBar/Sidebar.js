import React from "react";
import Buttons from "./Buttons/Buttons";
import Sliders from "./Sliders/Sliders";
import ArrayInput from "./Input/ArrayInput";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="controller-container">
        <div className="sort-btns-container">
          <Buttons />
        </div>
        <div>
          <ArrayInput />
        </div>
        <div className="sliders-container">
          <Sliders />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
