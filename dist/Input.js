"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("./input.css");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: ", ";\n  background: ", ";\n  border: 1px black solid;\n  border-radius: 3px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var InputTag = _styledComponents.default.input(_templateObject(), function (props) {
  return props.color || "palevioletred";
}, function (props) {
  return props.backgroundColor || "white";
});

var Input = function Input(_ref) {
  var placeholder = _ref.placeholder,
      size = _ref.size,
      backgroundColor = _ref.backgroundColor,
      label = _ref.label,
      color = _ref.color;
  return /*#__PURE__*/_react.default.createElement(InputTag, {
    placeholder: placeholder,
    style: (backgroundColor && {
      backgroundColor: backgroundColor
    }, color && {
      color: color
    }),
    className: "input-".concat(size),
    value: label
  });
};

Input.defaultProps = {
  backgroundColor: null,
  size: "medium",
  placeholder: "Hello World"
};
var _default = Input;
exports.default = _default;