import React, { Component } from "react";
import { render } from "react-dom";

import ReactKeyboard from "../../src/index";

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-keyboard-component Demo</h1>
        <ReactKeyboard />
      </div>
    );
  }
}

// @ts-ignore
render(<Demo />, document.querySelector("#demo"));
