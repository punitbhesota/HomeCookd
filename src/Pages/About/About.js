import React, { useState } from "react";
import "./About.css";

const users = [
  {
    profile: "./roshni.jpeg",
    name: "Roshni",
    kitchen: "South African Chef",
  },
  {
    profile: "./Deli.jpeg",
    name: "Deli",
    kitchen: "Persian Kitchen",
  },
  {
    profile: "./thao.jpeg",
    name: "Thao",
    kitchen: "Vietnamese Kitchen",
  },
];

function About() {
  const [idx, setIdx] = useState(0);
  const currUser = users[idx];

  const handleChange = (offset) => {
    let newIdx = idx + offset;
    if (newIdx < 0) {
      newIdx = users.length - 1;
    } else if (newIdx >= users.length) {
      newIdx = 0;
    }
    setIdx(newIdx);
  };
  return (
    <div className="about" id="About">
      <div className="about-inner">
        <div id="owner">
          <img data-aos="fade-up" src={currUser.profile} alt="Roshni" />
        </div>
        <div id="about-text">
          <div className="about-content">{/* Intro here */}</div>
          <div data-aos="fade-left" className="about-content-caption">
            {currUser.name},
            <br /> {currUser.kitchen}
          </div>
          <div className="buttons-about">
            <div onClick={() => handleChange(-1)} className="arrow-btn-left">
              <img src="./arrow_blue_left.svg" alt="" />
            </div>
            <div onClick={() => handleChange(1)} className="arrow-btn-right">
              <img src="./arrow_blue_right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
