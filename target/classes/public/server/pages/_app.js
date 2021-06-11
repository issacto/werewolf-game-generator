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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__("vRNQ");
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");

// EXTERNAL MODULE: ./components/images/werewolf.svg
var werewolf = __webpack_require__("OSZB");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/layout.js






const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};
const headerStyle = {
  minHeight: "13vh",
  maxHeight: "13vh",
  backgroundColor: "#8EE4AF",
  // backgroundColor: "#5CDB95",
  color: "#05386B",
  // backgroundColor:"#E27D60",
  // color:"rgb(165, 199, 238)",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  padding: "1vh",
  fontSize: "4vh"
};
const footerStyle = {
  minHeight: "10vh",
  color: "#EDF5E1",
  // color:" rgb(165, 199, 238)",
  backgroundColor: "#05386B" // backgroundColor:"rgb(17, 3, 39,0.9)",

};
const contentStyle = {
  // flex: 1,
  minHeight: "80vh",
  // display: "flex",
  // flexDirection: "column",
  // justifyContent:"center",
  // backgroundColor: "#0B0C10",
  backgroundColor: "#8EE4AF" // backgroundColor: "rgb(0, 145, 255,0.8)",

};

const Layout = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: "Layout",
  style: layoutStyle,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: headerStyle,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: "flex",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          style: {
            marginRight: "1vh"
          },
          children: "Werewolf Game Generator "
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(werewolf["a" /* default */], {
          className: Home_module_default.a.logo,
          width: "20vh",
          height: "20vh"
        })]
      })
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "Content",
    style: contentStyle,
    children: props.children
  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", {
    className: Home_module_default.a.footer,
    style: footerStyle,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
      href: "https://issacto.com",
      target: "_blank",
      rel: "noopener noreferrer",
      children: ["Written by Issac To", ' ']
    }), "and Ken  "]
  })]
});

