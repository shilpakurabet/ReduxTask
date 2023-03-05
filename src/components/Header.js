/** @format */

import React from "react";
import { PUBLIC_IMAGE_PATH } from "../utils/constant";
import "./Header.css";
const Header = ({ setSearchQuery }) => {
  return (
    <div className="header">
      <div className="navbarLogo">
        <img src="https://www.copilotly.com/img/logo/dark-nobg.png" alt="" />
      </div>
      <div className="searchBox">
        <img src={PUBLIC_IMAGE_PATH + "/search.png"} alt="" className="" />
        <input
          type={"text"}
          placeholder={"search"}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
