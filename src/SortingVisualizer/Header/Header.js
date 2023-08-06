import React from "react";
import "./Header.css";
import { Button } from "@mui/material";
const Header = () => {
  const openUrl = (url) => {
    window.open(url, "_blank")?.focus();
  };
  return (
    <div className="header-container">
      <div className="header-heading-container">
        <div className="header-heading">Algo Visualizer</div>
        <div style={{marginLeft:"40rem"}}>
          <Button onClick={()=>openUrl("/graph")}>Graph</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
