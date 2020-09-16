"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("./input.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: ", ";\n  background: ", ";\n  border: 1px black solid;\n  border-radius: 3px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

exports.Input = Input;
Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  placeholder: _propTypes.default.string,

  /**
   * What background color to use
   */
  backgroundColor: _propTypes.default.string,

  /**
   * What text color to use
   */
  color: _propTypes.default.string,

  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(["small", "medium", "large"]),

  /**
   * Button contents
   */
  label: _propTypes.default.string
};
Input.defaultProps = {
  backgroundColor: null,
  size: "medium",
  placeholder: "Hello World"
};