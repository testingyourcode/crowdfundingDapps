webpackHotUpdate("main",{

/***/ "./react-client/src/Components/RaiseFundPage.jsx":
/*!*******************************************************!*\
  !*** ./react-client/src/Components/RaiseFundPage.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDatepicker = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/es/index.js\");\n\nvar _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);\n\nvar _moment = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar API = 'http://samu.localtunnel.me/api/projects/';\n\nvar RaiseFundPage = function (_Component) {\n    _inherits(RaiseFundPage, _Component);\n\n    function RaiseFundPage() {\n        _classCallCheck(this, RaiseFundPage);\n\n        var _this = _possibleConstructorReturn(this, (RaiseFundPage.__proto__ || Object.getPrototypeOf(RaiseFundPage)).call(this));\n\n        _this.state = {\n            title: '',\n            description: '',\n            amount_goal: '',\n            date_goal: '',\n            creator_address: '',\n            category: 1\n        };\n        return _this;\n    }\n\n    _createClass(RaiseFundPage, [{\n        key: 'onSubmit',\n        value: function onSubmit(e) {\n            e.preventDefault();\n            var title = document.getElementById('title').value;\n            var description = document.getElementById('description').value;\n            var amount_goal = document.getElementById('amount_goal').value;\n            var date_goal = document.getElementById('date_goal').value;\n            var creator_address = document.getElementById('creator_address').value;\n\n            fetch(API, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json',\n                    'Accept': 'application/json'\n                },\n                body: JSON.stringify(_defineProperty({ title: title, category: 1, description: description, amount_goal: amount_goal, date_goal: date_goal, creator_address: creator_address }, 'creator_address', creator_address))\n            }).then(function (res) {\n                return res.json();\n            }).then(function (data) {\n                return console.log(data);\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _state = this.state,\n                title = _state.title,\n                description = _state.description,\n                amount_goal = _state.amount_goal,\n                date_goal = _state.date_goal,\n                creator_address = _state.creator_address;\n\n            return _react2.default.createElement(\n                'form',\n                { onSubmit: this.onSubmit },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'center-elements top-margin' },\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'title:',\n                            _react2.default.createElement('input', { type: 'text', name: 'title', id: 'title' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'description:',\n                            _react2.default.createElement('textarea', { name: 'description', id: 'description' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'goal amount:',\n                            _react2.default.createElement('input', { type: 'text', name: 'amount_goal', id: 'amount_goal' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'date_goal:',\n                            _react2.default.createElement(_reactDatepicker2.default, { dateFormat: 'YYYY-MM-DD', name: 'date_goal', id: 'date_goal' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'wallet address:',\n                            _react2.default.createElement('input', { type: 'text', name: 'creator_address', id: 'creator_address' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { type: 'submit' },\n                        'Submit'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return RaiseFundPage;\n}(_react.Component);\n\nexports.default = RaiseFundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvUmFpc2VGdW5kUGFnZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVhY3QtY2xpZW50L3NyYy9Db21wb25lbnRzL1JhaXNlRnVuZFBhZ2UuanN4PzhmZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IEFQSSA9ICdodHRwOi8vc2FtdS5sb2NhbHR1bm5lbC5tZS9hcGkvcHJvamVjdHMvJztcclxuXHJcbmNsYXNzIFJhaXNlRnVuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICBhbW91bnRfZ29hbDogJycsXHJcbiAgICAgICAgICAgIGRhdGVfZ29hbDogJycsXHJcbiAgICAgICAgICAgIGNyZWF0b3JfYWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAxXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICAgICAgbGV0IGFtb3VudF9nb2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ftb3VudF9nb2FsJykudmFsdWU7XHJcbiAgICAgICAgbGV0IGRhdGVfZ29hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlX2dvYWwnKS52YWx1ZTtcclxuICAgICAgICBsZXQgY3JlYXRvcl9hZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0b3JfYWRkcmVzcycpLnZhbHVlO1xyXG5cclxuICAgICAgICBmZXRjaChBUEksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7dGl0bGU6dGl0bGUsIGNhdGVnb3J5OjEsIGRlc2NyaXB0aW9uOmRlc2NyaXB0aW9uLCBhbW91bnRfZ29hbDphbW91bnRfZ29hbCwgZGF0ZV9nb2FsOmRhdGVfZ29hbCwgY3JlYXRvcl9hZGRyZXNzLCBjcmVhdG9yX2FkZHJlc3N9KVxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gIGNvbnNvbGUubG9nKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKT0+Y29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGFtb3VudF9nb2FsLCBkYXRlX2dvYWwsIGNyZWF0b3JfYWRkcmVzcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWVsZW1lbnRzIHRvcC1tYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29hbCBhbW91bnQ6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFtb3VudF9nb2FsXCIgaWQ9XCJhbW91bnRfZ29hbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZV9nb2FsOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIGRhdGVGb3JtYXQ9XCJZWVlZLU1NLUREXCIgbmFtZT1cImRhdGVfZ29hbFwiIGlkPVwiZGF0ZV9nb2FsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQgYWRkcmVzczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjcmVhdG9yX2FkZHJlc3NcIiBpZD1cImNyZWF0b3JfYWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmFpc2VGdW5kUGFnZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFGQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9CQTtBQURBO0FBb0NBOzs7O0FBekVBO0FBQ0E7QUEwRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./react-client/src/Components/RaiseFundPage.jsx\n");

/***/ })

})