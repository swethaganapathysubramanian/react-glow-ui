"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./css/tailwind.css");

var ButtonTypes = function ButtonTypes(_ref) {
  var backgroundColor = _ref.backgroundColor,
      onClick = _ref.onClick,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Some label" : _ref$label,
      outlined = _ref.outlined;
  console.log(backgroundColor);
  var BASE_BUTTON = "rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg";
  var CONTAINED_BUTTON = "".concat(BASE_BUTTON, " bg-").concat(backgroundColor.toLowerCase(), "-400 border border-teal-400 text-white");
  var OUTLINED_BUTTON = "".concat(BASE_BUTTON, " border border-blue-400 text-teal-400");
  return /*#__PURE__*/_react.default.createElement("div", null, " ", /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    className: outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON
  }, /*#__PURE__*/_react.default.createElement("span", null, label)));
};

ButtonTypes.defaultProps = {
  backgroundColor: "teal",
  size: "medium",
  onClick: undefined
};
var _default = ButtonTypes;
exports.default = _default;