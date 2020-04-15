"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var KeyboardContainer = function (_a) {
    var children = _a.children, _b = _a.name, name = _b === void 0 ? 'ej rct 900' : _b;
    return (react_1.default.createElement("div", { className: "keyboardContainer" },
        react_1.default.createElement("div", { className: "keyboardTop" },
            react_1.default.createElement("h1", null, name),
            react_1.default.createElement("h2", null, "eljamez \u00A9")),
        children));
};
exports.default = KeyboardContainer;
//# sourceMappingURL=KeyboardContainer.js.map