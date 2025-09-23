import { FC, MouseEventHandler, useCallback, useEffect, useState } from "react";
import Keyboard from "./components/Keyboard";
import { KeyboardContainer } from "./components/KeyboardContainer";
import "./index.css";
import { KEYBOARD, NOTES } from "./utils/constants";

type Props = {
  getCurrentNotes?: (arg1: string[]) => void;
  name?: string;
};

type KeysDown = string[];
type CurrentNotes = string[];

const ReactKeyboard: FC<Props> = ({
  getCurrentNotes = useCallback(([]) => {}, []),
  name,
}) => {
  const [, setKeysDown] = useState<KeysDown>([]);
  const [currentNotes, setCurrentNotes] = useState<CurrentNotes>([]);
  const [lastNotePressed, setLastNotePressed] = useState("");
  const keyboardNoteMap = new Map();

  for (let i = 0; i < NOTES.length; i++) {
    keyboardNoteMap.set(KEYBOARD[i], NOTES[i]);
  }

  const downHandler = useCallback(
    (event: KeyboardEvent): void => {
      const { key } = event;
      setKeysDown((prevKeysDown) => {
        const newKeysArray = !!prevKeysDown.find((val) => val === key)
          ? prevKeysDown
          : [...prevKeysDown, key];
        setCurrentNotes(newKeysArray.map((key) => keyboardNoteMap.get(key)));
        return newKeysArray;
      });
    },
    [keyboardNoteMap]
  );

  const upHandler = useCallback(
    (event: KeyboardEvent): void => {
      const { key } = event;
      setKeysDown((prevKeysDown) => {
        const newKeysArray = prevKeysDown.filter((val) => val !== key);
        setCurrentNotes(newKeysArray.map((key) => keyboardNoteMap.get(key)));
        return newKeysArray;
      });
    },
    [keyboardNoteMap]
  );

  const handleSetCurrentNote: MouseEventHandler = (e): void => {
    const heldKeys = e.currentTarget.textContent;
    setCurrentNotes([heldKeys as string]);
  };

  const handleOnMouseDown: MouseEventHandler = (e): void => {
    const pressedKey = e.currentTarget.textContent;
    //@ts-ignore
    setLastNotePressed(pressedKey);
    //@ts-ignore
    setCurrentNotes([...currentNotes, pressedKey]);
  };

  const handleOnMouseUp: MouseEventHandler = (): void => {
    const currentNotesWithRemovedNote = currentNotes.filter(
      (note) => note !== lastNotePressed
    );
    setCurrentNotes(currentNotesWithRemovedNote);
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [downHandler, upHandler]);

  // Call getCurrentNotes when currentNotes changes
  useEffect(() => {
    getCurrentNotes(currentNotes);
  }, [currentNotes, getCurrentNotes]);

  const keyboradProps = {
    keysPressed: currentNotes,
    handleSetCurrentNote,
    handleOnMouseDown,
    handleOnMouseUp,
  };

  return (
    <KeyboardContainer name={name}>
      <Keyboard {...keyboradProps} />
    </KeyboardContainer>
  );
};

export default ReactKeyboard;
