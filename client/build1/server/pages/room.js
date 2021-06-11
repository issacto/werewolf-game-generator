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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OI/r");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "OI/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/functions/fetch.js
var fetch = __webpack_require__("Ug0L");

// EXTERNAL MODULE: ./components/data/index.js + 8 modules
var components_data = __webpack_require__("U6fH");

// CONCATENATED MODULE: ./components/images/link.svg
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLink(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    fill: "#162B2B",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.183 512.183"
  }, props), _path || (_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M312.923 199.259a116.167 116.167 0 00-20.053-16.128c-38.498-24.667-87.699-25.197-126.72-1.365a120.636 120.636 0 00-22.528 17.835L34.993 308.23c-46.657 46.657-46.657 122.303 0 168.96 46.657 46.657 122.303 46.657 168.96 0l89.6-89.6a8.534 8.534 0 00-6.058-14.592h-3.413a143.626 143.626 0 01-54.613-10.581 8.533 8.533 0 00-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.629-108.8c19.913-20.077 52.33-20.21 72.407-.297l.297.297c13.518 12.895 34.781 12.895 48.299 0a34.135 34.135 0 009.899-22.016 34.142 34.142 0 00-9.901-26.283zm-12.445 36.51l-.013.013c-6.776 6.404-17.373 6.404-24.149 0-26.656-26.639-69.856-26.639-96.512 0L71.259 344.411c-26.651 26.675-26.632 69.904.043 96.555 26.675 26.651 69.904 26.632 96.555-.043l60.501-60.587a158.987 158.987 0 0039.339 8.96l-75.776 75.861c-40.059 40.059-105.008 40.059-145.067 0-40.059-40.059-40.059-105.008 0-145.067l108.8-108.459a103.432 103.432 0 0119.029-15.275 102.393 102.393 0 0153.419-14.677 102.397 102.397 0 0155.296 16.128 99.018 99.018 0 0117.067 13.824c6.668 6.663 6.674 17.469.013 24.138z"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M477.19 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.515a8.533 8.533 0 00-1.792 9.387 8.532 8.532 0 008.021 5.205h3.157a143.354 143.354 0 0154.528 10.667 8.533 8.533 0 009.301-1.877l64.512-64.512c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.872-.683.768-27.904 28.16c-19.913 20.077-52.331 20.21-72.407.297l-.297-.297c-13.518-12.895-34.781-12.895-48.299 0a34.135 34.135 0 00-9.899 22.016 34.133 34.133 0 009.899 26.283 118.447 118.447 0 0034.133 23.893c1.792.853 3.499 1.621 5.376 2.304 1.877.683 3.499 1.451 5.461 2.048s3.669 1.28 5.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195h12.458c1.877 0 3.84 0 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0055.381-31.403L477.19 203.953c46.657-46.657 46.657-122.303 0-168.96zm-11.861 157.098l-108.8 108.459a102.402 102.402 0 01-47.872 27.051l-4.437.853-2.56.512-4.864.683h-2.901l-4.864.427H278.279a97.109 97.109 0 01-10.24-1.024c-2.901-.512-5.888-1.109-8.533-1.792l-4.352-1.195c-1.451 0-2.816-.853-4.608-1.536s-3.072-1.109-4.693-1.707l-4.608-1.963a101.626 101.626 0 01-29.269-20.48c-6.669-6.669-6.669-17.481 0-24.149 6.669-6.669 17.481-6.669 24.149 0 26.656 26.639 69.856 26.639 96.512 0l28.331-28.672.683-.768 79.36-79.275c26.445-26.65 26.407-69.653-.085-96.256-26.645-26.675-69.869-26.699-96.544-.054l-.054.054-60.587 60.587a159.677 159.677 0 00-39.168-9.045l75.691-75.776c40.059-40.059 105.008-40.059 145.067 0 40.057 40.059 40.057 105.007-.002 145.066z"
  })));
}

/* harmony default export */ var images_link = (SvgLink);
// CONCATENATED MODULE: ./components/images/refresh.svg
var refresh_path;

function refresh_extends() { refresh_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return refresh_extends.apply(this, arguments); }



function SvgRefresh(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", refresh_extends({
    height: "512pt",
    viewBox: "0 0 512 512",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), refresh_path || (refresh_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M92.328 283.844A167.625 167.625 0 0190 256c0-94.988 79.027-166 166-166 38.676 0 76.746 14.148 106.555 39.23l-9.961 9.961a15.005 15.005 0 00-3.746 14.973 15.008 15.008 0 0011.445 10.352c.164.03 105.637 21.246 105.809 21.28a14.995 14.995 0 0013.601-4.085 14.98 14.98 0 004.098-13.594c-.024-.125-21.266-105.73-21.29-105.86a15.013 15.013 0 00-10.363-11.413 14.998 14.998 0 00-14.953 3.75l-10.96 10.96C379.788 23.868 319.3 0 256 0 118.555 0 0 112.348 0 256c0 6.34.234 12.746.703 19.035a15.004 15.004 0 0012.008 13.602l61.875 12.41c10.32 2.07 19.488-6.863 17.742-17.203zM30.066 261.52A236.918 236.918 0 0130 256C30 127.66 136.75 30 256 30c59.246 0 117.516 24.445 159.86 67.07 5.859 5.899 15.417 5.914 21.288-.007l1.438-1.438c.605 3.008-3.043-15.145 11.309 56.246-3.028-.61 15.171 3.067-56.208-11.344l1.118-1.12c5.84-5.84 5.86-15.302.047-21.169C358.164 81.227 307.555 60 256 60 153.277 60 60 143.523 60 256c0 3.86.113 7.73.34 11.59zm0 0M499.324 223.195l-61.93-12.64c-10.316-2.106-19.566 6.824-17.785 17.226A167.897 167.897 0 01422 256c0 94.984-79.027 166-166 166-38.676 0-76.746-14.148-106.555-39.23l9.961-9.965a14.998 14.998 0 00-7.703-25.32c-.16-.036-105.633-21.25-105.805-21.282a15.003 15.003 0 00-13.601 4.082 14.991 14.991 0 00-4.098 13.598c.024.125 21.266 105.73 21.29 105.86a15.007 15.007 0 0010.363 11.413 15.006 15.006 0 0014.953-3.75l10.96-10.96C132.216 488.135 192.708 512 256 512c141.527 0 256-113.984 256-256 0-6.402-.242-12.871-.719-19.227a15 15 0 00-11.957-13.578zM256 482c-59.246 0-117.516-24.445-159.86-67.074-5.859-5.895-15.417-5.91-21.288.012l-1.442 1.437c-.601-3.012 3.047 15.145-11.305-56.25 3.028.61-15.171-3.062 56.211 11.348l-1.12 1.12c-5.84 5.837-5.86 15.302-.048 21.165C153.836 430.773 204.445 452 256 452c102.73 0 196-83.547 196-196 0-3.973-.121-7.95-.36-11.918l30.29 6.184c.047 1.914.07 3.828.07 5.734 0 123.777-99.273 226-226 226zm0 0"
  })));
}

