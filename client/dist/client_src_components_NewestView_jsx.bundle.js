/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcustomer_review_service"] = self["webpackChunkcustomer_review_service"] || []).push([["client_src_components_NewestView_jsx"],{

/***/ "./client/src/components/NewestView.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/NewestView.jsx ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.e, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/component */ \"./node_modules/@loadable/component/dist/loadable.esm.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n // import Stars from './StarScale.jsx';\n\n\nvar Stars = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_3__.default)(function () {\n  return __webpack_require__.e(/*! import() */ \"client_src_components_StarScale_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./StarScale.jsx */ \"./client/src/components/StarScale.jsx\"));\n});\n\nvar NewestView = /*#__PURE__*/function (_React$Component) {\n  _inherits(NewestView, _React$Component);\n\n  var _super = _createSuper(NewestView);\n\n  function NewestView(props) {\n    var _this;\n\n    _classCallCheck(this, NewestView);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      saved: [],\n      savedReviewIds: []\n    };\n    _this.saveReview = _this.saveReview.bind(_assertThisInitialized(_this));\n    _this.updateHelpfulNum = _this.updateHelpfulNum.bind(_assertThisInitialized(_this));\n    _this.updateUnHelpfulNum = _this.updateUnHelpfulNum.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(NewestView, [{\n    key: \"saveReview\",\n    value: function saveReview(e) {\n      var newR = JSON.parse(e.target.value);\n      var _this$state = this.state,\n          saved = _this$state.saved,\n          savedReviewIds = _this$state.savedReviewIds;\n\n      if (savedReviewIds.indexOf(newR.review_id) === -1) {\n        var newSaved = [newR].concat(_toConsumableArray(saved));\n        var newSavedIds = [newR.review_id].concat(_toConsumableArray(savedReviewIds));\n        this.setState({\n          saved: newSaved,\n          savedReviewIds: newSavedIds\n        });\n        this.props.pushUpSaved(newSaved);\n      }\n\n      e.preventDefault();\n    }\n  }, {\n    key: \"updateHelpfulNum\",\n    value: function updateHelpfulNum(e) {\n      var oldHelpful = JSON.parse(e.target.value);\n      this.props.handleHelpfulOrUnhelpful('helpful', oldHelpful.review_id);\n      axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"/api/reviews/\".concat(oldHelpful.review_id), {\n        helpful: oldHelpful.helpful + 1\n      });\n    }\n  }, {\n    key: \"updateUnHelpfulNum\",\n    value: function updateUnHelpfulNum(e) {\n      var oldUnHelpful = JSON.parse(e.target.value);\n      this.props.handleHelpfulOrUnhelpful('unhelpful', oldUnHelpful.review_id);\n      axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"/api/reviews/\".concat(oldUnHelpful.review_id), {\n        unhelpful: oldUnHelpful.unhelpful + 1\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var reviews = this.props.reviews;\n      var starsNums = {\n        one_stars: 1,\n        two_stars: 2,\n        three_stars: 3,\n        four_stars: 4,\n        five_stars: 5\n      };\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, reviews.map(function (review) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"wrap\",\n          key: review.review_id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"stars\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stars, {\n          ratio: starsNums[review.star_rating],\n          id: review.review_id\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"time\", {\n          className: \"date\"\n        }, review.create_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"comment-title\"\n        }, review.comment.split('.')[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"comment\"\n        }, review.comment), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"name\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, review.customer.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"bookmark\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Would you like to save this review?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n          className: \"bookmark-button\",\n          type: \"button\",\n          onClick: _this2.saveReview,\n          value: JSON.stringify(review)\n        }, \"Yes\"), _this2.state.savedReviewIds.indexOf(review.review_id) > -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"saved\"\n        }, \"Saved!\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"helpfulOrNot\"\n        }, \"Was this review helpful?\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n          type: \"button\",\n          className: \"bookmark-button\",\n          value: JSON.stringify(review),\n          onClick: _this2.updateHelpfulNum\n        }, \"Yes [\", review.helpful, \"]\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n          type: \"button\",\n          className: \"bookmark-button\",\n          value: JSON.stringify(review),\n          onClick: _this2.updateUnHelpfulNum\n        }, \"No [\", review.unhelpful, \"]\")));\n      }));\n    }\n  }]);\n\n  return NewestView;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nNewestView.propTypes = {\n  reviews: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),\n  pushUpSaved: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  handleHelpfulOrUnhelpful: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewestView);\n\n//# sourceURL=webpack://customer-review-service/./client/src/components/NewestView.jsx?");

/***/ })

}]);