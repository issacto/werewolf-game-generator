module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/rules/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/rules/index.js":
/*!******************************!*\
  !*** ./pages/rules/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rules; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/ken/Documents/iwanttodie/werewolf-game-generator/src/client/pages/rules/index.js\";\n\n\n\n\nfunction navigate(name) {\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/' + name);\n}\n\nfunction Rules() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleTitle,\n      style: {\n        marginTop: '-1ch'\n      },\n      children: \"Night Phase\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleText,\n      children: \"There are several roles that are called on at night that are able to perform actions at night. However, those with a Villager or Hunter card are not awoken to perform these actions at night.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleText,\n      children: \"In addition to having a role card, one player is designated the Announcer and announces each of the roles in order and silently counts to ten after each role is woken up to allow the players with that role to perform their action at night.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleTitle,\n      children: \"Day Phase\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleText,\n      children: \"After the night phase, players discuss among themselves who they believe the Werewolves are. All players may say anything, but may never show their card to anyone. Werewolves might want to claim to be a different role so that they don't die.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleText,\n      children: \"Because certain things may change other players' cards, some players will believe they are one role, when they are actually a different one. After the night phase, your role is the card that is currently in front of you, which may be different than your original role. No one may look at any cards after the night phase.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleText,\n      children: \"After a few minutes of discussion, players vote on who they believe the players who are werewolf to be.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleTitle,\n      children: \"Victory Conditions\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleText,\n      children: \"Victory can occur after just a night and a day, the Villagers can win if the following conditions are met:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleList,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: \"If at least one Werewolf dies, even if Villagers are killed\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: \"If nobody is a Werewolf, and nobody dies\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: \"It's possible for nobody to be a werewolf is all werewolf cards are in the centre\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: \"The werewolves only win if there is at least one Werewolf and none are killed\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleText,\n      children: \"If these conditions are not met, then the Werewolves win.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ruleText,\n      children: [\"Click\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.highlightButton,\n        href: \"https://www.ultraboardgames.com/one-night-ultimate-werewolf/game-rules.php\",\n        target: \"_blank\",\n        children: \" here \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, this), \"for more information\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ydWxlcy9pbmRleC5qcz9lMjk2Il0sIm5hbWVzIjpbIm5hdmlnYXRlIiwibmFtZSIsIlJvdXRlciIsInB1c2giLCJSdWxlcyIsInN0eWxlcyIsInJ1bGVUaXRsZSIsIm1hcmdpblRvcCIsInJ1bGVUZXh0IiwicnVsZUxpc3QiLCJoaWdobGlnaHRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF1QjtBQUNuQkMsb0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLE1BQUlGLElBQWhCO0FBQ0g7O0FBRWMsU0FBU0csS0FBVCxHQUFpQjtBQUM1QixzQkFDSTtBQUFBLDRCQUNJO0FBQUcsZUFBUyxFQUFJQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFrQyxXQUFLLEVBQUk7QUFBQ0MsaUJBQVMsRUFBRTtBQUFaLE9BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFHLGVBQVMsRUFBSUYsOERBQU0sQ0FBQ0csUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUtJO0FBQUcsZUFBUyxFQUFJSCw4REFBTSxDQUFDRyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBU0k7QUFBRyxlQUFTLEVBQUlILDhEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosZUFVSTtBQUFHLGVBQVMsRUFBSUQsOERBQU0sQ0FBQ0csUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSixlQWFJO0FBQUcsZUFBUyxFQUFJSCw4REFBTSxDQUFDRyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKLGVBZ0JJO0FBQUcsZUFBUyxFQUFJSCw4REFBTSxDQUFDRyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSixlQW9CSTtBQUFHLGVBQVMsRUFBSUgsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkosZUFxQkk7QUFBRyxlQUFTLEVBQUlELDhEQUFNLENBQUNHLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJKLGVBd0JJO0FBQUksZUFBUyxFQUFJSCw4REFBTSxDQUFDSSxRQUF4QjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKLGVBK0JJO0FBQUcsZUFBUyxFQUFJSiw4REFBTSxDQUFDRyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CSixlQWtDSTtBQUFHLGVBQVMsRUFBSUgsOERBQU0sQ0FBQ0csUUFBdkI7QUFBQSx1Q0FDQTtBQUFHLGlCQUFTLEVBQUlILDhEQUFNLENBQUNLLGVBQXZCO0FBQXdDLFlBQUksRUFBRyw0RUFBL0M7QUFBNEgsY0FBTSxFQUFHLFFBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIIiwiZmlsZSI6Ii4vcGFnZXMvcnVsZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBuYXZpZ2F0ZShuYW1lKXtcbiAgICBSb3V0ZXIucHVzaCgnLycrbmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUnVsZXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IHtzdHlsZXMucnVsZVRpdGxlfSBzdHlsZSA9IHt7bWFyZ2luVG9wOiAnLTFjaCd9fT5OaWdodCBQaGFzZTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IHtzdHlsZXMucnVsZVRleHR9PlxuICAgICAgICAgICAgICAgIFRoZXJlIGFyZSBzZXZlcmFsIHJvbGVzIHRoYXQgYXJlIGNhbGxlZCBvbiBhdCBuaWdodCB0aGF0IGFyZSBhYmxlIHRvIHBlcmZvcm0gYWN0aW9ucyBhdCBuaWdodC4gSG93ZXZlciwgdGhvc2Ugd2l0aCBhIFZpbGxhZ2VyIG9yIEh1bnRlciBjYXJkIGFyZSBub3QgYXdva2VuIHRvIHBlcmZvcm0gdGhlc2UgYWN0aW9ucyBhdCBuaWdodC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IHtzdHlsZXMucnVsZVRleHR9PlxuICAgICAgICAgICAgICAgIEluIGFkZGl0aW9uIHRvIGhhdmluZyBhIHJvbGUgY2FyZCwgb25lIHBsYXllciBpcyBkZXNpZ25hdGVkIHRoZSBBbm5vdW5jZXIgYW5kIGFubm91bmNlcyBlYWNoIG9mIHRoZSByb2xlcyBpbiBvcmRlciBhbmQgc2lsZW50bHkgY291bnRzIHRvIHRlbiBhZnRlciBlYWNoIHJvbGUgaXMgd29rZW4gdXAgdG8gYWxsb3cgdGhlIHBsYXllcnMgd2l0aCB0aGF0IHJvbGUgdG8gcGVyZm9ybSB0aGVpciBhY3Rpb24gYXQgbmlnaHQuXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IHtzdHlsZXMucnVsZVRpdGxlfT5EYXkgUGhhc2U8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWUgPSB7c3R5bGVzLnJ1bGVUZXh0fT5cbiAgICAgICAgICAgICAgICBBZnRlciB0aGUgbmlnaHQgcGhhc2UsIHBsYXllcnMgZGlzY3VzcyBhbW9uZyB0aGVtc2VsdmVzIHdobyB0aGV5IGJlbGlldmUgdGhlIFdlcmV3b2x2ZXMgYXJlLiBBbGwgcGxheWVycyBtYXkgc2F5IGFueXRoaW5nLCBidXQgbWF5IG5ldmVyIHNob3cgdGhlaXIgY2FyZCB0byBhbnlvbmUuIFdlcmV3b2x2ZXMgbWlnaHQgd2FudCB0byBjbGFpbSB0byBiZSBhIGRpZmZlcmVudCByb2xlIHNvIHRoYXQgdGhleSBkb24ndCBkaWUuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWUgPSB7c3R5bGVzLnJ1bGVUZXh0fT5cbiAgICAgICAgICAgICAgICBCZWNhdXNlIGNlcnRhaW4gdGhpbmdzIG1heSBjaGFuZ2Ugb3RoZXIgcGxheWVycycgY2FyZHMsIHNvbWUgcGxheWVycyB3aWxsIGJlbGlldmUgdGhleSBhcmUgb25lIHJvbGUsIHdoZW4gdGhleSBhcmUgYWN0dWFsbHkgYSBkaWZmZXJlbnQgb25lLiBBZnRlciB0aGUgbmlnaHQgcGhhc2UsIHlvdXIgcm9sZSBpcyB0aGUgY2FyZCB0aGF0IGlzIGN1cnJlbnRseSBpbiBmcm9udCBvZiB5b3UsIHdoaWNoIG1heSBiZSBkaWZmZXJlbnQgdGhhbiB5b3VyIG9yaWdpbmFsIHJvbGUuIE5vIG9uZSBtYXkgbG9vayBhdCBhbnkgY2FyZHMgYWZ0ZXIgdGhlIG5pZ2h0IHBoYXNlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0ge3N0eWxlcy5ydWxlVGV4dH0+XG4gICAgICAgICAgICAgICAgQWZ0ZXIgYSBmZXcgbWludXRlcyBvZiBkaXNjdXNzaW9uLCBwbGF5ZXJzIHZvdGUgb24gd2hvIHRoZXkgYmVsaWV2ZSB0aGUgcGxheWVycyB3aG8gYXJlIHdlcmV3b2xmIHRvIGJlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cCBjbGFzc05hbWUgPSB7c3R5bGVzLnJ1bGVUaXRsZX0+VmljdG9yeSBDb25kaXRpb25zPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0ge3N0eWxlcy5ydWxlVGV4dH0+XG4gICAgICAgICAgICAgICAgVmljdG9yeSBjYW4gb2NjdXIgYWZ0ZXIganVzdCBhIG5pZ2h0IGFuZCBhIGRheSwgdGhlIFZpbGxhZ2VycyBjYW4gd2luIGlmIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZSA9IHtzdHlsZXMucnVsZUxpc3R9PlxuICAgICAgICAgICAgICAgIDxsaT5JZiBhdCBsZWFzdCBvbmUgV2VyZXdvbGYgZGllcywgZXZlbiBpZiBWaWxsYWdlcnMgYXJlIGtpbGxlZDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPklmIG5vYm9keSBpcyBhIFdlcmV3b2xmLCBhbmQgbm9ib2R5IGRpZXM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5JdCdzIHBvc3NpYmxlIGZvciBub2JvZHkgdG8gYmUgYSB3ZXJld29sZiBpcyBhbGwgd2VyZXdvbGYgY2FyZHMgYXJlIGluIHRoZSBjZW50cmU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5UaGUgd2VyZXdvbHZlcyBvbmx5IHdpbiBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgV2VyZXdvbGYgYW5kIG5vbmUgYXJlIGtpbGxlZDwvbGk+XG4gICAgICAgICAgICAgICAgey8qIDxsaT5JZiBhIFRhbm5lciBpcyBpbiB0aGUgZ2FtZSwgdGhlcmUgYXJlIHNwZWNpYWwgcnVsZXMgcmVnYXJkaW5nIHdobyB3aW5zIC0gc2VlIHRoZSBUYW5uZXIncyBkZXNjcmlwdGlvbiBmb3IgZGV0YWlsczwvbGk+ICovfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IHtzdHlsZXMucnVsZVRleHR9PlxuICAgICAgICAgICAgICAgIElmIHRoZXNlIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQsIHRoZW4gdGhlIFdlcmV3b2x2ZXMgd2luLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0ge3N0eWxlcy5ydWxlVGV4dH0+Q2xpY2tcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IHtzdHlsZXMuaGlnaGxpZ2h0QnV0dG9ufSBocmVmID0gJ2h0dHBzOi8vd3d3LnVsdHJhYm9hcmRnYW1lcy5jb20vb25lLW5pZ2h0LXVsdGltYXRlLXdlcmV3b2xmL2dhbWUtcnVsZXMucGhwJyB0YXJnZXQgPSBcIl9ibGFua1wiPiBoZXJlIDwvYT5cbiAgICAgICAgICAgICAgICBmb3IgbW9yZSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/rules/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"display\": \"Home_display__1NH07\",\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"mainLogo\": \"Home_mainLogo__noQEo\",\n\t\"logo\": \"Home_logo__1YbrH\",\n\t\"regText\": \"Home_regText__2hlye\",\n\t\"desc\": \"Home_desc__2xwKH\",\n\t\"titleBox\": \"Home_titleBox__2h3U_\",\n\t\"mainTitle\": \"Home_mainTitle__3opDa\",\n\t\"highlightLink\": \"Home_highlightLink__U1uAO\",\n\t\"homeButtonContainer\": \"Home_homeButtonContainer__GkaRU\",\n\t\"naviButton\": \"Home_naviButton__30GIF\",\n\t\"addSubtractButton\": \"Home_addSubtractButton__1HZZN\",\n\t\"loginLabel\": \"Home_loginLabel__hK_kr\",\n\t\"inputBox\": \"Home_inputBox__3zk4V\",\n\t\"submitButton\": \"Home_submitButton__aJihW\",\n\t\"ruleTitle\": \"Home_ruleTitle__3FxRf\",\n\t\"ruleText\": \"Home_ruleText__1yjw7\",\n\t\"ruleList\": \"Home_ruleList__39N0G\",\n\t\"highlightButton\": \"Home_highlightButton__2a9Gj\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"grid\": \"Home_grid__2Ei2F\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2M1NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRpc3BsYXlcIjogXCJIb21lX2Rpc3BsYXlfXzFOSDA3XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJtYWluTG9nb1wiOiBcIkhvbWVfbWFpbkxvZ29fX25vUUVvXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIixcblx0XCJyZWdUZXh0XCI6IFwiSG9tZV9yZWdUZXh0X18yaGx5ZVwiLFxuXHRcImRlc2NcIjogXCJIb21lX2Rlc2NfXzJ4d0tIXCIsXG5cdFwidGl0bGVCb3hcIjogXCJIb21lX3RpdGxlQm94X18yaDNVX1wiLFxuXHRcIm1haW5UaXRsZVwiOiBcIkhvbWVfbWFpblRpdGxlX18zb3BEYVwiLFxuXHRcImhpZ2hsaWdodExpbmtcIjogXCJIb21lX2hpZ2hsaWdodExpbmtfX1UxdUFPXCIsXG5cdFwiaG9tZUJ1dHRvbkNvbnRhaW5lclwiOiBcIkhvbWVfaG9tZUJ1dHRvbkNvbnRhaW5lcl9fR2thUlVcIixcblx0XCJuYXZpQnV0dG9uXCI6IFwiSG9tZV9uYXZpQnV0dG9uX18zMEdJRlwiLFxuXHRcImFkZFN1YnRyYWN0QnV0dG9uXCI6IFwiSG9tZV9hZGRTdWJ0cmFjdEJ1dHRvbl9fMUhaWk5cIixcblx0XCJsb2dpbkxhYmVsXCI6IFwiSG9tZV9sb2dpbkxhYmVsX19oS19rclwiLFxuXHRcImlucHV0Qm94XCI6IFwiSG9tZV9pbnB1dEJveF9fM3prNFZcIixcblx0XCJzdWJtaXRCdXR0b25cIjogXCJIb21lX3N1Ym1pdEJ1dHRvbl9fYUppaFdcIixcblx0XCJydWxlVGl0bGVcIjogXCJIb21lX3J1bGVUaXRsZV9fM0Z4UmZcIixcblx0XCJydWxlVGV4dFwiOiBcIkhvbWVfcnVsZVRleHRfXzF5anc3XCIsXG5cdFwicnVsZUxpc3RcIjogXCJIb21lX3J1bGVMaXN0X18zOU4wR1wiLFxuXHRcImhpZ2hsaWdodEJ1dHRvblwiOiBcIkhvbWVfaGlnaGxpZ2h0QnV0dG9uX18yYTlHalwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });