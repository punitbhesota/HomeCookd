import React, { useRef } from "react";
import "./Third.css";
import emailjs from "@emailjs/browser";

function Third() {
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
    <div className="Third">
      <h1>
        World of amazing
        <br />
        and authentic cuisines....
      </h1>

      <form ref={form} id="home-signIn" onSubmit={sendEmail}>
        <input type="email" name="user_email" placeholder="Enter your email" />
        <button type="submit">Sign up for early access</button>
      </form>
    </div>
  );
}

export default Third;
