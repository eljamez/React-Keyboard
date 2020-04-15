var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useState, useEffect } from 'react';
import './ReactKeyboard.scss';
import KeyboardContainer from './components/KeyboardContainer';
import Keyboard from './components/Keyboard';
import { NOTES, KEYBOARD } from './utils/constants';
var ReactKeyboard = function (_a) {
    var _b = _a.getCurrentNotes, getCurrentNotes = _b === void 0 ? function () { } : _b;
    var _c = useState([]), keysDown = _c[0], setKeysDown = _c[1];
    var _d = useState([]), currentNotes = _d[0], setCurrentNotes = _d[1];
    var _e = useState(''), lastNotePressed = _e[0], setLastNotePressed = _e[1];
    var keyboardNoteMap = new Map();
    for (var i = 0; i < NOTES.length; i++) {
        keyboardNoteMap.set(KEYBOARD[i], NOTES[i]);
    }
    var downHandler = function (_a) {
        var key = _a.key;
        var newKeysArray = !!keysDown.find(function (val) { return val === key; })
            ? keysDown
            : __spreadArrays(keysDown, [key]);
        setKeysDown(newKeysArray);
        setCurrentNotes(newKeysArray.map(function (key) { return keyboardNoteMap.get(key); }));
    };
    var upHandler = function (_a) {
        var key = _a.key;
        var newKeysArray = keysDown.filter(function (val) { return val !== key; });
        setKeysDown(newKeysArray);
        setCurrentNotes(newKeysArray.map(function (key) { return keyboardNoteMap.get(key); }));
    };
    var handleSetCurrentNote = function (e) {
        var heldKeys = e.currentTarget.textContent;
        console.log(heldKeys);
        setCurrentNotes([heldKeys]);
    };
    var handleOnMouseDown = function (e) {
        var pressedKey = e.currentTarget.textContent;
        //@ts-ignore
        setLastNotePressed(pressedKey);
        //@ts-ignore
        setCurrentNotes(__spreadArrays(currentNotes, [pressedKey]));
    };
    var handleOnMouseUp = function () {
        var currentNotesWithRemovedNote = currentNotes.filter(function (note) { return note !== lastNotePressed; });
        setCurrentNotes(currentNotesWithRemovedNote);
    };
    // Add event listeners
    useEffect(function () {
        // @ts-ignore
        window.addEventListener("keydown", downHandler);
        // @ts-ignore
        window.addEventListener("keyup", upHandler);
        // Remove event listeners on cleanup
        getCurrentNotes(currentNotes);
        return function () {
            // @ts-ignore
            window.removeEventListener("keydown", downHandler);
            // @ts-ignore
            window.removeEventListener("keyup", upHandler);
        };
    });
    var keyboradProps = {
        keysPressed: currentNotes,
        handleSetCurrentNote: handleSetCurrentNote,
        handleOnMouseDown: handleOnMouseDown,
        handleOnMouseUp: handleOnMouseUp,
    };
    return (React.createElement("div", null,
        React.createElement(KeyboardContainer, null,
            React.createElement(Keyboard, __assign({}, keyboradProps)))));
};
export default ReactKeyboard;
