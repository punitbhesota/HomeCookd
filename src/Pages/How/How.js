import React from "react";
import "./How.css";

function How() {
  return (
    <div className="How" id="how">
      <h2>How it works?</h2>
      <div className="How-process">
        <div>
          <img src="./forkNknife.svg" alt="fork" />
          <p>Find chef and book meal slot</p>
        </div>
        <div>
          <img src="./Soup.svg" alt="fork" />
          <p>Pick your dish and Checkout</p>
        </div>
        <div>
          <img src="./Serving.svg" alt="fork" />
          <p>Dish is delivered to your home</p>
        </div>
      </div>
    </div>
  );
}

export default How;
