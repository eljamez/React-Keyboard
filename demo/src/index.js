import React, { Component } from "react";
import { render } from "react-dom";

import ReactKeyboard from "../../src";

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

render(<Demo />, document.querySelector("#demo"));
