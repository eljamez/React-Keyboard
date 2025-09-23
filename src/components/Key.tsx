import { FunctionComponent, MouseEventHandler } from "react";

type Props = {
  note: string;
  onMouseDown: MouseEventHandler<HTMLDivElement>;
  onMouseUp: MouseEventHandler<HTMLDivElement>;
  selected: boolean;
  showNote: boolean;
};

const Key: FunctionComponent<Props> = ({
  note,
  selected,
  onMouseDown,
  onMouseUp,
  showNote,
}) => {
  const noteSliced = note.slice();
  const isSharp = noteSliced[1] === "#";

  // Base classes for all keys with synth-style 3D effects
  let baseClasses =
    "box-border text-white text-center font-staatliches font-bold text-2xl transition-all duration-75 ease-out origin-top cursor-pointer select-none";

  // Different styling for sharp vs regular keys
  if (isSharp) {
    // Sharp keys - start lighter gray, get darker when pressed
    baseClasses +=
      " bg-gradient-to-b from-gray-600 to-gray-700 row-start-1 col-span-2 z-20 rounded-sm border border-gray-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_3px_6px_rgba(0,0,0,0.4)] relative";

    if (selected) {
      // Much darker when pressed for clear visual feedback + yellow overlay
      baseClasses +=
        " bg-gradient-to-b from-gray-700 to-gray-600 scale-y-[0.99] relative after:absolute after:inset-0 after:bg-yellow-400/30 after:rounded-sm";
    } else {
      baseClasses +=
        " hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_8px_rgba(0,0,0,0.5)] hover:from-gray-500";
    }
  } else {
    // Regular keys - white keys with 3D effect, start at top and span full height
    baseClasses +=
      " bg-gradient-to-b from-gray-100 via-white to-gray-200 row-start-1 row-span-2 col-span-3 rounded-b-lg border border-gray-300 shadow-[inset_0_-1px_0_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.15)] text-gray-800 z-10";

    if (selected) {
      // Keep original press effect + yellow overlay
      baseClasses +=
        " bg-gradient-to-b from-blue-200 via-blue-100 to-blue-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.1)] scale-y-[0.98] translate-y-[2px] relative after:absolute after:inset-0 after:bg-yellow-400/40 after:rounded-b-lg";
    } else {
      baseClasses +=
        " hover:shadow-[inset_0_-1px_0_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.2)] hover:from-gray-50";
    }
  }

  // Position classes based on note
  const getPositionClass = () => {
    const positions: { [key: string]: string } = {
      C: "col-start-1",
      "C#": "col-start-3",
      D: "col-start-4",
      "D#": "col-start-6",
      E: "col-start-7",
      F: "col-start-10",
      "F#": "col-start-12",
      G: "col-start-13",
      "G#": "col-start-15",
      A: "col-start-16",
      "A#": "col-start-18",
      B: "col-start-19",
    };
    return positions[note] || "";
  };

  return (
    <div
      className={`${baseClasses} ${getPositionClass()}`}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{
        // Additional 3D effect using transform-style
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`flex items-start justify-center h-full ${
          showNote ? "block" : "hidden"
        }`}
      >
        <span className="drop-shadow-lg py-2 w-full bg-blue-500/50">
          {note}
        </span>
      </div>
    </div>
  );
};

export default Key;
