import React from 'react';
var KeyboardContainer = function (_a) {
    var children = _a.children, _b = _a.name, name = _b === void 0 ? 'ej rct 900' : _b;
    return (React.createElement("div", { className: "keyboardContainer" },
        React.createElement("div", { className: "keyboardTop" },
            React.createElement("h1", null, name),
            React.createElement("h2", null, "eljamez \u00A9")),
        children));
};
export default KeyboardContainer;
