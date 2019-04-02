"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("../utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  //screen
  fill: "",
  d: "M20.25,2 L3.75,2 C2.73708333,2 1.91666667,2.895 1.91666667,4 L1.91666667,16 C1.91666667,17.105 2.73708333,18 3.75,18 L10.1666667,18 L10.1666667,20 L8.33333333,20 L8.33333333,22 L15.6666667,22 L15.6666667,20 L13.8333333,20 L13.8333333,18 L20.25,18 C21.2629167,18 22.0833333,17.105 22.0833333,16 L22.0833333,4 C22.0833333,2.895 21.2629167,2 20.25,2 Z"

}), _react.default.createElement("polygon", {
  //screen knockout
  fill: "#ffffff",
  points: "20.25 16 3.75 16 3.75 4 20.25 4"

}), _react.default.createElement("path", {
  //handset
  fill: "",
  d: "M6.58125,10.15775 C7.22925,11.43125 8.271,12.473 9.54675,13.121 L10.53675,12.12875 C10.6605,12.005 10.83825,11.969 10.9935,12.0185 C11.4975,12.185 12.03975,12.275 12.6,12.275 C12.84975,12.275 13.05,12.47525 13.05,12.725 L13.05,14.3 C13.05,14.54975 12.84975,14.75 12.6,14.75 C8.3745,14.75 4.95,11.3255 4.95,7.1 C4.95,6.85025 5.1525,6.65 5.4,6.65 L6.975,6.65 C7.22475,6.65 7.425,6.85025 7.425,7.1 C7.425,7.66025 7.515,8.2025 7.6815,8.7065 C7.731,8.86175 7.695,9.0395 7.57125,9.16325 L6.58125,10.15775 Z"
})), 'SoftPhone');


exports.default = _default;
