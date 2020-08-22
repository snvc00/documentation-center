import React from "react";

import pattern from "./../../assets/img/bg-pattern.png";
import "./Titlebar.styles.css";

export default function Titlebar(props) {
  const bg = `url(${pattern}), linear-gradient(235deg, ${props.primaryColor}, ${props.secondaryColor} 100%)`;

  return (
    <div
      className="text-center d-xl-flex justify-content-xl-center align-items-xl-center text-align-center"
      style={{ marginTop: "60px" }}
    >
      <div
        className="container text-center border rounded d-xl-flex justify-content-xl-center"
        id="container"
        style={{ background: bg }}
      >
        <div className="row text-center d-xl-flex justify-content-xl-center align-items-xl-center">
          <div className="col" id="column">
            <h1
              className="display-3 text-uppercase text-center text-light"
              id="title"
            >
              {props.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
