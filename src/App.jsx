import React, { useState, useEffect } from 'react';
import './App.scss';
import KeyboardContainer from './components/KeyboardContainer';
import Keyboard from './components/Keyboard';
import { NOTES, KEYBOARD } from './utils/constants';

const App = ({
  getCurrentNotes = () => { },
}) => {

  const [keysDown, setKeysDown] = useState([]);
  const [currentNotes, setCurrentNotes] = useState([]);
  const keyboardNoteMap = new Map();

  for (let i = 0; i < NOTES.length; i++) {
    keyboardNoteMap.set(KEYBOARD[i], NOTES[i])
  }

  const downHandler = ({ key }) => {
    const newKeysArray = !!keysDown.find(val => val === key)
      ? keysDown
      : [...keysDown, key]
    setKeysDown(newKeysArray)
    setCurrentNotes(newKeysArray.map(key => keyboardNoteMap.get(key)));
  };

  const upHandler = ({ key }) => {
    const newKeysArray = keysDown.filter(val => val !== key);
    setKeysDown(newKeysArray);
    setCurrentNotes(newKeysArray.map(key => keyboardNoteMap.get(key)));
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    getCurrentNotes(currentNotes);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return (
    <div>
      <KeyboardContainer>
        <Keyboard keysPressed={currentNotes} />
      </KeyboardContainer>
    </div>
  )
}

export default App;
