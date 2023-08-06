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
        <div className="header-heading" style={{ fontFamily: "monospace" }}>Algo Visualizer</div>
        <div style={{ display: 'flex-end' }}>
          <Button onClick={() => openUrl("/graph")}>Graph</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
