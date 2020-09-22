"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./css/tailwind.css");

var Card = function Card(_ref) {
  var image = _ref.image,
      alt = _ref.alt,
      title = _ref.title,
      content = _ref.content,
      tags = _ref.tags;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "max-w-sm rounded overflow-hidden shadow-lg"
  }, /*#__PURE__*/_react.default.createElement("img", {
    class: "w-full",
    src: image,
    alt: alt
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "px-6 py-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "font-bold text-xl mb-2"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-gray-700 text-base"
  }, content)), /*#__PURE__*/_react.default.createElement("div", {
    class: "px-6 pt-4 pb-2"
  }, tags.map(function (tag) {
    return /*#__PURE__*/_react.default.createElement("span", {
      class: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
    }, "#", tag);
  })));
};

var _default = Card;
exports.default = _default;