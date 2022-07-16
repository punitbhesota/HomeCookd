import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer" id="footer">
      <div className="Footer-main">
        <img id="HClogo" src="./logo2.svg" alt="Home cookd" />
        <div className="Footer-links">
          <p>Terms &amp; Conditions</p>
          <p>&nbsp;&nbsp;&nbsp;|</p>
          <p>Footer link</p>
          <p>&nbsp;&nbsp;&nbsp;|</p>
          <p>Footer link</p>
          <p>&nbsp;&nbsp;&nbsp;|</p>
          <p id="insta-logo">
            <img src="./insta.png" alt="instagram" />
          </p>
        </div>
      </div>
      <hr />
      <p id="copyright">Copyright ©2022 Homecookd</p>
    </div>
  );
}

export default Footer;
