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
          {/* <div> */}
          <img data-aos="fade-up" src={currUser.profile} alt="Roshni" />
          {/* </div> */}
        </div>
        <div id="about-text">
          <div className="about-content">{/* Intro here */}</div>
          <div data-aos="fade-left" className="about-content-caption">
            <div className="chef-name">{currUser.name},</div>
            <div className="chef-kitchen">{currUser.kitchen}</div>
          </div>
          <div className="buttons-about">
            {idx <= 0 ? (
              <div className="arrow-btn-light-left">
                <img src="./arrow-light-left.svg" alt="" />
              </div>
            ) : (
              <div onClick={() => handleChange(-1)} className="arrow-btn-left">
                <img src="./arrow_blue_left.svg" alt="" />
              </div>
            )}
            {idx === 2 ? (
              <div className="arrow-btn-light-right">
                <img src="./arrow-light-right.svg" alt="" />
              </div>
            ) : (
              <div onClick={() => handleChange(1)} className="arrow-btn-right">
                <img src="./arrow_blue_right.svg" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
