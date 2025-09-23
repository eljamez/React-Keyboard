import { FunctionComponent, MouseEventHandler } from "react";
import { NOTES } from "../utils/constants";

import Key from "./Key";

type Props = {
  keysPressed: string[];
  handleOnMouseDown: MouseEventHandler<HTMLDivElement>;
  handleOnMouseUp: MouseEventHandler<HTMLDivElement>;
  showNote?: boolean;
};

const Keyboard: FunctionComponent<Props> = ({
  keysPressed,
  handleOnMouseDown,
  handleOnMouseUp,
  showNote = true,
}) => {
  return (
    <div className="border-t border-gray-400/50 grid h-96 grid-cols-21 grid-rows-[60%_40%] transform translate-y-5 relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-600/10 to-transparent pointer-events-none"></div>

      {NOTES.map((note) => {
        const isSelected = keysPressed.includes(note);
        return (
          <Key
            key={note}
            note={note}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            selected={isSelected}
            showNote={showNote}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;