/* harmony default export */ var refresh = (SvgRefresh);
// CONCATENATED MODULE: ./pages/room/index.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class room_RoomPage extends external_react_default.a.Component {
  static getInitialProps({
    query
  }) {
    return {
      id: query.id
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "copyCodeToClipboard", () => {
      var promise = navigator.clipboard.writeText(this.props.id);
    });

    _defineProperty(this, "refresh", () => {
      router_default.a.reload(window.location.pathname);
    });

    this.state = {
      roomSize: -1,
      charactersDetails: []
    };
  }

  async fetchRoomSize(id) {
    await Object(fetch["d" /* getRoomSize */])(id).then(res => {
      console.log(res);
      this.setState({
        roomSize: res.data
      });
      return res.data;
    }).catch(err => {
      console.log("Error");
      console.log(err);
      return err;
    });
  }

  async fetchCharacters(id) {
    var charactersJson = [];
    await Object(fetch["b" /* getCharacters */])(id).then(res => {
      console.log(res.data);

      for (var prop in res.data) {
        charactersJson.push([prop, res.data[prop]]);
      }

      this.setState({
        charactersJson: charactersJson
      });
      return res.data;
    }).catch(err => {
      console.log("Error");
      console.log(err);
      return err;
    });

    for (var character of charactersJson) {
      await Object(fetch["a" /* getCharacterPlayers */])(this.props.id, character[0]).then(participants => {
        console.log("participants");
        console.log(participants.data);
        this.setState({
          charactersDetails: [...this.state.charactersDetails, [character[0], character[1], participants.data]]
        });
      });
      console.log("FINALI");
      console.log(this.state.charactersDetails);
    }
  }

  componentDidMount() {
    //if room id is not there then return to menu
    Object(fetch["e" /* hasRoom */])(this.props.id).then(data => {
      console.log(data.data);

      if (data.data) {
        this.fetchRoomSize(this.props.id);
        this.fetchCharacters(this.props.id);
      } else {
        router_default.a.push('/menu');
      }

      ;
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "room",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          marginTop: "4vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: ["Room number: ", this.props.id, " "]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(images_link, {
          width: "3.7vh",
          style: {
            marginLeft: "3vh"
          },
          onClick: () => this.copyCodeToClipboard()
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          marginTop: "2vh"
        },
        children: ["Total number of players: ", this.state.roomSize]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          marginTop: "2vh"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(refresh, {
          width: "3.7vh",
          height: "3.7vh",
          onClick: () => this.refresh()
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("table", {
        className: "displayTable",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
          className: "tableHeader",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: "Role"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: "Number"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: "Participants"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: "Dead "
          })]
        }), this.state.charactersDetails ? this.state.charactersDetails.map(data => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
          style: {
            color: components_data["a" /* charatersColorMap */].get(data[0])
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "displayTableImageSection",
              children: [components_data["b" /* charatersImageMap */].get(data[0]), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), data[0]]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: data[1]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: data[2] ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: data[2].map(name => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                style: {
                  marginTop: "1vh"
                },
                children: name
              }))
            }) : null
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: data[2] ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: data[2].map(name => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  display: "flex",
                  flexDirection: "column"
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                  children: ["  ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                    type: "checkbox"
                  })]
                })
              }))
            }) : null
          })]
        })) : null]
      })]
    });
  }

}

/* harmony default export */ var room = __webpack_exports__["default"] = (room_RoomPage);

/***/ }),

/***/ "U6fH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ charatersList; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ charatersImageMap; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ charatersColorMap; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/images/wizard.svg
var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgWizard(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#995762",
    viewBox: "0 0 192 192",
    width: 512,
    height: 512
  }, props), _g || (_g = /*#__PURE__*/external_react_["createElement"]("g", {
    "data-name": "04-hat"
  }, /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M155.54 121.945a105.77 105.77 0 00-5.345-1.957l8.985 26.952a16.019 16.019 0 01-10.12 20.239C147.982 167.538 122.319 176 96 176s-51.982-8.462-53.063-8.822a16 16 0 01-9.248-22.333l13.231-26.462c-3.675 1.065-7.179 2.25-10.46 3.562C18.107 129.286 8 139.959 8 152s10.107 22.714 28.46 30.055C52.493 188.468 73.638 192 96 192s43.507-3.532 59.54-9.945C173.893 174.714 184 164.041 184 152s-10.107-22.714-28.46-30.055zM48.87 21.087A14.246 14.246 0 0163 35.413a2 2 0 004 0 14.246 14.246 0 0114.13-14.326 2 2 0 000-4A14.246 14.246 0 0167 2.761a2 2 0 10-4 0 14.246 14.246 0 01-14.13 14.326 2 2 0 000 4zM190.13 78.087A14.246 14.246 0 01176 63.761a2 2 0 10-4 0 14.246 14.246 0 01-14.13 14.326 2 2 0 000 4A14.246 14.246 0 01172 96.413a2 2 0 104 0 14.246 14.246 0 0114.13-14.326 2 2 0 000-4zM13.87 84.087A14.246 14.246 0 0128 98.413a2 2 0 104 0 14.246 14.246 0 0114.13-14.326 2 2 0 100-4A14.246 14.246 0 0132 65.761a2 2 0 00-4 0 14.246 14.246 0 01-14.13 14.326 2 2 0 000 4z"
  }), /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M80 72v12.687L66.343 98.343a7.986 7.986 0 00-1.5 2.079L54.056 122c11.81 3.772 26.286 6 41.944 6 17.487 0 33.5-2.776 45.972-7.384l-5.334-16 6.517-13.036a8 8 0 00-1.5-9.235L128 68.687v-10.02L150.4 28.8a8 8 0 00-9.978-11.955l-48 24a8 8 0 00-4.012 4.625l-8 24A8.027 8.027 0 0080 72zM50.634 128.844l-9.789 19.578a8 8 0 004.625 11.167C46.5 159.933 70.989 168 96 168s49.5-8.067 50.53-8.411a8 8 0 005.06-10.119l-7.252-21.755C131.56 132.863 114.605 136 96 136c-17.2 0-32.983-2.684-45.366-7.156z"
  }))));
}

/* harmony default export */ var wizard = (SvgWizard);
// CONCATENATED MODULE: ./components/images/arrows.svg
var _path;

function arrows_extends() { arrows_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrows_extends.apply(this, arguments); }



