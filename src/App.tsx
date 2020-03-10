import React, { useState, useEffect, FC, KeyboardEventHandler, MouseEventHandler } from 'react';
import './App.scss';
import KeyboardContainer from './components/KeyboardContainer';
import Keyboard from './components/Keyboard';
import { NOTES, KEYBOARD } from './utils/constants';

type Props = {
  getCurrentNotes?: (arg1: string[]) => void;
}

type KeysDown = string[];
type CurrentNotes = string[];

const App: FC<Props> = ({
  getCurrentNotes = () => { },
}) => {

  const [keysDown, setKeysDown] = useState<KeysDown>([]);
  const [currentNotes, setCurrentNotes] = useState<CurrentNotes>([]);
  const keyboardNoteMap = new Map();

  for (let i = 0; i < NOTES.length; i++) {
    keyboardNoteMap.set(KEYBOARD[i], NOTES[i])
  }

  const downHandler: KeyboardEventHandler = ({ key }): void => {
    const newKeysArray = !!keysDown.find(val => val === key)
      ? keysDown
      : [...keysDown, key]
    setKeysDown(newKeysArray)
    setCurrentNotes(newKeysArray.map(key => keyboardNoteMap.get(key)));
  };

  const upHandler: KeyboardEventHandler = ({ key }): void => {
    const newKeysArray = keysDown.filter(val => val !== key);
    setKeysDown(newKeysArray);
    setCurrentNotes(newKeysArray.map(key => keyboardNoteMap.get(key)));
  };

  const handleSetCurrentNote: MouseEventHandler = (e): void => {
    const heldKeys = e.currentTarget.textContent;
    console.log(heldKeys);
    setCurrentNotes([heldKeys as string]);
  }

  // Add event listeners
  useEffect(() => {
    // @ts-ignore
    window.addEventListener("keydown", downHandler);
    // @ts-ignore
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    getCurrentNotes(currentNotes);
    return () => {
      // @ts-ignore
      window.removeEventListener("keydown", downHandler);
      // @ts-ignore
      window.removeEventListener("keyup", upHandler);
    };
  });

  return (
    <div>
      <KeyboardContainer>
        <Keyboard keysPressed={currentNotes} handleSetCurrentNote={handleSetCurrentNote} />
      </KeyboardContainer>
    </div>
  )
}

export default App;
