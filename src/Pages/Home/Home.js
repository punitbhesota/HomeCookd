import React, { useRef } from "react";
import "./Home.css";
import emailjs from "@emailjs/browser";

function Home() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_37cy1uj",
        "homecookd_form",
        form.current,
        "O3ApIzI-So49_28bi"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert("Sign up successful");
        },
        (error) => {
          console.log(error.text);
          alert("Please try again");
        }
      );
  };
  return (
    <div className="Home" id="home">
      <div className="home-main">
        <div id="home-heading">
          <span>Authentic</span>
          <span>Home-Cooked Food.</span>
          <span>Delivered.</span>
          <form ref={form} id="home-signin" onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
            />
            <button type="submit">Sign up for early access</button>
          </form>
        </div>
        <div id="home-img">
          <img data-aos="fade-left" src="./home-bg.png" alt="home-bg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
