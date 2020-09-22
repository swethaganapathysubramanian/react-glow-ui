"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

require("./button.css");

require("./css/tailwind.css");

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var primary = _ref.primary,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      label = _ref.label,
      props = (0, _objectWithoutProperties2.default)(_ref, ["primary", "backgroundColor", "size", "label"]);
  var mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  console.log(backgroundColor);
  return /*#__PURE__*/_react.default.createElement("button", Object.assign({
    type: "button",
    className: ["storybook-button", "storybook-button--".concat(size), mode].join(" "),
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, props), label);
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined
};
var _default = Button;
exports.default = _default;