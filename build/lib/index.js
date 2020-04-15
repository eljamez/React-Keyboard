"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./ReactKeyboard.scss");
var KeyboardContainer_1 = __importDefault(require("./components/KeyboardContainer"));
var Keyboard_1 = __importDefault(require("./components/Keyboard"));
var constants_1 = require("./utils/constants");
var ReactKeyboard = function (_a) {
    var _b = _a.getCurrentNotes, getCurrentNotes = _b === void 0 ? function (_a) { } : _b;
    var _c = react_1.useState([]), keysDown = _c[0], setKeysDown = _c[1];
    var _d = react_1.useState([]), currentNotes = _d[0], setCurrentNotes = _d[1];
    var _e = react_1.useState(''), lastNotePressed = _e[0], setLastNotePressed = _e[1];
    var keyboardNoteMap = new Map();
    for (var i = 0; i < constants_1.NOTES.length; i++) {
        keyboardNoteMap.set(constants_1.KEYBOARD[i], constants_1.NOTES[i]);
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
        setCurrentNotes([heldKeys]);
    };
    var handleOnMouseDown = function (e) {
        var pressedKey = e.currentTarget.textContent;
        setLastNotePressed(pressedKey);
        setCurrentNotes(__spreadArrays(currentNotes, [pressedKey]));
    };
    var handleOnMouseUp = function () {
        var currentNotesWithRemovedNote = currentNotes.filter(function (note) { return note !== lastNotePressed; });
        setCurrentNotes(currentNotesWithRemovedNote);
    };
    react_1.useEffect(function () {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        getCurrentNotes(currentNotes);
        return function () {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    });
    var keyboradProps = {
        keysPressed: currentNotes,
        handleSetCurrentNote: handleSetCurrentNote,
        handleOnMouseDown: handleOnMouseDown,
        handleOnMouseUp: handleOnMouseUp,
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(KeyboardContainer_1.default, null,
            react_1.default.createElement(Keyboard_1.default, __assign({}, keyboradProps)))));
};
exports.default = ReactKeyboard;
//# sourceMappingURL=index.js.map