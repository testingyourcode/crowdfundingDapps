webpackHotUpdate("main",{

/***/ "./react-client/src/Components/RaiseFundPage.jsx":
/*!*******************************************************!*\
  !*** ./react-client/src/Components/RaiseFundPage.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar RaiseFundPage = function (_Component) {\n    _inherits(RaiseFundPage, _Component);\n\n    function RaiseFundPage(props) {\n        _classCallCheck(this, RaiseFundPage);\n\n        var _this = _possibleConstructorReturn(this, (RaiseFundPage.__proto__ || Object.getPrototypeOf(RaiseFundPage)).call(this, props));\n\n        _this.state = {\n            newProject: {\n                title: '',\n                description: '',\n                date_goal: '',\n                amount_goal: '',\n                creator_address: ''\n\n            }\n        };\n        return _this;\n    }\n\n    _createClass(RaiseFundPage, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'form',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'center-elements top-margin' },\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'title:',\n                            _react2.default.createElement('input', { type: 'text', name: 'title' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'description:',\n                            _react2.default.createElement('textarea', { name: 'description' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'goal amount:',\n                            _react2.default.createElement('input', { type: 'text', name: 'amount_goal' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'date_goal:',\n                            _react2.default.createElement('input', { type: 'text', name: 'date_goal' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'wallet address:',\n                            _react2.default.createElement('input', { type: 'text', name: 'creator_address' })\n                        )\n                    ),\n                    _react2.default.createElement('input', { type: 'submit', value: 'Submit' })\n                )\n            );\n        }\n    }]);\n\n    return RaiseFundPage;\n}(_react.Component);\n\nexports.default = RaiseFundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvUmFpc2VGdW5kUGFnZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVhY3QtY2xpZW50L3NyYy9Db21wb25lbnRzL1JhaXNlRnVuZFBhZ2UuanN4PzhmZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFJhaXNlRnVuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgbmV3UHJvamVjdDoge1xyXG4gICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgZGF0ZV9nb2FsOiAnJyxcclxuICAgICAgICAgICAgYW1vdW50X2dvYWw6ICcnLFxyXG4gICAgICAgICAgICBjcmVhdG9yX2FkZHJlc3M6ICcnXHJcbiAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1lbGVtZW50cyB0b3AtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29hbCBhbW91bnQ6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFtb3VudF9nb2FsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlX2dvYWw6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRhdGVfZ29hbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0IGFkZHJlc3M6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3JlYXRvcl9hZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSYWlzZUZ1bmRQYWdlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFIQTtBQWFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBL0JBO0FBREE7QUFvQ0E7Ozs7QUF0REE7QUFDQTtBQXVEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./react-client/src/Components/RaiseFundPage.jsx\n");

/***/ })

})