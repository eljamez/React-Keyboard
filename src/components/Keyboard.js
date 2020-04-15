import React from 'react';
import { NOTES } from '../utils/constants';
import Key from './Key';
var Keyboard = function (_a) {
    var keysPressed = _a.keysPressed, handleOnMouseDown = _a.handleOnMouseDown, handleOnMouseUp = _a.handleOnMouseUp;
    return (React.createElement("div", { className: "keyboard" }, NOTES.map(function (note) {
        var isSelected = keysPressed.includes(note);
        return (React.createElement(Key, { key: note, note: note, onMouseDown: handleOnMouseDown, onMouseUp: handleOnMouseUp, selected: isSelected }));
    })));
};
export default Keyboard;
