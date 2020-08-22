import React from "react";
import "./Footer.styles.css";

export default function Footer(props) {
  return (
    <div className="footer-dark" style={{ marginTop: "120px" }}>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Help</h3>
              <ul>
                {props.helpLinks
                  ? props.helpLinks.map((link) => (
                      <li key={link.description}>
                        <a href={link.url}>{link.description}</a>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>Information</h3>
              <ul>
                {props.infoLinks
                  ? props.infoLinks.map((link) => (
                      <li key={link.description}>
                        <a href={link.url}>{link.description}</a>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Documentation Center</h3>
              <p style={{ textTransform: "none" }}>
                {props.appData ? props.appData.description : null}
              </p>
            </div>
            <div className="col item social">
              <a href={props.appData ? props.appData.repository : ""}>
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
