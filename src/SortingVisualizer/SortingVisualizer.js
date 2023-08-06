import React from 'react'
import Body from "./Body/Body";
import Sidebar from "./SideBar/Sidebar";
import Header from "./Header/Header";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  return (
    <div className="main-container" style={{
      width: "100wh",
      textAlign: "center",
      height: "100vh",
      overflow: "hidden",
    }}>
      <div>
        <Header />
      </div>
      <div className="sidebar-body-container">
        <Sidebar />
        <Body />
      </div>
    </div>
  )
}

export default SortingVisualizer
