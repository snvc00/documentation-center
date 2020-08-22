import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import "./Wait.styles.css";

class Wait extends React.Component {
  constructor() {
    super();
    this.state = {
      alertIsVisible: false,
    };
  }

  showAlert() {
    this.setState({
      alertIsVisible: !this.state.alertIsVisible,
    });
  }

  render() {
    return (
      <div>
        <div className="container loading-box">
          {this.state.alertIsVisible && (
            <Alert variant="warning" onClose={this.showAlert.bind(this)} dismissible>
              <hr />
              This application uses free tier resources which sometimes are down
              for undefined time, if the page does not load after a few 
              seconds please try later.
              <hr />
            </Alert>
          )}
          <p className="wait-text">
            Woops, our page is taking a little bit more of time to load all the
            information
          </p>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
        <div className="btn-box">
          <p className="wait-text smaller">
            Well, you can click this useless but happy
            <br />
            button until the page is ready
          </p>
          <Button
            variant="outline-dark"
            size="lg"
            onClick={this.showAlert.bind(this)}
          >
            :^)
          </Button>
        </div>
      </div>
    );
  }
}

export default Wait;
