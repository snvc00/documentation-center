import React from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/mode/c_cpp";
import "brace/mode/csharp";
import "brace/mode/python";
import "brace/theme/monokai";
import "./Editor.styles.css";

export default function Editor(props) {
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-xl-flex justify-content-xl-center align-items-xl-center">
            <AceEditor
              value={props.code}
              mode={props.language}
              theme="monokai"
              fontSize={16}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
