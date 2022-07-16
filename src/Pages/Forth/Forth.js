import React from "react";
import "./Forth.css";
import CountUp from "react-countup";

function Forth() {
  return (
    <div className="Forth">
      <h1>
        We have sucessfully delivered <br />
        2000+ cuisines in Amsterdam.
      </h1>
      <div className="Forth-data">
        <p>
          <h2 className="data-counts">
            <CountUp enableScrollSpy={true} start={0} end={25} duration={3} />
          </h2>
          CHEFS
        </p>
        <img src="./arrow-right.svg" alt="--->" />
        <p>
          <h2 className="data-counts">
            <CountUp enableScrollSpy={true} start={0} end={2000} duration={3} />
          </h2>
          ORDERS
        </p>
        <img src="./arrow-right-2.svg" alt="--->" />
        <p>
          <h2 className="data-counts">
            <CountUp
              enableScrollSpy={true}
              start={0}
              end={9.5}
              duration={3}
              decimals={1}
            />
          </h2>
          RATINGS
        </p>
      </div>
    </div>
  );
}

export default Forth;
