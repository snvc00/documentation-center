import React from "react";

import "./../../assets/bootstrap/css/bootstrap.min.css";
import CustomChart from "./CustomChart.component";

export default function Content(props) {
  const contentElement = props.currentItem.content.chart ? (
    <CustomChart
      data={props.currentItem.content.chart}
      primaryColor={props.primaryColor}
      secondaryColor={props.secondaryColor}
    />
  ) : (
    <img
      style={{ width: "100%" }}
      src={props.currentItem.content.url}
      alt="content"
    />
  );

  return (
    <div style={{ marginTop: "60px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ marginBottom: "30px" }}>Description</h2>
            <p className="text-left text-black-50">
              {props.currentItem.description}
            </p>
          </div>
          <div className="col-md-6">
            <h2 style={{ textTransform: "capitalize", marginBottom: "30px" }}>
              {props.currentItem.content.title}
            </h2>
            {contentElement}
          </div>
        </div>
      </div>
    </div>
  );
}
