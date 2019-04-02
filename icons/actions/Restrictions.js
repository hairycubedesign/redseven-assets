"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("../utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  //badge base
  fill: "",
  d: "M12.0003,2.0001 C6.4773,2.0001 2.0003,6.4771 2.0003,12.0001 C2.0003,17.5221 6.4773,22.0001 12.0003,22.0001 C17.5233,22.0001 22.0003,17.5221 22.0003,12.0001 C22.0003,6.4771 17.5233,2.0001 12.0003,2.0001"

}), _react.default.createElement("path", {
  //knockout bottom
  fill: "#ffffff",
  d: "M6.7533,17.2461 C4.1143,14.6071 3.9313,10.5731 5.9203,7.7451 L16.2553,18.0801 C13.4243,20.0701 9.3913,19.8841 6.7533,17.2461"

}), _react.default.createElement("path", {
  //knockout top
  fill: "#ffffff",
  d: "M17.2463,6.7541 C19.8853,9.3921 20.0683,13.4271 18.0803,16.2551 L7.7443,5.9201 C10.5753,3.9301 14.6083,4.1161 17.2463,6.7541"

})), 'Restrictions');


exports.default = _default;
