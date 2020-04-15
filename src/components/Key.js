import React from 'react';
var Key = function (_a) {
    var note = _a.note, selected = _a.selected, onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp;
    var noteSliced = note.slice();
    var className = noteSliced[1] === '#'
        ? "key--" + noteSliced[0] + "--sharp key--sharp"
        : "key--" + noteSliced[0];
    var selectedClass = selected
        ? 'selected'
        : '';
    return (React.createElement("div", { className: "key " + className + " " + selectedClass, onMouseDown: onMouseDown, onMouseUp: onMouseUp }, note));
};
export default Key;
