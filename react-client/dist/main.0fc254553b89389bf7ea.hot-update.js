webpackHotUpdate("main",{

/***/ "./react-client/src/Components/FundPage.jsx":
/*!**************************************************!*\
  !*** ./react-client/src/Components/FundPage.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar API = 'http://samu.localtunnel.me/api/projects/details/?project=';\n\nvar FundPage = function (_Component) {\n    _inherits(FundPage, _Component);\n\n    function FundPage(props) {\n        _classCallCheck(this, FundPage);\n\n        var _this = _possibleConstructorReturn(this, (FundPage.__proto__ || Object.getPrototypeOf(FundPage)).call(this, props));\n\n        _this.state = {\n            error: null,\n            isLoaded: false,\n            items: null\n        };\n        return _this;\n    }\n\n    _createClass(FundPage, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            var address = \"\";\n            var id = this.props.match.params.id;\n            fetch(API + id).then(function (res) {\n                return res.json();\n            }).then(function (result) {\n                console.log(result);\n                address = result.creator_address;\n                _this2.setState({\n                    isLoaded: true,\n                    items: result\n                });\n            }, function (error) {\n                _this2.setState({\n                    isLoaded: true,\n                    error: error\n                });\n            });\n        }\n    }, {\n        key: 'onSubmit',\n        value: function onSubmit(e) {\n            e.preventDefault();\n            var amount = document.getElementById('amount').value;\n\n            fetch(API + id, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json',\n                    'Accept': 'application/json'\n                },\n                body: JSON.stringify({ amount: amount })\n            }).then(function (res) {\n                return res.json();\n            }).then(function (data) {\n                return console.log(data);\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _state = this.state,\n                error = _state.error,\n                isLoaded = _state.isLoaded,\n                items = _state.items;\n\n            if (error) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    'Error: ',\n                    error.message\n                );\n            } else if (!isLoaded) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    'Loading...'\n                );\n            } else {\n                return _react2.default.createElement(\n                    'div',\n                    { className: 'center-elements top-margin border-box padding-left' },\n                    _react2.default.createElement(\n                        'h2',\n                        null,\n                        items.title\n                    ),\n                    items.status == 1 && _react2.default.createElement(\n                        'p',\n                        { className: 'project-status' },\n                        _react2.default.createElement(\n                            'i',\n                            null,\n                            'On going'\n                        ),\n                        ' | date created: ',\n                        items.date_created,\n                        ', goal date: ',\n                        items.date_goal\n                    ),\n                    items.status == 2 && _react2.default.createElement(\n                        'p',\n                        { className: 'project-status' },\n                        _react2.default.createElement(\n                            'i',\n                            null,\n                            'Completed'\n                        ),\n                        ' | date created: ',\n                        items.date_created,\n                        ', goal date: ',\n                        items.date_goal\n                    ),\n                    _react2.default.createElement(\n                        'p',\n                        null,\n                        items.description\n                    ),\n                    _react2.default.createElement(\n                        'form',\n                        { onSubmit: this.onSubmit },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'center-elements top-margin' },\n                            _react2.default.createElement(\n                                'div',\n                                null,\n                                _react2.default.createElement(\n                                    'label',\n                                    null,\n                                    'amount:',\n                                    _react2.default.createElement('input', { type: 'text', name: 'amount', id: 'amount' })\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'button',\n                                { type: 'submit' },\n                                'Submit'\n                            )\n                        )\n                    )\n                );\n            }\n        }\n    }]);\n\n    return FundPage;\n}(_react.Component);\n\nexports.default = FundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvRnVuZFBhZ2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlYWN0LWNsaWVudC9zcmMvQ29tcG9uZW50cy9GdW5kUGFnZS5qc3g/ZjBhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQVBJID0gJ2h0dHA6Ly9zYW11LmxvY2FsdHVubmVsLm1lL2FwaS9wcm9qZWN0cy9kZXRhaWxzLz9wcm9qZWN0PSc7XHJcblxyXG5jbGFzcyBGdW5kUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgICBpdGVtczogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHZhciBhZGRyZXNzID0gXCJcIjtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZDtcclxuICAgICAgICBmZXRjaChBUEkgKyBpZClcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgIGFkZHJlc3MgPSByZXN1bHQuY3JlYXRvcl9hZGRyZXNzO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogcmVzdWx0XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBhbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1vdW50JykudmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmV0Y2goQVBJICsgaWQsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7YW1vdW50OmFtb3VudH0pXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiAgY29uc29sZS5sb2coZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKChlcnIpPT5jb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3IsIGlzTG9hZGVkLCBpdGVtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgfSBlbHNlIGlmICghaXNMb2FkZWQpIHtcclxuICAgICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWVsZW1lbnRzIHRvcC1tYXJnaW4gYm9yZGVyLWJveCBwYWRkaW5nLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj57aXRlbXMudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5zdGF0dXMgPT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2plY3Qtc3RhdHVzXCI+PGk+T24gZ29pbmc8L2k+IHwgZGF0ZSBjcmVhdGVkOiB7aXRlbXMuZGF0ZV9jcmVhdGVkfSwgZ29hbCBkYXRlOiB7aXRlbXMuZGF0ZV9nb2FsfTwvcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5zdGF0dXMgPT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2plY3Qtc3RhdHVzXCI+PGk+Q29tcGxldGVkPC9pPiB8IGRhdGUgY3JlYXRlZDoge2l0ZW1zLmRhdGVfY3JlYXRlZH0sIGdvYWwgZGF0ZToge2l0ZW1zLmRhdGVfZ29hbH08L3A+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8cD57aXRlbXMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWVsZW1lbnRzIHRvcC1tYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYW1vdW50XCIgaWQ9XCJhbW91bnRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRnVuZFBhZ2U7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFUQTtBQXNCQTtBQUNBOzs7O0FBbEZBO0FBQ0E7QUFtRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./react-client/src/Components/FundPage.jsx\n");

/***/ })

})