function SvgArrows(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrows_extends({
    height: "511pt",
    fill: "#7F2020",
    viewBox: "0 -13 512 511",
    width: "511pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M40.527 416.332a16.036 16.036 0 004.664 10.047l13.766 13.762c2.8 2.8 6.379 4.351 10.047 4.664v18.828c0 19.023 23.855 28.902 37.305 15.453l34.765-34.762c7.738-7.738 12-18.031 12-28.972v-46.47l26.453-26.452a7.507 7.507 0 000-10.614 7.507 7.507 0 00-10.613 0l-29.148 29.145-68.567 68.566c-.445.45-1.18.45-1.629 0l-13.765-13.765a1.16 1.16 0 01.004-1.63l68.57-68.57L229.992 239.95l15.395 15.395-55.504 55.5a7.507 7.507 0 000 10.613 7.5 7.5 0 0010.613 0l55.504-55.5 102.93 102.926v46.469c0 10.941 4.261 21.234 12 28.968 0 0 34.715 34.715 34.761 34.766 13.395 13.39 37.309 3.426 37.309-15.453v-18.824a16.03 16.03 0 0010.047-4.668l13.762-13.762a16.04 16.04 0 004.668-10.047H490.3c19.082 0 28.957-23.805 15.453-37.309l-34.766-34.761c-7.738-7.739-18.027-12-28.968-12h-46.47L292.622 229.336 392.797 129.16a41.379 41.379 0 003.27 4.004c7.847 8.43 18.62 13.07 30.347 13.074 14.848 0 29.363-7.57 39.816-20.773 25.899-32.7 18.66-84.719 12.04-112.817a7.509 7.509 0 00-5.586-5.586C454.859 2.863 438.133.734 422.964.734c-25.843 0-47.51 6.235-62.663 18.032-13.477 10.492-21.207 25.129-21.207 40.16 0 11.562 4.535 22.238 12.77 30.058a42.64 42.64 0 004.3 3.563L256 192.71 155.836 92.547a43.164 43.164 0 004.305-3.567c8.234-7.82 12.765-18.496 12.765-30.058 0-15.027-7.73-29.668-21.207-40.156C120.63-5.422 75.223-1.391 39.316 7.066a7.504 7.504 0 00-5.586 5.582c-6.617 28.098-13.855 80.11 12.032 112.809 10.46 13.207 24.98 20.781 39.836 20.781 11.71 0 22.484-4.636 30.332-13.066a41.516 41.516 0 003.273-4.012L219.38 229.336 116.453 332.262H69.984c-10.945 0-21.234 4.261-28.972 12L6.246 379.027c-13.52 13.52-3.594 37.305 15.453 37.305zm97.535-32.437v31.457c0 6.933-2.699 13.453-7.605 18.355 0 0-34.703 34.703-34.762 34.766-4.257 4.254-11.683 1.152-11.683-4.84v-25.688zm289.926 79.738c0 5.98-7.445 9.074-11.683 4.84l-34.762-34.766c-4.902-4.902-7.606-11.422-7.606-18.355v-31.457l54.051 54.05zm14.032-116.36c6.933 0 13.453 2.7 18.355 7.602l34.766 34.766c4.27 4.27 1.113 11.68-4.84 11.68h-25.692l-54.05-54.048zm-72.5-316.66c12.492-9.726 30.972-14.867 53.449-14.867 12.726 0 26.742 1.649 41.722 4.899 12.23 56.242-1.039 83.902-10.226 95.5-11.125 14.046-33.36 21.882-47.41 6.792-7.035-7.554-8.965-18.394-8.254-28.382a7.497 7.497 0 00-2.18-5.84c-2.183-2.184-4.824-2.188-7.7-2.203-5.948-.028-12.019-.364-17.6-2.633-24.38-9.91-19.403-39.563-1.801-53.266zM266.613 203.328L370.47 99.473a55.255 55.255 0 009.601 1.855c1.215.133 2.43.234 3.649.29.027.612.297 3.679.41 4.609l.012.062c.367 2.957.933 5.824 1.73 8.566L282.008 218.72zM85.598 131.227c-10.243 0-20.473-5.5-28.067-15.09-9.183-11.598-22.449-39.258-10.219-95.492 14.981-3.25 28.997-4.899 41.723-4.899 47.313 0 68.86 22.383 68.863 43.176 0 15.582-12.75 25.84-27.355 27.473-3.406.378-6.738.003-10.129.125-4.195.152-7.508 3.851-7.21 8.035.714 10-1.22 20.828-8.259 28.386-4.976 5.344-11.847 8.286-19.347 8.286zm42.265-24.938a59.933 59.933 0 00.422-4.672c4.465-.21 8.95-.898 13.246-2.144l314.664 314.664a1.16 1.16 0 010 1.629s-13.765 13.761-13.765 13.765a1.16 1.16 0 01-1.63-.004L126.13 114.855c.8-2.742 1.363-5.609 1.734-8.566zM15.38 397.098c-.41-.993-1.516-4.457 1.484-7.457l34.762-34.766c4.902-4.902 11.422-7.602 18.36-7.602h31.456l-54.05 54.047H21.699c-4.242 0-5.91-3.23-6.32-4.222zm0 0"
  })));
}

/* harmony default export */ var arrows = (SvgArrows);
// CONCATENATED MODULE: ./components/images/man.svg
var man_path, _path2;

function man_extends() { man_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return man_extends.apply(this, arguments); }



function SvgMan(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", man_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#004225",
    viewBox: "0 0 480 480"
  }, props), man_path || (man_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M424 264.176V48a8 8 0 00-8-8h-32a8 8 0 00-8 8v16h-16v16h16v120h-8v-24c-.055-14.547-9.914-27.227-24-30.864V96a24 24 0 00-17.944-23.128L307.24 16.408A24 24 0 00284.472 0h-13.84a23.825 23.825 0 00-16.976 7.032l-5.512 5.512a8.062 8.062 0 01-6.448 2.304 8.458 8.458 0 01-6.288-4.16A24 24 0 00215.44 0H202.4a24.001 24.001 0 00-21.928 14.248l-25.984 58.448A24 24 0 00136 96v48.064c-17.398.348-31.329 14.535-31.36 31.936v24H88a8 8 0 00-8 8v16c.016 15.017 10.458 28.01 25.12 31.256.08.256.216.488.304.744H80c-22.08.026-39.974 17.92-40 40v176a8 8 0 008 8h384a8 8 0 008-8V296a39.832 39.832 0 00-16-31.824zm-32-34.016c.413-2.028.627-4.091.64-6.16v-16a8.006 8.006 0 00-.64-3.128V56h16v200h-16v-25.84zM195.088 20.744A8 8 0 01202.4 16h13.04a8.406 8.406 0 017.08 4.2c7.354 11.027 22.256 14.005 33.283 6.651a24.014 24.014 0 003.653-2.995l5.512-5.512A8 8 0 01270.632 16h13.84a8 8 0 017.584 5.472L308.896 72H172.312l22.776-51.256zM152 96a8 8 0 018-8h160a8 8 0 018 8v32H152V96zm176 48v24a8 8 0 01-8 8h-8v-32h16zm-45.656 162.296L240 348.688l-42.344-42.344a8 8 0 00-11.312 0L168 324.688V272h12.184c.48.712 1.048 1.336 1.544 2.032a60.328 60.328 0 002.544 3.344 73.658 73.658 0 003.296 3.752c.944 1.008 1.888 2.008 2.888 2.952 1.208 1.152 2.472 2.232 3.752 3.288 1.056.872 2.088 1.744 3.2 2.544 1.36 1 2.776 1.912 4.208 2.816 1.12.704 2.224 1.44 3.384 2.088 1.52.848 3.096 1.6 4.672 2.312.88.408 1.712.912 2.608 1.288l20.576 41.16a8 8 0 0014.32 0l20.56-41.176c.944-.392 1.816-.92 2.736-1.352 1.512-.712 3.032-1.408 4.488-2.216 1.232-.688 2.4-1.464 3.6-2.224 1.344-.848 2.68-1.704 4-2.648 1.32-.944 2.288-1.792 3.408-2.72 1.12-.928 2.4-2 3.52-3.072a54.931 54.931 0 003.08-3.2c1-1.12 2.112-2.304 3.104-3.528a72.129 72.129 0 002.656-3.488c.488-.688 1.048-1.296 1.52-2H312v52.688l-18.344-18.344a8 8 0 00-11.312 0zM292.688 328H288v72h-96v-76.688l42.344 42.344a8 8 0 0011.312 0L288 323.312l4.688 4.688zm-132.686 23.998a7.998 7.998 0 005.654-2.342L176 339.312V432h-32V272h8v72a8 8 0 008.002 7.998zM208 208h24v8a8 8 0 01-8 8h-24v16h24a23.848 23.848 0 0016-6.24 23.848 23.848 0 0016 6.24h24v-16h-24a8 8 0 01-8-8v-8h24a8 8 0 008-8v-56h16v88a55.05 55.05 0 01-7.584 28 55.653 55.653 0 01-30.544 24.92l-1.032-.512-.52 1.04a53.364 53.364 0 01-32.64 0l-.52-1.04-1.032.512a55.848 55.848 0 01-30.6-25A55.062 55.062 0 01184 232v-88h16v56a8 8 0 008 8zm32-32a8 8 0 008-8v-24h16v48h-48v-48h16v16h-8v16h16zm7.28 127.544L240 318.112l-7.28-14.568c2.417.277 4.847.429 7.28.456a70.844 70.844 0 007.28-.456zM152 144h16v32h-8a8 8 0 01-8-8v-24zm-24 320H56V296c0-13.255 10.745-24 24-24h48v192zm-8-216a8 8 0 00-8-8c-8.837 0-16-7.163-16-16v-8h16.64a8 8 0 008-8v-32c.027-8.568 6.799-15.593 15.36-15.936V168c0 13.255 10.745 24 24 24h8v40a71.462 71.462 0 004.272 24H128a8 8 0 01-8-8zm216 216H144v-16h40a8 8 0 008-8v-24h96v24a8 8 0 008 8h40v16zm0-152v120h-32v-92.688l10.344 10.344A8 8 0 00328 344v-72h8v40zm8.64-56h-36.92a71.445 71.445 0 004.28-24v-40h8c13.255 0 24-10.745 24-24v-5.776A15.943 15.943 0 01352 176v32a8 8 0 008 8h16v12.232A16 16 0 01360.64 240c-4.418 0-8 3.582-8 8s-3.582 8-8 8zm31.36-4.04V256h-8.8c.088-.256.224-.488.304-.744A31.64 31.64 0 00376 251.96zM352 320h4l12 16h-16v-16zm72 144h-72v-16h24v-16h-24v-16h24v-16h-24v-16h24v-16h-24v-16h72v112zm0-128h-36l-21.6-28.8a8.002 8.002 0 00-6.4-3.2h-8v-32h48c13.255 0 24 10.745 24 24v40z"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M152 400h16v16h-16zM312 400h16v16h-16z"
  })));
}

