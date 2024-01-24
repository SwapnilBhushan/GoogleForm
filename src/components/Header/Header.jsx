import React from "react";
import "./Header.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton } from "@mui/material";
import logo from "../../assets/images/Swapnil.jpg";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
const Header = () => {
  return (
    <div className="header">
      <div className="header_info">
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        {/* <TaskOutlinedIcon style={{ color: "#8a2be2", height: 40, width: 30 }} /> */}
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="header_searchbox"></div>
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
