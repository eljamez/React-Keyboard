import { createRoot } from "react-dom/client";

import { useState } from "react";
import ReactKeyboard from "../../src/index";

type GetCurrentNotes = (arg1: string[]) => void;

const App = () => {
  const [notes, setNotes] = useState<string[]>([]);
  // notes are returned as an array
  const getCurrentNotes: GetCurrentNotes = (noteArray) => {
    setNotes(noteArray);
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-300 h-screen w-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-white text-6xl font-bold">
        react-keyboard-component Demo
      </h1>
      <div className="flex flex-col items-center justify-center gap-10 w-full px-10">
        <ReactKeyboard getCurrentNotes={getCurrentNotes} />
        <div className="text-white text-2xl font-bold">
          <p>Notes:</p>
          <p>{notes?.join(", ") || "No notes"}</p>
        </div>
      </div>
    </div>
  );
};

const container = document.querySelector("#demo");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