/* harmony default export */ var man = (SvgMan);
// CONCATENATED MODULE: ./components/images/merchant.svg
var merchant_path, merchant_path2;

function merchant_extends() { merchant_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return merchant_extends.apply(this, arguments); }



function SvgMerchant(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", merchant_extends({
    fill: "#1C305C",
    height: 512,
    viewBox: "0 0 64 64",
    width: 512,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), merchant_path || (merchant_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M58.414 47l2.873-2.873L56.535 37H41.919A11.936 11.936 0 0045 29v-.184A2.996 2.996 0 0047 26v-9.589c2.928-1.19 5-4.061 5-7.411 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 3.35 2.072 6.221 5 7.411V19c-2.206 0-4 1.794-4 4v6c0 2.206-1.794 4-4 4h-6.271l-.469-1.458A7.03 7.03 0 0028.315 29H29c2.206 0 4-1.794 4-4V13c0-1.103-.897-2-2-2H18.883C14.536 11 11 14.536 11 18.883c0 .85.137 1.689.404 2.493l.41 1.232A3.956 3.956 0 0011 25c0 2.206 1.794 4 4 4h.685a7.038 7.038 0 002.055 2.542l-.488 1.517-3.999.333C8.625 33.778 5 37.717 5 42.361V47H1v16h62V47zm-16.282-4h-4.263L40 39.803zm8.391 2L48 51.307 45.477 45zm-4.655-2L48 39.803 50.132 43zM56 39.803L58.131 43h-4.263zm-4 2.394L49.868 39h4.263zm-8 0L41.868 39h4.263zm-9.287 1.93L37.586 47H33v-6c1.536 0 3-.301 4.35-.829zm3.701.873h4.908l3.047 7.618a3.84 3.84 0 01-1.077-.739zm14.263 0h4.908l-6.878 6.879a3.819 3.819 0 01-1.077.739zM38 9c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm6 8c.339 0 .672-.028 1-.069V26a1.001 1.001 0 01-2 0v-9.069c.328.041.661.069 1 .069zm-3 4v4h-2v-2c0-1.103.897-2 2-2zm-2 8v-2h2.184A2.997 2.997 0 0043 28.816V29c0 5.514-4.486 10-10 10h-2v8h-6.026a5.05 5.05 0 00-.959-.962L28.678 35H33c3.309 0 6-2.691 6-6zm-21.379 6.035l3.162 3.162-1.065 2.129-2.201-5.282zM26.414 35h.093l-2.239 5.3-1.052-2.103zm-4.718 10.07l-.961-2.305L22 40.236l1.244 2.488-1.031 2.442a4.908 4.908 0 00-.517-.096zM21 47c1.654 0 3 1.346 3 3v1h-4v-4zm8-26.101a4.965 4.965 0 002-.924v1.582A3.95 3.95 0 0029 21zM29 27h-.08c.047-.328.08-.66.08-1v-3c1.103 0 2 .897 2 2s-.897 2-2 2zm-14 0c-1.103 0-2-.897-2-2s.897-2 2-2v3c0 .34.033.672.08 1zm.143-6H15c-.535 0-1.045.11-1.512.301l-.186-.559c-.2-.6-.302-1.226-.302-1.86A5.89 5.89 0 0118.883 13H31v3c0 1.654-1.346 3-3 3h-6a1.001 1.001 0 010-2h1v-2h-1c-1.371 0-2.517.93-2.874 2.188l-.338.085A4.978 4.978 0 0015.143 21zM17 26v-3.877c0-1.376.93-2.569 2.263-2.907A3 3 0 0022 21h5v5c0 2.757-2.243 5-5 5s-5-2.243-5-5zm5 7c.874 0 1.707-.168 2.479-.462l.382 1.187L22 36.586l-2.861-2.861.382-1.187A6.945 6.945 0 0022 33zM7 42.361c0-3.611 2.819-6.675 6.419-6.976l2.005-.167L19.5 45H13v-5h-2v5.586l-1.707 1.707 1.414 1.414L12.414 47H18v4h-7c-2.206 0-4-1.794-4-4zM5.35 49c.826 2.327 3.043 4 5.65 4h15v-3c0-.342-.035-.677-.101-1h13.687l4.293 4.293C44.964 54.378 46.466 55 48 55s3.036-.622 4.121-1.707L56.414 49H61v8H3v-8zM3 61v-2h58v2z"
  })), merchant_path2 || (merchant_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M48 9c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4zm-6 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z"
  })));
}

/* harmony default export */ var merchant = (SvgMerchant);
// CONCATENATED MODULE: ./components/images/hiddenWolf.svg
var hiddenWolf_path;

function hiddenWolf_extends() { hiddenWolf_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return hiddenWolf_extends.apply(this, arguments); }



