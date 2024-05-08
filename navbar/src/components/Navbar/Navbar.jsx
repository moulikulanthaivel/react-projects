import React from "react";
import "./navbar.css";
import logo_white from "../../assets/logo-black.png";
import logo_black from "../../assets/logo-white.png";
import s_icon_black from "../../assets/search-b.png";
import s_icon_white from "../../assets/search-w.png";
import toogle_white from "../../assets/night.png";
import toogle_black from "../../assets/day.png";



const Navbar = ({theme,setTheme}) => {
const toogle_mode = ()=>{
    theme == "light"? setTheme("dark" ): setTheme("light")
}

  return (
    <div className="navbar">
      <img src={theme == "light"? logo_white : logo_black } alt="" className="logo" />

      <ul>
        <li>home</li>
        <li>produt</li>
        <li>features</li>
        <li>about</li>
      </ul>

      <div className="search-box">
        <input className="input-search" type="text" placeholder="search" />
        <img src={theme == "light"? s_icon_white : s_icon_black }alt="" />
      </div>
      
        <img onClick={()=>{toogle_mode()}} src={ theme=="light"? toogle_white : toogle_black } alt="" className="toogle-icon" />
    </div>
  );
};

export default Navbar;
