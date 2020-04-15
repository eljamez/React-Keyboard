"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants_1 = require("../utils/constants");
var Key_1 = __importDefault(require("./Key"));
var Keyboard = function (_a) {
    var keysPressed = _a.keysPressed, handleOnMouseDown = _a.handleOnMouseDown, handleOnMouseUp = _a.handleOnMouseUp;
    return (react_1.default.createElement("div", { className: "keyboard" }, constants_1.NOTES.map(function (note) {
        var isSelected = keysPressed.includes(note);
        return (react_1.default.createElement(Key_1.default, { key: note, note: note, onMouseDown: handleOnMouseDown, onMouseUp: handleOnMouseUp, selected: isSelected }));
    })));
};
exports.default = Keyboard;
//# sourceMappingURL=Keyboard.js.map