function SvgHiddenWolf(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", hiddenWolf_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#f0f8ff",
    viewBox: "0 0 512.001 512.001"
  }, props), hiddenWolf_path || (hiddenWolf_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M509.571 205.903l-24.11-24.11v-14.259a8.291 8.291 0 00-2.43-5.864l-24.11-24.11v-14.259a8.292 8.292 0 00-14.158-5.864l-15.328 15.328c-29.166.659-59.002 9.361-87.894 17.811-24.958 7.3-48.531 14.194-67.294 14.194-27.321 0-52.161-1.699-74.077-3.197-17.54-1.2-34.106-2.332-48.67-2.332-8.577 0-31.179 3.411-55.331 16.323-28.932 15.466-49.785 39.26-60.301 68.809-4.242 11.918-10.825 21.285-17.191 30.344C9.975 287.099.977 299.902.014 317.474a8.295 8.295 0 0010.213 8.519c.488-.116 2.884-.709 6.62-1.902l-7.876 45.502a8.29 8.29 0 00.754 5.123l8.847 17.693a8.292 8.292 0 007.418 4.585h17.693a8.294 8.294 0 000-16.588h-12.57l-3.151-6.3c10.317-14.109 25.454-34.754 29.791-40.535 34.751-14.844 52.039-31.681 59.393-40.638a148.58 148.58 0 0013.603 10.582L115.6 341.387a8.294 8.294 0 002.391 9.452l53.08 44.233a8.294 8.294 0 005.309 1.922h17.693a8.294 8.294 0 000-16.588h-14.691l-25.648-21.372c.268-18.786 8.608-29.561 18.261-41.985 5.795-7.457 12.028-15.489 16.289-25.614 8.843 1.266 19.565 1.901 30.695 1.901 8.685 0 17.602-.395 26.064-1.167l-14.784 59.133a8.271 8.271 0 00-.248 2.011V388.7a8.294 8.294 0 008.294 8.294h17.693a8.294 8.294 0 000-16.588H246.6v-17.331c1.243-2.157 6.038-6.997 9.943-10.937 11.131-11.23 26.092-26.32 32.683-45.432 6.206-2.071 17.23-5.871 30.45-13.426a59.58 59.58 0 01-.992 2.008 8.294 8.294 0 001.903 10.091l91.257 79.529 5.246 8.243a8.294 8.294 0 006.998 3.842h17.693a8.294 8.294 0 000-16.588H428.64l-57.478-90.321c.953-3.344 2.43-8.576 3.844-13.816 1.39-5.154 2.456-9.329 3.167-12.409.351-1.519.678-2.951.903-4.306 21.128-4.983 51.83-14.629 76.206-32.078 3.806 1.9 7.994 4.043 12.503 6.404a18.884 18.884 0 0019.238-1.023l21.285-14.19a8.292 8.292 0 001.263-12.763zM49.332 319.12c-2.23.931-2.23.931-8.686 9.666a5548.176 5548.176 0 00-10.174 13.826l4.421-25.548c18.762-8.599 43.809-24.287 58.935-50.761 3.269 5.102 7.08 10.093 11.431 14.934-5.036 6.478-20.568 23.15-55.927 37.883zm331.075 16.39l-44.198-38.518c2.177-5.1 4.568-12.091 4.526-18.049a174.329 174.329 0 0016.596-15.131 219.08 219.08 0 003.947-.634c-1.684 6.754-4.489 16.958-7.084 25.897a8.289 8.289 0 00.968 6.764l25.245 39.671zm97.414-116.454a2.273 2.273 0 01-2.343.129c-12.16-6.368-28.143-14.398-35.228-16.481a8.295 8.295 0 00-4.681 15.914c.546.16 1.211.39 1.987.683-36.527 22.165-84.745 28.403-85.262 28.467a8.298 8.298 0 00-5.042 2.569c-26.54 28.402-53.761 37.466-64.009 40.878-1.507.502-2.697.898-3.681 1.276a8.292 8.292 0 00-5.034 5.596c-3.575 13.349-13.407 25.315-22.63 35.052l11.694-46.778c4.341-5.496 17.348-23.856 18.386-47.693a8.294 8.294 0 00-7.925-8.646c-4.572-.177-8.447 3.35-8.646 7.927-.754 17.343-9.91 31.505-13.846 36.831-18.774 2.422-42.281 2.6-58.784.525.478-3.282.742-6.755.742-10.456 0-22.344-18.493-48.03-19.28-49.111a8.293 8.293 0 00-11.586-1.829 8.293 8.293 0 00-1.829 11.586c4.483 6.158 16.11 25.236 16.11 39.353 0 18.814-8.358 29.57-18.035 42.024-8.191 10.542-17.254 22.219-20.515 39.368l-5.143-4.286 15.455-38.639a8.306 8.306 0 00-3.586-10.282c-.49-.28-48.901-28.539-48.901-72.418a8.294 8.294 0 00-16.588 0c0 9.061 1.663 18.083 4.862 26.91C71.225 281 38.096 298.201 19.515 305.474c2.896-7.224 7.589-13.902 12.731-21.22 6.678-9.503 14.249-20.274 19.248-34.319 21.683-60.92 85.397-74.107 100.005-74.107 13.998 0 29.54 1.063 47.538 2.294 22.182 1.516 47.323 3.236 75.21 3.236 21.139 0 45.82-7.219 71.951-14.861 23.088-6.752 46.799-13.674 69.618-16.199a8.264 8.264 0 002.407 5.409 8.27 8.27 0 005.864 2.43 8.261 8.261 0 005.864-2.43l8.846-8.846.003-.002 3.794-3.794c.009.033.024.063.033.095.103.38.232.754.389 1.12.028.065.06.128.09.192a8.243 8.243 0 001.327 2.023c.057.064.113.128.172.19.054.057.102.118.158.175l24.109 24.11v14.259c0 2.199.874 4.309 2.43 5.864l19.386 19.386-12.867 8.577z"
  })));
}

/* harmony default export */ var hiddenWolf = (SvgHiddenWolf);
// CONCATENATED MODULE: ./components/images/wolf.svg
var wolf_g;

function wolf_extends() { wolf_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return wolf_extends.apply(this, arguments); }



function SvgWolf(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", wolf_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18.296 18.296"
  }, props), wolf_g || (wolf_g = /*#__PURE__*/external_react_["createElement"]("g", {
    fill: "#030104"
  }, /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M13.473 14.992s.193-2.366-.557-3.697c.261-.12 2.631-.728 2.74-.919-.267-.864-2.371-1.164-3.062-1.752-.827-.706-1.189-1.336-2.049-1.789-.498-.262-1.869-.144-1.869-.144-1.26-1.236-1.995-.921-2.356-1.154-.338-.217-1.323-1.435-1.76-1.386-.498.056-.57.557-.585.946-.37.277-.776.621-.728.754 0 0 .385-.231.715-.378-.006.044-.014.075-.031.087.103.468.341.652.466 1.075-.026.511-.964-.271-1.155.163 0 0 .845 1.81 3.009 4.077 1.771 1.362.395 7.197.395 7.197s3.664-1.985 4.999-.585 2.557.559 2.557.559c-.569-.208-.729-3.054-.729-3.054z"
  }), /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M14.348 18.044l-.147.001a.183.183 0 00.147-.001zM17.819 7.301C16.993 2.52 12.429-.697 7.649.13 2.868.957-.349 5.519.479 10.299a8.84 8.84 0 004.722 6.365l.435-.867a7.87 7.87 0 01-4.201-5.663C.699 5.881 3.561 1.822 7.814 1.087s8.313 2.127 9.048 6.379a7.852 7.852 0 01-2.715 7.358l.621.747a8.827 8.827 0 003.051-8.27z"
  }))));
}

/* harmony default export */ var wolf = (SvgWolf);
// CONCATENATED MODULE: ./components/images/citizen.svg
var citizen_path, citizen_path2;

function citizen_extends() { citizen_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return citizen_extends.apply(this, arguments); }



