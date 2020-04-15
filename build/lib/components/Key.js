"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Key = function (_a) {
    var note = _a.note, selected = _a.selected, onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp;
    var noteSliced = note.slice();
    var className = noteSliced[1] === '#'
        ? "key--" + noteSliced[0] + "--sharp key--sharp"
        : "key--" + noteSliced[0];
    var selectedClass = selected
        ? 'selected'
        : '';
    return (react_1.default.createElement("div", { className: "key " + className + " " + selectedClass, onMouseDown: onMouseDown, onMouseUp: onMouseUp }, note));
};
exports.default = Key;
//# sourceMappingURL=Key.js.map