import React from "react";
import { render } from "react-dom";

import ReactKeyboard from "../../src/index";

type GetCurrentNotes = (arg1: string[]) => void;

const App = () => {
  // notes are returned as an array
  const getCurrentNotes: GetCurrentNotes = (notes) => {
    console.log(notes)
  }

  return (
    <div>
      <h1>react-keyboard-component Demo</h1>
      <ReactKeyboard getCurrentNotes={getCurrentNotes} />
    </div>
  )
};

// @ts-ignore
render(<App />, document.querySelector("#demo"));
