import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer" id="footer">
      <div className="Footer-main">
        <div className="Footer-main-logo-address">
          <img id="HClogo" src="./logo2.svg" alt="Home cookd" />
          <p className="address">
            Homecookd B.V. 64 Zeeburgstraat, 1018 AG, Amsterdam, North Holland
            The Netherlands
          </p>
        </div>
        <div className="Footer-links">
          <p>Terms &amp; Conditions</p>
          <p>&nbsp;&nbsp;&nbsp;|</p>
          <p>Footer link</p>
          <p>&nbsp;&nbsp;&nbsp;|</p>
          <p>Footer link</p>
          <p>&nbsp;&nbsp;&nbsp;</p>
          <a href="https://www.instagram.com/homecookd21/" id="insta-logo">
            <img src="./insta.png" alt="instagram" />
          </a>
        </div>
      </div>
      <hr />
      <p id="copyright">Copyright ©2022 Homecookd</p>
    </div>
  );
}

export default Footer;
