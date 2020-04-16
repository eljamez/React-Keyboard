import React, { useState, useEffect, FC, KeyboardEventHandler, MouseEventHandler } from 'react';
import './ReactKeyboard.css';
import KeyboardContainer from './components/KeyboardContainer';
import Keyboard from './components/Keyboard';
import { NOTES, KEYBOARD } from './utils/constants';

type Props = {
  getCurrentNotes?: (arg1: string[]) => void;
  name?: string;
}

type KeysDown = string[];
type CurrentNotes = string[];

const ReactKeyboard: FC<Props> = ({
  getCurrentNotes = ([]) => { },
  name
}) => {

  const [keysDown, setKeysDown] = useState<KeysDown>([]);
  const [currentNotes, setCurrentNotes] = useState<CurrentNotes>([]);
  const [lastNotePressed, setLastNotePressed] = useState('');
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
    setCurrentNotes([heldKeys as string]);
  }

  const handleOnMouseDown: MouseEventHandler = (e): void => {
    const pressedKey = e.currentTarget.textContent;
    //@ts-ignore
    setLastNotePressed(pressedKey)
    //@ts-ignore
    setCurrentNotes([...currentNotes, pressedKey]);
  }

  const handleOnMouseUp: MouseEventHandler = (): void => {
    const currentNotesWithRemovedNote = currentNotes.filter(note => note !== lastNotePressed);
    setCurrentNotes(currentNotesWithRemovedNote);
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

  const keyboradProps = {
    keysPressed: currentNotes,
    handleSetCurrentNote,
    handleOnMouseDown,
    handleOnMouseUp,
  }

  return (
    <div>
      <KeyboardContainer name={name}>
        <Keyboard {...keyboradProps} />
      </KeyboardContainer>
    </div>
  )
}

export default ReactKeyboard;
