import React from "react";
import "./Top.css";

function Top() {
  const close = () => {
    if (document.querySelector(".Top").style.display === "flex") {
      return (document.querySelector(".Top").style.display = "none");
    } else return (document.querySelector(".Top").style.display = "none");
  };
  return (
    <div className="Top">
      <p id="empty-tag"></p>
      <p id="top-text">
        Invite Friends & Earn €10 on your First order
        <button>Learn more</button>
      </p>
      <p onClick={close} id="remove">
        <img
          src="https://uploads-ssl.webflow.com/61e00066c2514286821eaf1e/61e004024e6be6143bb42175_Close%20Square.svg"
          alt=""
        />
      </p>
    </div>
  );
}

export default Top;