/* harmony default export */ var layout = (Layout);
// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "display",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "OSZB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _image;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgWerewolf(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 512,
    height: 512,
    viewBox: "0 0 513 513"
  }, props), _image || (_image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("image", {
    "data-name": "Layer 0",
    width: 512,
    height: 512,
    xlinkHref: "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4nOydB3wUx/X459QFCCRAnSaKUL0TjmPs+GewYxzjCrbBuGEbGzA4oVch6YoKAkS3KTbEJXHcCy6xnb+JE5M4AZLYuhMqiCIEpggJUENd2v/nCS0eZmf3TkK627t7389HH93tzu7Nzs7Me/PmzRuNIAiTSAetra2koqKC5OXlkQsXLpATJ06QsrIy0qtXrzYPD4+Lra2tF+rr6y9VVlbWvfbaazWEAa739PS8+t9Z6Gy+Id2LL77YD/D29u7r5eUVXFNT00cQhLbGxkYoo8qzZ89W/fnPfz7rTOWAIAiiJtra2si9994bHhEREeTr69vHz88vGLLXt2/fupaWlvLm5ubK6urqmm3btlW5c187efJk/1GjRgX5+PgEenl5BVVXVwdqNBqviIgIAn/h4eEkLi6OhIaGXnPdVQXg7bffJhaLZU9RUZHk5lcTazREEIT2Py8vL5KYmNjU3Nz8Smtr6zetra0/5uTk/CSmVYsSAPkAbM0Lm2+NRqNZtWpVfFNTk9bf3/+JysrK+06dOtVeMaE8aKBc4Bj8wXkPDw+i1Wr3p6am3gLlxaZHEARBrgX60ebmZpKVlWU2m81awsge8TPbnw4bNgwUg0/r6+s/9PHxObh69eojAiSU6dvVOlDlySw6r8uWLYtoaWkZ06tXr3u8vb3nms1mD1EeiWVDQx+Lj48nN9544+SHHnqo/Z7tCsCyZcsCjhw58kf6IrgABJh4oSjUaAEnvgAxrb+/PxkxYsTbhJD1RqPxR7VrZHIj/w5takKvXr1eMpvNQyUXchDLgqcYBAUFkTfeeKO3IAh1vIqLIAiCXEGr1QbdcMMNFysrK68pEXaARfejtLyi+1idTne0rq5u4Y8//rh37969jWovYloW0fLJZDL9UhCE5UeOHJnS0NAguU7EVvkyatSox3Nycuo1p0+fnjR37tw9tDCnNSx6NCsWOu8cq3VAxhMSEvYLgrA4PT393+JxGFELbGI7w2pY8N3Ly8tj2bJlz3p7e/++oKBA8jxsAfM0LSViYmLImjVrUPIjCIIosHz5cqG4uLg9QWf6WSUFAUhISCBNTU0zcnJy3mxpaRF4A1Te6Lun4Vki4Fh6evp4QsjmvLy8pPbROiOj2WcHOSzCG6DT5Qjntm3bNlmTmpr6QV5e3hT2GemC5ykBbCErvSiYg/Dz83tw06ZNX4Dw52k5PYncb8DxZ599tveQIUMyDh8+vKilpUWSRgklBYjHwIEDE3fv3n1IyYyFIAjiboh94axZs7QVFRVmVlhZ6195Qk7uWpAFMTExG/Lz89P27NlTT5+Tswr3BDw5CAPkRYsWPVhfX7/n7NmzEtkLaeC/EvC84jMoKQ2JiYnveg4fPvx90aSgJIxoQc/ekBWE7H1qamrIxYsXH//lL39pOHjwYOXdd9/9H6PR2P5WRK0FMktrMN0J3Fe8v/h/4cKFwfv373/31KlTb1ZUVNxCF5ZSOciVCw2tidLphg4dem7ChAn7uvI7CIIgrggtMw4cOPDb8vLy8XJ9Kq/v5fWjSsfgXhUVFb8ihKQUFBT84rPPPts7ceLEOkLJip4U/qIMouWdp6enR0NDw++ioqL2l5WVPVZbWyvJN28UTzhlw1rpiUx5eHh4JHg0Nl47LUKPTtkf4mHNMYO+BygChYWFm6dMmdK6fPnymaDt2MvkIt4/OjraW6/X/720tPS82Wx+gHAKkKdtis9Jf2cLnf3Mpvfw8AhgjyEIgrgzjMzwY+fx2f6V7T9pq7RS38qbvrVYLA+cOHHivF6v36fVar2JHWWRKPuWL18+G2RiUVHRVpCRctAWecJ8lxP0dBq2TGHg7zFy5Mhv6MS0mZ+9Cf2f/UHeC+IB6cDD8/Dhw7tSU1PblixZEiwWhPi/pzAajfeOHTu2KS8vb7w1ZYX9zBvR06YYVkHgUVFR8S7v3giCIO4I22dCH0kogWWrTLHW/9JCk00H3/Py8m5LSEhoMhgM90ku7kZoWbd06dLglJQU4fDhw6+ATFTKP5tf9tlo/zwetGwXGTJkyJ81M2fO1JaXl5s51yiiJEDZzMrNzYiZjo2NTc3MzMyyZe6lK+YZ8OrX6XT5ZrM5ithQuXjnWZ8I3vW84+Ixb29v8t5772nkpkkQBEHcGbFfnDJlisD6Y3VHn0n3zzwLg3gOVg58//33CV1dNWCLDEtNTU0pLCzM5OWR58AoIpdvnuxhn4sFfNI8du3aZQFnAMlZ6gY8eMd5UwFsBnlpoCBWrFghLFu2bJBSwZEO8wltKeBZD+jPS5cuneLt7V0nCn/C0aBYRC1JzlzPe0GsRUA8Lx4LDAzUiXM+Si8FQRDEHRH7zKCgIB37+OzASU7+sNB9LT1KBjki17+bzeaR/fv3b1i8ePEkyQ1tgOfRL7J8+fLBS5cuFWjhz8pHOV843mBaTqHhnadJTEx8HxzSNeKJlJSUzMLCwhQ5D0M5TYP9TpsaeOsyrWk4CQkJD2ZmZn4uOaGgWfE8NzvWTu61WCx3Si6g8irnSME+u63e/qyiAysg2trafrlz587/Kv0+giCIO0P3h3Pnzr2ptbX1wPnz5yV9qy19J8+vi+6/be17tVrtnw0Gw/1K1mm544SRTcuWLZt0/PjxPbaO4uUGinLHrT2XWAZxcXE5WVlZy0lHJMCrF8E8xIoVKx7w8fEZQq5oTM3wD/48PDx8vby8bvD09LyrrKxsKCxRsHX5Gy8TvOtEQZuQkLAhPT19qVyhWmPChAm+t9xySwOENO4sci+H/R4VFQVRp3JbWlr+1tzcfIgQ4iWWU0dSj6qqqgPbt28/yHshSi8KQRDEHWEHZXPnzr0xMDDwlx39a/u8QFtbW7tp3tvbO9rLy2t8bW3tzceOHZP01XRfKydzbOmTk5KSyMcff+xjsViaJSdtJDU1ddehQ4dmsr/Fzt+zSgtdFmxgPvp5INRvSEhISUtLy9fNzc0/iGUF5ebh4QHOjT5NTU3H165d+zlMR4tcowDI/ecB58aPHx/8q1/96lE/P7+XzWazTcoAz2LAE7g6nW6/Xq+/RS4cIg19fPr06b39/Pxqy8vLJelYxHzwIh7S1gsfHx/Qmg5WV1cbN2/e/FdBEJroWymVE+83UfAjCIJcP4x12WvRokX3BAQEpBYUFNwEA1pixepMC1Yl2QQCtrm5ue/u3btreHKItULT/9PT06+GNObdW0ROgeGlSUpKampoaFj4r3/968PvvvuunPdscr9zTZnJmUSUzOO8m0IBz549OyEyMnKX2Wy+mXRhrpvVgrRabYFer4/nCX0eL7zwQr+mpqZKCCHJm5aQO8bTtPr06QNekhl79+7dsn///guEmnfiPX9n4PlBIAiCuCvsyJYnb+T6S97AFYAB6m233bakpKRkRX19vaISwFvhRcsH+Dxw4EAQ6oE7d+6sEtNaUwbS09MP5+bmRvPW8MvlRw6tVvuPM2fOvLhr165DbHnIlQ1hylby3F01iygBmldaWtq80tLSrVDwnX1Y+jd1Ol2pXq8fZk0JeO655wLa2tqq2fjRcsjNJ8GOSRcvXrw6Z9/V0b3cdXLHEQRB3A25/rCzSoBSOvg8f/78W319ff959OhRyT3kpnnFa+noe7Cvi6+v7zVKgBwGg+GM2WwOp/NF35v1F+MBA9GIiIgXVq9e/SpsKMcrm+vBqgIgV8C2HINCS01NBQ1sPW8DA16h8NLodLq/pqenT5Cc7GDEiBHed955Z5PoMMK7n7UKNWLECFJdXa2DVRGSH7ABXsVDEARBukZX+1LedeKxOXPm3Ojv7/+fkpISq7JB7ntYWBg5evSoHywT5FkAAL1e/0+LxXKrUt54ckoENtYbOnToi9nZ2TsIZ/SuBGsJ4U3vi3RaAegKTU1NJDMzc5/FYrnt6g/LPLxcAcXHx2dnZWWtYtNDNMHk5OS2/Px8Ra2Oc137edCqhg8f/vy6detekyRCEARBnB5W8C1fvvzZo0ePvs6ueuMpDzxgW93Vq1d78Da2S0lJ2Zifn79ITubIIZ7XarV/NRgME3iKRXdjFwWAdBTsrFmzEgRByLtw4QK3oHlz9fS56OjoB3Nycq5ZImgwGI7Auk1r1/PMPFqt9kJ6enqYIAid2wUIQRAEcSoko1+Nxkuv158zm80DiA3z8uzUQFJSUpHJZIql0yxduvTho0ePfsRea4u1Ozg4GM61bxgnOdlD9LgCwBY6RHjKzMysz83N9RNkQg/LAWkHDRo0cNOmTRdAO1q5cuWCoqKizTzhzvvOWBTWZmVlrZT5KUm+EQRBEOfDWl+ekpKyvqCgYAm9pwBrPucBx0ePHv3CunXrXoXTixcvDi0pKTnHW1FAKxe8+yclJdWlpKT0ppfo2QN+yKFuhC14MLnr9Xr/xMTEP/AKiS48tuA7tkOsAOGfnJw8nBb+vOs01DpL0vHC4PeHDBlyuy3CX+7FIwiCIM6BkvAHsrKylg4ZMuTXIHx5SwFpWOFdXFz8ysqVK4eBL0Bzc/NV4c9OLdCDXPGceC+QhXq93u7Cn9hzCoBwNLHk5OQVhYWFa3jnBIX1mRAj4PTp0zeLUwlK19BWBljPf+nSpbC9e/eWSTLXiciACIIgiHNga78+ceLE8ICAgDOwio0W4mxkW3bQGRISAnECDprN5pvk5AkNLc9iY2OXZmdnb+Cll7u+O7GrAsB7qOTk5OSCgoLVSuskeXP7vBE6O4dDvyg/Pz9y4cIFWeGvlEcEQRDEdZATthMmTAgNCgo6JwYR4skb3rVi/H7esj6erCJXhP/y1atX5zhS1vT4FACR2bBAPJadnZ0dFxdnpNMQZuMGWhsTj/G8N9mCF9PAyL+qqipCFP70b7G/SyiTEe+lIQiCIM4Faylmha74/ZtvvimrqamJENfc867RUFvD8ywCPOd2+nfge2xs7Mrs7Owca1MOPU2PKwDs+kOeoM7OzjZBlCNCvQh2zSJb4HIvkP1dcsW78pavv/76LJuWvg9P6KMVAEEQxPlhR+Q07AAVZEVERMTt7EPTsoEekMql4ckS4Upcm6+ys7PX8vJjb5ljNydAntClMRqN46Kjo6+el0snB+2YQf+H+AHbt2/fL3OZBBT6CIIg7gNvELh169bv4uPjN/EKgWdB4EHfj5rzh11q7+Ukdwh29wFQAtZlPv744811dXUKqaTwfARIRxhhk8k0THIBgiAIgigA8sRoNEKcgFBWxtiqBNBO6IGBgeQPf/iDtxh3Rg2+ZnbxAVCCMZm0DBw4cFxnC4XnZNGrVy8IQ3yN8Mc5fQRBEEQOVsCnpaWFgQM5O8AUnf6sQU9l9+7d+xY1CX+iBgWALYStW7f+Q6vVnupq4YjXhYaG3kuvq0TPfgRBEEQOns8ZOANGREQ8yE4xd3YwqdPpirdt27afvY+jUc0UAO0k6OHh4TF58uTWzuSNtgLodLoqk8kUKEkk85sIgiAIwgPkhMlkas3NzfVgZY0tgBLxzjvvaMQBqZrkjmqmABjv/7bRo0e/KEnMgaeRpaenD5Sm/Bk5D04EQRDE/RA4kWdFQE6YTKYAWmZ1RnYMHz78GXpZoZrkjuqmAKj4ADvAacIa7JxNQkLCa21tbYqb+/AcBhEEQRD3wxaB3tbWVpeYmPghT1YpMXDgQLJ27do/qHWw6XAFgIW2BAQHB0+XJOBAe1oaDIbnlQpbbXMwCIIgiONgY87wgHOZmZmPi6ds3cAuMDBwKhs1UE2oTgGgycnJeatv377tR3jxBETEF6jVat+2tqECCn4EQRCERk4uMFFjW7Rabft29HLpacCCvX79+musBmqTP6pWAICwsLBZhAkRTGRG8pmZmc/Q16KZH0EQBOkqbBTbjIyMKbZMGUCa4ODgaZITKkP1CsDatWt3w25LInI+AwkJCa+ChsYLv4ggCIIgXYFxUG8CSzNvcEmvDoiMjATZ9b4kkcpQvQIAhdrY2DhaSZgPHToUvDRfICj0EQRBkB7EaDQ+OXjw4Ks/wNun5syZM0NsDRbkSNSfQ0LIm2++Wezh4TFsyJAhEh8AnU73w8aNGzWenp6S6xAEQRCkOxBH9yBrNm3apNHpdEXibUXhP2zYMFJTUxO2Z8+eU85Q6KraC0AJsYAnT548eNiwYTENDQ2XXnnllVwxtCKCIAiC2BONRuM3Z84crbe3t39xcXGxuOusswSZcwoFwFanC1uWcyAIgiBId8keZ8bpLABKoPBHEARBENtwGgUAQRAEQZDuwymcABEEQRAE6V5QAUAQBEEQNwQVAARBEARxQ1ABQBAEQRA3BBUABEEQBHFDUAFAEARBEDcEFQAEQRAEcUNQAUAQBEEQNwQVAARBEARxQ1ABQBAEQRA3BBUABEEQBHFDUAFAEARBEDcEFQAEQRAEcUNQAUAQBEEQNwQVAARBEARxQ1ABQBAVIghCj2QK7tsd9+7MPbr6ez1VBgiCXEGDjQxB7Ae0N41G41Ilzj4T/b0zz+uKZYMgagYtAAhiB0RF2xYBJ6ZVi3JuLR9ywl88R18v95m9D4IgPQ9aABCkB7FlVOvKI1/x2VirAEGBjyAOBxUABOlh5AS8kumc972riPP+4l9bWxvx9fX16LAAwl8b/DU1NbXB73l4eLT/LpsX0g1CW+kZ5T4jCNIzoAKAICqDFX6tra3tf5GRkQHjxo3rHxISEtq7d+9BXl5ekZ6enqM8PT2HaDQabVNTU9SFCxdITU0NaWxsbL+mOwS2l5cXKAykT58+ZMCAAcTHx6dEEARLa2vr8dbW1iNNTU0/Xb58+XRZWVn5999/X1lRUXG5paWlzdPT8+o9eEKe/Z2u+A0gCNJ1UAFAEDvDmsVhRO7p6en37LPPDgsKChrl7+//Sy8vr7sbGxtvOnr0aLsgp9MSaiQu3oceobPz7t0J/XtKQlq0JIwaNQoUhn+0trbuq6+vP1BeXl741ltvnWltba2D8wiCOA5UABDEDkA78/Dw8JkzZ05SYGDgbd7e3ncTQu4qLi4mDQ0Nkgz0pBDvLOzcva1YewY/Pz8SExMDSs1XTU1Nf6msrPz+lVdesbS1tTUpKRcIgnRT21ZqoAjiCthqUu6uJWtNTU3kqaeeiho6dOitfn5+DzU0NDwMI3kYvctdgxDaGiJaDt5vaGj4tLS09N9/+tOfSry9vRVLSemdKIFTDoi7ggoA4hZY6+RZs7ytQqGlpYXMnj07LjQ0dKqPj8+sI0eORNbV1UnSEUrAobDhwytz2voAPggjRowobWlp+cPZs2ffffXVVwvAP4GGdw8WFPgIcgVUABCkAznBQB/XaDR+CxYsuC0gIOC5ioqKx86ePSsevyrceYJevIetc+juBFO+kmkD3jGRiIgIcEx8q7q6+o2tW7f+QxCEJvadyb1LnrIndx2CuCKoACBuR2emBO66667QG2644W5/f/8lRUVFWvCuJ5RQooVTxzy/RFjRwoVVBJCfy8eadUROsYIyF4/7+/uT6Ojo3Pr6+i2FhYXffPbZZ6eV7ikC16NTIuJuoAKAuBW8UR+NRqPxWLRo0QMBAQHrLBZLNBu5ThTe4JkPc9Ws8LfVxC/3+wg/5oAo/GkFi36XYtmL58Vz8D0xMbGopqZm5aZNmz4XBKGNfQ+EUegQxF1ABQBxeeQ6drHuP/300yOHDBny4qVLlxadOXOGm04ULLQgokeNotBhBZDcbxMrpm2EX1Y8CwrPMsA7DukHDRpEAgMDNxw5cmTb+++/XyL5IQRxI1ABQFwangCGefylS5dO7tWrV0ZeXt5IEBK8dETmet4xWkCxSgAij63OmURhioV9B4Qj/Hn3ZKwDX4H/AL4zxJ1ABQBxeToER6+VK1e+UF9fv7G0tFRWiFiDZ+pnndjkBA9yffS0xWT48OEQ9fCFnJycN0RnQgRxZVABQFQPb1Rmi+e2RqPxWrZs2XOtra2vwDr8zszRI+6DqNTRdSs6Oho+zsrJyfmDtZUFPDpj2UAQR4EKAOIU2NphghPfsmXLnvbw8Hi9qKjIJi99xH2xpV7Fx8dDcKfpWVlZb0Ewos4KblxmiKgVVAAQ1WOtA4VgPCtXrnzY39//I4vFIjnPAx3wEMJxLiTUcdpaJH4fM2YMqa6ufjAnJ+dzcbMjOdh78uougjgSVAAQh8Nb9mULDzzwQOSYMWNeP3To0F30JjlyZn7a1CuXBnFfbHU4FDp2SIyPj//84MGDL3z99ddnCVOP5YS93HEEcQSoACBOA9RVGO2npKQ8XVtb+yYs2evMKIvnqY8gttYPOUvUkCFDYLvk6dnZ2W+xoYkRRM2gAoCoHqijzz77bPTQoUNfs1gst9qaX7k147zPiPtyPfWAXQGSmJj4j6Kiomfee++9EjlFFEHUAioAiMORG7VDtL2UlJS5ly5d2l5WVsYNvyuidI7ICH6530Xci87GbrBl2Wd4eDjp16/fi1lZWTvg3ljPEDWCCgDicDgOWD4pKSnbCgoKZopz+9Q5bofLg10BgJ0wwsKpe5L6JadUsud56WBKYPTo0TtWr149XxCEFqyHiJpABQCxC7aExp04cWL42LFjv7RYLEmEcqpCEFdAp9P98P3339+7d+/eMrnH4bUPW9oOgnQFVACQboXXSfGO0cyZM+fGgQMH/ufQoUOScwjiCsA0AExpQTtISkoiZ86cGfPqq6/m2tpGEKQnQAUAuW7kPPHljpOOZXgrVqx47PLly++ANz9vtzcEcXZ4vidiW4iMjCR+fn6TN2zY8ClvdQGNXJtCkOsBFQCkR2E7LBDyq1atmnv69OntNTU1sg55vPlUBHFm6FUphPreu3dvEhER8fzatWtfI5x4GKzwR2UA6S5QAUCuG15HxBP8K1eufPrcuXNvVldXS9Za27qTG4I4O7w4A1DXAwICSGho6JNr1659m96bgAe9FTWCdBVUAJBugacEkI6Oavny5VMuXbr0wYULF645Z2vkNQRxVuiROk+ppY+LaYODg0EZeHDDhg2fKynWcm0OQWwFFQDkupEzSS5atOiey5cvf1leXn5NJ8fbSpcXex3rJuIqyCm4SgIdYgn4+vr+ZvPmzd9gRUB6AlQAkG6B7rzmz58/vqWl5e9nz56VdHiEY+6XC+qDIK6ENT8XuXo/ePBgODduy5Yt/5BTFhCkK6ACgEjoTOdCj/6nTZsWNWTIkOOw9z7S/cgJCCXkRp68d3g99YBNLyfc5Jw+EXnEdzhq1Chy4sSJ4e+//36JUtlj2SK2gl4kiITOdB4d5nsfo9FY2NTUdI3wx07INroiaGloz3IWW5QGpWut/TZ9XHRK4/0mvfyNdKyLR2xDLM/i4mLS3Nx83GAwmDUajQddtij8ka6AFgBEEaUOBQKb6PX69QUFBUsEZhc1dOrrGkrOYkrTJrbQGWWgs79F51vJ1I0WgM7Dxs/w9PRs/xwXF5eTmZm5nC1fBLEVVAAQm2Ad/RYvXjypvLx8D72Wn+7cUfjbDk/I2rKPgZyyYCussFeCl0dbYRVDHK12Dt5KAZHAwEASFBR0/6ZNm/7sNA+EqAZUABCr0B31o48+GjVs2LDjR44cuaYjwhFI11FaCSEXHVHpnKOBPEHeeIogqywinUPOuhIXF0cOHjwYJu4zgMoVYguoALg5vI6Cd6ypqYlkZWX9z2w236CUTuk4wsfaSF4paBL7HaLKhYaGkr59+9YJglBDCLlECKkWBKEK/gghdW1tbfC/tq2t7TK5IrADCCF9NBpNb41GA//7wR8hpC8hJAg+19TU+J07d47U1tZyR6LsdzmHQAzy1HNAGet0un/o9fpxsAshtkPEGqgAILKIHciyZcsePXny5HsNDQ3cDoVnrsaO3nbYjpoV+P3794elYBfa2tq+aWlpOdjY2Hi8oaGhrKys7Oy+ffsuVlRUXG5paWlj951XEgBK56zRkT+P4cOHB/ziF7/oP2DAgODevXsP8fb2Huzl5fUrDw+Pu0+dOhUAgZ94yqVoIcBpos4h987Y435+fhBDoH1aQO4aBCGoACBydHTUXgaDoSo3N7cX4YzyaJTOIcrAaC0hIQGcKj9uaWn55+XLl38oKSk5+sUXX5xta2tr4wlRnrNdT2Htd3jz+pQi6HX//feHjhgxIs7f3z/J29v7NkLIA7Dzo7g7HmIdniMlW/YsOp2uKj09vT+vDiEIQQUA4XUgcGzVqlWLioqKNrpL/bCmwHSXggPR3YKDg79ramr66MKFC9/t3r27oK2trcXdOmjRijBjxoyYkJCQO3x8fKaWl5ePF4NHoaNg9wBWlujo6N+tWbNmm7UbYlm7H6gAuCFyDntw/Oabbx4wfvz4Clhz7A7wnKrYqQvW4Y6nDPCODR06FGK6v1ZTU/PWF1988UNxcXEVLOFCAXcFXj0Eq8CvfvWrAbfccssNAQEBT1VWVj596tQpybX0PZTelVw6d0F87piYGPLll1/2N5vNl1DIIyKoALgRvLlmQgmv1NTUrfn5+fN4wsyVoYWGrX4LPCc4nU5X19jYmHnu3LlPdu3aVQSmfVvhCSjeMXekpaWFzJo1KyYsLGyar69vqtls9uKZw+l3wcYkYN+xO/kf0PUoPj5+S3p6+kIxloAcWPfcA1QA3ASlBj158uTBYWFhJ8vKytzWcc/avCq7FhsESEJCQlFdXV3WgQMH/vLdd9+Vs/PyvPsg14f4jh588MHImJiYO3r16pWWl5cXDe+GLnP2fRJqeaI7vRNeHYyMjCTnzp0b9tFHH5VKLpC5BnFNUAFwI3gWgNTU1Mz8/PwUnunbXeB5pvNGlrApS9++fXOOHDmyozPx2LFDlUeubHh1Vc7xUejYh2LUqFG/raysXHL69GlJOvYdu0tdF8uMV26xsbHG7Oxsk+QixG1ABcBNgfj9qampjXl5eZJ5U15n4erw5qPBhB8fH59bXV29avPmzX+hvalRqPc8ckqUUtmLq1cWLlx4V9++fdfl5eUliNYBIjNl4PQsYEwAACAASURBVE6wz5+UlNRmMpl8aUdUpfJFXAtUANyQxYsXP3Dq1KnPmpubr46MSEeccTp4izuMktjOzt/fn4wcOfLtn376KeO1114rstYpyh1XgqdsIFJ4o3je6F+pHOH8s88+Gz1kyBDDkSNHnoBYFtfz7pwVOV8I+O7t7U0GDRqE4YTdEFQAXBzadAoNPj09/Uez2ZxEPzWvI2SD0bgyPj4+4CX9aWlp6fI33nij+HoC5PDK0Zb74ahLSndMo7D3mDVrVkJERMSaoqKi+yC6pbuh1K51Ot1Bg8EwFndqdB9QAXATpk+fPtLb2/vIxYsX2x/YWQWOXL55y8GU6jaMemJjY786c+bM8ldfffUQdnruBSjDs2fPBmVgXUFBwT2w/JBd1cGrP3L1j0buWjUjPtfAgQNJdXX1cJ6PC2EGFKiwOj+oALgIcqMlenkfceI5ULn13XRnJPdctCNUUlLS6fPnzz+8ffv2g9bMy4hrwnvXL7744s3BwcGfmc3mYLY+0KNm+hgN7WTIa4dqh24j8BxxcXEbsrKylvKyjW3FdUAFwEWB9wqjmszMzFaz2dw+vHXmzol1UmQdFlnTJj3n2a9fP4jAl7pmzZq1giC0iPfF0Yz7IvfOwTl25cqVyWfOnDFWVVWJxyRLCmlfGfFePAXVGWD9fcTvY8aMaUhJSfEHaxlRKDPEeUEFwMmRa5QTJ04MDw8PP1NZWSnZS1zuGrWiZN7nrd8XlQGtVlt85syZqbt27bKwj8YrA94xxPXbC8/ZEP5giiAyMhKsAlF0etbapDSv7gzwlGfxO2xEdebMmYivvvrqLLYN1wMVABeA7cCWL1/+bHFx8euEY5p05s5KHGEpMWDAAIi1vzA9PX0LOPd1BZ6QQJwbW1YLyCkGGo3GY+XKlUvOnj27DhRqFp5nvdKUlBrhPT/9feTIkY/n5OS8S9By5lKgAuBCwLs0GAx7LRbLnfRT0Q3VljlzNcKbY6UZOXIkaWpqun3z5s3f2eLQh50X0lmgzixcuPBOLy+vvUePHuXWH2f2sZHrF8RjWq328/T09AcJth+XARUAF6BDOHotW7asmbeJD89k6YxTALx863S6ssLCwlvkvJZ59+nMbyLOj9K7lDsn51Qrfn/66adHDh8+/KDZbA7iTUPxBKmakSsHlri4OJKdne0pCEKb5CTidKAC4ALMmjVLe/nyZXNdXZ1ND+PM0dBEc6tOp/t8x44dT5aXl9fQ5+U6MiUlwpbziPPTne9YvMeIESP6Pfnkk+9YLJZ76Drq7P0qr4zE5woICIABx+g333xTOtpAnApUAJwIXqNMTk5eUlhYuN4ZnoJ2QiTUHCPvuXhAaN7Ro0evNRqNK+EzCmr7ofSO5ASr0jWuBgQVMplM64uKipbA6huRzq4SUJujrpIyExMT8+KaNWt2SE4gTgMqAE4Cr5PV6/VfWCyW+5zFsY9nHlWaexSBc3FxcZtMJtNiEPw4SncMSuXOWyMvl9YVEZ8fti42GAybCwoKFtDlYm0rYmdYocNrq4mJiW9lZGRMZ9NiG3UOUAFwIujOxGQynbFYLOFqd+gTODvtyS3rY0dJ8D0+Pn630Wic1Zm99ZHuBzt069BtEawARqPx9fz8/Gd5bVQutgBvRYHano1V4nU6XanRaByG9cP5QAXAyYAlSUuWLGkFL2Ql1NRh86wXInLKS2Ji4tt6vf5JMQgJoh5471HJac6dYK0fGo3GKzU19b28vLyHrdV5a23FEfCUdVYxAWVl1KhRJCMjQ9PVpbeIY0AFwIkAh6Px48dXivH8eUDj9PT0lO1gHIlcx0cf12q1f87IyJgiCEKDtTllHJX2PF1dOeEu78ZWgQ2KQFpa2mfgLKg0ZSfXRhyJmF+waohLbHn5DA4OJt9++23gsWPHqlT1AIgsqAA4Cc8991xcTU1NPmzhqwRvSZKj4XUWrCkxKSmp4auvvhq0f//+C7bkGYW//YEyDwkJCZgxY8ZUHx+f2zw9PW+EzRTb2tr+29zcvP9f//rXu9999125u70XnuIjVz+1Wm3Qww8//NOPP/7Yi3dejbBz/3LPRjp21vT398cVAk4CKgBOwLJly544evTon6zNCbIdkdwowxHw5g6B0NBQsFjcsn379v1K2eJ1OrxjSM+wePHiBy5fvvzZuXPnJGVOC4g+ffqQyMjIF7Ozs3cQN3AEVKqDSudg86GWlpZ/nz9//uoxNTsC8kz/hOln6M8jR46cun79+g8lN0JUBSoAKiclJWV9QUHBks68J8FK1Dw1AHP7I0eOXLx69epNvE4FBbs6gGmn+++/v7K0tNTm/MC7CwoKgvcY+/rrrxdJErgZcvUZjq9atWrR0aNHN1qz7KkF+lnkFBbKgTcrKysr1d3fv5pBBUDFpKWl/TEvL+8pZ8y73IgBvicmJv4lNTV1IjoMqROxA58zZ86NFRUV/xH3yudN5VgjOjp6xrp1696QE4IIaV86mJ6e/m1eXt4dctN3bNk7S3kmJCTszszMnCV+x3qgLlABUCl6vf5LOrqYmrHFEQqOx8bGkh9++CHi66+/PquUFnE806dPH1lbW3uEcPa+7yzDhw+fvHHjxk/xtfIR28KECRNCb7jhhnO8cN70FJoalwnKAfmGqJ3iHgIElQBVgQqAyoD3YTQa/2M2m290lvxa8zWA89HR0W4zL+zswJ74jz/+eCOElpbz3egsDQ0N7Yqfu5ctD9Z3Jzk5eUFxcfFmEPAiao71YQs6nW6/wWC4xZaNuhD7gQqAiugI8HM8Nzc3qjs6XXvBmodphUCn05Wnp6dHCILQ4jpvynXpUEALzWZzjPiQ11sP4VpYJ75+/XrU/GwElDCDwVCVm5vrx7tCbU6+tqDT6YoMBkMsKgHqARUAOyNn/oJ51vT09Gqz2RxAFObQ1f5MorDo1asXePjfu3Hjxq8wQIy6od/LAw88EOnp6fkT713xjnWGoUOH/nrLli1/w3rwM9bKYunSpQ+fPn36o/r6esk5Z4BVVGBAYDAYQlAJUAf4FuwMr1PtCBsqiMKf51mrZujG3DHnt//NN9/UbNq06StRkSGcZ0fUUyfFDnrMmDF/JIwVh053PfTt2/fb7riPK2GtLNavX/8xtCWdTmcRjznToI2uR/Csubm5wSaTSaA3TEIcB1oAHAiUPQjH5ORkARx/OhNwQ43PEhgYCEFAfrlz587/EqqjQguAcwDvZ9q0aQLsbEeY9f2ki4KHDUz14YcfamAJKNaFn7G1LObOnXtTdXX1AfDNcBbroAjbt8XExJDMzEwN7vHhWFABcBCi8F+xYoVgLa6/M6DT6Y6mpaWNwgbtfIgd89ixYweEh4dXkB50OgsLC7uqICLyyEUXhCWDmZmZ58xmc6jsxU5CdHQ0WbduHWqBDgSnAOwI3aGC8Nfr9aoQ/uz6YiXY8x0bgUw3mUzXCH9ULJ0HUdBotdpIQvmf9AQBAQEj3b28bYGNASAC1hOTyRQWHR09i2cBYAPy8M6rxbkYrJ4w9YnTAY4DFYAehg3sIZr2MzIyLh86dEgV+aPn8HmBe2jotODZ/cknn/TOycl5i70vr3NC1AvUgz59+gym15l3F7Sw8fHxiUPlsGvQFoF169bttlgsgVFRURKhL/YzvHfIhux1NLm5ueD8XNlTCieijLSGIN0KL0CO0WhUzWYgcv4GtOJCI6aNj4/fBuY7QRDqsEN3fuDdt7a21orCvyfeace01yVUDq8Psc0ePXq0auPGjZqEhIQ/EI7w5wlVur3zFARHkJub2w+WP2M/Yn9QAbADtOZuNBrzzWZzpGiKUwv0hh5EYQQPjn6BgYGjMzMzf0cv/SMcZQFxHuDdnTt37iQtILoLegvZ+vr6AqwWXYdun+JfRkbGM8HBwbp+/fpddQ7kORaqTfCLQD7NZnOU0Wj8n+Qk0rNlj512zyM2Rr1e/3eLxTKeqCiyF+tsxI7+aIEwZsyYppSUFF+Y6+eZHdnPiHMB3v+PPvqo0J11k45n0aEAYETALmCtXYnLiTMzMwUwq9PHaUVdrasHxDqn1Wq/MplM92IfYh/QAtDDUMJ/jyj8iYpGy7wNR3gCPTExcbfBYPAFJyR2xC/nsIQ4F7A504gRI7jvtavQdcnX15fQwh8HH7ZjzcoG50ExNxgMmsTExLettWu1IT4X7H+i1+v/qMpMuiCoAPQw0OBSU1NfycvLm0Sohqy2hkh3LGAFgNGE2KkMGTJkAuzoxXMQlOuQEOcD3qW3t/eLYsZ5c8jXw6hRo95mrUtI59qoUpmJ5zMyMp4cNmzYvdCORV8ANUfeY6csYAfUlJSUlyUJke4ve+zAe5aVK1f+tqio6GWek51SY3Y0kLfw8HDywQcf9C0vL69Ryg6a/Z0f8R2CsHj66aeF2trabn+mTz/91FcQhPYoQ1hnep4RI0b0u+uuuyrLyspUG41TztoE30ePHv3imjVrdkguQroNtAB0A3JK1Lx5824F4U9kKrgj8mnr72q12uKXX35ZY034ExzJuRQwUgwPD39S7pk6867pdgGrRkTh39n7IF3j2LFjVdu2bdNotdpSQjkO8pDrw3oauTxBfoqKirZD9EO2LiHdB1oArhM5oQp7e/ft2/ecGta3innkmex5+Y+NjTVmZ2ebJDdCXBKez4fBYDhgNptv4j0vXY/kPtPodDpY/aIhzFw2r90g3Q+UdWpq6ur8/PxkXp/Qk0s/rxfwOSorKwvZt29fubNZUZ0BtABcJ7y18xqNxisiIkIVwp9Qy7B4DZxe/gefhw0b9htR+PPSI64HK8TJlVgVY5OSkq6pN+I52pOcFy+CbhMREREgfDTYcTsOKOvMzMxVw4cPf5DNhFzMADllzt40NzfDLpLnNRqNhxqsqK4GKgDdDDSkefPmNVdVVakmT3LzbITqjGH7Xo1GM2zz5s3fiOd46RHXhCegwaNcq9V+Q48U6c+EM5Kk/+t0ugsvvfTS1Q1f1OoA68rQbX/jxo2f9+vXb7Sfn981sRl4CpmaHAfBH2XhwoWtGDK4+8EpgG5CLEeTydScm5vrpRYNWsPsxkY4W72Cs9/OnTt7Q1Q/yQ0Qt2f+/Pnjm5ub/372rHT5PqsYdIQUbvcjWLdu3dsEBb7DYQV8cHBwwEMPPVR9/vz5a7LG9lk8xcDe0AqmVqutMhqNgVifug9UALoRvV6/z2Kx3KbGvMnN+SUmJkK+r9miFU20CFsXoM4sXLjwtqCgoI0Wi+VGXrAonU5Xevny5cU5OTkf8ywKNLxjSM/BWgHBtG4wGISCggKJ4FebXwBdV7Ra7V/T09MnYP3pHlAB6CZSUlLWFxQULFEKxeko5IKI6HS6XKPROAYbEmJLfaWVAjDHjh49ut/AgQO9Dh48eKmtra3N2vW0UME65xhYh0+j0ViYm5sbo/YlybSVKS4uLisrKysV69H1gwpAN7BgwYI7S0tL9zpTnhMSEnZDcB/JiQ6wcbkfcu9c7vj1gPXL/shZ+FJTU1/Py8t71lmsNJCnQYMG/d9LL730veQk0inQCfA60Wg0vU6fPi0R/o5UrJQ8tMmVNdlZSsKf4LytWyL3zuWOXw9Yv+yPnBNmZmbmjISEhLWEs305D0f4N7FTSufOnfunRqPxkyTk9HeIPKgAXAdgBp07d+7llpYWyU3kGk9PwDZIOuoXPfcPxMTELATzmXpKEUEQR5OZmbkyNjZ2udhPKK0AEKdy7NXHCVe2kb6mnwMfhnnz5tXTq1FEULm0Hfm3jLTD0ybFY+np6YfPnDkjOU84QrmnEOfHPD09JY4+tBYPaUaNGvVkdnb2FnyzCIIQaotg6Ceys7NzoqOjZxEr/R70NdCf8NJ0N2KcArE/pR0TT506BauuCgkK/S6DCoAVeBULjiUnJ6fk5uZGE5k09tp2k/bS5uVTZPjw4ffCsixsKAiCiLARQtetW7d7+PDhk+kCopcPkw7Lp736EbZvY6Oams3mmOTk5GTJhYht5YvzJZ0DymvWrFkJ5eXlefScmiOXzbDLtdjGOXjwYInDjNIcH4Ig7gOvL1i4cOFdJ06c+H9snyFGDXRU38Hra+FYYGBg7Ouvv14kuQBRBC0ANkALdQ8PD6/Lly/n0Q1ArJC8UXhPo6H2+mYbMuRp4MCBiSD8WcVELYGKEARxLDxhDhFBw8PDx9JhxEWhq+Qf0BPwghOxVoHGxsbCpqYm7NM6CSoANkDPoy9fvry5rq5OEj+dp0XbA7nofpCXfv36xe7evfsQkWnkvGMIgiDQl+zYsePggAEDdIQZaNgbun+V83OCPlmv16P07ySoAHQCo9H4/w4fPsytkCz2Fq6sWS48PPwWNIkhCGILvFE2sGvXLgtMIYrn5PyNehq5QRadn6KiIohu+Bm+cNtBHwAbWbBgwR2lpaXfqilPvAYBDBs2bOLmzZv/IjnRw/mQyw8P9EFAEOdh0aJF95SUlHwpZpjXfuV8kOwB3f/IBQni5dndQQsAB858ucf58+e/VZuyRFdm8fPIkSOn2lP4ExkTnRKdSYsgiOMQ2+iGDRu+GjVq1HRCrRxgYdfq2xN6J8qKiop/gj+ACDttgPyM2ysAbGXlaYkGg6G5vr6+/bNcNC17wvttyDes4V2/fv2HkpMOzhsvDa+cEQRRF3RgoJycnLcgkBhPwNP9oqMsAOJ/8AfIysqqZM8hUtxeAeCZsegKnpycvMJsNnuwQSh4jcBe8H47NjZ2Jazh5Z2zB7xGxs4rKpUzgiDqBtrrmjVrtsTGxhp57Zht0/Zs37QvAHy2WCz9Vq5c+Vs2HfY514I+ABTsXPaECRNC+/Tpc46Xxl4CTG6kTP9+fHz8hqysrKVK6e2RT+Dmm28ekJSUNLSsrKx8z549pyQJ0SSHIE5PSkrK1vz8/Hn0wIheKWDPQEG81Vji/2PHjvU3m82X2PygBfIKqADIANGu5s2bJ4ihfnnarSMC/8DvQShOMRqXuD+2JKGdmT9//vj6+vq/V1RUXG1cvr6+JCoqalVmZmY25Jn3LNgIEUS98NqoeEyv1//TYrHcSp9Tm2Vv6NChZNOmTRo6ngH2OT+DCkAHrOao1+u/tFgs99Dn6WA/jhD+tIYNv6/T6eoMBkNvukLTFdxelT05OXlZYWHhOvoY/ds+Pj5kxIgR+szMzAxxzwJshAjiPPDaLBwzmUxCbm6uw55DbuUBnd/ExMQPMzIyphK0PkpwewWAJzDnz59/28mTJ/fR6eQqmj2h8xoVFQWeuRp7R+ViGTduXHD//v3P88qHni6Bc6AIREdHZ6enp6/iWQQQBFEfPOEvAjuhLlq0SICNeRwFL0gRGyo4NDT0lzt37vwvVq9rQSdAZikdbDNZXl6+j02n1AjsgShI4a9v374QqtPT0cIfuP32238vfqY9cdk5QdKxhWd+fn7ytGnThJSUlM3w3VbcXVFFEEeh1O95eXmRl19+2bt3796Sc/aCFvQ8/yz4XFtb+x+YNsV+5FrcXgEgjHDJzMz8saGhQZLGUfC850+cOBEiCIL9w3FxqKmpeYBwLCmicsJbHgSjhoKCggWgCKSmpr5Cr9klnGem78M7hyCI42hra2spKysLU3MbvXz5MkxX7MV+5FrcXgGgBdecOXNuNJvNSWqqHGyFDQ0NHfvdd9+VSxI6iJ9++kmSRyIz18Zu4AHfDx06NLtDEdglKgJyIw5WyUAQxPFAm/zmm2/KBg8efLtS+3Uk0NdYLJY7Z8yYEYM+SD/j9gqAWBGggjQ1Nf1HDYF+WERhFxMT8yJs0KGmvIEZXxTsPKHMO8b6CcBffn7+TFAE0tLS3oTIi5KLONM1vHsjCGJ/oD1u3br1u9jY2KVqa5+0RdLLy6sQ+42f4Xa07ojBYHjn4sWLqgj0wyIu98vOzt4hOelA2DW/tJmfp6TQPgG0gyCh7mWxWJ6eNGlSa1pa2jsajcZLchMZ6wKCIPaH7Sezs7M36HS6/Wppn2I/Izool5eXwwqvXZKEborbrwIAHnnkkaEtLS0nxGV+oqByxFI/HtHR0WTt2rUatQk8cKp55JFH2gvIVrOa2BjpsibMiIFOk5iY+HlGRsYUQRCaJDdDEMThsEuo4f+SJUuEkpISVfSfvL6ptrY2bO/evWWSxG6G21sAoHJERkaeYE1WajFh+fv7QwxuXzXOfXt5eXmI+QFhrbEhxj+9aYd4DWGei1YQLBbLA5MmTWrU6/VfBAcHB7BpEQRxLKzVD/5v2rTJG5b9qgF26hBISEi4JsKru+L2CkBqamrmyZMnr35X29xy7969E8XRrwqdV/zoCFtssCReXtkRP6+sWesAYLFY7rv11lur9Xr93z08PHpJLkIQRDXAyoDAwMBfqClPdN9+4sQJCGCWLEnkZrjdFAAtREeMGNEvMTGxUpJIJcTGxqZmZ2dnqTV/Y8eOHRAeHl4hOdGNyE3FwDzj9u3bf1NeXl5DH0cPXwRRDykpKZkFBQUpapUzn376aW9BEOrctd9weQsAuzSNfslPPvmkqoQ/PTrW6XTFahb+5Eqc7b6Sg90MzyLT4Sx4M1gEDAbDj6DIiedsacQ4hYAg9iErKytVq9WeVusSXr1ef9mdBw1u6wS4YMGCO0tLS/dKTjgAtgJGRERAdC2Hh/m1xuzZs5POnz//o5Vk3YacAyG5YhEo+Nvf/nb7vn37ytEKgCDqAQJ/zZ8/X3ZjNUczdOjQCVu2bPmrmA136j/czgdADEBTWVm5Vw0vmV6jKn7+3//+N5Bn9lYb/v7+QfbKEr2UhzeaMJvNcQMGDDhvMBhO3HXXXaHs9TjqRxDHAOGCjx8/HkE4q30cDeSlrq5uL6xoEnGnwYPbKQDwctPS0jKrqqpUIRTYHf6io6PnHzhw4IIzaKHe3t4DJAd7EDbON1tGoCDk5eUN7dOnzzmDwXBu4sSJ4eI5XlmiUoAg9uHrr78+C0GCaOGvhvYHfe758+fBGTyFuGGf4I4KgFdhYWGK5ISDgYqo1Wqr1qxZ85KzmKC8vLwkI+2egCf02QBEdMAPcsUiEOrn53fGYDBUQJwHwmncOE2AIPZj9erVG5KSkprYAGKORJxSPHz4cCZEIHW3PsEtFAC649fr9QfgpatN0/Pz8wOP2UDiRILJ09MzXHKwB6CXFbIRBAnViEVohcFsNg9oa2s7YTQaG6dNmxaFo34EcQzQLletWuXbq9eVVbxqsQBA/wF/er3+e0kCF8ctFABRWDz66KNRZrP5BqIiISs2goEDB/6fWgJn2IpGowm20++0/5eLM8Db/pPdbyA3N9ensbHxuMlkap4+ffpIyY8gCNLjQB8XEhLya7WUNO2DZTabb548efJgSSIXxmUUAFu0ySFDhhwnDhb+bLTBDtP/5y+99JLTaZ8eHh7d0lhYpyBr75JNx1MAeOnhv9ls9qqurj5iNBoF2BlMLi8Iglw/vPa0efPmv2m12m8kJzht1h7QeRw9evRJ9id5z+AquIQCYMt80tKlS6ccOXLkmhGkPaFD5tLz2OHh4bAR0YN2z1A3oNFoIrvpPtcIcU9Pz/b/o0aNejwqKur+sLCwq2l5jZHW4glVxoRxsiRUXcnNzSWXLl0qTElJEWbOnJlA54V3f6XvCILwYf13xPZnMBh+A8udiYwCb682xv724cOHyaJFi+5j0xCmH3CVPoC725ozQQtTwnlZomPYuXPnPgDBAGtSQcCw1/UUbCQ72lkNjhcXF4fR+XEGqLxGXW92xXcgLvGDP1iSA2Xz8ccff3Xs2LEqQRA0ixYturu5ufnrn3766Zplk+wOg7SCRWxQDvPz8+Ff3qpVq0hFRcWYV155JZetR+xnpfshCCJt44RRrqHPg74vICDgnNgXOmJ5IN2mxXxcuHDhi7a2NkkcFl6f4Ow4vQWArlysIiCeS0lJMdTW1kqEvj20OLpi0cD3uLi4beKOVM5QodgG2tjYGCBJdB33pJ38YO3w0aNHq8R0mzdv/su2bds0w4YN+/WgQYOuWnHodyh2IuxKAdbiw+uQCgoKYDnQjytWrBDmzp17I5vWXgojgrgD0I6g74uPj9/Na6P2hI4xAv+rq6tBZixjs6Cm+AXdhUtGAqQ1NBhNPvbYY0Jzc7NEQXDks4Ppf/v27arb4rczzJ49W4A1tNcLPYoXFYG4uLgdWVlZL/JG4MC8efNu9fT0/Cds6sEqdUpbDRPGKiO3rHDo0KFwj3Fbtmz5B474EaRngHY6Z86cbulHugOxLwBnxXfeeUcjTkeyuIoVwOWcANmRml6v38gKf2LnORxeRamrqxstOehkXLp0qVsyLApr2rS/evXqxYQR3nQ5bt269fvNmzdrhgwZMi4q6ueZCNriQk8NyMGzIMEfKBYnT57ct3DhQmH+/PnjeffgHUMQRB62zXS0U52jBCqt/NMDgqamJpAd6XRaVsa4Ak6vALDCgf4PL7GwsHARodaSi9jzBdIhbOFPq9V+9eabbxZLEqoY3rQJKFbXCy14xXKKj4/PEgShQbw1u6SPPrZ169Z/bNiwQRMeHj525MiR16Rj5+vZ+T76HO8YUFpaCorA3yGW+YIFC+4Q7+NKnQCC2AO5NrNr1y6LTqf7G9tH20PBpgcLrP/Y4cOH0+g+jjd16Oy49GZAqampuw4dOjRTruLZE9HsHBAQQN544w2JgwlvlKtmIL8PPfRQt1Ue8R3FxcXBDmJdnhqZNWuWNjg42Axz+kSm0+Eds/U4eC77+PhM3LRp019490AQRB5e24NjMFX7zDPPCJcvX5ZYa3sSduqP/d34+PiXsrKy5rN9Ae85nBGXCwRECVKP/Pz8mUQFQpWuNP369fs/3i5/zuJdLpYvvXmGLbCjbfYz/E9KSiKZmZkaXkO0FRhNrF69WjNw4MDExMRE7lVy5Qzvhffb9MgAdjQ7ceLE13PnzhVguVBnlgi64jIiBOkMvLYnOv0OHDiwPUAQzxLXU/CsizQFBQXzwJJMOMqCKyCVaMeNSAAAIABJREFURE6O+GJSU1P/xHuhjkAU7rDHP8xdy1U2Z0AsX29v707VHdq8xwvtq9Vq/5qWlqZhzXFdAa7fvXv3oYyMDE3//v1jQbGgkSt7eikhYQQ/YRr9uXPnSElJyRezZs0SFi9ePEk8LpdvXEWAIMpAgCCdTndaTe0E8pGenr7LESvI7IFLTgFoNBqfSZMmNUpOOBDwJv344489BUFol37ObkLSaDS9Jk2adFlygoF9TnauLSYmBoTpaNEnorvKhb0PhP8dMWJE3o8//uhHOxsyzyQ5xq4Y4G3TDMf69esHI5gn161b97a1/KP/AIL8DLMU2Ovhhx9uBgsjrz06AsjHe++9p6FDtbtKG3ZJBUCv139psVjukZxwILGxsStXr1691lU6/nHjxgX379/fprU7gwcPJv379y+rq6tr3z3Q39//H83NzZ+sWbPmFUEQ6sR0SspCZ+CN2MX7PfTQQ4N1Ol2e2WzuJ/c7PEFPLy9klxnS6fv37w+KwIw1a9a8wfPz4C1pRBB3hdcmkpOTDYWFhUY1FUliYuK7GRkZjxMXa7suoQDQ5hkPDw+bRqb2JCQkhOzcuVPDRrBzZmBjpaampuPWHgGeMyYmxpidnW1Sevbrca7pyjWw6YdOp/sxNzd3gLW4AURmOoDdlIhQygA4e4aFhc1Yu3btGzxFBIU/gvCB9vH8888LsMxYTfLp008/9RYEoYVgHAD1wAqO1NTUV9T2Yvz8/G5nt6t1doKCgoJsfYTW1tbThKPt03S1TLoytw5p9+zZc8pkMg1sbGyM0Gq1p+R+n16+yY76eY6boiUAookVFxe/Pn36dGHlypVz6fzJlQGCIFfaR0BAwK/V1D40V7Yy3kowDoC6oIU/rNksKCh4Sk0VJykpqWXr1q3fscedvfP39/cfIDnIAZ6zpaWlnMh4/7NY88rlpe+Mdz2rMHz99ddnTSbTkIsXL4aAkybr5EOHcZZTNOh7suchBHVRUdH2J598EhSBebQzpFwZIIi7s2XLlr/JreJxBNCuDx8+PBf2knElBd4lVgGIL0Sv16/o7PK0nubbb7+NoH9Cbn7a2fDy8rJ5H4CWlpaLkoOcMumqVUDD7CPAuzd7T1aY79u3r9xkMo0uKSnpr9Vqi+h09EZFPCVGwwQR4uUb1jcXFRVtBUUgOTl5mSNjnyOImhHb5b///e8wNWUThH9qauo88TuvnTsbLhUK+NSpU2skJ+z027zRYWJi4scgWOhjzlpp2Gfz8vIKlSSSoa6uTjFmsJLg7Ay863nHlM5ZLJZLJpMp9vjx4/11Ot0PhJkGEJithXn34o0MxPP19fUQnXLd448/DopAiiO3ppb73tX7EI4y112/ZU+U8ih3Tu64LdhitRLRaDR+s2fPTlq2bNmjEJmyO6Jxqg2xrcBmQVqt9hs5Jd4RnD17dqsrKe8uswoA1mIfP358D+GMyOwBO/qEJSN/+tOfNN7e3g4pj+6EN7JOSUnJzM/PT7HlZ3x8fIa///77JZITKgeeOyQkJGDu3Ll/zsvLu40V+HJthzctQVsP6PCjUD+io6OzTSbTKgiGQmTKm71XZ+GtdOjJ9sHz7nZGempZKg+2zEaOHNnv/vvvv6FPnz4PeXt7zzp06JAfjELpVSdQf0aOHKnPysrK4AUYc3YgCM8TTzxxdTM3EaX2193Q7wT+oqKi2iOBElew5EqOOCHwUhoaGvZomJjy9oT9veHDh//OFYQ/4TxbxzGbLQClpaXVkoMqg9dBw/fy8vIaWPUIcQ/S0tK+yMvLu4Od66c7I57yKXbW9KZHYnro2PLz85Mff/zx5Ojo6A0mk2mpqAjwsCZU5aaY6CkSJeHM61Tlfoc33cKz5iilUzu25F3pGO8cC0xbTp48OTImJuY2Pz+/h2prax8tKSkBC2L7XhTsvTTUhldQfwoLC9ONRuNd6enp41xthQkMpEaNGrWqqKhoNatU2+NZWd+ejhVDXzv1Nq4UTm8BgPzPmTPnhrKysv8RpqOzd0hJ8Xfl4v27CvCcBoPhS7PZfI8t5fvpp5/6CoLQJDmhcnjCEZaZpqWlfciLM6FhdiJk64YS4m91WAQ2mUymxawiwMuPUvnT7eD2228PHj16dHifPn0G+/r6DvP09Bzt6ekZp9FokiorKwdAiGMYbbHbJIt5h3xBsKPg4GDolEsFQbC0trYWNzc3H6qurj70448/lnz//fcXIM+046QSvPx3RnDaE1vzYy0dhCifMWNGTEhIyJ2+vr7Pnjp16gZblrvx/EzoaRYo75EjRz6ek5PzruRiJwcUpKeeekqA6TNby7k7oS13YrmHhIToIOy4s5et/FBD5dAjneDg4P+VlZVd0wHzOuKegh39hYWFPeNKwp9tbB2CYait5dvY2Khq4U+/P7lRLHUeAhfdC9EmU1NT38nLy3uYMB20nPBX6rTE442NjbCSZdHUqVMXxcXFbTEajQtB+Noq/GGO+Pnnnx85cODA8b6+vk+dPXv25vLy8vYARfAf9l3nXUcoSwVrISAdDlAVFRXtf/DuBUEYSuc9PDycTJkypf0zjFwFQXirvr7+k8OHDx/Ys2fPaXZfdYX8q1IJkLOYEAWlRavVBt1+++0JAQEBD3h5eT1XUFAwYPLkyeTChQvk4sWLkut5vymWP9uf8fxPKisr3yGEvCt3P2cF6s7QoUNfhNU04iPYq28nHKsa/HZERIQZDkkSOxlObwGYOHFiuL+//xm2gdhrjkigYsfD5wEDBsCGNC47+hcxGo31ubm5fpITHD766CMNKwDUglznLQdHGfJITU39Y15e3hPiMVaAdlYhZacU4uPjd2dlZb0ghpGmgdHRwoULbw0KCsooKCi4g54rlTMd2/K8rCDmoXSOJSoqivTu3Xt3VVXVGy+//PK/ec9CmGWX9oBXDnJTJHKfIc+/+c1vQhMTE2/s06fPY83NzU8dPnxYIqR5yhVtZZF7ByzsdfTA58MPP1RtW7se4Dlht0CIryFXLj0FO7AUy76+vj4ClhE7SRFycToLANuAxo4d+2Vubi5XO7ZHRWHjxPfv33+aqwt/cmVZm03Cn3SUkVrp7EiTI1xBkD3Z1NT0ZHp6+u/z8/OfY9PLCX9e/WRNvXA+Ly9v5kMPPTQzNTX1jaysrOebm5vbli1bdl/fvn13mM3mwZDu5MmTRPQvoDsp8rPFhrv3uRziPZSm0Xhti/e8cAzmtAkhsDvnzEmTJoHTLvH19U39/vvvX6VXytg7WibvN3gCXwQUrOeee25keHj4OD8/vyfKy8vvhI2h+vTpQ44fPy7pD9h5a9774ZWj0hw3ex0tnHj3chVCQ0OfrKqq+pO9H4enNMPnm2666QNBEP6P946cBaezANCjEjBLTp061eEPIDZsmB995ZVXXMU/RJHZs2cLYE62hT179nALRK6DcxTXO88Lx0FAmEym7YWFhXPFDU0664+iNN/LUxBkpiok9+0qSvcTmM2SiIxQVcLf35+MGDHitf3796+CpV+8Z7I3Hc/lBf5FgYGBd/n4+Dx/9OjRqOvZr56nHPHeF0954N2LMIMd0mFtc9UBCJTdzJkzBXr6xFGIdVS0uDhrn+/UUwAQYpWeF3I0UVFR92/atOnPaslPTzJlyhQBGqS1NbHgxfv++++7vkbEAIqA0WjcWlhYOE+QWZnSE4KOVRaURpKduSc9Curq/CvP/M0SEREBzoaLTSbTJnr3NSXk7mUr8Gy33HLLgFtuueWG3r17w5K7uRaLxWrdVgPss3/yyScuPQBZunTpw0ePHv3I3tMAckRHRz+/bt2612ROqx6nVADESj9nzhwBzG+OBvISGhravuEP4TRKV+Shhx4SeEKNJSws7Gq5uCLW3nWHIrCxuLh4ka1BW66nc+P4KFx3R0lb3diNk+g0pBOjf95omLVuaLXa7/7+979PhSkCpXJWOsemA6thhwn/V35+fo9VVVXdA0vt2Od0tvYr5lnO2ubs0O/mhRdesNn62NPATqcvvfSS05a50/oAPPPMM9HgEKIGIE9+fn6/oZ1zXB1bO0nwPndlhcjac4EHf1ZW1uLm5ubFRqNxzZEjR1bAcjsleAJWCVqYskKUJ2StOffRz8abipCbmqC/i4oC4cQHoHdRlBP+5EpUxvGw5bTBYCBnzpxpX3bFq0u8shJN+DNnzowbOHDg3T4+Pk+VlpZqKysr28/X1NTQ6Zy+jmqurIZq/+xq7Y2tP7169ZoI23hIEjqAU6dOkQceeCDy888/Py2XZzWjeguAXEEaDIZ/m83mmyUn7AzkTfT8t2bedBVgbvvhhx8WbHlGnU53AXbdk5xwIdiRI/v+6e8wAk1LS0s5duxYJlgEaMdVa45hSvAEKO/3u4o1hYEnzHlOcKyiIHcPXv6TkpIa9u/fP5z1vBY6IjY+/vjjN3QsuZtZUFDQT4xrIKcE0b/Ly69cftQI5FWr1ZaZTCZVxc/vLth3N2PGDEFU5hyNVqv9Kj09/V4xG87U/6veAsArSOg4LRaLw4U/6Rhh9e/ffwZrdnVlvLy8PMCT20ZOu3RhUO+b/c8bdUOgnOzs7Ky2traslJSUZSUlJesgwAkbLVBJoPNQ6nTkjncGa4LRFic22ipAOAoB/ey0YiTeC5ad+vn5nTEYDAWXL19O8/f3n9rY2PjYkSNHyK233tq+EoK9r9z6efq+vCVezhbvHZ6jtbX1K8kJF4FVMMPCwl6srKxUhf8XBAWDQZG4/NKZBoJO4QPAjqyWL1/+3OHDh3/P62TsDTgqvfvuuxpe5+/CZm+vyZMnN9tS9lqt9m8mk+nXrq4U2eLgRqcl1MgzJSVlUUlJycaGhoYuCX7evLxcHmjHQNr07evrS4KCgsjAgQPhOGze5KHRaAJaWlo8wGoBo2nwgIeAW/Bb0NnZOlq29Zl4I3M2r3KwAsKa8yOdJ56i4IxER0fPWrdu3W6nfQAFWBkAAnfatGkC1E1H5wvawogRI6bl5OS8L0mgcpzCB4A1r9bW1v6+sx1lTzFq1Ki1vGU3Li7w2jrRUba5q/CXE0D0Mag7q1ev3iQIwqZVq1bN/emnn7bX1tZKrpFDrh3QeYDfSEhIgK9vNzc3H6yrq/uhoKCg+MsvvywDHwVeHpWerUMB6DV16tTQ8PDwYb6+vqP8/PwehTXxZ89eGxdF7KxphYFXLrznkJtSYBUFnjVCYJYnsr9HH2PXeTubEiA+a0VFxb8kJ10EdoAFzzt69Ogd+fn5cx35hJAPqN+CILxHCLlGAeDVO7XhdKsAHnnkkaGtra0nCGfE4Ag++OADl9jxrzPAaPDRRx+1qeBhS12TyfQLyQk3Qs43gAekWbFixcyzZ8/uEh3VrMHeG0bxISEhO6qrq//08ssv/9jW1lZni3XAVnjX0yOz++67LzwxMXG8v7//ExUVFQ+AUmBLO1Vqz6yCoJSWl56XZ6XjzgJdt2BNujv1RWCJnDRpkmr2Q7548WIIu/272nG6VQDx8fE78vLy2j8rdQD2AJw/3KHBsZ2k0m51LPX19TdIDroZ7OiFBz1vDWbctra23StXrny2rKzs9aqqKu4IVfwMo+v4+PgfampqjJs2bfpKEISrdtGXXnpJ8mtK+bAF3vXiMchLh5Peux1/7R310qVLp/Tq1Wur2WwOllzMsfKxyDlW8tISTnpenpWOOxuRkZFE7Itc3QlZBOq5wWDYD87gPAuSvRk/fvxGQsh0BxZJp3EqCwDkFSL/OWreh65cUNk+++yz3h2bw7g8bKcC78GWde2gLICVxB06pK6i1GHDueXLlz926dKld2AzH9oEmpCQ8E1paenv3njjjWK5EbnanhMsBPPmzbspODjYWFxcfA/4PYh9EM+Xgb6Wdxy5QmJi4sfp6emPuFsZTZgwIbRPnz5Xg8HYu57Q01PQ10HQM2d6B06lAMyZM+fGc+fO/UdyogfhOSDB56SkpNMmk2mQPfOiBihHTKG4uNhqjiB9Y2Oj02+aYS+UOrCxY8cOSEpKGnrp0qVL7733XolcOmd61kWLFt3t7+//dWFh4TXnlEb3iJSwsLBf7ty587+SE26A0Wi8nJub24v16bAnws/h4Me8+uqruUrtWE041RRASEjIZntH/mO9hcUXffLkyQmSxG6AWKl9fX0/JoQ8bEv5/eIXv5hHCFlFH8cR3c/QJn2lMjlw4MAFQRAu8Ezh7P2U7uNI6LzB/82bN/8FPsKunjfddNOuvLy8+3hLCtXg8KtWoFy2b9/+X+Km7ers2bO3aTSa/9EBphwxJQBlHxYWtgY2qbXV58fRSN3XVQqYDvPz829lC9we0MuKAAj88/rrrxc5S9l1F3R519bW2rTcCMqupqYmmT6Gwv9aNArBcURoJYFGTvgr3cuR0Hmj8wgWovT09PthuigmJuZ3sCSRWJkWQK6g1WoLnEXg9AQ7d+78ISAgoP3Z2dgO9kIs98LCwrtpRUTtOI0CMG/evJtBCRCxNlrqbujKFBwcvNhuP6wi6PL+7LPP/mVL+UNjhHCZMMITj6F5Vwq73I6Fd44nSG1xOHQ0SsIK5lHXrFmz7fe//71m1KhRj/fu3VvS1nnXuTOVlZW/s0WJdGUiIyP1hAp9bc+yoOsy+EXNnTv3Bmd5D06jAAQHB+9infDsAT2vJAI7lblbQ2Of99ixY1X9+vWTpGMRTXE333zzcfoUduLXwgo4Xv3ircmXE6RqxpY8w/mcnJx3//CHP2ji4+PX0uv5nWmE1dP06dMHplH+xlqIePXHVYFnXrNmzVpWCbK3hVgs+9DQ0M3OUjedQgGAkX9eXl5CZ9YBdxe04Iff1Ol0xdaCp7givOeNjIzcIjnIIDYMCOM6c+bMBEkCN0duRM8rb96adl47UGPnz7NSyJ2ngbRZWVkrP/30U0+dTvedNUuJuzF06NAMnjWUV8aujCAITVqttsaRZSDWzUOHDt1GW6vVjOoVgA5P4fFQoGxnZ48XzHa0Z86cmepOjUupkz1w4EA2sTLqoMsqICAgj5dG7lp3gGfatmV03JnvaqCzz8Qeb2tra0tPT7+9trY2LCkpqY1NwypFro74jAaDQe/OihD97OXl5b+RJLAjonUK/n73u9/dxMuj2lClAsAK+aCgoNfpOXh7Fij9W2DyFrckdRd4nan4/Hv37i2Ljo6WNclqmKA1JSUl0GH9U3JDzrWI+uG1A55F43qhhTvUOYPB4Dl8+PAHYR8OgbOvgSAT/tdZ4Vl+4LNOp9vvjtZIGvrZt23btr9Xr14OKQ96hRh8DgkJ2cWeUyOqVADoFwhBf8xmc5S9R/4idMcSERGRau/fVxNsBDpyJdLf//F2WyOcDgvIy8u7NSUl5WXeY6FJV510RqizSl93wFMsN2zY8PkHH3zgO2bMmKv5Yv0DXKE+0auP2Hgk6enpd6Di/DNQFlFRURsc8d5p5RPqYF5enhb+q903QxUKAK+DEf8vWbLkTrm09sqb2LGAo4kkgRvA69DFzy+99NL34eHhV1dJ8Jal0UA5Hjp06LcrV66cxytnRH3w3jv7mdcuece6i47OtsloNGpiY2P14u85+45+LHKOz1qt9s+CIDRILnBzVq9erXdUCYh9mKZjT4wXX3zxRg2zhFxtfZzDFQB23TI7j9evX7802rtT3HOZ2FEZgN+GkQbEnnbHUao1oS4Iwli5aQD6HuK7hk66sLBw66pVq4RHH300Suk6xDHQnRYL7zhvFUN3vVPe79FkZ2dntLa2DgoLC7uqBLgStAVALN+MjIzJ2DSkQGj2mJgYyfGehh79k47vISEhevGzWvs3h7cUa97MR44cGU/P87Fe+fZAuLIF8VQcpV6BLYPt27cfTEpKKiEKYTjp4+Ja3YKCAthZ8LjBYDiu0Wh6SS5CHAbbaXVW8eXVga5ii6Xh888/P719+3aNVqv9ztXaqSj4xb4vLi4ug97wyd1hLchtbW0z7PX+6T6NMNM0x48ff4BNz6u/jkQVewGwDVb8DsFjfH19z/DmAO3t6ENv++tuigBv/TkL7Pj2yCOPNCtt1MQz0dLvUqfTfZqWljYZgsHwfgPpeeTeL7zX559/Pjo0NPRXPj4+t3h4eIzQaDTt4fpaW1t/aGlp+eHSpUsHXn755R964v3J5YvHwoUL7z558uTXSlYMZ0JDbTgzaNAgmHbT4GBEHo1G4/Pggw822nM6iNe3kStKQH+LxXJJTsY5GlXsBcAT8MCYMWOeYjcJITJz0j2JTqerAuFPz/G4E0rzvpRi0LJgwYJfnzx58lu5RidacOjwrrR502w2T5o2bZoQGxublZGRkepqplxno6mpiej1+t8SQl4uKroS+bq6uloy4tJoNDeIn6dOnQpr04m/v//89PT0l8BTvzuQa3O8jhT2Fxg3blzIsGHDzkN+nRl6OgXaTGVl5SiiUB7IlZgABoMB+hO7lYZGZu+Be++99zFBEHbQ75FXZx2FqnpYtmMRBGGdJJEDqKmpad/jGRvdtbDlsWXLlr8lJCS8RWRMXbwGwFoWoBHl5+enPPnkk8KyZcueup5RHK4q6DzwDmDXQYPBUAjKWFFR0VXhT6z4BojvtrS0tN3H49FHHxUMBsMBGJFJEndjfmnEvO3bt6989+7dmpEjR16Tlq13aocua61W+/Ef//jHo7wsy72TzsBzxnZWLl++PFWprvTE8/HqlJ+f33a2zvHSOQpVbgcMeQKTI+w5LznZA/D8D2g+/PBDDZg1ESk805bRaDxpsVgG8zRia7DvIjQ0FHYevH3Lli3fyd0LzaHdAwhqvV7/H7PZrOXdUG6Uw6ahV/KIQjc+Pv61jIyM50kPd4BsXYD8mkymn8xmcySdH6X2rkaioqLIpk2b7FLJna098SzCYL0CBVa0OLLv2151AH7j448/1tDO62pCdTZWsfItWbJkvORkD/4mkdEKdTpdGQp/eXjTNyaTaYhWq63qTCfCWycLx86fPw8jyr/DioFnnnkmmr6G1/CRrrFs2bLHpkyZ0pibm6ulrTSBgYEkNjaW9O3bV+Jhz2svbLhu8vPSz+cWLFgg3HzzzQN41/GOdQW2LkB+jUbjIJ1O919nrSfwDG+99VZfyYkewBmVad7IHqaedDpdk4aKDUFk+pmeBN4dbGTH+wk1KKGqkWzs/HpgYGDyyZMnJem6G3pUw9MUq6qqniFMw8ARp3WMRmPg7NmzhfLycqtpBSaaG32cdLyjDl+QwwaD4ewnn3wSbzabL+H76B7GjRsXPGDAgHfE0RLswBceHj49KyvrLTHaHpRvh0/AgpMnT26uq6uTlDm9FIr28xDTwdRARERExfz58/8P4kewU0I9sXRQ/H2TyfTLtLS0j/Ly8h52tu2FY2Njt3zyySf14Ggr9tnDhw/3jYyM9PHx8fHo06ePT0BAgK+vr6+fp6enD/x5e3v7Q3qw6nh6esJnP/jz8PCAz708PDwCwEJNCIHVNw1NTU3/zc7OfttZBzu8KcXq6uopsHGpvYU+DfzmgAEDlhBCFKckHIUqpwCAxx57TGhosE+cC9ZsSQsiMP+D+QaFjTK8cnniiScEEBS2wAoCEbbcxXNarfar1NTUe0UnM7QGdB0oO71eLxw6dKj9Hu+9955Gznmvo314rFixopX2DaA91ZX6FPEdRkdHP79u3brXJAl6mJSUlK0FBQXziEpGYLbCm76wxYzNa5c8IA30cxEREeO2bt36D04S1cKbhoTv4jQy23fYuw8PCAggf/zjH1W5ckOVbtZarTaosbFRcrwnYAUMbTIC7396SRNPQCH8BgWRsGwV/oRaR8uWLe10Rp+zWCz3gJNZSkrKenGjKJ4pELEOlFtFRcVYMXRpSkrKY3Ll2NE+2jIzMzUQeIdOJyf8eVadI0eO/H7RokX3SBJzrukOxPtlZWXNj4uL22Sv7cS7E9acbUsZ2SJwxDYG7ejkyZP7YDpIksiJEPto6Lt1Ol37umTeNIC9qKmpISNGjOinxsGJKiIBsp8nTpw41V4duMDsM04Lkvr6+sV0WrUt4VALPBNbdHS0zRWeJzx4759X9vn5+UtgxcDy5ctn0sfxHXWOHTt2HOyIdkl++umnd0TPfV45iqPF8vLyYfRx3jsjlBme/g5traSk5Mvnnnsujk3Pe8/XC32/rKysxYmJiXa3PlwPvCmV7oK2LMDf6dOn33GW7WwJp/+h609dXd1vCacey9XV7kbMy8MPP3yfPX/XVlQRCZA13/r7+y8iDpyzEXn99dc/YM/zhB1ybdkAd9xxx2Bby4hVrHgmPaJg8oSpouLi4l2zZs0SFixYcIckAaKIWKZfffXVQCjj+vp6Mn/+/MaOOWdumUO6jz76qFSn012QnGTeG2GcA+n329TUlA++Bey9ewJaQGRmZj6fmJj4sbPUDLrMrIXdvh7gnmC5S05OntntN+9hWD8AcqUPf4cuQ7EO2CvGiNhn9erVax6bNzWgiikAtlAKCgpiekLT7Uw+goKCYIRTI0nESevu8AREUFCQtrvKiG2svGkCcmU/cHA0+3b58uXCjBkz7B8Q3EkRO6kDBw5cSEhI2E06HPamTZvWvHjx4km8KRiYX01JSVljNpsHyD01O+rn1ZPa2loYkVdKTvQArIDIyMh4RKvVfsP7pe5u37xn7yrXMwiRew/sMV9fX9npGWcC+nCYgxefnQ2rbC+OHTt2zUoA3jtwBKoLBAQeqtC52PsFsS8kMjLyDUkihAuvs/T19R0vV8nljouwViG2LrAWA1pBgGPFxcXk0qVLhQaDoQI83OUUBjnczbpDl2V6evqs6OhoIloCjh07tmf69OkQ0Od4amrq5rS0tDeNRuNlcK7Kz89fIblZFzD/f/beBDyqImv4r85GCARIIEBAwAQIhJDu4DKMf2d0fEdn9H3HAQY+d0RQEBjZFAIhSXc6C6uK6AjiAijOgAszoI76f0VHR/1GnXFMd1ayQQgQwmIgQEK27u85IZWZSeKkAAAgAElEQVSpnHtuJ4H0vd2d+j1PnnTfW31v3Vunqk6dOnXKZusPioa2T30Zq9X6K5PJ1LJUBVuhuhOqjnQFyiLWGXBacYUGBU/vcDgqidNeybXXXvuu+O6cOmwYBYout6gxF4qY1niMAsAr39KlS2/TsoDUTEInT57crEgs6fQ79ff3V2yEwYWe2jrY1ZIyag6Z8hnAlQpGp+Hh4SctFsvnUPk6u1JAnA/1dfB7g/e6cePGPrAKgL+nixcvsuzs7Kj8/Pwldrv9YZvNFtLd7+bkyZP79Jh3hme0WCyDIWKgpzn4qnX6nVVSKCsqV6jBh4O6Jq+b9fX1nyku6KWcOnWqbRt3p7CpnNZW3EWLFt0kfvcEK7LHOAHyl9G3b985WjbAavfatm1btpzn7zq8Q6moqIjEP3aiHR3xHPH48eMXXrp0aZjJZDrPGy+xsRM7K2whoHxJODab7dapU6c2wgjW1WZFDMljT5jmoeZNYUvVoKCgsQYUOrczy/yuFBghmc3mde59Whp4pmeeeSYQpv30rvNqnT5FR/Kp9nvRgobrE69L3333nVctBXTFiy+++C+GnB0py6K74O+2f//+j6mViV54zHbAnKqqqt85NdzpD49I4XtCQsKlntIBXC1qAn3mzBlF5yKWK363o0ePnrpu3bqtH3/8caXVau0XFhYWJ8ZxZ6jh4vBOiQkVHFds3mnl5eUteeihh5yrVq1aoJbvnljm1LuAmPPXXHPNz/i7o1ZqdDdFRUUru7rMrbuAzawqKiqG8mW/rqxTHR2/Gtz5zJSCLNYfJtSVzz//vOMIXl4CWDuMRiNpMdQCfp/q6uqHPc3K5FE+AI2NjS2hXw0axusWOwyu/dbW1i5SJJSQ4HJqLbsg6r2KHbXoyTxs2LCbnnnmmf1MaKS2b9+e//TTTxuuvfbaX0VERLTz4MbevOIx3KAxpHjAioHCwsItjz76qBPWoUsrj/qoE6L1hYaGjuvVq5eizNxxf1gNsGrVqjlUvrTgk08+qYqIiLgRnhOvWqBQO+4p4PdHOcCJ9Yc/K58O8RXgmRoaGpZ2RqlzJ0ePHm3p4zzp3XpUJMC5c+caT506pd0ejq1g8/Hx48cHffPNN2ekBeDKmDlz5piamppi3riIZkZRuQPNvH///nGvvfZaPtUJ8WPQYK1ateqxI0eOvCJGhxS1+I5M1Aa0kQ3Pw+jRoyHcc/yrr76aS123p4LebchTTz11saSE3IjuqhBlY+LEiezll1/u52r1jbsQ5XTatGkjhg0bduT48eNukwdeD0C5An+L3r17w85xLZ/hLyAg4JLT6bwIOzBDSBKYJXE6nef5f4fDcQ5WwMJSd4fDAVHTapubmy/C9I3T6bzU3NxcB9viOhyOhqampvqIiIjXbTZbjCIjRL5gR8+MjIyZvlQP7r777uF+fn5HtRxccsT7hYWFxe7YsaNQkUgnPEoBgGVFomexFgJIzR3D7k09vQPoKmJZgUd3WVnZPrXyc15eFwvzvte8//77xxQJVAAnMbPZ/Gx+fv4yV5292n0ZoQhwwO/g448/joKlcB1doychdowpKSlb8vLyFnT34wcGBoIitnjt2rUveNI7h22RJ0+ePLHVgbSpsbGxzuFwNDU3NzfU19dfqq2tbbx48SJ0sI7z5883nT59uqmsrKwRVknCX319vQNkFPuz6PGMTz31lLO0tLTt/mpxGeA/TP2A9UdxES8Gnvd3v/tdW2Ohlyk+NjY2bc2aNVZPkXOPUgBSU1Nb4pFrnSexQkD4X6vVOkCRSNIhvCFJTk7ekJeXt4KhisbP9+/fn3311VcDSktLz11hefmlpqZ+bLfb7+hKRcbKHvY1gf9Go/Gb9PR0WMLYLjqNK4UAn3OV1tuBDWXMZvM/srOzE/AzdqYsREsNWIDGjRv3gtVqXUxtQiOVsO4BpuSmTJnSEludUoCxf8c777xjAKXMFxBlKC0trfmHH37w01OmEhISGiwWSy/Kn0kPPMIHgAteTk6OQji1uj/X1BsaGtYqEkg69Q6FjjQCH+fvePDgweyNN94IvJLOX1AkHOnp6b8qKysLNxqN1WrpRAxotQDljAjn7Xb7T6GxTElJeU1cMYDng7FSQ70HXwGt1rhktVonvffee73j4uKyYJvgjubKReAdg6k/Kipq6ttvv22A2PxU5890Gil7O1g+geXLl/+OGu1zxM5/5MiRLRYZX/GNEZ+7vr4+vSuy2l33F+9lt9uDPKXzZ56yHXBrQxwyZcoURQOt1f1551BaWvq2IoGkS1y4cOFPjLFHmFABoJEZMWIEOJYFgjm1q9cU5YF/ttvt0PmHQ9S/iIiIAggAxFDHIcoTb+iw4xMjOvicnJw5Dz744Jzo6Ogn16xZs0mstNhqIObJFzt/lfcJc9QpBoMhBTY6mTZt2h29e/e+38/P75cnT57sD8v6YJqnb9++8PevhoaG96qrqz/6wx/+8C/o8Duq33L0f3WIctqnT5/XcIen9n5DQ0OfUTvnzcDznDhx4i2DwZBG1WN3gduY1nsGQ/3xCDnxBE0P8rBgwYIbqqqq/qnXXt28cPbu3duy/a/k6rBYLAe501GrYxEcM4iN/5VUQFe/hX0A6urqPoOVJNR5ptLwGZCHOzaJwvrwAQMG/PemTZs+oq5FXbMn0tH7cGUtke/y6qHeHVixZsyYoWjkqXfPPNBJrTuBdzF9+nSn3nI2ZMiQ67dt2/ZvxQkd8Ji9AMLCwu5w6hCikQnLxKKiopjs/LuGmgJptVrHhYeHx8XGxiaOHDnyv9LT0w3c1Hs1FY+qvDwPzz333N9efvllA+w136dPH8VvWau5E9+fijYo+gr8+OOP7PDhwx8uWbLEOW/evAQxL4ww8/kyrp6TsopQ57HTLfVbSdcRrV38PS9fvvwO6kLYMgZA/dy+fbtPdv6s9fmGDx/e8lmrOisqtvy+4eHhtyoS6oRHTAEAQUFBLXtQ69GQ8kYnJCRkq3hcjkY6hno//L3BWn7Y20mRoBXqtxRqoxXxOuLxDRs2bHc4HNtTU1PXFRQUKILL4BE+Dg0qfncK0QthgxyDwfBDWlpa01dffXXNgQMHqvAzU/nzJa6kzLpa7q5+K6GhpqAMlx1u20VXFGUfK2QTJkz4Us1C4ysMHDjwzePHjz/UGTnsDrDTJXwOCgq6hzG2yRNeqccEAqqoqDAqDmpMdXX1G0xlhCJRR22k11246vzV7gmNXFZW1qo9e/YYjEbjfoYaSScR/pRDWRjECpydnR3Qt2/fExaL5Qe+xwBuVHs6alYAjHherHc9xaLSXVDvDILO2Gy267ByiuNhcE6dOrWcf/YVWRbrOFBTU7NdkcjNYKWssrLyp1rnQQ2P8AFQm6fSmv379wfCOl85F9m9dOe7dHUtV5aCiIiI0IULF+bYbLZRVGNp6EQgIeo4EB8f/4bZbJ7lK0unrhZXZSTRjsTExHlFRUXb8A2xEsAVWPB/8kVFVlSA/Pz82pZEagluPyDWjB7T3RiPsABMmzZtuOKgxrQKfhOlGUuuju58l66uRc0pcyC6nNVqvTYoKCh63Lhxit/i1QFq96GO5+TkPPzAAw84k5KSkrtrgxE1ZcMboN6RRHvOnj2r6PwZMV1guBz/wu6r5SY+J0RG1OM5sVX5pptuGqhIpAMeoQCMGTMmgVqmohVwL6PRqGi5pRnSNxDL8e233z60bt06w8iRI38RGRmpMPWLZlIRPF1AmVsLCwszZ82a5YR111f64pxo10OJpLNyIzJnzpwJsBqGuVCMxd9UVlbO6glOrfBs48eP17x/wZ9vuumm6xQJdcAjFICQkJC7qDlcrQDP/6ampp34dnIk4xtQ5bh58+Yvtm7dahgzZsyDsFad48oEahB2G6SmCuD7+fPnWUlJyd5FixY558+ff4N4DqfFYB8FKg8SiZrciIwYMeIvlKyB7GLZA/mH7c8VF/ZRAgIC9mhVt7BlkbW2I3369LlbkVgHPEIBCAwMfJxyvNIC3qBfunTpr+Lt5OjLtxCXRjFBKdi4ceOf3njjDUNsbGwKLBNyFYdCbdUAE0ZN/D/s/HXixIl/pqWlOe+8885I0fEQj/Cl06nkaiBWxfipbfxjEHbl5HI3atSoZ4hrKH7rK9TV1b2jZf/C67uoCAQEBDysSKwDHqEAFBQUtCxHxKYSLYSQ3zM3N/cf4v1lY+xbuPLtgIq5Zs2arNYVA22RIKnfUJ01fIaNisTtjnm67Oxs2PHtuMViKQAHJDz3Kv4XFQIqnxKJGmLbtWrVqiQxGTbpYz+XPXv2ZOg5BasFYt06dOjQ95QFz12IK4j4fYuLi/t7wjvWXQGAl1BXV6cw+Ws9D/XBBx9UykbX9+isDEHZgwUgPT393v379/cxmUyFlD8A1XDAeR5AChQBSo5sNtt48D5OTU3dDf4CIlipoH4vkbhC7GTKy8szO1JaeXsbGxsL4c/PURYAX1ECRGUH/u/Zs6ecd8buRlxxIVoDLl68qO9LaUV3BcDPzy8EGk/KNKoV4eHhTG1DEol3gxs2bHbH51orbK3Vao2FvVEghLGrxpT/Bjp+JwowxBEbH7vdft/999/fbsUANR0gkXQWUWZWr169BAZUlAxSbWxtbe3tlNz5khUKPwcs14VNrLSoa1SbwKcDwCKo+IHG6K4APPLIIyPFRlUrzUxkxIgRdsVBiU/iapSNne/27dtXkZGRYYiMjJw8bNiwdmmxIqAWQlq8Dx8JgAWgoKAgc/78+W2Ogq7yJZG4Qhz9Hzly5DnRYoWVV7Hzhz0uNm3a9CnV2fuyHMLzRkdHlyhOuPF+ItwR86GHHhqpSKwxuisAYWFh4yhnKi1paGjYg28nR2KeRUfl0dDQwKZOnTpC3MKXCfOdrJNlSjV8W7du/e7FF180jB079n4YOVDXUru2q3l9WKYFjoLJycnrcHqJpKskJyevqK2tJS1K1BK/oUOHLqf2xugJNDQ0vKlXXePve9CgQWMVJzVGdwWgd+/eN+nd6NXW1n6Dj8mRmOfQ0dQQzKvfc889cPII/E9MTGzzsKWc7q4E+O3GjRv37Ny5E1YMrO5q1D/RBItNgnl5eStTUlJeudo8SnwXJ9q+WgSOw6jy8OHDG5hKfeGWVf4f/tLT059RXMxHwSb4urq6b7Soa9Q9+LHg4OCfKE5qjO4KQEBAQMvOSE4UnUpL8vLy8uUcrOfiSiaWL18+Izc39z5ebtDAFRUVvT5z5swxisRXCe+816xZs3b37t2GiRMntosdIY62qOAffO4Ph2GFz7m5uY8tXbqU3LlN0rPpqG2E48nJyUkw98+IqSx8DP7HxcXt6Umhq/G7O3z4cFub706o6Rh+LDAw8Dbq1lr2QbopAPwh6+rqWjZGEEdIjCgwd/Lpp5+eknOwng9VNn379t3tRNtIw/dhw4YV47RXW7HE+0PjmZGRMXv//v29TCZTSxAVcZ2vmB9RIcA+LuK5Y8eO/S9MZUgkHSHKMkx7lZaWrsEdPlVfOJmZmTMVB30Uqt7v37+/ytX76S5ERV90+mWXpyHabQusR9+nmwLAH7K0tFQRVIWpFJq7cLSWjLQCeC5qZZKXl9cuhgTvfA8ePMgWL17croJdbcVSmU9tSEtLm3Tp0qVhJpOpXZAV3CAzlUiDvLGGzt9qtT6nuLGkR+NqFQpgsVjW1dfXK/xNcDhr/pv4+Ph3Yd+TnvJOqXoP9VZx0E1gCw5X+svKyjrMp7vRdQoAlk7BH3hQc89IHBTF3QwcOFAxRyytAJ4HVSYw8sFr6tESp8+dQvS9q4XKA7/nRx99VJmWlmYYMmTIjddee23LcTzvyJCigo/B9/z8/CXdtaGQxPcgZCYYfEjUzP2U7GVmZt7bE0UDD/BCQ0MVadwBVuD4IAUUfuj/9ERXBWDSpElh4tpU0TlKrbHtbq655ppT1CWlFcDzeeCBB6KYi7I6ffo0S0pKWoTNoWrpuwrVwb/00kv/2rRpkyE6Ovq3AwYMaDtPzQViJy3O/PnzFZtjSSSU8mg2m4+7cpDFxMfH/8npdLazePY0+LsbPXr0Ja0fHYdhHjp0KKmFdNegpcP8KI5oyPXXXz9ErWHWSjgdDscnioPSCuAVXHPNNUZGBOURZaesrOx5ykpwtVAjePH6zz777Pvbt2+HFQOJ2NmKkm3xWkOGDFmmx3JYiWeDR/SLFi262WazhVFTqBxRjuCzOPev9htfAivp4vfm5uYPtX5UXKdvu+22QYpEnfDh6C50VQD69esXqTjYirseHhdAfX39F4pEElU8yU+id+/evxS/U97PrfPqryl+fJVQ8/sY0PbXrl278Y9//CPsMdB2lnp3Yr79/PymubqupOdBxZ2oq6v7qiM5EX83YcKEZ/jov6fgKsBRU1PTV3q/hiFDhgxTHNQQTRUALMRBQUHDFYnccE/K4Ypz6dKlAsWPJO3enwjVyepFQEDAjM7cOi8vb47BYGgLu0l1wO4kKCgITLUG7AiI3yufBigvLyfNgpKeC7Y2paSkbIApLka0cRQw352enr6cONVjwHWutrbWTk3j4c/upFevXu0GwVq3TZoqAPilBgQEjFYkcsM9Ke2Zk52dXaj4kaTd+8PvTI/OnyrDQ4cOqVqQRKBjNZvNPzjRLmhaAtMARqOxkssjtXMgP6a3Y5DE8xDN+AaDISQ/P38FzyTl8Y8ZOnTo/XzPlZ4Knm4uLy8vEufk9ZiCDgwMjBK/i+2tz/sABAQEdHuwFjXU9hf48ssvzykOShToPeKnguvU1NQo0lFA2dtstgkzZswYRSk0WtCqePTnDTX/T/kS9O7dW9O8STwfUUbMZvNhscN3CtElKZP3yJEj2YYNG/YwFYW+JwLvYf/+/Wew8q01fn5+o9Ru6ZM+AGi99nhFAjeBlxlyGhsbZeSVTqBng0GN3BMSEsIUCVXgeY+JiTnMU2it0Nx1112R2dnZIXwKSi3uBfyPjIys7ukNtEQJyERiYuJ9NpstQnQINKAof6K1AD7X1tbGG9D+AJRltKdRX19fy1RG21q1D/7+/mQfqNX9NVcAkOBOVCToZsSCpeZe1XZxk/yHzjQYrs5dLVSHeeutt07o6mULCwvZkiVLbrvSvIoxBUChhD8ey4L/QWwCHp8A/mCd9ooVK+4LDw8/zghzLV72CjLa1NT0J9lASzjCKDXo0KFDuxkROVVMK47yTSZT/iuvvJJLxQXoKU6mao7LfAt4KjKnVnXPYDAYFQc1RJdN8Lkwnj59OlhxspsRNWSxsYVGGDp/T3Jq81SodwROdQsWLLguJCTkGoPBAHIUwP/7+fkFCt9Zq6IZJJwLapU9v9b/kDaw1VEvqPV7L35OOAa/BZlxBAQEJHTldfFnqKys/OyJJ55o12GDLMB/sSPvrmA8U6ZMgb0JyKWKePTG/jO10dbIS3o2TiGqX1JSUn1eXp5ixC/KkQj4nSQnJ8dh2etpqD0zjtqJQ/Vqwfnz5yP0LA5NFQBRWIGqqipFGnfdl8MLGgp/yJAhLUdlQ9sx/B1FRESEPvroozXQsR07dszj3x1vGPlaaVgWCPnWOg9iXhiSOfx58+bNXysuIumRcNlITU1Nz8/PV3T24v4TWJaioqLmwgoUSs568rsUCQ8PZz/++CPDFhJXsRW6kxMnTrS7mtZKmmYKAH4w+I4DtGgBL9jWgCsy5moXuOWWWyJ+/vOfnywoKCDN8p4I1TDqRWfMivHx8Z/q5ZAk8QywReiOO+4Y0rdv31RKfqhjwLhx49j69etfVZxQoadaB4YOHdqiADDCOqcFtbW17e6C+0h350OzlgY/iF5LnZD5zK5IICEBxWnSpEknxd3s1BofCY3a+xKPb926dZpaOknPALeVY8eObRkm8n38MZT5//vvvx+qSOgCapUNlk1fJDAwsESt09fq2dX6Qp9cBcAJDAzUdPoBm1lbzcIyBkAnmTVr1pjy8nLd5sp8AbX3xeUR4rSfOnXqPNWgS3wbtfK2WCwfV1ZWtnx2ClvKcrmhzNVxcXFZBw4c6PT8KmUlo6atmIt8eitOp7MAT00zjS0iAQEBuvXDetoagxRH3IRTZUc4h8NxSKs8eDuRkZG/YMJ+9rKDujLUGtQRI0awjIyMB6nGWOLbUNOjAKwesdvtvxaPiQGkqB1UJ0yYAHKUwrrQWavJJCOmI3xNOW1ubi7in8W6p3H908UZn+mpAAwaNEiz9Xdqy16am5srFIklJIGBgdH8uDgNIOkYscHE7w5ksl+/fuzFF1/sRcmoxLehRprw/c4774wsKSnZjdsw7NAsAqua1q5d21stKJArsIMqVkSxk5yvKAHNzc3l+JgOz9bzFIDo6OggLRo7yqzFcTgcFxU/kJA4HI5q1joCkSbqriFaTOCzaMYNCwtjH330UT+Hw9ESkEq+154F1QbCktRrrrnmONXZ8/84lgQcHz169EyHw3GJqVzXFXh035E53FcUVYfDUac42IpWzxgfH99LcVAjdNM8Bg8eHKxFY4fNWcikpfl+0N5I63u7wN+fnALoGuK0iSh/JpOpPDU19VoqHgXV6Ep6BpmZmRfPnDlDrvGnOmiQLaPRWGW1Wt+80hek5ggHDmqPP/74xH79+o12OBy1paWl+e+9994xX5FNp9NZy58dv2+t2rjBgwdrNh2O0U0B6N27dxCsydYasSFuamo6r9fzexNQIZqbm6vxmmNJx4gjNv45ISHhUnl5+SSr1VpIRWijGmJJzyAlJeWV3NzcEKYiOxxRKYC9I1JTU7vk9U8hyh8s0c7MzDxgt9tbttzmOw+CsnrPPfeAtWHxunXrXiAu41U0NzdfpKY+tKRv3749QwEQG7Y+ffr00kMBQNEApQWgk9TU1BR1lNJbpwZAsYGwoNC4UX/4vPi9dUqkiTHW4HQ6IbAFCHVT6/96xtgFh8NR5nA4Ss+fP//RCy+88OW+ffva7LdUR08dk3gveH25moK3atWqBYWFhY9R8qA2Rw8MHDjwZzysLUftHh0Bv5s2bdqI3r17H7l0iW4eQTkoLCx83mw2w58B39ubAKsGc2EB0YKgoCDFC9QqL4obuxPxgQICAnTTejgNDQ3SB6CTFBQUVEDULKqTN6D49jExMRBcI765ubkJqK+vb25ubm5JAP/hr7Gx0dHU1ORoaGhw1NfXO06fPg2dJiga8BkWxjqEP6AlHRMaRKbiuavmxUsd0wpeoZ9//nnd8iDRh850/osXL761oqJiCyM6eEZMZXImTpy4MzMz82vxnIEIMd1Z/Pz8gqdPn97S+YtTftgKAZ/tdjuzWq3OjIwMAyMUHW/AE3xvYDCMj2m2BFFxRCMCAgLcvg9ARzQ3N8udADsBVI7PPvvs1IwZM8iKgpcGVlRUsN27d+cqEvZQ5Ny+RG0lEjB9+vRRzc3NnzOVzl+NhIQEh8VimS2eduX03BnMZnMddOy8w8dxBrCyn5ubCzsUztuwYcPLeJWAN8h5Y2OjqhOgVug5GNYzEJDum543NjbSNi5JG7wig5kvJCSEUedwRa+rq2PCRkA9HqpRln4UPYOOfGZgA6zAwMC2baop6xoFrB5JTk72p+IHXCl33333cJvN1m4kT8UoEJexwveKiopt4i29Scltampq1wfoUS/9/f17ngLg7+8fojioMTU1Nbprf56OOCIZO3ZsueiNLI76cWMBJs2e/u5cIa0APQe1sob6smLFinq1uXZRecAdU2Vl5TDY7U9Me7XKgNFofBxfTwz7rRYCHBR+2CeEf/cmJbehoaHdy1crK3cSFBSk22BYMwWAiC7lCT4ATYqDEgW8UjQ0NOxwZeYTzYX9+/dfpLiQRNLDcGXST0pKWgRbRashWtdEZXvs2LEzP/7440rxZ3ipYFc6Mv67gICAO/gxvOIHvosx6/EzTZw4cTQ+5w1K7oULF+r1zqefn1/bYFhNVtx2b8URN4E7Cj8/P80iAaoBjmgqpyQCXCiPHz++G78XLLC84SgsLJzSXXvq+yJyCqDnoNbB1NTUKDxCcVouJ1yxNhqN72/YsIFc7+/Kz6CTDODJsNMf9mPBkUD5lC4OKOTp+Pv7+3lAXnVrKN2uAKi9XIfD0ai3V3afPn10t0J4A7ycduzYUdTR6IKXNyzxXLp0qddPA6jJ79Xi6h1KegZ4L3iq4xRH0yaT6ZDVav0tJTtqv+sM/L5NTU2fulIiRKsfVu4rKysPs+5RQjSFe+DrmV9YiaCX1cTtCoDavBSswddT84J8hYSEBCpOSNohlhFo/ZMmTbpEjeypsgwLC/tLR2k8HdlRS64GVzIfHx/fzv5PpeXyB5v8pKWlRavJIxUoqDOI9zx9+vR2Kg/UdfH19+zZcwg/gzfU98DAwGBK8dISPVciaOoEKAoNX3+pJ4GBgdIC0AG4otfU1NxHbQSEj8HvbDZbGKwG8KY5QYmkO3HVudTU1DzJP6ulAYYNG8bS09MNnUnbVcRR/datW/8dERGhegXs6Mv/x8fHvynuUuhN9T04ODiUGtBoCSxH1+tdKVtyjfCE9Zeg/SkOSkh4pX7mmWf2MyLYDq70/HtqauqHcumbpCej1rhv2rTpryaT6Qy1nJZ/Dg0NhY7ZH5bhqo2+rxbR0dDf3/9GfDkcYEt0NhwwYACzWCwzGdEGeAPggEe9dy3Rczm6bgoAXn+pB3ouv/A2xEYgPj7+fby+WZwbFCuR3W6/IyIiIpS5mA6SSHoqqampgxISEqoZ6kDhM4z8P/74Y9gpst0Q1Z1156WXXvpXbGzsk1RHiCP9QVyQgoKCQaCceGuAK4h8KH7Xo13Sczm6LssA2WUFQPcpAFz4ks7x3XffPS6WpzgyoHYKXLhw4TedDXAikfgarjoV6DytVmt4VFTUb0wmUyXUCxj1x8XFvfjiiy8aTp06dR5b0NxtUVu7du2miIiISZGRkW334ffkUT+NRmPl7t27/b/99tsz3tr5s8urAEIVBzVGz4TjB+YAACAASURBVOXoBq00HiwkreEvDysSaghUOjDD6ZkHb4OX4+LFi53l5eVtccLxdrfYGjB48OBJ27Zty6biB0gkEiV4xI3/dweurgXn5syZM37YsGGP+fv73wDL5hsaGj75v//3//7p73//+ynFD7wQCGNcVFS0Tc+c//jjj4P1ep+ahWvFQnbx4sWG4GB9B+D+/v5yCqCT4IYiODh4lsFgeJ138lwJ4OD0dXV1PzQ3N3v1zmESSVdx1cFy1NKoBd2i0l4plEIuKvE7duyALauXi1YHX1Le/f39+ygOaszZs2d1swDo5gNQXV2tm+cjxxOiEXoLuKFYv379G4MGDXJp+mdCY3X+/HmWkZFxkHXgGS2R+Fq94agtketMO6h2ne7OI3WvzuRPLWSxFxBCvQMtqays7FkKAAgJbP+qt7D4+/v3VxyUkFBhf/v27fsr/l2tLEVnQZvNFpOYmDhHTgFIeiLd5W2uZd1xpRxQx9XOu4JqO6hj7sDPzy+M6ajAwPtq3f5cF3RRAOChy8rKGhUnNLw//Pn7+0cpTkpIqBHIc88990l8fLwiBoD4nhmKEVBUVPTa0qVLb8NpqQoorQQSie9DKQ3UMXdgMBhaBoF6LWFsvW/PmwIA50etX7bord5qth6tSCRRQHnw82P/+Mc/huIlgRwxjrlIeXn5Z3PmzJnAiIqn95pciUSiLa7aDnfj5+c3jgmDFD0GII2NjbqtiNMzDoDmWo8Tba/p5+c3QZFIonhn1OifHztw4ECV0Wj8BHfWanOc/Ho1NTV5M2fOHIMDi0gkkp4F1XZopfz7+fldz4RBitYDEHhWPR2jdVMA/P39dW3wWz3XxytOSBTvydV3KMPU1NRfQUQw7KlMadOG/2w8AkpA8YoVK+6TI32JRMLR0km4qqoqhFuG9WiHgoIu+6Hr1RfqOQXA9FoGyF823o1L0vX3CJUmMDCQ1dbWRuOKq6ZNi0pCcXHx7pSUlFfENc4SiaRno1VnXFVV1c4CqXX7w/de0GsQpKsCwCNNaYFYuHy+5/Tp03o9utdAVQjKYebtt98+FBMT8zhOg6E6+dzc3MfS0tLOwrJM6rxEIul5uLsdaG5ubvkT0bojHjx4sK4h8XVVAPr163dGcbCbwRtZyDnnrkGZ8qlKAsc3bNjwstFo/IIRFamj8KV2u73/tGnT6letWrWAur5EIvE9Fi9efKvFYimeM2eOc9GiRc6UlJRto0eP7q/WznQnAQEBfnq3NU6nM1/4rHnfpJsC0PqwdsUJN9zH1ffGxkYyneQ/UOZ7DD+elpb2i5iYGMV5tfcrKgbwV1BQsGX16tXO2bNnk/4ZateRSCTeAa/DFoul4MiRI5/bbLYx1dXVrKKiAqyB84xG49nExMSH3P0w8fHxuseBcTgcbQqA6Ieg1s52N7opAK1OeMWKExoTFBSkeyQoX4FHBMzMzDTATmYYUaun5vz57/Pz8yE+dkFiYiKMCm4Wz3dkwXF1TiKR6Auvw6mpqX+02WzjcX3lA4Hi4uJdEKdfrX5fCfi3N9xwg3Zz0Co0NTWVXO1zXQ26WgCam5tLFCc05te//jWpBcoO5MoBz9bNmzcboqOj212D7xnAWv0w+D4CWDHgFBUVwajgqwULFjiXLl16h9q0Aj4mIw1KJJ6DGAekdZQbkJOT8wAjphjFkOKwSc/cuXON2LH4Sttm3Mb069dvuCKRxjQ3N5czoi3z+SkAeOCmpqYKxQmNiaHs1USBSDpXplxwYWXAhg0bDBMmXA61IG4wwtBontrsRLxWZWUlBA/6X9iBEOYMKWVB/C7LTiLxDLhVjwPfly5d+msxc2IQHnFnUajH586ds/n5+YUwwTpwtY7CvH0IDg4eozipMfX19eXUs/j8FAC7/PCVioMa06dPnxv4HamCkHSMaL4TBRcCXMB0QEJCQi3V8TM0YucjBdyR84oPc4QwZ7h8+XLn448/fl1n45RLJBJ9oOpor169RopthWgVxIOChoYGNnfu3IsQN0QcGFxtXYdr+Pv7j1Oc0JiamppKPdst3TYDAs6dO6e7AhAQEPD/8c+yA+k6VPAfbNIzm819TCbTv7l2z03/BmEbYdFCgMuBjxD470pKStjJkye/B2fBWbNmtVhwpPImkXgm2M+ntrY2Hw8CGKH4888nT56EgYSTOn+lwDUCAgJu0vuFlZaWnlGzZGqBbpsBAR9++KHuCoC/v/9UxUFJp6EqL9WBW63W66Ojo38DVgFR8xfn/HijICoI4rW58sCP5eXlgRJ5MC0trXHGjBmjmFQEJBKPA3f2zz777Bc8j1TwMNE3iJ/Lzs6GVQOfdacTYHV19U8UiTTmwIEDpygriVboOgVw4sSJ84qDGlNUVOQnO42rpzNCu2nTpr++++67gQkJCS29uNj5M8HUz49TmrE4X8jvmZ2dHdDc3HzYYrGcvuOOO4YobiyRSHQFTw3GxsaacZ1W8wni2Gy221avXr2yK+01Vi7E40eOHFGk1xoeCpjKrxboqgDAfgD4BWi9DrK2tlbRCXkCVOfnCzidzqa0tDT/8ePHL6YeRxwBUM/vyhHIZrMN7Nu37wlYXzx58uSBvvTeJBJfYu3atRkmk6mIqSzdxfWWWwQLCwvXPfroo53exI3qR1qVjiC924ZRo0YpjlH5dSe6KgDAuHHt/TAoYXA3/v7+IfwWVMfibqj74fXuWHv1NnCe161b98JXX33VDxoBaspAVAKwJ7E4YqCA9cWRkZGnLRbLt4MHDw5Ve29d/S6RSLqPtLS0cbGxsWSdFOs7Q/1CU1NTHjgHXkn95G3p7NmzW3YidTdq/QkcHzBgQJHihMborgAYDIa/UuYeLXn44YevUetsNXoHimOUKcybl7lReT516tR5q9U6rrS0NNxkMv2LH8cjfOwnIK4rpuC/t9lsP7n55ptrzGbzAb7PAFN5j1S5U3mWSCRXh1j/0tPTDXxDHBGq0+T1tKamhq1Zs8bZmfT4PK/TAwcOTFAkcgPU4I37OTU1NX2ktyjprgA0NjZ+Ta3r1rLxHTx4cAKeetB79EdNhXhK3robu91enZaWdmNOTs4A2EsAOxKKz8sdBynnIawk8OvY7fZfTpkypT41NfUdGDlQsqWmqUskku6BUrwhXsi+ffv69erVq+U7HvnjNoCfB6fA1NTUV8T6qwal3Pfq1euXKsm7HdyGwzPAX0NDwzd6ixb9tjWkrq7uX+JIV49OLigo6AY8/+RKoNwB3HPevHkJiYmJc5YtW3YXdFRq+OrItLS09JzVav3Fvn37+sTHx39KPSfv3LFlRJQfNUfCnJycGffeey9sOPIK3wOCqTRMEomk+1Dz22GtlsCQkJBYXJdxvWdCzAD4DruILl68+Of4epT/AD7n7+8/RZERN4HbIf797Nmz+VrlQQ3dFYDDhw8X4gZY64Y4ICDgIWqkrRUrVqy4BzqmkydP/lBUVPTaoUOHPmztqHZQFYY65sl0Jr8olkBtenr67a0+Atl4egZbCCh/CTXrAPyHhgPeb3Jy8tM8wIg3vleJxBtwolghFDt27CgcM2bM/xGVd444QBRjgrDLUUL/DtN7xCXbgfuYoqKiFidhraCe/7PPPivXu/h0VwD279/fEgtAXPepdUNcVFTUsimEHs5/SUlJSUVFRW/hET+cy8nJeSQtLe0fOG9qlchToTpY6l3jY60+ApNOnDgxyGQylYsNA/YDoN6JQSXYEP99Xl7eU/fff78TyoBaeSCRSK4erJCrOd8+/fTT78bHx7+MrQBYqRedgsGSt2LFinoxPgg14hePgdJfV1enaclSbeDBgwfPKRJqjO4KgMPhaGKEmURLQBjU5obdBTwrCG9BQcEacW07xmaz/XTJkiW/xAJEpfVkcMWk3rWaifDbb789Y7Var62rqxtmMpnOq/0eg5cMUtfnZfDQQw85V61atagjB0OJRNJ5qA5YzbwPZGZmPg5xQqi6ylSUAdg0LDU1dYurqQMm5OW6664Lo/LhTsR8cwUG4iHojSesAmDcC5QqLK2YO3eupiFl4VmtVus6hjoqnAYYMGDAbnzMW60AV5Puo48+qrRarf1CQ0PHxsfHK86r4eqaHIgHUVhY+PzDDz/sTExMfKy5uVmRRkROF0gkHXMl7dTq1av9+/bt2/ZdTXlnwvXz8vIWPPLIIzFUGjEtnP/Zz342jmlch8UBLnT+Y8bovg9RC7orAMCwYcMUGyJo2cHBvSIjI39JLblzJwEBAXPEPKgpQDabLUKOTP9TgXft2lWSkZFhCA8Pj+ObOXbWIqB2Tf7+L1y4AKa5V+bOnetcsWLFfXiDIvF3HV1bIpF0DLb+QnC44ODgNg0f11G1umYwGA66Utz5NcLCwjQP/87bCx7jpFevXn9WJNIBj1AAmpqadoodHDUadidwv6CgoGl4zsldCALcbuJfNJfh+yckJIThdD2d7du358OWw8OGDbspKipK8TYoz2Fq/lFcMcC/nzlzhhUXF++eP3++c9myZf9D/Za6l0Qi6RpUx/7KK6/kxsXFZVGrfdSWCp49e5ZlZGQcpOq4WEcDAwNXaFVfKf8HOHbp0qW/KBLrAP0mNebChQufqHl1awHc69SpU3cwjZQP/nzNzc1/pebIqNHmbbfddp34vSdCzf/B35YtW7555plnDKNGjfqvyMhIxXsUnQfV9h8QvYzF+8BOZGVlZR/8/ve/dy5ZsuRWqnwwUkGTSDoP1QbC56ysrJSEhIRz3EFXzVcKWUtjEhMTHxLPiW0GXMtut/tpZVHFG55xTp48+Z0isQ54hALwt7/9LVtxUEOggI4fP65J5y8Ke21t7Qd4q1sOWhbH+vbt+0tGCH9PAr8TA9offPPmzX/bunWrISoq6jdidDEcVtjVe6ZWW8D/Y8eOweYhny9btsy5YMGCG3B59vSykUiuFFdtbmpq6oDw8HBF7A8RHhiMU1ZWtisiIqIlBDj2mRo7dmx/LVf84LDmnFdffVX3MMDMUxSA7OzsasVBDeFamslkCnP3XUVBKC4u/jfeGx+bu7imGhAQ8AjTwTriaaiNFphwDnYd3LZtm2Hs2LH3DhgwQGE1YCqdtahUqDUQhw4dgrXH/0xKSnLOmTNnAqVYqP1WIpGoQ9VN8JRvamoa68o3CyvusMzv8ccfr6Hq+29/+9ufqSkS7kBs3/k9g4ODWyIgegIeoQBA53vttdfq1nDyDuL222//GT9GCdrVgq+5b9++Y9RoVswXfyc8VgHroR2M2PGrlY3YSIBMbdy48e0dO3YYYmJiHudexWqdtPj++WiDoTITHXkKCgrYjz/+mJeWlua85557olxN4Ugkko5Rq5vg9BsfH/+mq7qP24icnByWmJg4j7CkPkSZ5N2F+Cx8MDdu3LhTniIOHqEAAP369furU2dzat++fRcxwkzcXeBrwnbIoaGXN6vjmqLac0OsAjF8bU+DGvGrgdNu2LDh5V27dhliY2MTQfvGYOuL2r0opQBikjc0NJRZLJaaqVOnjmAdKCkSiaRrQF3KyMiYOXToUJd1C9fbkpKSbWKUQDh29uzZ+9R+705E58WmpqY3PUUEPEYBqKur+5PioIZAAR06dKjFEdCVuam7iY6OLmRCp4Ej1nHg+3333dduA2nZyXQeeK9r167d+Mc//tEA3sViEA7sKIStMa4UDp7GZrOBJnfEYrEcueWWWyI6s0xQzZmJSiuR9FR4XTx69Og1uD66qkOg1FsslraQf7BEsKKiQpHWnYiDCj7IuHjxou67AHI8RgEoKyv7WvyuttTDXcD9zp8/DwXUMkSkHDfcQUNDwxv8sgYhbC32UgVhjY6Ovkmc75JzzZ2HvzOwuoB38e7du0EReJFStESHIzy/yNAIH/sA2Gy2EeHh4SctFsv33BEJKxjidVx9l4qARPIf3nvvvWNxcXFb1Sx0TKibUM/ZZQudX2Ji4sPwefr06SNwWncj+nLxwd1nn332L7ffuJN4jALw1ltvtdsYQevAN7yx5Uu9tJonOnfu3N/EPFAWAK4Q9O7de74rBzWJOrgDBgtAVlbWE2+99ZZBnF8U/TEY0UiIPhsiWF5sNtt1N998c43ZbP7cz88viLoWU+nk1e4hkfRExDqZkZGxEPzFOqo/MNrn9aisrOx1g8HgFxMTc5daPXQnopM3a3V6p/KtBx6jAECDDPPheo1u+f1CQ0PnMQ2DEb3zzjt54nfKIRCEGd5PWVnZrYoLSDoN5bEPUcdgfnHfvn29TCbT+/xaahEA1SxDauZ7u91+65QpU+rNZvN70Ajh31GWASatOxJJG9i5NycnZyg+R33m9QpWBZjN5tO9e/dexog66m6cQgAjiFPCly16ghKgaJD0JDo6ukQM9qBlI8gL6cSJE79jGjbAJ0+ePI+F2In2BoB3AkrAxYsX26YoJJ2HMr3jDtvhcDSkp6f/dv/+/b2MRuOXXA7xfCM1LYCXAFLzkjk5OXdPmzatOTU1dZe486Pa9IBEImlfh3gdO3DgQFVsbGyaWD/FEbYIt8zZ7faw7Ozs8YoEGmBoDWIE+Rs0aNC7YjukNx6lADQ0NGzB869aAoV0+vRpuLdm2zTBcxqNxhL+Xa2z4sKyZMmSnysuInEJVdGwiV8YZTRYrdZb7Hb7AJPJVEj9hrX6EoiaPbVckMMrf6si8NB9993nTE5O/gOMTFwpDhKJhCnqB/xfs2aNdeTIkW3ncMQ98T8+r1ddg/ueP3/+ZUa083rhMQoAvJCCgoJ3DUI4Vq3AXv9ipDctqKurWy/ehvJy5UIbGho6R8u89TR4A1FSUnLOarXGVlZWDjKZTJW4bMAiA3KqFumLEVMOgrUBdi/7/QMPPACKQCbfwIS6hkTS08HTwvx/dXX1WOxgRyj07ebg8ZJfreDPsHnz5i89qa57jAIAL+TPf/5zyxoNPcz/HBCO8PDwRxWJ3Ijdbv8r1elTeayqqrpPcVLSbeWPR+TffvvtGavVOszf3//ahISEJrEx4qN6NYVVzS+AA1MBeXl5yQ8++KAzKSlpBWXClEh6OlTbCMcgQJDRaPyEWpXDEeumWLf16IB79+4NebmkOKEjuisAuPE1Go2qDaa7wHPwp0+ffkzL+8M+92pOZyKQt6qqqhanFlfpJF1DrTEQj7/77rvlaWlpgf379x8XFxfX7ryaP4B4HVfldenSJbB+bXj44YedEL3MVVrxPhJJTwPXLbPZ/CvoWNXqhVo9UTvuTmJiYrL1vD+F7goA7nybm5uz1HZ9chd45HXixIkWZzut7g/PPWnSpBbNUPQQxZotN1098cQTN6h1WpLuR+zUd+7cWZSVlWWIiIgwxcTEKOYmqSV82Eognhc/X7hwAUI+b5s9e7ZzxYoV97iSP7Xyd/UbicTXgNVRkZGRv8V1yROpq6vb5Gn59CgnQOflaE9vqJlz3AV1nxUrVtxHHXcX9fX1afwdUPEAxHmriIiIZZplTKJQxNjl/crtGzZsMERGRt4UFRXV7hxDlZz/XlxZwJVOKugT7GteXFz81rx585zLli37n46mEqh7SiQ9hWefffb9hIQEj3akhbx98803H2HlX/d8edoLA4eo6dOnO7UqTLzsjjfOMCJPS0vrrfiBm5g1a1bMuXPnDjI02qeAjW3efPNN+qREc0B2li5deltDQ8NnlZWVLm9PWQdcfQeGDx8OI53bN2/e/KnigipQ15FIfBWDwRAyZcqUi4xo0/WG5+cvf/mLgbL86YlHWADEjh6WV40ePVqRxp33Fp1C+EgtOzs7mHtna8H27duLxNG+qyUrEA/g9ttvH6JZ5no4HY3AoYyee+65v23ZssUQHR09NSwsTLVyYwckMeS1KIvivY4ePcrKy8sPLFmyxLlgwYKfKC6KkJ2/pKfhcDhq4+Li1jJi1YCecEUkISHhEp7u9gQ8wgkQj4CCg4NfVGtsuxtqtM3v/cQTT3TY2HYX0BEYjcZzDOUJLwPk+bvxxhvna5W3ng5eWkTBO+5nn312P2xBPGbMmJn9+vUjUrafzsHWJ0b4DPDj5eXlrLKy8tuVK1c658+fr1iqip0RJZKeguFymODVAwYMcFlPtYbX4/r6+nRX9VW3/CmOaAyeD4HvZ86c2alVLtRG2ezyXLtZcdBNQB5qa2uf4FfH2qI4h8wuWwHStMqbpOts2LDhzZ07dxrGjx//BGxBrObQyZByx+FWIEYoIAcPHgRH1X+mpKQ4RUuQ3sucJBI94HUH6kt4ePhU7lPjKRYAyEdpaeke6rjeeIQPAH4ZsD76nnvu0T1j0HDv2bNHs1KCCIRTpkzpcNN/3mFA2FqIXKdIIHELV1ppYSopJSUlubS0NJOHAcadvtoKAobuSykLRqPxo9TU1P8ODAxU3Fsi6QmI9WfVqlVOUJI9BcjX3r17DVrvcNsZPCJH2PwOG7TwMI+u0rpbg4L12XfeeWek4oSbcDqdTaNGjVJcHFsp+P/ly5ffo0gscRtXKm/g17J27dqs1i2Is2DpEp7aofYeYMJ0gPgdY7fb74KogqtWrVpEnZdIfBUs71B/jh8/PpZ6XHfVjY58hIxGY6XWS9s7i8c4AeL5ztDQ0Ax+Xm1dvBYv8/rrr1+iOOjGggwJCUlhaNRHbREMn/v06fMalQ/qmER/QBHIyspKAatSXFzci2Lnj5cCiiN+NZOmOH3W2NgIUwPPJyUlwQqaEFnckp4A1TdAhECTyZRLKQfuGDRS7bNIbW3tcjEPnoRHTgEAd99993B/f/+j4nnKYc/dDBo0iL366qua3XDy5MkDIyMjT7t6NyL79+/3dzqdMoasF0BNdWVkZPwxJyfnAbw8SKyXHa0bFpc9QWMEFoZrr732/o0bN+5RJJZIfLhuCX1F0NSpU+uZi3rTnfemNgTj37/++ut+p06dOs+INkBvPG4KgPPee+8dgzl48Tze8Yn6XXdz5swZNnXq1BGdDcZyNThbY8/DOn9Ks6Xuv3LlysepW0orgGdBVXyY6srIyHhw//79gfHx8R9R5c3BKwc4ovWMWxIgVHRxcfFui8VyED6LafHvJRJvr1eMcJQF36gJEyZsovqK7uw3eJ3FVjp+38GDBzNP7fyZJ0YC5MCLiomJ+VT8zgQlQK2hdEee4uPjM9UctLrrHkx4xqioqD8xFdMSHilevHhxCyM6BekF7llQy0yF703p6en/vX///j5Go/FfuLy5zHMlQE0ecGNks9linnzySZgSCGKokZRKgMQXoJRiTkZGxpPiYIpDpb1S8MobbKEePHjwq4yw7HlK/fOo7YBxQVVXV1v4Z9zxa7lzWklJycNU/roL3IgfPnzYIu40R8GVAwgSA46KrkzIEs8ClzfH6XTWWq3WG8+cOTPYZDKV4PJU23WQoflNUWaOHDnCHnzwwXqYUhPuIxVEiU9BKQJQDyIjIx+kptPcAVVHT5w4sZkRyren1D+PCwUswsMC4+PUi3Y3sPkLxH/X4l7Q+c+aNct5/vz5tud1NXqbOHHi9szMzEdlw+4ddLacoNO+7rrrbDabbSBD1gDxGlQ9oCxHI0aM+MXzzz//hSKxROJj9UlUnOfOnes8ffq0ov50J1S7rLb8j8qvXtDDS53hLxK8pmGTBwz1st1NZGTk82IBdifYPAUCM3LkyPX8mNoyMP65qKhoDiVU0grgeVDlpMb7779/zGq1DvL39782ISHBIa4YEB3/GDHFgBs5+HzkyJHPly1bdpfK7SQSrwQrwnjAFBoa+t+4XrizDecYjcYKvPxPOgF2AvEF1dbWzqVertb5yc3NvVV09HDHPJL4+eWXX87ix9RMWPwzeJMvWLBAERpWWgM8jyspk71795anpaX5R0ZGTh4yZAgpf6Ii4MrMeOjQoQ87s5+AROJtYEdAzqZNmz7icWXEFWXuQKyXtbW1ifyzWt70xiMVAJGNGzf+Se2laaUYcJ+DZcuW3caPqeWpuzh58uR52G8ePyfWbjlDhgx5V474fRco261bt3734osvtoQXhqV+FK5kgMsL7CcAu0+qKRH4s0Ti7TQ2Nk7mj4D3WbkasM+VaI14+umn/+zpr83jFQBwjIqIiCAbJ620KV7IAwYM2I3z4M77OZ3O++E/NYeE82Cz2Ub5+fkFKS4m8WpEWYfPMC22bt26F/fu3RsYFxfX7pwIVTdEC1ZNTc3B3/72t8O5HIkNmZr1QCLxVkB5Hj9+fJv8d1c8GTW/gjFjxjBvCNPuDQoALKV4Aa//13KEwu9ns9mGQLx+ptLAXgnUc/Brr127dg81X0VpnEBycvILiotJvBpqyoe1Lh3MzMyEiIIZ1BQR7sTFFSVcpsLCwo7C9BGeQ5Wdv8QXOX36dDxzQ0RA3jeJA7XAwMCFioQeiMcrAFBQ33///VpstlFbHueuPHBWr17drTsEUsoM/w5mXpPJlI09vnFjzq+Tm5s7T8vlkRJtoCw+vMyzsrLMYWFhsb1791aMbMT5Tmp0X1NTA2ulnWJ8AUoeJRJvB2T61VdfzYV9+btbvqmt29evX/+KIqEH4vEKAPDxxx9XRkZGttPctOzoxAI+dOhQKr93dwkS1kbF78ePH59Fjfjx8/M8rl69+veKG0i8GjySx7K3ffv2wk8//bQfhK3G+wpg6wA+n5OTwywWy1uUFUEi8RW4TOfn50/ozkeiVtzExsa2WOgUiT0Qr1AAWs2VZrHh0rKREr2qa2tr2dKlS2/t7nlSNWUCYg9AOEmGrAXYAsLPVVVV/UFxEYnXg72XsexBuNEtW7YYoPERdxY0CJEB1TYVysnJuefJJ5+8S00GJRJf4e233z5ELS2/Uqgpt8bGxpne8rq8QgGAF/vqq68+5ykjk9DQ0M+7Oy+urte/f/8WgRKFjLKAwPnq6mq2ePHinytOSrwWNWUT+8QEBgbClIBh7NixbefxqhG1ZVCVlZUfwo6CzIUyKpF4cx3i/48cORKnSHAVYCfArKysN7V8tqvBKxQA1jrClj3ZRwAAIABJREFU4cvi9HACFD/n5eWxW265JUKR0E2sX7/+TbzsC5uFxUY9ODj47+I5RjTqspH3HqjOnxFyyf+vWbPGEB0drUjPwY6l8PnSpUvQcOXh60okvlaXtm/fng9e+mqoWdnUEPsj8DGATb68Ba9RAFpf8CzmYkTk5nu3+3zrrbe+5Op8dwLa5bhx4zaJlxRNT7A0TGzUi4qK2MyZM8cwNOqT87y+i1i2oCyuX7/eAH4zHEoGGJrDzM7OnrBw4cKf9vR3KfE9cHtXX1//M/yQvG5cjY/XuXPnZnjT4MprFAAowMzMzDfE71rdlxHCkJub+zu+1SrlpNfdrFmzZjm1GkCc4xVXBkRHRxfjZ5Cdvu+CyxaUgP/93/8dwDfQMqhEBxTXMbf6uPyDml6SSLwRtcHZ888///Xw4cMV9YERdakrbNy48a9qfYYn4jUKALu8thKWxVUzwozpLqiOnTeaSUlJD4nHsLm9O/PndDodJpPpS1ejeDGvNpuNzZ49ezyVD2n+9y0oeQMZKCkpOTdq1KjfUJHPsNLKO/2zZ89CPIlkKSMSX0BtcAafg4KCfiPWHcqhryuYTKZKcarWGwZcXqUAGC5HMHtQ/K5HHviI6ezZs7sY4YylNtq6EsSG+PPPP59OmXHFvIn5GDJkSAEjrBiuriHxPtQsPPB906ZNfzUajXtwoBLc4IlOTCUlJZl8O2qJxNtRa4efeeaZv4aFhSl8qESFuCPENvXs2bNt3v/eUne8SgEAnn766Y/UCtQdYO3RKezIdurUKbZkyZJfqjljdQfidb744otTRqNRsQSQw0d6XEEpKChg8+fPv4F6Bjkd4HuoNTrp6en3Dx06lGzUxGkkYRkTM5vNT0sZkfgqvB2PiIiYzYhOX62NxYgrcJ577rlPmQt/G0/E6xQAKJj4+PivFSfchLjsjupAnU7nAXxndxb8kSNHYvF6blGDFRt0eFfBwcH/pEaGEt+AMmFi4HhdXd04qlESFVbx9wUFBU9BmGCJxNtRmyID1q1bt7NPnz5t7SWnK3sFwO/Gjh27FQ/+5BSAG2hdhveg1vdVi7B25MgRhrdXdUfB8wZ+x44dhZMmTVLMbeGGnZt0Dx8+3GKlUHOGkXg3uLFR8/d4/fXXi4xG4yeuZFP8Lci61WrNVCSSSLwMtZVQvJ0cNWpUIj+HB1OdAdLt2bMnyRvlwusUAODdd98tHzVqVLtj7u7U8AhL/Ny/f/9vqbx0Z57E++Xn50e7GslhB8n6+nqFlaK78yfxDNSsPVDWZrP5V2CqVAOPkMrLy5OpmAESibfhalSekZGxEeqFq3Zbre0HYFq2tLT0nOJHXoDXKQC8Iw4KCrpXPI47QEYUlLsoLCxksL86Q/M/3XV/LJAQztJkMp3DDbMBbU3J73/ixAm2cuXKxxhSZORUQM+Alzl4KMfExGRQD005QV28eJEtXLjwJ7jxoxpIicQbAVlurRebXI38xXYTW4Jramp+xYh22hvwyikAeNHr169/mxrNYO9mrYiKirLhzrW77k89j81mixc7erykC9+/tLT0Fb71q2zAexZiB56RkWEODg5WPD9lGnVe3opbYT2SMiTxFXjdsFgsT1IDI2rqQGyPYRfOTZs2fUIN+KQToJswtO5qNn78+D+5uoOWI1ybzRZ81113RSpOXCVqTl779u2rMBqNJXh+C6fj3yFoUVZW1j+YHPn3SEQFMSoq6klXnbho9rfZbKEGgyEYn3f1e4nE24DB5MSJE9+gplapARVfRTB69OgXsAOt+FtPx+DpldiVSX3y5MkDhw4depo76GETDvUbd2IymcqtVuu17nwHTBCsiIiI0JtvvrlG8QMBLLihoaFjd+3aVaJIKPFpxLrQ3NzMpk+f7hRli+rQ+bnY2NjEtWvXbsTHJRJfQKgDAVOmTGmkOnt+jPc13EK2f//+3g6H45K31gevCgWM+eabb86ARzxeoufqN92N2BjabLZR06dPH9Xd91BzQIENkoxG49/Ec5RCJx4LDw8vViSQ+CyiVYjLATReJpPpG4bWO2M5438XLlzYgOWRkjOJxBvh8tzU1NSEN11zCkGysLU1ISGhyel0XhL7Hm+rFx6vALjqxOHcjz/++Au1EYwW4PtOmDDhMOvG+R9KoRGPZWRk/IoLKLV2FQswLAtctWrVAsWNJD4JVTfge1lZWdsW0+Ifljv4X1FR0WJtomRRIvF2eNuYkpKyEqxjopOfOPIXgePV1dW/wse8DY9XADrqSDdv3vxFv3792gVy0FMLy8nJUcQFuBrUzFHC96Zx48atVpuHEn/D31FJSckWcAiUo7ieA5YPmAaKiLi8ozWlJGAee+yxx9TkSyLxZkCuoeMvLy9fh/f25+Dp1759+4Lz39/wY3tbHfFqCwBn+PDhaWpOcHoQFBT0rVoeXDWyaqhNAXDWrFmzdsiQIS6fXTRdtToEFqillfguovwNHjyYnNenrEiXLl169krlVyLRm47kNikp6ZG6ujrS30z8zK2s11xzTWJnwwW7m65OPYhpvXIVgAgURnp6upUfoszkWuSBA/ctLy9ny5Yt+x8xjbtjEzgcDhPlKKjWqNtstvE8j5TpV+IbuLIeffnllxuxbFCWAGjoYOoIVgNIpVHibXS0agWOnzx5coerNlr0n4HzEDxIkUgHRCdeKr8UYlqvVwBY6xKO+Pj4N/l3J9rdzN2Ic+9cQM6ePfuBq9UI3Zk3uPbLL79sN5lMhxhqxPF8lkhFRcUH4PlKKQ4S38BV2f79738/FR4ezsS9JbAfiWhZW7ly5dzull2JxN3gQRCW36eeemoKbIPNocz/vF2Hz3FxcX/CzoJ6QSk2VH+jhk8oAEBmZuYs/llcFqgFXNkQO10QqKSkpN+rFQZ17GpotYTEYBMW3gJWBKYCzGbzj2p5lPgG2EIlykFkZOQLXEbU5j+5vDY2Nj4vYwBIvAnKuonbuvPnz+8Tv1OyLdabzMzMuVQaPaDqI1Z0oJ2/8847Iw0GQwh+Jp9RAJxOp8NoNH5KjWI0uHfLf7HzhTwcPnz4D9QWrO66f3Nzc9P48eNTxGNqQs+BQC8rV658hKkIvsS3wOZCu92+XjRvUqMJ/r+srAzSBLmSJ4nEk6Dm8kUZh43SYFt3qgOlMJlMhQ6Ho9ZVGi2hpnj5s9xxxx1DnnrqKeeMGTOcwcHBx6dMmXJx4cKFTr5UHX7jMwoAsHXr1mmURqQF2NxvuLwFK4SYfI26fXdPAXAzVVZWVhbs/c4IxYSpCHdxcfEO0A6pcxLfAsvde++9dww8ml3JpNhwrly58lFXaSUST8VJxMSA7dypOXS1tjA3N/dOtXN6QQ32li1bdlffvn1PlJaWtnve48ePw0Dx8IoVKx5ivjQFAJw8efI8aGjMRQG6A1GAxG2DDZe3Lp5jNBrD+G1ddcRXAnU92PudCfnCc7wiXDhWr159Ed9eNvK+AyUn/HtUVNQbavKILWoGg2ELdR2JxFMRZV8cMcNybdjOnWrnqK3fJ06cyPbu3VuuSKwzBhSgCJZ4Hz169EMx/3iJfElJyS4Y9PmUAgAv4Ouvv/6F4oSb7ylqYHj6AY5NmTLlRzF9d99fvBcUNOz9PnHixFcZskhQc/1c0PPy8lhycvIWtWtLvBtXZXn48OEMKt65KD/8eEFBQcucokTiLajJPt7GnZouYIIfVUVFxThKWdAbvIQ3MzPzw8bGRtL/QVQEkpOTN/uUAgAcOHCgKiEhoZZqyNwBnjuihC03N5c9+eSTdytOdCO4oc7IyJg7cuTItnzhzp8aEebl5S1YvHjxz9VyJS0Cvskbb7xREhQUpGhIGNG4AE888cQNPf2dSbybRYsW3QzbuHMo6yin1fO/ZWBFte+eBCjndrv9Lqai+IhteF1d3WO+5ATY9r+8vPx6f39/l52zlp0ZCFZVVdV7agLWHVDr/r/99ttBDEUCZCqNOqeysvLvEPaVyhI1QpR4N1wWJkyY8I1YzuK0EVYuIyIiFslil3gLVJvV0NDwFWU9Fb+LVFZWxqmd0xvxOVJSUn4v5pNSAjiVlZXe7wOACwMeeMeOHYUxMTGKTs7Vmnh3AoJ18eJFcAjcy5Cy4k6+/fbbM7GxsWnMRaeP58dg/uiBBx6ogdCY1HumPGkl3gvv2M+dO2fm5drRKprKysqHpQxIvAU8cElMTHykqqqqRc7FdpFqIw2Xd8Nkr732Wj7/vSe3gVVVVX9ghEWYmt4YO3ZsuU9EAqQ0nTNnzpj4Z3E0o/ZS3Jk/fv+cnJzfta7H7Nb7uxLENWvWWMePH0+mxYoAb/gh6lt6evr3ammp7xLvBcpyw4YNnzhVoophuTl9+jSTq0Yk3oQ4CDx69OgOJgRtU9tNlreJp0+fNmElgnlgGzh//vwbqqurWz6r+XqJ/dHZs2cf9YkpAFx48P+VV16xJyQkNDCio6MK211gD0yj0Xjc2c3bRlLCKZ577bXX+jFBAeJgDVhMk52dfd3KlSvnKS7Yitr9JN4JRNMcPXq0at6x0rx8+fLfKBJJJB4Kl9/U1NR1tbW1LZ/xNBcG2m0YPEFfwoh+xtMYMmTIAVxXKec/OB4SEsKee+65T31uFYBo+vjqq69avOD0LjDe4UMhFBUVwVrqR9yxGkDtOU+dOnV+7NixM7F2C78Rg79g60hxcfG2e+65J0pxQULDlHg/vXr1apsGEKGWEYWEhCTLIpd4C3x6s6CgYCXPsmiJxR0lP1ZdXT0JP6IntX1Cex1is9n6MxSZFnf8XOmJiorKMvhSICA8QoH/sCLAZDLZ8UvQAy5Q8NcaeCeou58fP5vYkG/cuPFNo9H4CX5PVFwATuu5MjWnQIn3I8pIbm7udiwDDMW24Ofz8/ONagqnROKJZGZmfkwtjRM7StFROiEhwfHyyy9nUwqxp2D4TxyXpykLBbZygHM8uzw13KLs+4wCoNaxp6enT3aiCFBqabWA58FisdS78/mp57Rarb8aM2aM4neUpzcTtOa77767Bv5LfA9RYX7//fePwVQAhu8RIMoWrDOGUKOKxBKJBzJ69Oj+drv912qO4JRf2Pfffz+SEdZVV9ZWvSgqKlog5km0ZIjPCH8QLA9C5zNfiwRI4XQ6L8XHx7/taomHHmRnZ7NVq1YtcNetKSUHjj377LO9YM23eIzSikV+/PFH2NjIKWrHEt9kwoQJ31EPRjWQN95448OKhC7kqDtwtYIGVq6sWLHintTU1HfMZvPHUL9gt0st8iXxbB566KGCzpS90Enmg0LMj+vtBK2Wdzj+1FNP3Q0KudiW42ldcYBXVlZ2d9uUh+KKPkbraPte7Oim9kLdjXjfgwcPbsE7NLkLQTAaBg4cOFkUIIMQMph7xmIgprTVaq1hKsIvG1bvp3U5YAp+EHEKTSzngICADVS5U9ak7oBapsWZO3eucebMmc7i4uK37Hb7DBjtFRYWbpkyZUrjqlWr2uIWULIr8V5cKYSc2bNnj7fZbJEGFAqYklsu71u2bPmpIoGOUNYK/hyNjY3vMRWrL7beDR8+nO3atauEp/N5BQAeFOY9YmNjs5jQ+VMC4A7UBJPnIykpSRGDn7n43ZWAG+StW7d+FxcXt4laFgkCQ60DhzR2uz3UbDb/ncqCbFi9HyjDzZs3f4EfRE0Wc3JyyAbYVSN7JVBOquI958yZM+HkyZM27t2N73vw4MHnExMTH8a/k/iGzDKizDlQ1n379i2gjmN4Rzlx4sQ/w74yigQeglgPHn/88esqKipUn9+AIhz26dPn/nZTBYpf+Bi888vIyEiBpQ9UwWsJ9qbOz88HJSAJC6dagV4JVCXJzMx80mg0nsHvAysFWJDsdvvPk5OTn6OyIRtW74WXncPhaAgLC2v3HJT5nzN79uwYtXPdBVZSRZMmbLR14cKFPMoBigNyW1JS8rrBYAimlFuJ98utGqtXr14JHSQeBFG/486Aqamp0z1dRnj+Bg0a9D0jnLlxWv63fv36PeKz9QgLAC/8a665ZjY/TgmAu+/P190z1GAWFBSsAScV6lx3gkdpZrN50LBhwxR3ULs/P56Xl7ckOTl5HaUkSCXAOxGVxBEjRnzSrpHwo5sJSBMZGXmHq0a1u8BTeADMe06ePPlHcFDtqO6Af8CqVavqxGWvEt+RW6pMYaVVYWHhOobaYaYyKALGjRu3mnKE9URgiTbsM8OEoEb4mUSFOS4ubieuy3TN9jEE7Wcn7/DUGgp3wBsdvgQDz6VCXqZNm3aWf6eE+WqhrAqQn61btwby/eCZMNIX80JNm+Tl5a1MSUnZgLPlqkJKvIMLFy68SJnaqeVQvXr1eopqeNxZ/rz+pKSkOE+dOtU2clO7J58GhJ0Mk5KSLNIC4HtQU5Zms/k4JbuUnMKxQYMGsaysrLXeMJCB/MXGxv6TP4s4uBT7F7Hd3r1791J8nR6hADDhRTQ0NMQrTroRUZjENZkc3uEWFxeDwL7F3DSSVrum0+lsOnHixFBRkAxoaSB3JMG/z8vLW5GcnLxGcVGiQko8H16+u3bt+gzLjYHYTAu+FxQUuD1QFCW3Vqu1+ODBgy2feZwCnEcRXvcKCgrSJk+ePFCRQOITcFlZsmTJrdnZ2QOZYNrH8oTlOSQk5Be8nVOTI62hlG7g1ltvjbDb7W1yLLbPWCGGZzGZTJWlpaXn8HV6jALAC/TVV1/NNZlM2YoEboLSxEScQkS+nJyce5YuXfpr5qYGlNKSWesWyoMHD76eoRG8mqYskpeXl6SmBEg8Hzwygu/gABUcHNxODrD5lB8D8zsPaoVHIFTHfSVg5dVsNu+y2WxtAS3UYrlT8gtMnjz5tLRQ+QbUNCTIw7lz5z5v83QXAlmpyURCQkLT888//wVOozc4L7wu3HbbbR9gK51YP3GdyM3NvQlfh/UkBUAkPT39+oCAy8uDtfQFoMDHjx079jEsDezOfHXm3i+99NK/x44d+6AikYtKw4/n5uaCH6NF8UMXyAbYM8CdK+/cx40bp1CSKXMq8MQTT9zIBHmgpgRcga9LyQa/Fqztz83NfYg65woxDTiFrV69ukN5pfIh8SyosrdYLLtqamralSOlIIp89NFHQzuSQb1pG7X7+QXZbLafqA3oGHovCQkJbO/eveVU9nucAtA6MnGMGTNmISMaQI7acXfkhwlCCiOqp556ilwa6E7g3hs3bvwTXx6INUrKAiAey8/PTwPHwM4+L1VxJdqjZpmqra19RnFQhX79+t2Lz1DXVAPLmVrdW7Ro0c0QO0PNLIqPUcf5uYMHD6bBqgDFySt8Bok+4DKG3VbtdvtD2I9JLFP8m/j4+Hdh63TK2uUJ4DYzJSXljwzJOM6z+Pno0aPxanWhxykAvIDXrFmzNSrq8vQl5eWMAyhoAS9ECLpjsVg+4LdUKzx3kJWV9WR8fPyXotlMfBfUchMubPn5+SvNZvN74jnKTCVHVp6DWkP37bff/v9q50RazY1tgXYo58GuQFkP4Dq33377kBMnTnylJn+u7kX5LsB1zGbzUSqfrq4l8Sxw2cJuq5TZXPSGF+f5e/fuDW3t/8Fy4kmI8g0DxJycnBmUbFMyDH0cTHurpetRToBMaADg78iRI9cypGGJ57VoCLAA847Xbrf/z5IlS36J0zANGiir1XqL0WgswjtjMRVlCeX7bovFcpifowSPOibRFyxTX3zxxanOlBP8DrzrYZkdlpWrKWfk0OQ3bNiwEzzcKXVdXF9FORXnQ8V0Nptt4OLFi2+lpkGkEuB9JCUlLYDdVhnhFAcyIK7C4vIwfPjw6Xw6mHnwIIXn12q1bmEq/RlOD+eam5tvcaXgKltzH4Pq3Pl3mBcxGo2fii9G68IXzTggtNCQ8jwePXr0AGWm7Gg+q6v3x5/h+lardZzRaCxhhJJC5UF8tzabbdTq1audTU1Niny7Ms1K9IOS+/j4+MrOZujXv/5128ZAVyOfWL6g4V66dGkzn9M1CPE01Bo9fG+8m6FITU3N52rXkngHUH4QRwWmh0Q5wk6rXEnlmEwmx9NPP/1nqtw9sfxh9J+Xl9eyfwx/JrHPwG35kCFDILLnl7g+is/WIwIBUZ85ZrP5du7xLKaj0roDJ7FnM/8MBbt06dI6qvGiGq0rfT+UYLDLzjRjTSZTkVpcAOaiwsCocPHixU68GYuW1hVJ18DlWl9fv7azF5g0adId/LOaPKlBOS9xRTE9Pf304cOH28kdb/hwvaBGQ5TCKt7v3LlzMKf6LM6alE/vYurUqWepDIvlj/sCq9UaSimMnkpGRsY71PNxawcPBsSfs1+/fv+no/6vR64CEAGz0IgRI+7H2pNWAmFAgXfE4wA0flar9TB1vrssANS1uEClpaWNS0hIKBStFE60uxQjfAPge2VlJXvwwQcbYf6WofdKCaNEX3CZVlVVfdJRhnj63r17P0J1tp2VP+qYxWL5GMz0YiMnyhsOq83TQEAXfk1qfTQmPz9/maioUnmSeCbOywGhni0pKSEVSTXfpfHjx5udTmetK8dTT1AKhDoVAnP/2KLNCOUW/kJDQ8Gp+118HfxMytrQwzBc9n7fM2nSpHYb3mvZALi6FxQYmNSTk5P/gAvR1e+6em9qHpSTlpYWm5CQUMRQY4vnVvF1Ie2FCxdY//79TyxbtuwuLS0rkq6DZWHbtm2FHV2Ed8QVFRW/dCVDalANLxyDZaWwox9DDRtPL3bsYiOfkJBQuW3bNkNkZKTijga0Plq8dmpq6oGu5FviGdx7771ReXl5yyglkqH2igPRYNesWZMhljel9HmCHPC8mc3mT5mKck31B8OHD19Ijf7xM/V4BYBjtVr7YGcQTyIvL+/3K1asmOHOLFECzzttsATAdAATGk01ocKNOkxlHDp06MPU1NTXKWuHxPOAMgwKCmrxkmYqjYxY1tXV1Yw76V2t3IGyCBH71KaZ8OiHfx47dixYDYa1dvQ3MqKhVMuf3W6/9ZZbbolQnPAiwIoBux5aLJYfLBbLPxITEx/z5foG7Up4eHgZpUS64vTp09GUHHsSogJjMpnCbDbbT13JLxN+A5verV27dqsiAYFUAFqBkLhRUVEtgXAoLUtvIE/FxcXvwAYQ1BwnhatzXXw3ohKQraZtM2GURZlac3JyHk5PT3eCMwuFJ5rgejoxMTEtAUSwKZVqQOfNmzf+al8XyHd5efmH+B5q1iMum7CD4Zo1awx8HnTr1q3/MplM1Z0ZBfHv//Vf/3VEcQMPh9eR5cuXz5gyZUpjcXHx6zabLQE6jKKiolceeeQR5/z582/whbqElTmr1fphVVWVanuDfaoAo9G4/+233z6kSKwjVLsnyuq0adN+wFYvV4ib3nWE8q31YCAQjslkOo9HuHojdqpBQUFlPPQqIxozEVfnuoJ4HavVOmnixInb8f3FikY5aPE02dnZbO7cuc6pU6eOUBudqY02JdrT0NDwCiNMqZQDXkRExM+cKDhJF+UsJCAgoAxfm4/w1Lbyhd3b8vPzB4HFQpSdv/zlL6Ox8yAjlBh+7ocffgieO3euUXEDD4DqJPgzJCYmzoPBAfXOYfXEiRMn/smth96qCOD2YfHixTfbbLa7xH1KqKkk8djgwYNhEDNVcXGdUVNIgbvvvns4TAHzZ8GKAH5GUIRh0zuqnlBIBaAV/hLT09MHQYNCaZR6ITZiMKe+dOnSeqqDdfe74XnIzMx8dPz48YvFc7iC4vcnCip4XjPGjqxcuXKOeJ76LNGXs2fPttsamMsdVT+Cg4N/d6XlCEtGFyxYcLGurk5xTuywqQ6sf//+JjGSG2uVQbvdXh0fH7+HHxevY1DZ9bJPnz426h56Qg1G+PfZs2ePP3jw4DaqPMTflZSUvANhlL21bon5Blmprq7+yoAC/KhZJvnxurq6sdhx1JOBPF5//fXtlmLjpeK4rR04cOD0rpSxUmp6IKjhaBg1atR0TxIQ7KWKVwZQDiHdCSVQ69ate2HkyJG/EI/xERrWxqk8QbqDBw++BvOVeH2u2m8k2vPSSy9lY+c7hoLrcGpqau5iKvLiilal0gmrRijFFnvyi8TExMx+5ZVX7AwpCDwPFovlfrAMMCI4kGJvdD8/8FUBBfs2RSZ0RHwuNN3m19jYWAArmajywJaPwsLCLYmJiY94ezXKzMw8DAMhEWw9dKLl1RMnTty5a9euEqaiUHkCuIznzJkzPjs7u2WNOq8XPO/UNDA4vm7cuPHPjKgnakgFgBAeeImwfaIioU4Y0FIVZ+vKALPZ/CEWZncKNr4X7J7Vv3//cb169Wr5rrYygGqYeQOcnZ2dMHv2bOe8efMSsC+BRH8cDkeDGDpVtADgzhoUU6oDdwVcNy0t7VuYGlJrtCiZAuLi4rZu2LBhp5gWyw049kZHRy/k8qtmOmWtTmXwXH5+fp+p5UUvqKm21atXN1+8eLEt32pKt1gmRUVFOxYuXPhTj3q4LpCUlLQM2j5GlDVTaXPA6z8jI2O2p08tinmHMhs4cGCBeI7q9MVyDgwM/AVVT1whFQDCxA3/U1NTh+EAQXpBdaDssufyXSkpKVu0yhblHPn6668XFRQUhMPck6idYpMrB5tz4T9MCZw8eRI8lz+AxowSbok+QPnEx8eTMkCZXP39/Tu9k2VrJ7YCdjYTZYeay2Wo0TOZTPasrKyFavcSj69bt24rXxao5kwo3husAPPnz79OkciDMJvNb+Xl5SnmhPHzMMHywb+fPHnyH9OnTx/lyc/HEZ9r1qxZMQUFBS1Bm/AUDk4vlnFFRcU1arKlN2r5SUxMnAGxDahnE+HPFB0dzfh2xl1BKgAq888wcoiMjPxvRWIdwOZKURAgNGRSUtIKLXOFNVGYa925c6d/bGwsOScn5peaq+THYP+D3//+905Y24vvI9GPpqamtiVFVMcvjjoef/zxCZ0pN7gOLBssKCjYwJCZX+33XE6MRiOY9k2u0hLKyY3ivfHziJ3B6KnVAAAgAElEQVQJfA8PD/9ecVEdoBr9J598ckpOTs491POIHT9WpPl/mEPv3bv3YZhCUFzcw+DPAiuHnE7nQYYGD/j58Bw/7G76/vvvH8NyQb1XPaDkFwZBJ06caBf1z1V+4ZkvXLgwCadz9Zu23yqOSNrYtGnTRyaT6d9UIVHH3AXWXPG9CwsLNyxfvvx3Hd3eHb4CgknfAcuw4uPj/6pIJNyzo0b+xIkTUNnLkpOTn8d5lBYBfbhw4cJefmNqFCU2xmFhYeT8OTVCTUlJeUTtPAWkGTp0KIx+DZQi6YrWZYHncBLcmfC8QCjrmTNnjnH1DN2FK4sXrieTJ08eePjw4X1qJmFX1xGPwxx6UlJSs6t7ewrOy7u3Ovl+EJQsUc+YkJDQBLubUo+h1v7ohVgOFotl2/nz5zudkwkTJrCXX345G8txZ55RKgAdYLFYrqeiinkKfPRSWlq6F/ZLZ0QFYaiRZm6oALxBSk9P/82YMWOmKxKoTAXgz5zc3NxFTzzxhBO8nLHSQD2fxH188MEH/1LrbBhqeIOCgshgVZS89erVq52yoFbO/DtMye3du7cfrNLpKnCNf//733GufoafKzo6+t8dPcPVIvr2dHR9GBlOmjTpNFeksdUCvzPsB4CVpvz8fFCmdlPp9YJSZFJTU3eAj0hnLUsAhMJNTk7uuqDohOE/TrbBubm588Sywsoefg9Hjx4dRx3vDFIB6AAoiK+++iocO1dQXrd64BTW3R89evQrGLVQjTV1zF3ADlsXLlwYCjHZ1XA1l8xa3/vx48dhuU9BWlqaTYzVTj2LVArcR2lp6Tmxs8GNk3iuurr6J53NSH19/d/E6xiIZV1ix9SrV69xp06d6vzQCAGm4ISEhEuKE0IemCCTNpst9M4772zT/inLx9WiNnqlSE9PPwIWMt72UPVGrX3ibQS+R25u7n1Lly79NVUP9ahTuKNbsmTJbXl5eY90Nj/894GBgXFXoijqCeTdbDaXMcJXSkSsbyaTqQr8sK60rKQC0AlgjnvMmDH3G4RY4lTB6IFBCBIE+bl06VKxGNLUQCwhckfe8fUOHDhQtXXrVgNEY2Mq2illehXzx79nZ2cbp02b1rhq1aolaqNP6vqS7gHeb3h4eLsOkpp3hfNHjhxpd56SDc7GjRvfxGn4f3Eut9XJ6bc7d+4sUlyki5SWlsZ39AuxfkyePPlz8biY3+6QOTy1R70rOJacnJxus9lGMKHOU+8YO95iywC1WuDYsWMf+7W+cFdTje6Ael7h/iHHjh37DB1TpMPExcVlbd++PV9xwsN57LHHJtpstnbmZnFpNS5TdlkpjL4aWZQKQCeBDYOMRuN3rAOh1RrRAgBCAI5Vw4YNOymOXCjBcccUAG7EQQO3Wq3h4IhDOV5RJn08ouTPB+bPwsLC58BJEKYF8L0l7gPe78iRI9sC7agpbkJ5BRhUVq6IQPjtiRMnvkrJkXiPiRMnrn3mmWfeV7tOZ+B5gbXg4qoGlB/FMbvdHmMwGBTLgbpL5vB1/l97ZwIWxZUt/io2BUVUQFxwAQMCDd0kL5M4k5fMy25mJjETHZ3JNppEzaIYF9xYemGLuBGdRJ9xEs3EiVl0yGR/Wf6TyZv/xEmidCOIoOCCCwKKqCwtUO87wnUut86tbrCB6qZ+38cHVN2quvs999xzz8XeO2/evMSioqI0Oj9ZDQBr6S8gAoXI7Mwh96DPSE9PrxEQgaGnwdJLvr1gwYLLEDeJMfjDniGAnUdGRkaq7IbKgXT5+voWsvWAWhqQlYlOp3uFnGjYXTQBwAF0phuNxlvHjBmjWAH7Ko50g25qaoKzoE+BG0k2XE/CGxzAECcwMDAKZpEC0jHR+8zZ51nfAmRZwGg0FoWGhgby0qctCbiW1tbWDwREeKPLjGiiHn/88QkC07nzyiYzM3MOe8gUPfvX6XQvZ2VlrcKedRa2fZw5c8ZAHqWvs0sb5HurVq3K7Kt8B7ff9fX1+wVGK0IjUaclUs/JwpHrpE3R6bXZbMNgd4HgxCDrSnhxBAdhoE1iNUGYUEN+w7p/amrqUDV5cXWW5cuXPwPLOwJnMsWW76BBg2ByNf96v6sJAA5gJeoff/wxxB1UzrBtZuDAgZWgCegt1b9SA33zzTcPv/baa6Jer/9WYDoZdlBh38/OSqR2R0hxt912W316evrfyNkIPanh6M9Aftvt9k7lxi4B0NdDQ0NjsaUa7G+h/XyJSRMmTLhvwoQJ194J9iPjxo27Iysr60WBI1w6AyZYgufASZMmyTQNdPxoobOiomIJ2yG7Ct77yPXly5c3Nzc3y77NCtACJUjHx8fDBGCS7KXUs2w7hb8rKyvzod/ozeVNTOOQkpKSDQca0ddFjm8R8j/8bm5ujqRPdHUXQMtRXl7+Goku1qYE+ZHGM12RVk0A6AJQGN99911tVFTUY+4ww4SKFRgYeGr69OlXnX5gnd31otSx08A9cFlqsVjuABfCIMGyecgzrFRaA4NjXKdOndqclpb2njvsa3ZHIL/Pnz9/1SIeGxwkZnunv7//7Vg58gYwIC8v74uXX35Z3LNnj/jee++J27ZtEzdu3PitwAwC2LNKYHUGuHjx4k+x+NGDP/lOQ0OD8Pzzz9/S0+2HvZ6env5ZSUmJbEmMfY5e/4dZcFZWljcYhsXExMhmiLzvCR2ThqysrKOOwrkSNj2LFy9+sKioaCX7CV4dIP/HxcWlwyl/7ij4Z2ZmXnWHji19CohN1MSJE4Xc3Nx36bDdReswuwgUBpwaqNfr/+EO8e04o/0ouzugJ3H0HfBYtWPHDjAQ7HQsJ0/1JSDvZDvAwsJCOA61NSUl5VVwdELTU7O3/kR+fr7iEar0jMzHx+eXsgBOCovQ6bHW20pl311eeeWV74KDg2UaAmyQh2sjRoz4rCeLm62jycnJvy0sLLyfTa9IGSBjg6G3t/ckSZKujiQvvfTSKwaD4TD2HR7gZheOD3YmrCug0wZ9VHl5+V95r8X6B6F93f98dnZ2huwBN2DevHk32Wy2RF69o9NOftfU1ExylbZTEwC6iclk+k+QxGicWYPrC2BAvHz5chlrPKdET6s6OwwEI8FnANvhsyow7HhYWltAG8gUFhY+N3PmTAk6UDq8oLIycTfOnDmjuP2OLovq6uo4WQCVAfENCwtbITK7aDA6zqwYBsaNAlKXXQFdR2HZ7siRI2+z/Qk9E6SPwCUzxdjY2GXslrC0tLQosh0XG2SwwcPX1/d73jKBK9PPpC+gpaWlDHs3LVyCFpFOM9gVpaSkDGeFIew9aoGO45UrV37E4spOcMj/er3e5ordMARNAOgCtBoGKuD69eu9Bw8efO0F2NqomuJ+4cKFg+yhOzxcPVhiHY3Q4TNg586doA245smKHvyxZzEBgYSBDgIEnrKysrfT09M/wuKhaQS6DuQrORsD08rQeQqGmoIb5K/ZbF4tOFHXSX0DY0BsEHUF5PugCh47duwp9gAksu2PNQQkBn0Gg6EkJydnjcCUC6wTV1VVhWPpxNItdmzlXLJkyVT2Xa4QpLHnoL3OmTPnMiy1iMgWa7q+kaNwSTlcunQpkpz2yMZRTWCz+fT09B3nzp3jxpdON/nbYrHcioXtLpoA4CQSYqgGqrZLly6NExGraIHj4a4v4k13LnDoTnJy8iNYQ6SfETiVsieABmw2m28cOnToJHD1qgS7HsZ2yPT/cLbAnDlz9Lx0ueN6YV8SExPTqR2wnTR9jV2GURsQT6h34OqbTgMPuHfs2LHlnNvXDamLFovlXHV1tawfwXYAkHYAO5PS09Nj6TjQ4cABkk6n28TGEWtDRPA4d+5cPtZ/XW/fQKeL/G00GqWzZ88qHjVNoPMhJiZmKaz7Y/miJjBtCmh5CgsLnxQoAU9g+jd2AqnT6VZLksR1ZNUdNAHACbACJOTn55+IiIh4GGtMatAAiJT1LJk1Hz58ePeqVavS6HBY/F0BlmcCch3+B/Xlq6++Kk6aNCmJl3eYZoD3DSA4ONhK54VSHDT4SO2uZz+mO2kaelYGPzfddNMwtQpYdB06ePDgdEy4p8MSwH/+Cy+8MJm97or4CO3W7y9ZrdZhApO/2DKY0NG/wAz/vffeGwIaGoEZoOk4WiyWpCFDhsjeQb+fzoPz589DfBaxacW0Pl2FjpvJZCqCUw0FSqBh276EbAE0GAyf5uTkrMPihZVjX4L1V7Gxsafo9NH3MGFvxIgRUIYrXJ0MvJfVuAY24AjMgLl+/foP4uPjt7IzIzUNMCReRGV48OBBS1pa2m62cbm68WB5JiCDN53HL7300qZdu3bBsoCN9y6ho5N0FGewoma/LfSAoOPpQF7Z7fbPsYGIzlOho1xuvPHGUFmAPgabvcIMcty4ceggIyCe80JDQ/e4uu7Au8Dwrri4eDkWR4ES5Om+BX7Cw8OngHtk9jl2UAEBISQk5GGJ2U9Ov59+N6T7yJEj60GTw0sr77ojSNxSU1Nfg+28AlU2pH9SSrvBYKg1m82dTmpV+7IeHS84Avvo0aOd7tP9L6d+3UjsH1yJJgA4ACkItKAyMzPn6fX6YyLipasvYVVjtCFNYWHhIyaTqUzi7Id2JWyHRMA0K0Q9azabDSEhIQljx46VPScgHQMPsm6IlZ+G8zQ0NNjorUmsYEy3ieHDh0epLWux+g3xHThw4O8ExOmUQKmjyTVw1Qr1yVV05JdPbW3t9+zsV6l+Qnzi4+O35+XlfS4gAzg2I163bt0H4P+AN0kRmfMYYFug0WhcK/u4g7gphSVxW7FixXMHDhx4RqAEDlaLhBEREQHLHSGYgCRwylgNUPEbCKe3Yn0eu+xD/ocdZ3DaX0+kTxMAugGvshmNxgm0MxO1xJWeHbCCi9VqvQHW4EinhnUMrooHFif2Hnt/27ZtBzZu3ChGRET8gne4kFKjgHVrVj3qzHMacgoKCoqxtVasLAcOHJgoe0EfgMWXrQM5OTm7BGogosPTa+OEpUuX3it70XWwePHiK8RmgtU+0NDxSUxMFDIyMmazcVUSbuH6kSNHOnlpZAVj9rkjR44s4b3LWVitRHJy8qMlJSWv0u9iv41pQoYNGwb+IrxJe+aB1Uu1YDQaz0uMDRObDwKleQoICICdHP/ZU9HXBAAXAoWWl5c3AAqNnRVh8K67GkeNtbCwUFi0aJEEHvWwjqEv4sQKDBs2bPgUPAnecMMNvxk6dKgsvMBfrnmefSf7bUflgDVWZ/EULQOk49tvv61lr/Hw9fW9lXOrV8FmwiwwoIBamU0T79mgoKA/yF7SDaR2A7i/HzlyRJbXSoM5rOWvWrVKxOLHq+OE3bt3HzMYDN/JbnAAt+JkRwCvHSjVAzZNixYteqCsrGynLAAn78k12CpcXFwc0qa0BsU8y8uDnoaXP8uWLZtVUFAwkBdHCVn/Hzly5K+wbdKuQhMAXACzLmf39vaOIvWUnVUInMLvK0gcTpw4ITz22GPNM2bMiCBRUdvgBXFdu3bt+2+88YYYHR09BwQtgRKy6L3RUodL1JycnM2yFyGdDa9zI/dBTQuHsjz11FNxznocxDpw7P3ugNhuKNbGbk/jIYriHZxbqgPScfHixdl0vHhqdKFdaxbd1R0+2Kxv+fLlT9lsttvZ2S+rCma1EpcvX55Ab31z5ts0KSkpP1UqO/YZSZLysWVPLL48IExSUtLPKyoqPuEE6ZROdikmJCTk1r1799aqcekOW+Kggf/h3JKysrI3lPJdZHYDGAyGixs2bPiY/ZbSO7qKJgBcJ9isE/zeR0ZG/kLgNA5M1daX8SeAlXNzc3P5smXLnulpm4DrJTc3d9tbb70lgvMTmMHRxlodjec7i8XSaZbE62QFBaEMtCImk0maOnXqFdhCee7cuaKHHnqo9ZlnnpHAzwCcpY6dFofVC+y77gTEHXwBODP4nTx5Mkh2UaVAeaxZs+ZDptyvtVNsff3FF1+8vSupYW0mHn744bGlpaV/ZOsH+z1aqIXrsbGx82EWL/sAByz+IDzExcWto59g+yR6MK6oqBDAnTivT6CvY4I0/A3+R44fP/43rM0RWOGShAVhf/Pmzf9iv6UW2GVWNv2QrtmzZ9dLHTZYWN0QKGGPPGuxWGR7ol3df4ieoqJUIzCQlpaWyg55IIZ4rHFaX0JrKjoci3xoNpsfUopfbzRG9hvYN+Hac889d3NgYGCM3W4/uXHjxn+AJqar72HD//znPw+Fo5XhMBalvcmAv78/dFQFDQ0N68rLy7/dtWvXMVZ158x31QzEffHixRIMCFhHJDLbycCvv7ukFdJiMpnOWq3WTrsX2M6dDJTQPiwWy0OyFyGws2dY7587d64ETmAwQZHnmRB8FpjN5v/oah3CwoOB34wZMyTefVYAIt+WvdwB8PysWbOiL1y4cEjiHGvLfpPO8/j4+NczMjKextq8mvpOpbikpKRkFhcXpwhU2bL9CZvfsbGxS+ltjth3XJEHmgDgIniFA4VfVFSUgqmC1d45wrnp6enpIgxk2Oy5N+Ov9D2le9cTdsmSJRKsz7IdFz07oxsy29F3CAWnW1pa3rx06dLnf/7zn3+ALVuyD6kcOs+MRmO51WqNUIoxEQTy8/PdRgAQ2o37HgEfGex1TNgBD6CggZK9hANdN8xmcyNZCxaoe9h3yP3IyEhY/hKJtXx3vsvWU9BggbMsVkOADVBwHQ5pAu0Brw1h35o2bdp4OIsEO58DG9RpD596vb7EZDLF9kV/01WwtAP33HNP2JAhQ850ZbIHLuahrNny6gm0JQAXwZOgs7KyUhMSEnZhsyW1wVY0MA6cM2eO9OCDD44RmS1CfTn4Y3mJLbNgYGHp8OT3M888E0+Ms7DlAiV3xUST0tjYCN4IRxUVFS0/duzY13B88aOPPirB/mc4pMldoNPW1ta2H1N50pDBw13SSNKSk5Ozh9eOWS5evHh1XVd2gwN5b1pa2n9brVbZ4C8o1NkBAwaAcfEg0Bry4sODN/gDO3fufIwtSyw8uWc0Go1YnrAaEvIsDH5eXl6dBn8SBhOo6Vkw7N4xGo2qH/x5aSfq/qioqDOsHYfAaTfkue+//34E/b+r1f40mgDQA7CVIiMj43ddsbztK7CO/cKFC2CBW5mcnDyDRMtRh+VqlDpl3kDkSGCgYQd3ICwsbIaACB8E9uhOCTFCZJ+H3+DvHPY/JyUlXd11IXuxymlpabE5qgNkILn55puHyW6qDLp8QNOl1+tlOx2w+gJlPXv27N91JTULFy6888CBA3PpusNz7kJ/c9SoUXdJktTAi48jWFUz4ciRIxeI7xKB0w7o8DU1NSYsDtjft956a3BISMgZVggkz7KHedFtevTo0aAlEWmfE+w71AKWduHfAtPu06dPX0svGwZLR3x8fNY333xTzea/pgFwE3iNw2Qy/dRgMJxWYyqwykU7ogD1VVlZ2Tvp6elfsy5KewveIO6MdOwoDEf9evXkN96aJVbGtKTPzJqv/qbfAwfmJCcnN8terHJaWloOYfmBLRHFxMTg+zVVBDv4NTQ0vIgNOFj6/P39c51NCZx2d+rUqa8Fqr4JiLW7wNRtnU73yssvv/z/2G+zed5dqqqqprNpwyYCAJxRAFoPR4MYqP3Hjx9fA1sIeWHY9kH6Tdjiu2XLlkFklwOWVjVpA3iaRzB6BEdrAjMmkL4AK3fQemRmZqby0ofl4/WiCQAuhld4QrsQMBrW1dUGVrHYTgD+ttlsd86fP1+64447QrFnaFxdWZXyVemeM2HYdArtA/SbgkI6sJkYtlTAfpte7y0tLRV+//vfR8termKam5s7CbG8NArtW7fC3CVdJP579+79HCtzrP5YrdYgLCwLCNALFiy4TFThvHpCIAKHXq+/mJWVNZ8XFyxOXWXLli0/kO20AiLs0PUVePrpp2dhcSF0HL51FIwM6TBYf8K+A/wb7NixYxDRdrg6rT0B1gdAOTc2Nu6nr7P5iD23evXqQUrpVLrXXTQBoBegBwuTySSOHz++UyNw1v1nX0LiDzPX4ODgs8uXL38Giw42c1A77Gwe0vD666+XYA6HsDU/TBhgy5Iua/p6eHj4fLWWOUZjY+N5+rJS3AMCAsJlF1UKSQeoX7HDWHhMnjw52FF+WCyW/XDELrs8JCCDIQHOuU9NTcVP73ExERERspMC2TSROLa1tW0UODPzF1988d6amhorLejQ71A67S8oKEj49NNPh9CDv7uSkZFxFmxE2LRj5UyIiop6GtKO5WtPogkAvQAt9cGaH1h4jho16traF6ZWV/OgAHGD7Y1Go1Fm3YsNhO4GkdQrKytH0ip9bKCnl0p4sMZB9P9eXl6h7lDmhBMnTlQ7KmOSPl9fX8XdAmqBLdeEhISrWg5n6vIdd9zRyS0w+8yKFSsWWq3WRPY+tgRAC5fV1dXh2DbSnmDXrl3XTgZ1ZHQGWitwhMWmIzk5+bfHjh37H0zdTcLR6+AiZfAXGBgofPLJJ0PccYcMgeTXypUrU+itpKxtEAZ4oczNzX1dQOpHT6MJAL0ELdlBw968ebN3eHh4p0ZPdwS843DVREFBwXhwiIOpsXmV3V3KCfjyyy+rGhoari7bKG33w96B2QjQ/5PvNDU1feAuWhOI548//njJGZsLoV24GSu7qULYcm1ubs7ilS2Lv7//XDp/6N9PPPHEDYcOHcpj79N/06ffkT4gKipqNpzh31ttCIwByRkmInV0OA2dR0uXLp1Op3XlypWLysrK3maFB56WjP4f1P6fffbZtcG/t2fA1wudVijvgwcPZgqc8sW0AOBYy2KxdLL6x/7uKTQBoJdg1WGSJLWtX79ehIZHGp2EeB5TYxroSg/nhtfX1x9KSUlZ64xqU41g65GEzz777HRGRoZ4+fLlkTExMUkGg6GaWG5jAwS73kngdWxZWVm73EUDAPGsqam5LLuB0CHEjpLfURdY2RcVFeVjZYhRWVl5JyvAie1HJ8OfZdj7CRKze0Ro1z58lZubux0L3xOQ7w4aNCiDjie7Zk07eAoICFhPrqempq4vLi5eT6eJ9crJthVyD2b+Vqt1OD3zV/uaPwuJZ8duhzJym571s94cBSoPwsLCYIfHNVUJK0D1NJoA0MvQjQo0AWvWrLkmBAhdtG7vDej4YJIsuV5UVLQEvMTRBoLu0IixRokB2oCcnJxNZrN5xO7du8XTp0+HREVFwfbOf4HDH/p9AiMkCVR50jOr6OjoebRPd3cQmlpaWuS+TDmIohiK31EPWB3961//elJ2kUNtbe1VIz925padnS3R68As7OAK9eKGG26ArWP3CA7qoishdW7v3r2vsK+VOvayix1+L8jfVqt1DCz9paWl7SwqKlrEWxZjr9GAIyUY/K1WayebEnclKyurEVyp03lHL3PQ7Z7kjV6v/4be4cHe75Xyd1dVrTvBmy0SoDEtXbpUOnr06NUrmAqur8AGJUfp0el0L2dkZLzoDssYBEdpcnQfzgOYO3du3PDhw+/28/ObcfLkyZtramrQ5yBfoqOjn4eDilj1s9qBeP761792qtMwGAwVZrM5UnZDZWBqapPJ1Lx//34/Z8qkqalpNGiKyP8wMB44cOBRbO+3QAnNtDMpUAXv2rXLX5KkJiw+vcHjjz8uwSCGGa2xcRkzZgyc9yCLFdZfsAwaNEg4fPhwCBzuI7vphqSkpOQVFxcvVMovgalnwcHBApxuSh9VzmpJeqPsfWRXNFyOo4L08fG5ahi4YsUKqaysjOscpC9g/ZI7UymLiooWzp8/f2FNTU3ku+++WyELoEIcdbi864SOjnufKIr7BEFYI3Tk3X333Rem0+niBw8e/IAgCH4NDQ2frl69+lP2NLe+6PC7gyOBhZ71iKLoVjYAdBlcuXJltSiKabLADBA+NjYWjPyuCgBw3G1FRcWj2CBKYNsU/A4KCvoJ1CE2Pr0BSXNERMSfCwsLHxUZRz0Csn4Nu4GwvHAEbDnkDf68OqVmYL//2bNnF2J2P+w1WuC7cOHCBHopEbOT6A00AUAlgBCwevVqceXKlRJY2jpDbzQYVqJ3VjDp6CDK09LS3rJYLE+4Q8O+3jhiM31YOgB/K4IgfCV7wMHzaoU2bGKh14ovX77sdv0LKYP6+vrPYTIvC4CEDwgIuFsQhE8nTpwYZDAYPhGYdoMJA/TfOp0uKzMz8wfZy3sJkuYzZ86sFgThUQGpi5gWkE0nr/6SfgqWyiorK0dgg7/S830NTyMDuyFmzJixnxdv9hki+MXExCzOyck5xqaZ956eRLMBUBEgEebk5MARt05VBncYMAoLCx+fN2/e1Z0CPEM4grtZAPdXQIXLg66T4EbaXfnkk08OONu+fHx8rlrF33///XVgDyAwdZgd/OlB02AwVMF5IWowBH311VdtXbVDwdb72ech/TD4nzx5csTf//73atlLVA42+MP/q1atagVjT9YtOA0rIIHr5ZycnA1qSbEmAKgAutKAEJCVlSUaDIYmnmrI3VRlVVVVMBgcMplM/4QGg8UdU39pgoA6AQMuZ6irq3PL9EG9O3z48AWeloOlvLx8vMlkOgRaL0yFS2tF6MFg5MiRcCJfpzPfsbbRW4BRMjgg6kocRMaPCZYGcKhVVFQ03B0Hf552w2g0fllUVCTbLYHlHbkWGhoK5T1BFqAP0QQAFQISs9Fo9Nfr9QXs+dGkwmGStxqhB/aCgoLJcBreypUrkzFJmQW7ptH7sGUFBmuOENv30zsIpU5IvQNDLUdA3oC1v81m6+QLg1Xtkp0CpC3D7/3794cQIzCavhR8x4wZ81VX252SJ9OIiAhh+/bt3sTa392EemwJFPwe2Gy2u+lwzqTrxIkTo7Hy7ks0AUAFsOuFQsc1s9l8o16vf5Me/FmjEXcCOgroCA8ePJj73HPPSc8+++zN/bfU3QdWI0P7jlfCneooJpCOHTvW4RoGvb5LX2N3ANDW3lQLbNsAAB5XSURBVPD3hAkTHmbXwuln+iLf4JuNjY1buzq5YB0ZEQwGw0XY5gz73JVmyGqGXv8Hnn322ZsOHjy4XuAsWWLpg/vR0dFPw04RtbUHTQBQCTzVvsVi+X1cXNwy8j+mclN7uuhOkqTxzJkz8PO90Wg8Q5+rjjUqDXVAytHHx8fhwOiOMz0WSZL+V3YReY7d8421Y4lyBRsfH//+unXrPmDvs3vFezsP4Zv79+//pqt9DCYEwR53s9k8BIyb3RlacIF+qra29kcltT9WZomJiftYV79qQRMAVALdabASZU5OzprIyMiH2IrnTmkTqHO/6RmG1WoNu+222+pTUlI2gnYAa1QaqqPeU4oE67AJra2t+2QXGVifHUrW/mL78b4g1P+Gbeu8tt9bkO/GxcVFd/XbbBp0Ot0Gi8XyX7xwSnmuVqBveuSRR+rBZ4vSLhiW0aNHw7r/f7B5oBY0AUAFINtLZI1l/fr1HwYHB+vcWaImGgDMKrqoqGgBOCJZsWLFAnfScPRTFAsImwGrFWzgJX83NzfbHEWbts+h/ybQf4PxZHZ2trfS1rm+zDdw5338+PG/y244gN7fHhUV9URWVtZiLD95Wk61A2WakZHRCMbMQhfqN4T5/PPPh7LOftQkBGgCgArAKhM2E3799deLjx8/HoIdU+tO6WQbABnwGxoahEOHDm2cNWuWBKeLacsA6qErZYEJsGoHE8AvXbp01FG02U6dbcuMbUAU8fuOtfm+AvzYm83mRnDnTeeBs/GENMIOgrCwsJ/k5ua+xdYBnkCkRrD6ajKZ8q1W60BWS+soLRMmTPgVHLTUnTztLTRHQG6E1O6zu1YURd+kpKQrx44d84h0kRkE+V1fXw8/b8+dO/ftwYMH/2LDhg2fKjU4pXsaroER3jy+34D0NjY2OlzqkBwc90q0AmDHk52dfVgWoBdQah9wgp2Xl1cZtDk67eyuI1ZjR9+HCcnJkydHvv/++1VsHroLvOXVZcuWzSorK5vK5gPPyyMJp9PpNmVlZX0sC6AyNA2AG0EZGrXk5eWBr4ASEntsu4q7+OLnzRarq6thj/Un8+fPl5KSkm6TPdgBT62GXdO4Pjo6SKcrljuXQVVVFf80nw7Y3TlseuH/xMTEErDjcWQs1lNg8RLaz65PvnjxYhk4bKI1Few5BViaSN8ybtw44c033xzQ4fFSFtZdwNIJB5uVlpa+gaVJQvyWEAwGw7GsrKwk2UMqRBMA3ARWnQa/TSZTrE6nW41ZHnfFUKUvwdSEAiORV1ZWwh7a/122bJm0YMGC2wSko8FmG9g1jd4F6zzdhVOnTjU5E1VaC8DWOTg0x2g0xmJ1s7eFAAI44zIajedKSkpyyT1sCQQTbmiLf4PBALZJsM3PrmTMqGawnRsk7pMnTz7L5geB1vjQ2yAjIyMhb1Xl7EcJTQBwE7CGBdeysrJWjB8//g5iHMiT2tUKmUlgAzqbVjgjAQSBZ599Vlq2bNlvScPTZvoaroKuS4WFhY2OXosNjkJHfYU2+dlnnw3lOcrpbQEVvv38889PfuqppySr1TqMHsCw9iZQwg0bxmAwfGM0GkVY+8cEH3cyAsUEILCLIGey8AyXBUYbAg6y8vLyfN3pFFRNAFA52MAoMNc3btz4bWlp6XBwLepOg7+ApI/XmdDW1adPnxbKysrehl0DK1euTCG7CzR6DY/tN5i651CFhqn1SRsMDw+/jzYC6yvhXOo4199oNOafOnXqn+TcelqbyA5umOU+uRYdHT0HtvlhWg/ecp47AXEfPXp0IJYfNERwIEsmPj4+YOTZgoVVK5oAoHKwyoc1OpvNdn7Tpk1gF3DRnVTfrMU4bVDFStnkOpGwYdfAwYMHM3/zm99I6enpO+BMfkHTCPQ4oigGOlvH3Gk2xBIZGekvu+gEMCDEx8dvz8vL+wIL3dvt89577w1buHChZLPZpmKDNbuWTau36bYUFBQk+Pn5Rebm5m4j1zBhHRPi1Qw2yTp16tQ1+w/sPp1H8P/EiRMf+9Of/nQYyxM1owkAbgiv0YE6zmg0DomPj3/LXVLFGtNgMw+B6pSwvdbwf2Fh4ZMPP/xwo9Fo/OfMmTMjZB/ScFl5tbW1BThrX+LOdhghISHd2u1w4403tmVmZs5mr/dFXqxcuTItMDDwzIkTJ9DJhIAMcJhNQ0JCgrBt2zbx3XffrZC9gHnW3cociy/0pXAqKwZtJAk/CQkJb61Zs+bPSFDVowkAbgBWQXlAxYTz98FzIO2AgqD0Lqxz6Gsw1aRSR2a1Wifb7fby559/HuwEngHPXa4G+3Z/AfIeDr9Rqkd0ebnjvm9CYGCgj6MwAqPahy1xKSkpfX7iC1iwL126VDp48KCFXOP5+MfsF5jBf4/FYhH9/Pw6PYOBvd8dgfSdOnVqEhZ1esKSmJhYC/2tLJCboAkAHgI7ewbPgQUFBUPBKpW+x+7vxWbd7ijFC0znA0ezlpaWvjZ9+nQJtALTpk0bT4fFZj1K//O+0x+5fPkymmpsEFE7SmXp4+Pj5ai8Wa1UXV3dOJg99hUQj5SUlMzg4OCzZWVlnexn2J1BmEBNpxXSERER8auMjIxp7NKBUp64OyR927dvL42JiZnP1mfyt8Fg2Gc0GkPcOS9Ebb3U82BV52D8U1hYKHNmweukyal97lKxsaUB1rYA/ge/3IMHD56XnZ29lXapzOYX9jf2Td49TweOdAb7Cxa2PkGZ7Nmzx20zSRTFgKlTp17GbFCwJano6Oh5ubm5W2UvchGO6tyDDz44JioqqrK8vFy2tEbiiLV52pCNSouwZs2aQZIkyQu6H0DnH+TrTTfd9M/S0tKxjY2N4NRJaGpqeggmWe6eE5oA4GHwtiUlJSXdfvbs2b83NTWh21oExMOXUmejFtgODbMpIAIN3cEZDIaTFy5ceHrt2rWfgzDgKL2YYNDfhACS3l//+teSozwXOnzfv/XWW26bQVBXQNiBNkP+h2U1bFnKYDB8Zzabf4rNpF0BJrzT8UxLS9tYXFy8gB3onW3r9HbchISEN81m8+/Z7Yv9XfNF4OUF77qa0QQAD4BX8ZC1Pa/U1NTWwsJC2X16FsDOnNWOyGwTdASbVoPBcPjcuXOz8vLy/kHsJnh5qCEIU6dOlbB90WxfMmLECGHr1q1uk3mYkAdGdGQdHatnEG7ixInCunXrxN6uJ1L7vv5b7Hb73nPnzqFxI0Kvkmc/AuxjHz58+E9feeWV75TS4kltoiuCv6Pr7MQAC6M2NAHAg+BVPPY6nPp14MCBJWzlVOoc1A5rv4ClBesQ6fDwk5CQ8K+qqqoXNm/e/INS4+2vs3/4DRoAWQAEcBO7ceNG1WeSUlnCPZPJVGa1Wm8g1+i6BULOa6+95gv7v515n6viJ4qiX3p6ernVah3DxgmLJwu7RHbjjTfCgUDe5LCi7sRJw/3yRRMAPABepeNdB2bMmBHh7+9fDn7AMZSeVRtKa5ysepOnEmWBZQGdTme7ePFi6oYNGz52tmP0dGBXBfhdwIQrtr7AWml2drbbjxKQtmXLlj1+9uzZP5H2IrX7+N9nsVh+QuoGlgeujgfRSpSUlFiwGb9IOadBhIZrYYgQDEyaNOnFl1566WX6GvtO7H9PEQK6ko6eCttXaAKAh8HTArDAfejMMzMzi6xWaxx7X2n2oGacaXRYGJ7gQK7BbDYwMHBNWVnZ5nfeeaeiv85+RFH0mTp16hXZDQSDwXDebDYPl99xX2DmHRISMuD06dMXYbmoN+vBs88+e7MkSd+Tc+lZeG2W1Y6Ra7BDKD8/fyh4K+zqwO6JGgBXpsltlk+xCqPRv1i4cOGdtbW1XxMXoRp8xA4f73FxcSWXL19OW7du3UeSJDl1aIwS7tJh3HrrrcGjRo2qIf8raVSIYZzsRj+lu2vDsKf/rrvuOlNQUOCllN9dQafTrcvMzFzqyWv52DWl6/0RTQDQuNogQP1nsVj+WVBQMNkVHYwnw3bkYO0+ceLE7xoaGl75/PPPP7ZareddaQTEWn47+15Xz2iA6dOnj29paTnq6L1wHzxSZmRkuK2TFFfR3dk1GO2mpaX9j81mu5vcY9X7mF0L845Oav/w8HDh0KFDI7/44osqTx4Eu2vc19/QBACNTsybN++mpqamH+vr62VCALKrQBbG0+B1uErpFtu3Gdqbm5uzq6urd2/ZsuUAe1qjIzCLYkFw/fYyZ6DjDGroM2fOfO/Mc7Gxsek5OTkZshsaikB+p6amWg4ePJhGO+7BBAle/RSYY2rhJy4ublNmZmZSf1fda4P/v9EEAI1OkLVCk8n0JT3zIPA6Hk9FaVcBBk9AGD58uDB27Nhiu93+50uXLv3tk08+OVBWVnaBNlB0tdagJ7QEixYt+mVFRcVHSvlB6sakSZNm5+bmbpcF6Kc4MytljQ2FLgraJO8FSlgEpz779u0b+eWXX+LGAx6Cq9tQf6Bbh11oeBb07JL8WCyWe+bMmaNvbW21wh5jgemIWJWjp0LPrOgOhpd2nsFVbW2tcO7cuThJkjLhf71eLzzyyCNXjQuHDh36ld1u311TU/PtH//4x/KWlpYGeP/1WF872wF2VUgYMGDAOIGqM7yw8GO320/KAvRjeGvU8Ds5OXn6+fPn34N6guUpr8wlxjMhgdSf6Ojo+S+99NIr2HPY+9wRus4JSD57YppdhaYB6Oc4ahQd54i/XVhY+Fulga8/4cyMrDsaErosYMkgIiJCCAgI+KGlpeVbu93+3YULF0q/++67Y/v27TsP5YCdx95VurK00KGazi4qKlopu4kQGhpqeO2112zyO/0XdpYKGpWGhoaPumLZj10TqDoH9UKv11+wWCwhmH8CTx0IWSEZdjmx5zJoQkBnNAFA4yqOGgZYf99///01Nputk+GR0jOeDE8YYjtZXmeNITLOWZyZ5cPSAvwEBARUSZJU0tbWdqS1tfVoa2vryStXrlS1trZegkGgpaXlSltbWwvsWYffra2tcK2lubm51W63t/j5+fkEBQUF+vv7B3l7ew/28fEZJoriYG9v72FeXl6hoigGeXl5jamtrX2gsrLS2XIfl5+ff0J2VePqzhu73f716dOnO5WnhJw34KzRIPyGM/uHDx8+JS8v73OlesS77u5MmTJl1OTJk08VFBRcTUlgYKAwYcKEd00m00zWy6eGJgBodJFFixY9UFdX9wksC2ADoCeCdZbYWiuBJxy4AqWlACyervxuV9NUWFh4dY+57EY/pWONf0ZdXd071dXVipngzM4PVsjU6XSbMjIyklhnPtgznkhKSsofioqKXsDS2eGxcYAkSfb+Xg9pNAFAwyHsrBYO1klPT88tKipKJs/yBqPuzIQ1PIMPPvjAadeyngy0l5SUlAWVlZUbMV8bopPncGDXhHZ/C9UWi2WcK/xRqBFs6YL922Qy7bdarYlK0Qe7G4vFIs/AfowmAGg4hNfwOvyRH7VaraPo+wLnrHENz4S3dAFHASvNRj2dK1euwMC0tqysbInd/u+JJ09YpmHbDRZm5MiR8OsnW7Zs+YENh4V3Z3jp6fBf0gpOksg1pT5n5MiRnfKrv6PtAtBQhDf4d/wPvdrouXPnJnp7e+8/c+bMtXvYCWRKDVPDfaHLlNQPsEvwpMGf1F/aXz7bNoSO9MM69C233LLTZrPdiRmDYpox9jfbTmjtwIABA8BANCk7O3sTm8e0JTxv0HRHsPSAo6QFCxa0Hj9+HLWbYAUouD9s2LAHBEHQBIAONAFAQxG248LYunVrgSRJ4vLly+dWVlb+d0NDA7odjnSe9DnkvHdquA9Ixww+Dy56UhGS9NEDLlt3X3zxxbv9/f2/hGN1yZHbPNU+K1TTgz5mX0LajE6n22w2m58njqUw2G94CnSfAUbJTzzxRA0M/nRewg8Y+8GyC51+UgY+Pj7xHpUp1wm/FmlodAFobLm5uVvb2tq2pqSkpB0+fNgCKlB6wGdnOdqWQs8AW6tua2v71NPT3VGHvVasWJFSWVlpgfV9UtdZTQFBaVCmPfix4QwGw7cZGRn/lZ+fz7Wp8NSBX2DSNnv27Jjw8PCDFy+2y5h0fmEaF4Eqg6ampt2yl/djNBsADUWwWTp2jQX24BqNxmtWuRqeC9bpxsbGLsvJyVnjCYlGlr6E55577uawsLCdVqs1mr7OLnsJTP44q/UiYQ0GQ+1f/vKXKHK+BBYndscAFmdPYfHixVPLy8vzseQw9kmyyQVcy8/Pv7oTQNM+ttN/LXQ0nAJrJJhAwP4NarisrKz5YAmekJDwvuwlGh4DNolobGwskF10Q+iBIjQ0NDAlJWX9k08+KVVVVX1PBn96dkprAOg2gTltwgYogsFgaPPz84s0m80hNpvtvNJgj+2ywdqtu5OSkmIhgz+2NElfo/OfMGnSpOe1wb8zmgZAo9tgFv88RFEcmJaW9pnNZvs5J4iGB0Dqgbe394Tdu3cfc/cUwVry0qVLfxkQEPBRUVHRtetK9R2756x1fmJior24uDjm3XffrZDddAJP2wVA0pGenv6RzWb7pSwAJ79ZEhIS9mRkZEzr6nOejiYAaPQqEydODHr88cf/ZrPZEnl1z1n7AEzNp6EOPvjgA1U4XelOJw+zx4ULF942fPjwbVarNUYWgIEecLH1Z2fqqcFguHjgwIEETxCaXAkIYBaL5YzVag3j+RTBjFDpyUlMTExqTk5OljvnQ0+hCQAafQL4EEhNTf3jgQMHHheYA0+Utg1qUrt6oQU3V/oAcKbMMfU6b/sqBgzc8+bN048aNWpjYWHhz6+nX8S+xxNqDQbDBavVmqC5TP43JP9gyWX69On1sL0Y20EkMJ4SMaPLiIiIX23YsOFjrEw0NAFAo4+BnQLp6elpR48etTQ1NcnWMbG9vFqdVR/0VrahQ4cKO3bs6NHeFuvQsfVxJUEADFWTkpImh4SEpJeUlDxAnPXwZvLdjR9mHKjX67/Iz8+fCev7ggeq7rsDXX5wVsKJEye+prdDsruJCNj/sE1y8ODBsW+88UaJWyS+j9AEAI1eQ6lzA1XfypUrZ9XW1r7BOxKVzAAExjGKRt/Czsj0ev0xs9k8wZWRUqo7zoSltEs+S5YseXjQoEFbbDZbMK26v14fFTwBlbwfHPhERUVtyM7OXkaf0qfRucxon/7dKW8QQPft2zecCFdsOE0b8G80AUCj11GalcH/ixYtul8Uxc/Ky8s1x0FuAikXKKv4+PiMzMzMdFeVlVK5O3Nv2rRp46Ojox9tamrKrqio6KSt4L3X0btZMCt9Um+HDRsG6ux5OTk5W5VOpMPaQn+q7x3r/WetVmuo7KYCtAA6fvx4YePGjdwzKLQ+pDOaAKDRq3RFCn/qqafixo4d+xd2uxVvpqXR+2Dq8vHjx9+Tl5f3VU8KANg1gl6vHzZlypSp/v7+2TabbRQJzzMWExHPe0rvp+EJE/B/YmJibVVV1ZTNmzf/oPSu/q7279AaDfvZz352jnYnzoah/xcoLSC5n5iY2JKWluYLQpY20DuHJgBo9DpY41TSCsDarNFoXFRVVbUejiHGBh2NvoWehZ0+fTpk79698nUcF8HWlcmTJwfffvvtdwYEBCSVlZXdDrYk9HoxXVdY4VHkOOnpah0jz4Mb4IkTJ4Kaf5XS6XxYG+ivwHp/ZWXl16AB4MEKWvT/UJ56vf4Hk8n0E6V+Rct/OZoAoNGjYNK7UsNzdH/OnDn60aNHv0d7YNNQF7ADQHSxS1pSL2CQmDVr1g3h4eG/8fPzW1JYWBiMOX1h7RKUtum5gtjYWHB+dN+GDRu+0AYW54H1/uLi4hecHYcwgz+dTrctMzNzjiywhuP81AQADXekQyuQXFVVlQtaAQHpHLBrjsKIyNnsGnzY/IT17tdff110xSAIVvozZ84cHxkZebu/v/9v6+rqfgmHv3QF2niUnfmzO0zIdWfrUWBgIBx6lLV169bV1dXVHnX4UU/Tsd5fY7Vag535FC3E0eUQHR09Jzc3d5vsAW2W7xSaAKChehw15A5bgTdsNtsttFrQ2dke9n7NzsA5WAv6xMTEYrPZrHP2eVJeYWFhgdOmTZs0bNiwO/38/GZVVFTE1dfXXwvDWx5yBG/WTwsEbDlj9YdWPSckJHx74sSJufQWM22wcQzJIxDsUlNTpZKS9uzDtDUsbP4GBAQIvr6+k3bs2FEqIPe18nAOTQDQUDXONGxaPbx48eI7hw4dutVqtd5Ah+GpgbEBQOlbGnLoTjs2NjY9Jycng80/KJuRI0cGTpkyJSwsLCxxwIABd/n4+EwvLy8PJae68WBnf64oF159EJBBCP43GAxNFy5cmL527dqPlSz5NRwDbn2tVusv6XYHZQD5ytvrTxMdHS2sWbPGl2yl1Npp99EEAA23A9tJwF6DWcbSpUvvDQoK2mmz2UJJPccGfKXORsMxdDno9fpP7Xb7hz4+Prd4e3v/rL6+PvrYsWPo4Sw8nOnQ6RmjEryy5V2n7xsMhpZLly79Licn531fX19ZGCxOzu5w6a+A468ZM2ZI2BKLI0FMaj8d8Suz2XyPo3xWuqdB5btSI9DQUBPODgysUACzz+Tk5KlDhgx5t6CgwA/rXHjv0HAeegBkVeiObCvYZx3N+LFrPLAZPRYHof0wnpbLly8/lpWV9a6fn5/sPvZ9Xlx41/sbdD7cc889YYMHD+601w8b/LH8i46Onpebm7tVKfu0PO8amgCg4XY408jJYMNeA83A8uXLHxgyZEhuYWFhPJmZstuLNJwHyzM6PwVqxo6FwQZ97J2Cizp4+h2gdo6Pj/9XXV3dqjVr1nzVlUFfUNBAaAMRzh133BE6fPjws+hNDoMHDwaj38h33nmngq0fWB7zrmvI0QQADY8Cm5nx7Ajg98yZMyOioqJeqKurW3Ly5MlrYXizEo3O8AZsR/9j1vmY5oAtM55gwANb8hk5cqQQHBy8qbKy8g/bt28vxeqGEnScu2uc2F+BvJs2bRq6BICVa1xcnGAymURnBDOtDLqOJgBoqB5ew3b1DABOKFyyZMlDgwYNyrHZbDdobcN1sGXSFbU8RlfKGAaP2NjYgoaGhpy1a9d+JElSgyzQdQwk2sDTNdLS0v5EnwJKYIVuODDJbDbfp5S3SnmvdE+jHU0A0NCgoAeBJ598EhzO/G7AgAGmgoKCa+sJbEeFzW6d7Xh4s0jeYKS0Lt4XOGNM152BHlsewMDeByfB6XS60oaGhow9e/Z8ePjw4QtYXmr0DWAI+MILL0hnz/JXAqKjo2fn5uZul93QcCmaAKChwYAtGQD33ntv2E033fSAv7//otLSUn1jYyM6ALHQYbDwXVFvY2HZQbKnhAT625gAxLvPPs/LBzqc0qDPAqe/jRs37qvGxsat+/fv/+bLL7+s0gZ7dQPatrS0tGabzdapLkRFRQklJSXhH3744Un3TZ37oAkAGv0ebLDAhAB2FgmdWFJS0u1DhgyZdf78+cdPnDghew9vMOYNgHR4njMapWew+66CJ8hgQokzsO/DhAY6jWTt3WAwwCwyp6am5v1NmzbtI+vDzqZfEw56D15ek+tTpkwZFRMTEw/HNB8+fNhGBn7ecxquRRMANDQcgHVGrBU4GYB/8YtfjIqLi7vZ39//AV9f39lFRUUDQeVJwrFGb67o5JwVLq7n3c4M1o4s43mIyBZB+D1kyBAhMjKy1G63v1lXV/fFli1bbG1tbU2YYIaBlREvrEbPgS1tYXVMo/fRBACNfg3W+WDXugN5D5xb8PTTT98watSo/xw4cODDly5dmnrkyBFUzc1qAJxtn47U765KC2b1jwkJ9HNEkyFQR7jS90NCQoTw8PBjLS0tf21ubv7b8ePH9+/cubOCON9xVB7azN+z0Mqp99AEAA2NDpQ6HqV7bDhBYRbMGLf53H333cHR0dERQ4YMudHX13eyl5fXvVVVVaOqqqpkZ9QTsIGWxZWCgDNLDEr3YCCfOHGiMGDAgB9aWlr22u32/19XV3dg27ZtpY5m9NjSCw9eGN51DXWhlVPvowkAGv2e7lrt867zwvDAnoXBG37uuuuuUJ1OFzF48OBIHx+fMV5eXhO9vb0niKIYd+XKlfHV1dVCTU2NbKBU8rqHwYuzyBz2Q94JlvYjRoyAnyZJkgpaW1uLW1tby1taWo40NTWdOHXqVOWePXtOt7a22lmHTF2lK0JAV9AGnN4By2e2THmCn0bPogkAGv2a3h5Ueqpjg/eCy2NfX1+fhISEwBEjRvgFBQUN9Pb29vL39/f19vb28fHx8QOtA/z4+PgMEEXRy8vLayBo5sE8oaWlpb6pqeliU1NTQ3V19eXz58/by8vL7TU1NY12u70FBnKi6u+JPFPKG+wedq0r39PQ6NcIgvB/hXktHQ0nm24AAAAASUVORK5CYII="
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (SvgWerewolf);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vRNQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"display": "Home_display__1NH07",
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"mainLogo": "Home_mainLogo__noQEo",
	"logo": "Home_logo__1YbrH",
	"regText": "Home_regText__2hlye",
	"desc": "Home_desc__2xwKH",
	"titleBox": "Home_titleBox__2h3U_",
	"mainTitle": "Home_mainTitle__3opDa",
	"highlightLink": "Home_highlightLink__U1uAO",
	"homeButtonContainer": "Home_homeButtonContainer__GkaRU",
	"naviButton": "Home_naviButton__30GIF",
	"addSubtractButton": "Home_addSubtractButton__1HZZN",
	"loginLabel": "Home_loginLabel__hK_kr",
	"inputBox": "Home_inputBox__3zk4V",
	"submitButton": "Home_submitButton__aJihW",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"card": "Home_card__2SdtB",
	"grid": "Home_grid__2Ei2F"
};


/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });