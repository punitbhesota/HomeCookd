import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

function Header() {
  const openNav = () => {
    if (document.querySelector(".navformobile").style.display === "flex") {
      return (document.querySelector(".navformobile").style.display = "none");
    } else {
      return (document.querySelector(".navformobile").style.display = "flex");
    }
  };
  return (
    <header className="Header">
      <nav className="Header-outer">
        <div className="content-box">
          <span id="logo">
            <img src="./logo.svg" alt="Home cookd" />
          </span>
          <div className="nav-links">
            <Link to="home" smooth={true}>
              <span>Home</span>
            </Link>
            <Link to="how" smooth={true}>
              <span>How it works</span>
            </Link>
            <Link to="About" smooth={true}>
              <span>About us</span>
            </Link>
            <Link to="footer" smooth={true}>
              <span>Contact us</span>
            </Link>
          </div>
        </div>
        <button onClick={openNav} className="nav-btn">
          <img src="./hamburger.png" alt="&amp;" />
        </button>
      </nav>
      <div className="navformobile">
        <Link onClick={openNav} to="home" smooth={true}>
          <span className="navformobile-links">Home</span>
        </Link>
        <Link onClick={openNav} to="how" smooth={true}>
          <span className="navformobile-links">How its works</span>
        </Link>
        <Link onClick={openNav} to="About" smooth={true}>
          <span className="navformobile-links">About us</span>
        </Link>
        <Link onClick={openNav} to="footer" smooth={true}>
          <span className="navformobile-links">Contact us</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
