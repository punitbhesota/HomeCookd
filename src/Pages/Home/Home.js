import React from "react";
import "./Home.css";
// import Aos from "aos";
// import "aos/dist/aos.css";

function Home() {
  return (
    <div className="Home" id="home">
      <div className="home-main">
        <div id="home-heading">
          <span>Authentic</span>
          <span>Home-Cooked Food.</span>
          <span>Delivered.</span>
          <div data-aos="fade-right" id="home-signin">
            <input placeholder="Enter you email" />
            <button>Sign up for early access</button>
          </div>
        </div>
        <div id="home-img">
          <img data-aos="fade-left" src="./home-bg.png" alt="home-bg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
