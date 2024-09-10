"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = _interopRequireDefault(require("../../../styles"));
require("./Submit.css");
var _excluded = ["className", "type", "children"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var getButtonStyles = function getButtonStyles(type) {
  switch (type) {
    case "submit":
      return {
        "--primary-background": _styles["default"].defaults.buttons.primary.background,
        "--primary-color": _styles["default"].defaults.buttons.primary.color,
        "--primary-border": _styles["default"].defaults.buttons.primary.border,
        "--primary-hover-background": _styles["default"].defaults.buttons.primary.hover.background,
        "--primary-hover-color": _styles["default"].defaults.buttons.primary.hover.color,
        "--primary-hover-border": _styles["default"].defaults.buttons.primary.hover.border
      };
    case "reset":
      return {
        "--primary-background": _styles["default"].defaults.buttons.danger.background,
        "--primary-color": _styles["default"].defaults.buttons.danger.color,
        "--primary-border": _styles["default"].defaults.buttons.danger.border,
        "--primary-hover-background": _styles["default"].defaults.buttons.danger.hover.background,
        "--primary-hover-color": _styles["default"].defaults.buttons.danger.hover.color,
        "--primary-hover-border": _styles["default"].defaults.buttons.danger.hover.border
      };
    default:
      return {
        "--primary-background": _styles["default"].defaults.buttons.dark.background,
        "--primary-color": _styles["default"].defaults.buttons.dark.color,
        "--primary-border": _styles["default"].defaults.buttons.dark.border,
        "--primary-hover-background": _styles["default"].defaults.buttons.dark.hover.background,
        "--primary-hover-color": _styles["default"].defaults.buttons.dark.hover.color,
        "--primary-hover-border": _styles["default"].defaults.buttons.dark.hover.border
      };
  }
};
var Submit = function Submit(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "submit-button" : _ref$className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "button" : _ref$type,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var style = getButtonStyles(type);
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: type,
    className: className,
    style: style
  }, props), /*#__PURE__*/_react["default"].createElement("span", {
    className: "button-content"
  }, children));
};
Submit.propTypes = {
  className: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(["button", "submit", "reset"]),
  children: _propTypes["default"].node.isRequired
};
var _default = exports["default"] = Submit;