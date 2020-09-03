import React from "react";
import Editor from "./Editor.component";
import './Implementation.styles.css';

class Implementation extends React.Component {
  constructor(props) {
    super(props);

    var currrentImplementation = null;

    if (this.props.implementations) {
      if (this.props.implementations.length > 0) {
        currrentImplementation = this.props.implementations[0];
      }
    }

    this.state = {
      implementation: currrentImplementation,
    };
  }

  handleChange(event) {
    const selected = this.props.implementations.find(
      (item) => item.language === event.target.value
    );
    this.setState({
      implementation: selected,
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: "120px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 style={{marginBottom: '2rem'}}>Code Implementation</h2>
              </div>
              <div className="col-md-6">
                <div>
                  <div className="input-group" style={{ width: '70%', margin: 'auto'}}>
                    <select
                      id="selector"
                      className="custom-select language-selector"
                      onChange={(event) => {
                        this.handleChange(event);
                      }}
                    >
                      {this.props.implementations.map((implementation) => (
                        <option
                          key={implementation.language}
                          value={implementation.language}
                        >
                          {implementation.text}
                        </option>
                      ))}
                    </select>
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => {
                          this.forceUpdate();
                        }}
                      >
                        Refresh
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Editor
          language={this.state.implementation.language}
          code={this.state.implementation.code}
        />
      </div>
    );
  }
}

export default Implementation;
