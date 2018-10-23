webpackHotUpdate("main",{

/***/ "./react-client/src/Components/FundPage.jsx":
/*!**************************************************!*\
  !*** ./react-client/src/Components/FundPage.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"./node_modules/react-router/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// Set config defaults when creating the instance\nvar instance = axios.create({\n  baseURL: 'samu.localtunnel.me'\n});\n// Make a request for a user with a given ID\naxios.get('/api/projects/').then(function (response) {\n  // handle success\n  console.log(response);\n}).catch(function (error) {\n  // handle error\n  console.log(error);\n}).then(function () {\n  // always executed\n});\n\nvar FundPage = function (_Component) {\n  _inherits(FundPage, _Component);\n\n  function FundPage() {\n    _classCallCheck(this, FundPage);\n\n    return _possibleConstructorReturn(this, (FundPage.__proto__ || Object.getPrototypeOf(FundPage)).apply(this, arguments));\n  }\n\n  _createClass(FundPage, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'h1',\n        null,\n        'Fund'\n      );\n    }\n  }]);\n\n  return FundPage;\n}(_react.Component);\n\nexports.default = FundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvRnVuZFBhZ2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlYWN0LWNsaWVudC9zcmMvQ29tcG9uZW50cy9GdW5kUGFnZS5qc3g/ZjBhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbi8vIFNldCBjb25maWcgZGVmYXVsdHMgd2hlbiBjcmVhdGluZyB0aGUgaW5zdGFuY2VcclxuY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ3NhbXUubG9jYWx0dW5uZWwubWUnXHJcbiAgfSk7XHJcbi8vIE1ha2UgYSByZXF1ZXN0IGZvciBhIHVzZXIgd2l0aCBhIGdpdmVuIElEXHJcbmF4aW9zLmdldCgnL2FwaS9wcm9qZWN0cy8nKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy8gaGFuZGxlIHN1Y2Nlc3NcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICB9KVxyXG4gIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIC8vIGhhbmRsZSBlcnJvclxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH0pXHJcbiAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gYWx3YXlzIGV4ZWN1dGVkXHJcbiAgfSk7XHJcblxyXG5jbGFzcyBGdW5kUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aDE+RnVuZDwvaDE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmRQYWdlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7OztBQUxBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./react-client/src/Components/FundPage.jsx\n");

/***/ })

})