function SvgCitizen(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", citizen_extends({
    height: "512pt",
    fill: "#D36728",
    viewBox: "-20 0 512 512",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), citizen_path || (citizen_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M148.012 208.617a7.5 7.5 0 00-7.5 7.5v15.875a7.5 7.5 0 1015 0v-15.875c0-4.144-3.356-7.5-7.5-7.5zm0 0M323.46 239.492c4.142 0 7.5-3.36 7.5-7.5v-15.875a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v15.875c0 4.14 3.36 7.5 7.5 7.5zm0 0M262.324 270.09a7.5 7.5 0 00-10.582.71c-3.898 4.458-9.73 7.016-16.004 7.016-6.273 0-12.11-2.558-16.004-7.015a7.501 7.501 0 00-11.296 9.87c6.746 7.72 16.699 12.145 27.3 12.145 10.602 0 20.551-4.425 27.297-12.144a7.5 7.5 0 00-.71-10.582zm0 0"
  })), citizen_path2 || (citizen_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M0 151.371c0 10.598 8.625 19.223 19.223 19.223h15.023a211.388 211.388 0 00-7.86 32.886c-8.859 8.106-14.425 19.75-14.425 32.676 0 23.68 18.676 43.074 42.066 44.239 11.985 49.46 43.785 92.359 89.07 118.203-1.304 4.68-2.07 10.293-2.07 17.039 0 15.527 4.012 25.093 9.489 30.937-9.368 9.684-24.27 29.547-24.27 57.926a7.5 7.5 0 007.5 7.5H337.73c4.141 0 7.5-3.36 7.5-7.5 0-28.426-14.949-48.3-24.312-57.965.187-.203.379-.398.562-.605 5.95-6.742 8.965-16.934 8.965-30.293 0-6.746-.765-12.36-2.066-17.04 45.281-25.843 77.086-68.742 89.066-118.202 23.395-1.165 42.07-20.56 42.07-44.239 0-12.926-5.566-24.57-14.425-32.676a211.052 211.052 0 00-7.86-32.886h15.024c10.598 0 19.223-8.625 19.223-19.223v-17.129c0-10.601-8.625-19.222-19.223-19.222h-42.16L378.062 27C372.18 10.852 356.68 0 339.488 0H131.984C114.797 0 99.293 10.852 93.41 27L61.38 115.02H19.223C8.62 115.02 0 123.64 0 134.238zm26.96 84.785c0-9.574 4.938-18.812 12.833-24.21a29.108 29.108 0 0111.168-4.598 186.972 186.972 0 00-1.836 17.16c-.816 13.39-.223 27.105 1.848 40.465-13.641-2.496-24.012-14.47-24.012-28.817zm31.743-60.285a186.821 186.821 0 00-4.687 16.047 45.295 45.295 0 00-10.567 1.84 196.396 196.396 0 016.63-23.164h10.51c-.058.144-1.878 5.258-1.886 5.277zM169.625 497h-27.934c2.653-22.098 16.395-37.102 22.387-42.691a35.06 35.06 0 005.547.855zm29.902 0h-14.902v-43.223c5.063-1.168 10.004-2.886 14.785-4.91l.117-.047zm3.993-66.715c-10 5.328-27.282 14.5-38.805 8.469-4.445-2.328-8.684-8.211-8.684-23.117 0-8.754 1.07-21.282 11.266-24.004 8.703-2.328 18.8 1.387 26.726 4.773 4.22 1.801 11.793 5.844 12.04 5.985l-.047.093a27.731 27.731 0 00-3.36 13.153c0 4.527 1.164 9.144 3.36 13.148.015.035.03.07.05.102-.492.277-2.207 1.218-2.546 1.398zM256.95 497h-42.427v-55.664c.016-.012 2.2-1.285 2.579-1.516.488.266.988.512 1.496.746a27.308 27.308 0 0011.535 2.551h11.207c3.969 0 7.945-.883 11.543-2.554.504-.235 1-.477 1.488-.743.856.508 1.711 1.02 2.574 1.516V497zm-39.294-81.363c-.008-6.703 5.727-12.442 12.414-12.477.024 0 .043-.004.063-.004h11.207c.02 0 .043.004.062.004 6.715 0 12.414 5.79 12.414 12.48 0 6.762-5.714 12.473-12.476 12.473h-11.207c-6.696 0-12.469-5.785-12.477-12.476zM286.848 497h-14.899v-48.18a107.365 107.365 0 007.508 2.848 80.347 80.347 0 007.39 2.11zm11.23-56.75c-11.633-.281-22.613-5.7-32.555-11.3-.039-.02-.074-.044-.113-.063.02-.032.031-.067.05-.102a27.614 27.614 0 003.36-13.148 27.54 27.54 0 00-3.36-13.153 2.313 2.313 0 01-.046-.097c3.902-2.2 7.914-4.223 12.035-5.98 9.832-4.2 28.332-10.833 34.86 2.003 1.87 3.652 3.136 9.09 3.136 17.227 0 9.46-1.804 16.504-5.215 20.37-3.023 3.427-7.703 4.352-12.152 4.243zM329.79 497h-27.941v-41.836c1.949-.14 3.812-.422 5.582-.851 6.015 5.566 19.726 20.472 22.36 42.687zm77.844-255.637c-1.774 59.219-34.813 114.356-86.153 143.895-6.742-7.621-15.925-9.266-22.566-9.266-10.414 0-21.742 3.957-30.945 8.227-1.414.656-11.157 5.758-13.598 7.23a28.62 28.62 0 00-1.535-.762 27.619 27.619 0 00-11.496-2.53h-11.207c-4.52 0-9.055 1.144-13.028 3.292-2.43-1.465-12.085-6.535-13.523-7.195-9.215-4.281-20.578-8.262-31.02-8.262-6.644 0-15.828 1.645-22.57 9.266-43.234-24.88-73.015-66.703-82.762-114.594-6.765-33.223-3.511-68.574 9.477-100.07h16.3C84.634 188.695 79.876 208 78.856 228.152c-1.058 20.993-3.453 47.88 12.32 64.453 7.208 7.583 17.282 11.426 29.946 11.426 25.168 0 41.32-14.445 56.945-28.418 16.137-14.43 31.383-28.062 57.036-28.062 25.648 0 40.894 13.633 57.03 28.062 15.626 13.973 31.778 28.418 56.946 28.418 12.668 0 22.742-3.843 29.945-11.426 14.813-15.585 13.418-42.917 12.399-62.87-1.031-20.27-5.61-40.505-14.23-59.141h17.574a171.249 171.249 0 019.355 30.492 172.791 172.791 0 013.512 40.277zm9.824-49.445a185.238 185.238 0 00-4.684-16.04c-.609-1.769-1.234-3.53-1.886-5.284h10.511a195.786 195.786 0 016.625 23.16 43.106 43.106 0 00-5.136-1.215c-.934-.164-4.555-.578-5.43-.621zm27.055 44.238c0 14.348-10.367 26.32-24.008 28.817a188.82 188.82 0 002.016-37.293 190.2 190.2 0 00-2.004-20.332 29.202 29.202 0 0112.761 5.761c6.836 5.368 11.235 13.704 11.235 23.047zM86.875 88.824h220.98a7.5 7.5 0 100-15H92.335l15.173-41.691C111.238 21.887 121.074 15 131.984 15h207.504c10.91 0 20.746 6.887 24.48 17.133l15.173 41.691h-41.286a7.5 7.5 0 100 15h46.747l9.53 26.192H77.345zM15 134.238a4.224 4.224 0 014.223-4.218H452.25a4.224 4.224 0 014.223 4.218v17.133a4.228 4.228 0 01-4.223 4.223H179.855a7.5 7.5 0 100 15h180.633c9.5 18.148 14.836 37.746 15.875 58.316.82 16.168 4.168 40.442-8.21 53.36-4.325 4.546-10.56 6.757-19.071 6.757-19.441 0-32.187-11.398-46.95-24.597-16.71-14.942-35.652-31.88-67.03-31.88-31.38 0-50.325 16.938-67.036 31.88-14.757 13.199-27.507 24.597-46.945 24.597-8.512 0-14.75-2.21-19.07-6.757-12.93-13.606-9.07-36.415-8.215-53.36 1.039-20.57 6.375-40.168 15.875-58.316h40.144a7.5 7.5 0 100-15H19.223A4.228 4.228 0 0115 151.37zm0 0"
  })));
}

/* harmony default export */ var citizen = (SvgCitizen);
// CONCATENATED MODULE: ./components/images/prophet.svg
var prophet_path, prophet_path2, _path3;

function prophet_extends() { prophet_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return prophet_extends.apply(this, arguments); }



