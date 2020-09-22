"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./css/tailwind.css");

var HorizontalCard = function HorizontalCard(_ref) {
  var image = _ref.image,
      alt = _ref.alt,
      title = _ref.title,
      content = _ref.content,
      userimg = _ref.userimg,
      useralt = _ref.useralt,
      name = _ref.name,
      date = _ref.date;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "max-w-sm w-full lg:max-w-full lg:flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",
    style: {
      backgroundImage: "url(".concat(image, ")")
    },
    title: alt
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "mb-8"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-sm text-gray-600 flex items-center"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    class: "fill-current text-gray-500 w-3 h-3 mr-2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
  })), "Members only"), /*#__PURE__*/_react.default.createElement("div", {
    class: "text-gray-900 font-bold text-xl mb-2"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-gray-700 text-base"
  }, content)), /*#__PURE__*/_react.default.createElement("div", {
    class: "flex items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    class: "w-10 h-10 rounded-full mr-4",
    src: userimg,
    alt: useralt
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "text-sm"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-gray-900 leading-none"
  }, name), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-gray-600"
  }, date))))));
};

var _default = HorizontalCard;
exports.default = _default;