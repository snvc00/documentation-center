import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "./../../assets/bootstrap/css/bootstrap.min.css";
import "./Navbar.styles.css";
import logo from "./../../assets/img/logo.png";

export default function Navigation(props) {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-light navbar-expand-md navigation-clean"
    >
      <div className="container">
        <Navbar.Brand href="/">
          <img id="logo" src={logo} alt="Logo" />
          Documentation Center
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav navbar-nav ml-auto">
            {props.links.map((link) => {
              const url = link.status ? "" : link.url;
              const navLink = (
                <Nav.Link
                  className="nav-link active"
                  style={{ textTransform: "capitalize" }}
                  href={url}
                >
                  {link.description}
                </Nav.Link>
              );
              return (
                <OverlayTrigger
                  placement={link.tooltip}
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip style={{ textTransform: "capitalize" }}>
                      {link.status}
                    </Tooltip>
                  }
                >
                  {navLink}
                </OverlayTrigger>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