function SvgProphet(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", prophet_extends({
    height: "511pt",
    fill: "#AE8419",
    viewBox: "0 1 511 511.999",
    width: "511pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), prophet_path || (prophet_path = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M461.004 403.121c-.367-.226-.758-.43-1.16-.613-13.61-7.149-29.082-11.2-45.492-11.2h-12.125c7.582-9.39 11.836-21.203 11.836-33.378 0-3.313-.31-6.633-.915-9.867-1.625-8.625.512-17.434 5.868-24.165 7.425-9.335 11.515-21.058 11.515-33.011 0-9.32-2.457-18.496-7.101-26.528-5.282-9.136-6.004-19.918-1.942-28.851 3.149-6.918 4.742-14.301 4.742-21.95 0-10.437-3.03-20.542-8.765-29.218-4.715-7.133-6.403-15.86-4.63-23.95a53.305 53.305 0 001.228-11.398 53.04 53.04 0 00-12.88-34.648c-6.23-7.215-8.921-16.196-7.382-24.633a53.602 53.602 0 00.629-14.504c-2.278-24.894-21.977-44.988-46.832-47.77-.453-.054-.91-.097-1.371-.136-7.516-.653-14.739-4.328-20.332-10.356C315.887 6.18 301.719 0 287.027 0c-11.09 0-21.652 3.375-30.523 9.64C247.633 3.376 237.07 0 225.984 0c-14.695 0-28.859 6.18-38.867 16.95-5.597 6.023-12.82 9.698-20.34 10.35-.457.04-.91.087-1.355.138-24.867 2.78-44.567 22.875-46.844 47.773a53.738 53.738 0 00.629 14.5c1.54 8.437-1.152 17.418-7.383 24.633a53.05 53.05 0 00-12.879 34.652c0 3.84.414 7.672 1.227 11.395 1.773 8.09.086 16.816-4.625 23.953-5.738 8.676-8.77 18.777-8.77 29.215 0 7.648 1.594 15.03 4.743 21.949 4.062 8.933 3.34 19.719-1.942 28.851a53.061 53.061 0 00-7.101 26.532c0 11.949 4.09 23.672 11.515 33.011 5.297 6.66 7.41 15.61 5.797 24.559a53.634 53.634 0 00-.723 13.105c.75 11.211 5.04 21.493 11.743 29.743H98.645C44.527 391.309.5 435.336.5 489.453v12.527c0 5.524 4.477 10 10 10s10-4.476 10-10v-12.527c0-43.09 35.055-78.144 78.145-78.144h67.574a51.858 51.858 0 0018.996-3.594c6.566 33.36 36.027 58.605 71.281 58.605 35.258 0 64.719-25.246 71.285-58.61a51.876 51.876 0 0018.996 3.599h4.7l-14.196 50.75c-1.488 5.316 1.617 10.836 6.934 12.324a10.1 10.1 0 002.7.37c4.374 0 8.39-2.89 9.624-7.308l15.703-56.14h27.492l-24.859 87.972c-1.504 5.313 1.59 10.84 6.902 12.34.91.258 1.825.383 2.727.383 4.36 0 8.371-2.879 9.617-7.285l26-92c.11-.383.184-.77.246-1.153a77.443 77.443 0 0123.387 5.508l-23.86 82.117c-1.542 5.305 1.508 10.852 6.813 12.395.934.27 1.871.398 2.793.398a10.01 10.01 0 009.602-7.21l22.515-77.493c18.75 14.285 30.88 36.836 30.88 62.176v12.527c0 5.52 4.476 10 10 10 5.523 0 10-4.48 10-10v-12.527c0-37.242-20.852-69.707-51.493-86.332zM182.89 296.445c-8.66-13.804-13.317-29.8-13.317-46.394v-16.965c0-5.52-4.476-10-10-10-8.234 0-14.933-6.695-14.933-14.934v-13.675c0-8.23 6.699-14.93 14.933-14.93 5.524 0 10-4.48 10-10v-4.086c0-47.934 38.996-86.93 86.93-86.93s86.93 38.996 86.93 86.93v4.086c0 5.52 4.476 10 10 10 8.226 0 14.918 6.691 14.918 14.918v13.7c0 8.23-6.692 14.92-14.918 14.92-5.524 0-10 4.478-10 10v18.071c0 16.34-4.57 32.07-13.059 45.664a36.088 36.088 0 00-18.36-13.597l-10.738-3.516c-29.297-9.594-60.265-9.594-89.562 0l-10.735 3.516a36.108 36.108 0 00-18.09 13.222zm14.265 15.27a16.157 16.157 0 0110.047-9.485l10.734-3.515c12.614-4.13 25.586-6.192 38.56-6.192s25.944 2.063 38.558 6.192l10.734 3.515a16.174 16.174 0 0110.05 9.485 16.16 16.16 0 01-.905 13.789c-12.895 23.281-33.559 41.004-58.438 50.207-24.875-9.203-45.539-26.926-58.434-50.207a16.16 16.16 0 01-.906-13.79zm59.34 134.605c-28.52 0-51.8-22.797-52.617-51.125a52.228 52.228 0 0011.773-19.363 130.808 130.808 0 0037.66 19.957 9.996 9.996 0 003.184.524c1.078 0 2.152-.176 3.188-.524a130.622 130.622 0 0037.66-19.96 52.243 52.243 0 0011.773 19.366c-.816 28.328-24.097 51.125-52.62 51.125zm58.106-86.289a131.206 131.206 0 0017.828-24.836 36.271 36.271 0 004.32-13.59c17.23-19.464 26.684-44.332 26.684-70.449v-9.527c14.398-4.313 24.918-17.68 24.918-33.461v-13.7c0-15.816-10.567-29.21-25.012-33.491-2.356-56.891-49.375-102.446-106.836-102.446-57.457 0-104.473 45.559-106.836 102.446-14.453 4.28-25.023 17.68-25.023 33.503v13.676c0 15.785 10.527 29.16 24.93 33.473v8.422c0 26.18 9.421 51.156 26.597 70.762a36.145 36.145 0 004.398 14.382c5 9.032 10.992 17.352 17.825 24.84-.493 17.328-14.73 31.274-32.176 31.274h-14.457a9.979 9.979 0 00-2.153-.395c-16.34-1.144-29.492-14.336-30.586-30.687a33.555 33.555 0 01.45-8.22c2.636-14.609-.946-29.394-9.825-40.558-4.691-5.894-7.168-13.008-7.168-20.562a33.013 33.013 0 014.415-16.52c8.507-14.719 9.566-32.34 2.832-47.144a32.74 32.74 0 01-2.95-13.664 32.9 32.9 0 015.453-18.192c7.68-11.613 10.407-25.926 7.48-39.265a33.248 33.248 0 01-.765-7.11 33.02 33.02 0 018.02-21.578c10.203-11.82 14.55-26.867 11.922-41.289a33.694 33.694 0 01-.39-9.098c1.417-15.488 13.675-27.984 29.167-29.718.285-.036.57-.063.848-.086 12.468-1.078 24.277-7 33.258-16.664C208.094 23.75 216.695 20 225.984 20c8.86 0 17.18 3.457 23.434 9.738a10.004 10.004 0 0014.176 0c6.25-6.281 14.574-9.738 23.433-9.738 9.29 0 17.887 3.75 24.215 10.563 8.98 9.664 20.793 15.582 33.254 16.664.281.023.566.05.863.086 15.48 1.73 27.739 14.23 29.157 29.718a33.7 33.7 0 01-.391 9.098c-2.629 14.422 1.719 29.469 11.922 41.285a33.037 33.037 0 018.02 21.582c0 2.402-.258 4.793-.766 7.11-2.926 13.34-.2 27.652 7.48 39.265a32.892 32.892 0 015.45 18.188c0 4.773-.993 9.367-2.946 13.668-6.734 14.8-5.68 32.425 2.832 47.144a33.053 33.053 0 014.414 16.52c0 7.554-2.476 14.664-7.168 20.562-8.972 11.281-12.57 25.973-9.87 40.313a33.19 33.19 0 01.573 6.168c0 9.265-3.734 17.855-10.515 24.18-6.77 6.324-15.621 9.456-24.926 8.804a9.96 9.96 0 00-3.508.395h-8.336c-17.449-.004-31.687-13.954-32.18-31.282zm0 0"
  })), prophet_path2 || (prophet_path2 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M200.36 172.297h35.187c6.16 0 11.176 5.012 11.176 11.172v61.433c0 5.524 4.476 10 10 10 5.52 0 10-4.476 10-10V183.47c0-17.188-13.989-31.172-31.176-31.172h-35.188c-5.523 0-10 4.476-10 10 0 5.52 4.477 10 10 10zm0 0M256.496 333.629c8.274 0 16.047-3.223 21.895-9.067 3.902-3.906 3.902-10.238 0-14.144-3.907-3.902-10.239-3.902-14.145 0a10.876 10.876 0 01-7.746 3.21c-2.93 0-5.68-1.14-7.75-3.21-3.906-3.902-10.238-3.902-14.14 0-3.907 3.906-3.907 10.234 0 14.144 5.843 5.844 13.617 9.067 21.886 9.067zm0 0"
  })), _path3 || (_path3 = /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M231 215.133c3.906-3.906 3.906-10.238 0-14.145-3.902-3.902-10.234-3.902-14.14 0-4.274 4.274-11.227 4.274-15.5 0-3.903-3.902-10.235-3.902-14.141 0-3.906 3.907-3.906 10.239 0 14.145 6.035 6.035 13.96 9.05 21.89 9.05s15.86-3.019 21.891-9.05zm0 0M317.11 200.988c-4.274 4.274-11.227 4.274-15.5 0-3.907-3.902-10.239-3.902-14.141 0-3.906 3.907-3.906 10.239 0 14.145 6.035 6.035 13.96 9.05 21.89 9.05 7.926 0 15.856-3.015 21.891-9.05 3.906-3.906 3.906-10.238 0-14.145-3.902-3.902-10.234-3.902-14.14 0zm0 0M289.406 172.297h30.7c5.523 0 10-4.48 10-10 0-5.524-4.477-10-10-10h-30.7c-5.523 0-10 4.476-10 10 0 5.52 4.477 10 10 10zm0 0M336.496 491.977c-2.629 0-5.207 1.07-7.07 2.93a10.08 10.08 0 00-2.93 7.07c0 2.628 1.07 5.21 2.93 7.07a10.053 10.053 0 007.07 2.93 10.04 10.04 0 007.07-2.93 10.08 10.08 0 002.93-7.07c0-2.63-1.07-5.211-2.93-7.07s-4.437-2.93-7.07-2.93zm0 0"
  })));
}

