webpackHotUpdate("main",{

/***/ "./react-client/src/Components/RaiseFundPage.jsx":
/*!*******************************************************!*\
  !*** ./react-client/src/Components/RaiseFundPage.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar API = 'http://samu.localtunnel.me/api/projects/';\n\nvar RaiseFundPage = function (_Component) {\n    _inherits(RaiseFundPage, _Component);\n\n    function RaiseFundPage() {\n        _classCallCheck(this, RaiseFundPage);\n\n        var _this = _possibleConstructorReturn(this, (RaiseFundPage.__proto__ || Object.getPrototypeOf(RaiseFundPage)).call(this));\n\n        _this.state = {\n            title: '',\n            description: '',\n            amount_goal: '',\n            date_goal: '',\n            creator_address: '',\n            category: 1\n        };\n        return _this;\n    }\n\n    _createClass(RaiseFundPage, [{\n        key: 'onSubmit',\n        value: function onSubmit(e) {\n            e.preventDefault();\n            // get our form data out of state\n            var _state = this.state,\n                title = _state.title,\n                description = _state.description,\n                amount_goal = _state.amount_goal,\n                date_goal = _state.date_goal,\n                creator_address = _state.creator_address;\n\n            fetch(API, {\n                method: 'post',\n                body: JSON.stringify(title, description, amount_goal, date_goal, creator_address)\n            }).then(function (response) {\n                return response.json();\n            });\n\n            // axios.post(API, { title, description, amount_goal, date_goal, creator_address })\n            //   .then((result) => {\n            //     console.log(result);\n            //   });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _state2 = this.state,\n                title = _state2.title,\n                description = _state2.description,\n                amount_goal = _state2.amount_goal,\n                date_goal = _state2.date_goal,\n                creator_address = _state2.creator_address;\n\n            return _react2.default.createElement(\n                'form',\n                { onSubmit: this.onSubmit },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'center-elements top-margin' },\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'title:',\n                            _react2.default.createElement('input', { type: 'text', name: 'title' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'description:',\n                            _react2.default.createElement('textarea', { name: 'description' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'goal amount:',\n                            _react2.default.createElement('input', { type: 'text', name: 'amount_goal' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'date_goal:',\n                            _react2.default.createElement('input', { type: 'text', name: 'date_goal' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'wallet address:',\n                            _react2.default.createElement('input', { type: 'text', name: 'creator_address' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { type: 'submit' },\n                        'Submit'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return RaiseFundPage;\n}(_react.Component);\n\nexports.default = RaiseFundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvUmFpc2VGdW5kUGFnZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVhY3QtY2xpZW50L3NyYy9Db21wb25lbnRzL1JhaXNlRnVuZFBhZ2UuanN4PzhmZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEFQSSA9ICdodHRwOi8vc2FtdS5sb2NhbHR1bm5lbC5tZS9hcGkvcHJvamVjdHMvJztcclxuXHJcbmNsYXNzIFJhaXNlRnVuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICBhbW91bnRfZ29hbDogJycsXHJcbiAgICAgICAgICAgIGRhdGVfZ29hbDogJycsXHJcbiAgICAgICAgICAgIGNyZWF0b3JfYWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAxXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gZ2V0IG91ciBmb3JtIGRhdGEgb3V0IG9mIHN0YXRlXHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGFtb3VudF9nb2FsLCBkYXRlX2dvYWwsIGNyZWF0b3JfYWRkcmVzcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBmZXRjaChBUEksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRpdGxlLCBkZXNjcmlwdGlvbiwgYW1vdW50X2dvYWwsIGRhdGVfZ29hbCwgY3JlYXRvcl9hZGRyZXNzKVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgLy8gYXhpb3MucG9zdChBUEksIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBhbW91bnRfZ29hbCwgZGF0ZV9nb2FsLCBjcmVhdG9yX2FkZHJlc3MgfSlcclxuICAgICAgICAvLyAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYW1vdW50X2dvYWwsIGRhdGVfZ29hbCwgY3JlYXRvcl9hZGRyZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItZWxlbWVudHMgdG9wLW1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29hbCBhbW91bnQ6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFtb3VudF9nb2FsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlX2dvYWw6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRhdGVfZ29hbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0IGFkZHJlc3M6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3JlYXRvcl9hZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSYWlzZUZ1bmRQYWdlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFGQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEvQkE7QUFEQTtBQW9DQTs7OztBQXRFQTtBQUNBO0FBdUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./react-client/src/Components/RaiseFundPage.jsx\n");

/***/ })

})