/* harmony default export */ var prophet = (SvgProphet);
// CONCATENATED MODULE: ./components/data/index.js









const charatersList = ["Wolf", "Citizen", "Prophet", "Wizard", "Cupido", "Hunter", "Merchant", "HiddenWolf"];
const charatersImageMap = new Map([["Wizard", /*#__PURE__*/Object(jsx_runtime_["jsx"])(wizard, {
  className: "MenuLogo"
})], ["Cupido", /*#__PURE__*/Object(jsx_runtime_["jsx"])(arrows, {
  className: "MenuLogo"
})], ["Hunter", /*#__PURE__*/Object(jsx_runtime_["jsx"])(man, {
  className: "MenuLogo"
})], ["Merchant", /*#__PURE__*/Object(jsx_runtime_["jsx"])(merchant, {
  className: "MenuLogo"
})], ["HiddenWolf", /*#__PURE__*/Object(jsx_runtime_["jsx"])(hiddenWolf, {
  className: "MenuLogo"
})], ["Wolf", /*#__PURE__*/Object(jsx_runtime_["jsx"])(wolf, {
  className: "MenuLogo"
})], ["Citizen", /*#__PURE__*/Object(jsx_runtime_["jsx"])(citizen, {
  className: "MenuLogo"
})], ["Prophet", /*#__PURE__*/Object(jsx_runtime_["jsx"])(prophet, {
  className: "MenuLogo"
})]]);
const charatersColorMap = new Map([["Wizard", "rgb(153, 87, 98)"], ["Cupido", "rgb(127,32,32)"], ["Hunter", "rgb(0, 66, 37)"], ["Merchant", "rgb(28,48,92)"], ["HiddenWolf", "white"], ["Wolf", "black"], ["Citizen", "rgb(211, 103, 40)"], ["Prophet", "rgb(174,132,32)"]]);

/***/ }),

/***/ "Ug0L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hasRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getRoomSize; });
/* unused harmony export getPublicRoom */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return putCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCharacterPlayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return joinACharacter; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getRoom = async numberOfPeople => {
  //const promise =axios.get("/api/reviews/comments/"+userData );
  const dataPromise = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8080/getRoom?size=" + numberOfPeople).then(response => {
    console.log("response");
    console.log(response.data);
    return response;
  }).catch(err => {
    console.log("Error:");
    return null;
  });
  return dataPromise;
};
const hasRoom = async id => {
  //const promise =axios.get("/api/reviews/comments/"+userData );
  const dataPromise = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8080/hasRoom?id=" + id).then(response => {
    console.log("response");
    console.log(response.data);
    return response;
  }).catch(err => {
    console.log("Error:");
    return null;
  });
  return dataPromise;
};
const getRoomSize = async id => {
  //const promise =axios.get("/api/reviews/comments/"+userData );
  const dataPromise = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8080/getRoomSize?id=" + id).then(response => {
    console.log("response");
    console.log(response.data);
    return response;
  }).catch(err => {
    console.log("Error:");
    return null;
  });
  return dataPromise;
};
const getPublicRoom = async id => {
  //const promise =axios.get("/api/reviews/comments/"+userData );
  const dataPromise = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8080/getPublicRoom?id=" + id).then(response => {
    console.log("response");
    console.log(response.data);
    return response;
  }).catch(err => {
    console.log("Error:");
    return null;
  });
  return dataPromise;
};
const putCharacter = async (id, charactersName, charactersSize) => {
  //const promise =axios.get("/api/reviews/comments/"+userData );
  const dataPromise = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8080/putCharacter?id=" + id, {
    params: {
      charactersName: charactersName,
      charactersSize: charactersSize
    }
  }).then(response => {
    console.log("response");
    console.log(response.data);
    return response;
  }).catch(err => {
    console.log("Error:");
    return null;
  });
  return dataPromise;
};
const getCharacters = async id => {
  //const promise =axios.get("/api/reviews/comments/"+userData );
  const dataPromise = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8080/getCharacters?id=" + id).then(response => {
    console.log("response");
    console.log(response.data);
    return response;
  }).catch(err => {
    console.log("Error:");
    return null;
  });
  console.log("dataPromise");
  console.log(dataPromise);
  return dataPromise;
};
const getCharacterPlayers = async (id, character) => {
  //const promise =axios.get("/api/reviews/comments/"+userData );
  const dataPromise = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://localhost:8080/getCharacterPlayers?id=${id}&character=${character}`).then(response => {
    console.log("response");
    console.log(response.data);
    return response;
  }).catch(err => {
    console.log("Error:");
    return null;
  });
  console.log("dataPromise");
  console.log(dataPromise);
  return dataPromise;
};
const joinACharacter = async (id, name) => {
  //const promise =axios.get("/api/reviews/comments/"+userData );
  const dataPromise = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8080/getACharacter?id=" + id + "&name=" + name).then(response => {
    console.log("response");
    console.log(response.data);
    return response;
  }).catch(err => {
    console.log("Error:");
    return null;
  });
  console.log("dataPromise");
  console.log(dataPromise);
  return dataPromise;
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });