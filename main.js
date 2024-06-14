/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/roboto-regular-webfont.woff2 */ "./src/fonts/roboto-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/roboto-regular-webfont.woff */ "./src/fonts/roboto-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/roboto-bold-webfont.woff2 */ "./src/fonts/roboto-bold-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/roboto-bold-webfont.woff */ "./src/fonts/roboto-bold-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background-img.jpg */ "./src/images/background-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*CSS Reset*/
*, *::before, *::after {
	box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
body {
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
	display: block;
	max-width: 100%;
}
input, button, textarea, select {
	font: inherit;
	border: none;
}
p, h1, h2, h3, h4, h5, h6 {
	overflow-wrap: break-word;
}
#root, #__next {
	isolation: isolate;
}

/* Font Declarations */
@font-face {
	font-family: 'roboto';
	src:
		url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
		url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'roboto';
	src:
		url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),
		url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff');
	font-weight: 800;
	font-style: normal;
}

/* Styling */
body {
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});

	font-family: 'roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 
				Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 1.2rem;

	display: grid;
	grid-template: minmax(auto, 200px) 1fr minmax(auto, 116px) / 1fr min(65ch, 100%) 1fr;
	grid-template-areas: 'header header header'
							'. main .'
							'footer footer footer';
}

header {
	grid-area: header;

	background-color: hsla(208, 100%, 97%, 0.466);
}

main {
	grid-area: main;

	background-color: hsla(209, 39%, 76%, 0.568);
}

footer {
	grid-area: footer;

	background-color: hsla(0, 0%, 15%, 0.904);
}

/* Header Styling */
header {
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas: 'h1' 'nav';
	place-content: end center;
	place-items: end center;
	gap: 32px;

	padding: 26px 16px 0px 16px;
}

h1 {
	grid-area: h1;

	font-size: 2.8rem;
	color: hsl(70, 72%, 11%);
	letter-spacing: 1.5px;
	background-color: hsla(0, 11%, 45%, 0.11);
}

nav {
	grid-area: nav;

	display: grid;
	grid-auto-flow: column;
	gap: 32px;
}

nav > button {
	cursor: pointer;

	letter-spacing: 1.5px;
	font-weight: 800;

	background-color: hsla(258, 100%, 67%, 0.418);
	
	padding: 16px 22px;
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
}

.home-btn {
	background-color: hsla(225, 46%, 95%, 0.842);
}

/* Home Styling */
.home-content {
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	gap: 16px;

	padding-inline: 11px;
}

.intro {
	align-self: center;
	word-spacing: 1.5px;
}

.opening-hours {
	display: grid;
	gap: 16px;
}

.opening-hours > ul {
	list-style-type: none;
}

.opening-hours li {
	margin-block: 8px;
}

.location {
	display: grid;
	grid-template-rows: auto 1fr;
	gap: 16px;

	padding-top: 16px;
}

/* Menu Styling */
.dish-list {
	display: grid;
	grid-template-rows: repeat(5, 1fr);
	gap: 32px;

	padding: 32px 16px;
}

.dish-list > div {
	display: grid;
	grid-template-rows: auto 250px 1fr;
	grid-template-areas: 'h2' 'img' 'description';
	gap: 16px;
}

.dish-list > div > h2 {
	grid-area: h2;
}

.dish-list > div > img {
	grid-area: img;

	height: 100%;
	width: 65%;
	justify-self: center;
}

.dish-list > div > div {
	grid-area: description;
}

/* About Styling */
.about-content {
	display: grid;
	grid-template-rows: repeat(3, auto);
	gap: 32px;

	padding: 32px 16px;
}

.about-intro, .story {
	display: grid;
	grid-template-rows: auto 1fr;
	gap: 16px;
}

.contact > a {
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-end;
	align-items: center;
	gap: 8px;

	text-decoration: none;
	color: dodgerblue;
}

.contact  img {
	height: 1em;
	aspect-ratio: 1 / 1;
}

/* Footer Styling */
footer {
	display: grid;
	place-content: center;

	color: hsl(208, 100%, 97%);
}

footer > div {
	display: flex;
	justify-content: center;
	gap: 8px;
}

footer > div > a {
	display: flex;
	align-items: center;
	gap: 5px;

	text-decoration: none;
	color: dodgerblue;
}

footer a > img {
	height: 1.16em;
	aspect-ratio: 1 / 1;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;CACC,sBAAsB;AACvB;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;CACC,gBAAgB;CAChB,mCAAmC;AACpC;AACA;CACC,cAAc;CACd,eAAe;AAChB;AACA;CACC,aAAa;CACb,YAAY;AACb;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,kBAAkB;AACnB;;AAEA,sBAAsB;AACtB;CACC,qBAAqB;CACrB;;wDAE0D;CAC1D,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB;;wDAEuD;CACvD,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA,YAAY;AACZ;CACC,yDAAoD;;CAEpD;gFAC+E;CAC/E,iBAAiB;;CAEjB,aAAa;CACb,oFAAoF;CACpF;;6BAE4B;AAC7B;;AAEA;CACC,iBAAiB;;CAEjB,6CAA6C;AAC9C;;AAEA;CACC,eAAe;;CAEf,4CAA4C;AAC7C;;AAEA;CACC,iBAAiB;;CAEjB,yCAAyC;AAC1C;;AAEA,mBAAmB;AACnB;CACC,aAAa;CACb,kCAAkC;CAClC,+BAA+B;CAC/B,yBAAyB;CACzB,uBAAuB;CACvB,SAAS;;CAET,2BAA2B;AAC5B;;AAEA;CACC,aAAa;;CAEb,iBAAiB;CACjB,wBAAwB;CACxB,qBAAqB;CACrB,yCAAyC;AAC1C;;AAEA;CACC,cAAc;;CAEd,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,eAAe;;CAEf,qBAAqB;CACrB,gBAAgB;;CAEhB,6CAA6C;;CAE7C,kBAAkB;CAClB,4BAA4B;CAC5B,6BAA6B;AAC9B;;AAEA;CACC,4CAA4C;AAC7C;;AAEA,iBAAiB;AACjB;CACC,aAAa;CACb,kCAAkC;CAClC,SAAS;;CAET,oBAAoB;AACrB;;AAEA;CACC,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,SAAS;AACV;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,4BAA4B;CAC5B,SAAS;;CAET,iBAAiB;AAClB;;AAEA,iBAAiB;AACjB;CACC,aAAa;CACb,kCAAkC;CAClC,SAAS;;CAET,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,kCAAkC;CAClC,6CAA6C;CAC7C,SAAS;AACV;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,cAAc;;CAEd,YAAY;CACZ,UAAU;CACV,oBAAoB;AACrB;;AAEA;CACC,sBAAsB;AACvB;;AAEA,kBAAkB;AAClB;CACC,aAAa;CACb,mCAAmC;CACnC,SAAS;;CAET,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,4BAA4B;CAC5B,SAAS;AACV;;AAEA;CACC,aAAa;CACb,2BAA2B;CAC3B,yBAAyB;CACzB,mBAAmB;CACnB,QAAQ;;CAER,qBAAqB;CACrB,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,mBAAmB;AACpB;;AAEA,mBAAmB;AACnB;CACC,aAAa;CACb,qBAAqB;;CAErB,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,QAAQ;AACT;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,QAAQ;;CAER,qBAAqB;CACrB,iBAAiB;AAClB;;AAEA;CACC,cAAc;CACd,mBAAmB;AACpB","sourcesContent":["/*CSS Reset*/\n*, *::before, *::after {\n\tbox-sizing: border-box;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n\tline-height: 1.5;\n\t-webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n\tdisplay: block;\n\tmax-width: 100%;\n}\ninput, button, textarea, select {\n\tfont: inherit;\n\tborder: none;\n}\np, h1, h2, h3, h4, h5, h6 {\n\toverflow-wrap: break-word;\n}\n#root, #__next {\n\tisolation: isolate;\n}\n\n/* Font Declarations */\n@font-face {\n\tfont-family: 'roboto';\n\tsrc:\n\t\turl('./fonts/roboto-regular-webfont.woff2') format('woff2'),\n\t\turl('./fonts/roboto-regular-webfont.woff') format('woff');\n\tfont-weight: 400;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'roboto';\n\tsrc:\n\t\turl('./fonts/roboto-bold-webfont.woff2') format('woff2'),\n\t\turl('./fonts/roboto-bold-webfont.woff') format('woff');\n\tfont-weight: 800;\n\tfont-style: normal;\n}\n\n/* Styling */\nbody {\n\tbackground-image: url('./images/background-img.jpg');\n\n\tfont-family: 'roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', \n\t\t\t\tRoboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\tfont-size: 1.2rem;\n\n\tdisplay: grid;\n\tgrid-template: minmax(auto, 200px) 1fr minmax(auto, 116px) / 1fr min(65ch, 100%) 1fr;\n\tgrid-template-areas: 'header header header'\n\t\t\t\t\t\t\t'. main .'\n\t\t\t\t\t\t\t'footer footer footer';\n}\n\nheader {\n\tgrid-area: header;\n\n\tbackground-color: hsla(208, 100%, 97%, 0.466);\n}\n\nmain {\n\tgrid-area: main;\n\n\tbackground-color: hsla(209, 39%, 76%, 0.568);\n}\n\nfooter {\n\tgrid-area: footer;\n\n\tbackground-color: hsla(0, 0%, 15%, 0.904);\n}\n\n/* Header Styling */\nheader {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(2, 1fr);\n\tgrid-template-areas: 'h1' 'nav';\n\tplace-content: end center;\n\tplace-items: end center;\n\tgap: 32px;\n\n\tpadding: 26px 16px 0px 16px;\n}\n\nh1 {\n\tgrid-area: h1;\n\n\tfont-size: 2.8rem;\n\tcolor: hsl(70, 72%, 11%);\n\tletter-spacing: 1.5px;\n\tbackground-color: hsla(0, 11%, 45%, 0.11);\n}\n\nnav {\n\tgrid-area: nav;\n\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgap: 32px;\n}\n\nnav > button {\n\tcursor: pointer;\n\n\tletter-spacing: 1.5px;\n\tfont-weight: 800;\n\n\tbackground-color: hsla(258, 100%, 67%, 0.418);\n\t\n\tpadding: 16px 22px;\n\tborder-top-left-radius: 16px;\n\tborder-top-right-radius: 16px;\n}\n\n.home-btn {\n\tbackground-color: hsla(225, 46%, 95%, 0.842);\n}\n\n/* Home Styling */\n.home-content {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(3, 1fr);\n\tgap: 16px;\n\n\tpadding-inline: 11px;\n}\n\n.intro {\n\talign-self: center;\n\tword-spacing: 1.5px;\n}\n\n.opening-hours {\n\tdisplay: grid;\n\tgap: 16px;\n}\n\n.opening-hours > ul {\n\tlist-style-type: none;\n}\n\n.opening-hours li {\n\tmargin-block: 8px;\n}\n\n.location {\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr;\n\tgap: 16px;\n\n\tpadding-top: 16px;\n}\n\n/* Menu Styling */\n.dish-list {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(5, 1fr);\n\tgap: 32px;\n\n\tpadding: 32px 16px;\n}\n\n.dish-list > div {\n\tdisplay: grid;\n\tgrid-template-rows: auto 250px 1fr;\n\tgrid-template-areas: 'h2' 'img' 'description';\n\tgap: 16px;\n}\n\n.dish-list > div > h2 {\n\tgrid-area: h2;\n}\n\n.dish-list > div > img {\n\tgrid-area: img;\n\n\theight: 100%;\n\twidth: 65%;\n\tjustify-self: center;\n}\n\n.dish-list > div > div {\n\tgrid-area: description;\n}\n\n/* About Styling */\n.about-content {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(3, auto);\n\tgap: 32px;\n\n\tpadding: 32px 16px;\n}\n\n.about-intro, .story {\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr;\n\tgap: 16px;\n}\n\n.contact > a {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tgap: 8px;\n\n\ttext-decoration: none;\n\tcolor: dodgerblue;\n}\n\n.contact  img {\n\theight: 1em;\n\taspect-ratio: 1 / 1;\n}\n\n/* Footer Styling */\nfooter {\n\tdisplay: grid;\n\tplace-content: center;\n\n\tcolor: hsl(208, 100%, 97%);\n}\n\nfooter > div {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 8px;\n}\n\nfooter > div > a {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 5px;\n\n\ttext-decoration: none;\n\tcolor: dodgerblue;\n}\n\nfooter a > img {\n\theight: 1.16em;\n\taspect-ratio: 1 / 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _images_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github-mark.svg */ "./src/images/github-mark.svg");


function content()
{
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about-content');
    
    
    //Attach Intro
    const intro = document.createElement('div');
    intro.classList.add('about-intro');

    const introHeading = document.createElement('h2');
    introHeading.textContent = "Welcome to Blue and Sakura's Veggie Haven!";
    intro.appendChild(introHeading);

    const introMessage = document.createElement('div');
    introMessage.textContent = (
        `We invite you to embark on a culinary journey that combines the 
        elegance of traditional Japanese cuisine with the vibrant flavors of 
        fresh, locally-sourced vegetarian ingredients. Nestled in Tokyo, our 
        serene and stylish eatery offers a tranquil escape where you can savor 
        the best of vegetarian delights.`
    );
    intro.appendChild(introMessage);
    aboutContent.appendChild(intro);


    //Attach Story
    const story = document.createElement('div');
    story.classList.add('story');

    const storyHeading = document.createElement('h2');
    storyHeading.textContent = "Our Story";
    story.appendChild(storyHeading);

    const storyContent = document.createElement('div');
    storyContent.textContent = (
        `As the owner of Blue and Sakura's Veggie Haven, I've seen our restaurant 
        blossom into a cherished sanctuary in the heart of the city. Named after 
        sakura blossoms and the ocean's serene blues, we offer dishes that blend 
        tradition with innovation, inviting guests to enjoy flavors that transcend 
        mere nourishment. Our haven isn't just about food; it's about creating a 
        tranquil escape where every meal promises moments of peace and delight, 
        reflecting our commitment to providing an unforgettable dining experience 
        centered on passion and hospitality.`
    );
    story.appendChild(storyContent);
    aboutContent.appendChild(story);


    //Attach Contact
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = "Contact Us";
    contact.appendChild(contactHeading);

    const icon = document.createElement('img');
    icon.src = _images_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__;
    icon.alt = "Github Repository";

    const link = document.createElement('a');
    link.href = "https://github.com/blue0206/restaurant-page";
    link.textContent = "Blue & Sakura's Veggie Haven Repository";
    link.appendChild(icon);
    contact.appendChild(link);
    aboutContent.appendChild(contact);


    return aboutContent;
};

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ content)
/* harmony export */ });
function content()
{
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');

    //Attach intro
    const intro = document.createElement('div');
    intro.classList.add('intro');
    intro.textContent = (
        `Welcome to Blue and Sakura's Veggie Haven, where Japanese culinary artistry meets 
        vegetarian innovation. Discover a sanctuary of flavors inspired by the serene beauty 
        of sakura blossoms and the calming depths of ocean blues. Located in the heart of Tokyo, 
        our restaurant invites you to indulge in a menu crafted with care, offering a harmonious 
        blend of tradition and creativity. Join us for an unforgettable dining experience where 
        every dish tells a story of passion and dedication to exquisite vegetarian cuisine.`  
    );
    homeContent.appendChild(intro);


    //Attach opening hours
    const openingHours = document.createElement('div');
    openingHours.classList.add('opening-hours');

    const heading1 = document.createElement('h2');
    heading1.textContent = "Opening Hours";
    openingHours.appendChild(heading1);

    const ul = document.createElement('ul');
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i=0; i<7; i++)
    {
        let li = document.createElement('li');
        li.textContent = `${days[i]}: 8am - 11pm`;
        ul.appendChild(li);
    }
    openingHours.appendChild(ul);

    homeContent.appendChild(openingHours);


    //Attach Location
    const location = document.createElement('div');
    location.classList.add('location');

    const heading2 = document.createElement('h2');
    heading2.textContent = "Location";
    location.appendChild(heading2);

    const locationText = document.createElement('div');
    locationText.textContent = "1-15-13 Sotokanda Akihabara B&V BLDG.10F, Chiyoda 101-0021 Tokyo Prefecture";
    location.appendChild(locationText);
    
    homeContent.appendChild(location);

    return homeContent;
};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _images_dish1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/dish1.jpg */ "./src/images/dish1.jpg");
/* harmony import */ var _images_dish2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/dish2.jpg */ "./src/images/dish2.jpg");
/* harmony import */ var _images_dish3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/dish3.jpg */ "./src/images/dish3.jpg");
/* harmony import */ var _images_dish4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/dish4.jpg */ "./src/images/dish4.jpg");
/* harmony import */ var _images_dish5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/dish5.jpg */ "./src/images/dish5.jpg");






class Dish
{
    dish = document.createElement('div');
    #name = document.createElement('h2');
    #image = document.createElement('img');
    #description = document.createElement('div');

    static dishNumber = 1;

    constructor(name, imageSource, description)
    {
        this.#name.textContent = name;

        this.#image.src = imageSource;
        this.#image.alt = name;

        this.#description.textContent = description;

        this.dish.appendChild(this.#name);
        this.dish.appendChild(this.#image);
        this.dish.appendChild(this.#description);
        this.dish.classList.add(`d${this.constructor.dishNumber++}`);
    };

    get preparedDish()
    {
        return this.dish;
    };
};

function content()
{
    const dishList = document.createElement('div');
    dishList.classList.add('dish-list');

    const dish1 = new Dish(
        "Vegetable Tempura",
        _images_dish1_jpg__WEBPACK_IMPORTED_MODULE_0__,
        `Lightly battered and deep-fried seasonal vegetables, served with a 
        dipping sauce. This dish is a crispy and delicious way to enjoy a 
        variety of fresh vegetables.`
    );
    dishList.appendChild(dish1.preparedDish);

    const dish2 = new Dish(
        "Yasai Itame",
        _images_dish2_jpg__WEBPACK_IMPORTED_MODULE_1__,
        `Stir-fried mixed vegetables with tofu in a savory soy-based sauce.
        This dish is flavorful and packed with nutritious veggies like bell 
        peppers, broccoli, and carrots.`
    );
    dishList.appendChild(dish2.preparedDish);

    const dish3 = new Dish(
        "Inari Sushi",
        _images_dish3_jpg__WEBPACK_IMPORTED_MODULE_2__,
        `Sushi rice wrapped in sweet and savory tofu pockets. This dish is a 
        delightful and slightly sweet option that offers a unique twist on 
        traditional sushi.`
    );
    dishList.appendChild(dish3.preparedDish);

    const dish4 = new Dish(
        "Agedashi Tofu",
        _images_dish4_jpg__WEBPACK_IMPORTED_MODULE_3__,
        `Deep-fried tofu served in a savory dashi broth, topped with grated 
        daikon radish, green onions, and bonito flakes. This dish has a crispy 
        exterior and a soft, creamy interior, making it a favorite among tofu 
        lovers.`
    );
    dishList.appendChild(dish4.preparedDish);

    const dish5 = new Dish(
        "Miso Soup with Vegetables",
        _images_dish5_jpg__WEBPACK_IMPORTED_MODULE_4__,
        `A comforting and nutritious soup made with miso paste, seaweed, tofu, 
        and an assortment of vegetables. This classic Japanese soup is both 
        flavorful and soothing, perfect for starting any meal.`
    );
    dishList.appendChild(dish5.preparedDish);

    return dishList;
};

/***/ }),

/***/ "./src/fonts/roboto-bold-webfont.woff":
/*!********************************************!*\
  !*** ./src/fonts/roboto-bold-webfont.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dddc8b119bba795c1792.woff";

/***/ }),

/***/ "./src/fonts/roboto-bold-webfont.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/roboto-bold-webfont.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90e0faae360dd9555b96.woff2";

/***/ }),

/***/ "./src/fonts/roboto-regular-webfont.woff":
/*!***********************************************!*\
  !*** ./src/fonts/roboto-regular-webfont.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aac39f77909ad0fcc265.woff";

/***/ }),

/***/ "./src/fonts/roboto-regular-webfont.woff2":
/*!************************************************!*\
  !*** ./src/fonts/roboto-regular-webfont.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e185da5f2f3e0e2ef2a.woff2";

/***/ }),

/***/ "./src/images/background-img.jpg":
/*!***************************************!*\
  !*** ./src/images/background-img.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71fd52335fa12fa58199.jpg";

/***/ }),

/***/ "./src/images/dish1.jpg":
/*!******************************!*\
  !*** ./src/images/dish1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0688754d1fd0309e787a.jpg";

/***/ }),

/***/ "./src/images/dish2.jpg":
/*!******************************!*\
  !*** ./src/images/dish2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3e1534a0ebc9ea1d06c.jpg";

/***/ }),

/***/ "./src/images/dish3.jpg":
/*!******************************!*\
  !*** ./src/images/dish3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "159d1bd8f97a8b02edeb.jpg";

/***/ }),

/***/ "./src/images/dish4.jpg":
/*!******************************!*\
  !*** ./src/images/dish4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfea46e84458c82b1231.jpg";

/***/ }),

/***/ "./src/images/dish5.jpg":
/*!******************************!*\
  !*** ./src/images/dish5.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3a53049284590408645.jpg";

/***/ }),

/***/ "./src/images/github-mark-white.svg":
/*!******************************************!*\
  !*** ./src/images/github-mark-white.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97ed8e7eef60d61ca469.svg";

/***/ }),

/***/ "./src/images/github-mark.svg":
/*!************************************!*\
  !*** ./src/images/github-mark.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fa18895f6e6c7772cab.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _images_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/github-mark-white.svg */ "./src/images/github-mark-white.svg");






const content = document.querySelector('#content');
content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

const nav = document.querySelector('nav');
const tabList = document.querySelectorAll('nav > button');
nav.addEventListener('click', (evnt) => {
    switch (evnt.target.classList[0])
    {
        case 'home-btn':
            tabList[1].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            tabList[2].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            evnt.target.style.backgroundColor = "hsla(225, 46%, 95%, 0.842)";

            content.removeChild(content.lastChild);
            content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
            break;
        case 'menu-btn':
            tabList[0].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            tabList[2].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            evnt.target.style.backgroundColor = "hsla(225, 46%, 95%, 0.842)";

            content.removeChild(content.lastChild);
            content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
            break;
        case 'about-btn':
            tabList[0].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            tabList[1].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            evnt.target.style.backgroundColor = "hsla(225, 46%, 95%, 0.842)";

            content.removeChild(content.lastChild);
            content.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
        default:
            break;
    }
});

const footerIcon = document.querySelector('footer a > img');
footerIcon.src = _images_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_4__;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFKQUF1RDtBQUNuRyw0Q0FBNEMsbUpBQXNEO0FBQ2xHLDRDQUE0QywrSUFBb0Q7QUFDaEcsNENBQTRDLDZJQUFtRDtBQUMvRiw0Q0FBNEMsbUlBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUNBQW1DO0FBQzNDLFFBQVEsbUNBQW1DO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1DQUFtQztBQUMzQyxRQUFRLG1DQUFtQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssYUFBYSxNQUFNLE9BQU8sY0FBYyxXQUFXLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxh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MERBQWEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9yb2JvdG8tcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9yb2JvdG8tcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3JvYm90by1ib2xkLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3JvYm90by1ib2xkLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhY2tncm91bmQtaW1nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qQ1NTIFJlc2V0Ki9cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMS41O1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cbmltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1heC13aWR0aDogMTAwJTtcbn1cbmlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xuXHRmb250OiBpbmhlcml0O1xuXHRib3JkZXI6IG5vbmU7XG59XG5wLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cbiNyb290LCAjX19uZXh0IHtcblx0aXNvbGF0aW9uOiBpc29sYXRlO1xufVxuXG4vKiBGb250IERlY2xhcmF0aW9ucyAqL1xuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAncm9ib3RvJztcblx0c3JjOlxuXHRcdHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyksXG5cdFx0dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZicpO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ3JvYm90byc7XG5cdHNyYzpcblx0XHR1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KCd3b2ZmMicpLFxuXHRcdHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3dvZmYnKTtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4vKiBTdHlsaW5nICovXG5ib2R5IHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuXG5cdGZvbnQtZmFtaWx5OiAncm9ib3RvJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFxuXHRcdFx0XHRSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDEuMnJlbTtcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlOiBtaW5tYXgoYXV0bywgMjAwcHgpIDFmciBtaW5tYXgoYXV0bywgMTE2cHgpIC8gMWZyIG1pbig2NWNoLCAxMDAlKSAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcblx0XHRcdFx0XHRcdFx0Jy4gbWFpbiAuJ1xuXHRcdFx0XHRcdFx0XHQnZm9vdGVyIGZvb3RlciBmb290ZXInO1xufVxuXG5oZWFkZXIge1xuXHRncmlkLWFyZWE6IGhlYWRlcjtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwOCwgMTAwJSwgOTclLCAwLjQ2Nik7XG59XG5cbm1haW4ge1xuXHRncmlkLWFyZWE6IG1haW47XG5cblx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDksIDM5JSwgNzYlLCAwLjU2OCk7XG59XG5cbmZvb3RlciB7XG5cdGdyaWQtYXJlYTogZm9vdGVyO1xuXG5cdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDE1JSwgMC45MDQpO1xufVxuXG4vKiBIZWFkZXIgU3R5bGluZyAqL1xuaGVhZGVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogJ2gxJyAnbmF2Jztcblx0cGxhY2UtY29udGVudDogZW5kIGNlbnRlcjtcblx0cGxhY2UtaXRlbXM6IGVuZCBjZW50ZXI7XG5cdGdhcDogMzJweDtcblxuXHRwYWRkaW5nOiAyNnB4IDE2cHggMHB4IDE2cHg7XG59XG5cbmgxIHtcblx0Z3JpZC1hcmVhOiBoMTtcblxuXHRmb250LXNpemU6IDIuOHJlbTtcblx0Y29sb3I6IGhzbCg3MCwgNzIlLCAxMSUpO1xuXHRsZXR0ZXItc3BhY2luZzogMS41cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMTElLCA0NSUsIDAuMTEpO1xufVxuXG5uYXYge1xuXHRncmlkLWFyZWE6IG5hdjtcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXHRnYXA6IDMycHg7XG59XG5cbm5hdiA+IGJ1dHRvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblxuXHRsZXR0ZXItc3BhY2luZzogMS41cHg7XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgyNTgsIDEwMCUsIDY3JSwgMC40MTgpO1xuXHRcblx0cGFkZGluZzogMTZweCAyMnB4O1xuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNnB4O1xuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZweDtcbn1cblxuLmhvbWUtYnRuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMjUsIDQ2JSwgOTUlLCAwLjg0Mik7XG59XG5cbi8qIEhvbWUgU3R5bGluZyAqL1xuLmhvbWUtY29udGVudCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG5cdGdhcDogMTZweDtcblxuXHRwYWRkaW5nLWlubGluZTogMTFweDtcbn1cblxuLmludHJvIHtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHR3b3JkLXNwYWNpbmc6IDEuNXB4O1xufVxuXG4ub3BlbmluZy1ob3VycyB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdhcDogMTZweDtcbn1cblxuLm9wZW5pbmctaG91cnMgPiB1bCB7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm9wZW5pbmctaG91cnMgbGkge1xuXHRtYXJnaW4tYmxvY2s6IDhweDtcbn1cblxuLmxvY2F0aW9uIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcblx0Z2FwOiAxNnB4O1xuXG5cdHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4vKiBNZW51IFN0eWxpbmcgKi9cbi5kaXNoLWxpc3Qge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xuXHRnYXA6IDMycHg7XG5cblx0cGFkZGluZzogMzJweCAxNnB4O1xufVxuXG4uZGlzaC1saXN0ID4gZGl2IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDI1MHB4IDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogJ2gyJyAnaW1nJyAnZGVzY3JpcHRpb24nO1xuXHRnYXA6IDE2cHg7XG59XG5cbi5kaXNoLWxpc3QgPiBkaXYgPiBoMiB7XG5cdGdyaWQtYXJlYTogaDI7XG59XG5cbi5kaXNoLWxpc3QgPiBkaXYgPiBpbWcge1xuXHRncmlkLWFyZWE6IGltZztcblxuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiA2NSU7XG5cdGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uZGlzaC1saXN0ID4gZGl2ID4gZGl2IHtcblx0Z3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbn1cblxuLyogQWJvdXQgU3R5bGluZyAqL1xuLmFib3V0LWNvbnRlbnQge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcblx0Z2FwOiAzMnB4O1xuXG5cdHBhZGRpbmc6IDMycHggMTZweDtcbn1cblxuLmFib3V0LWludHJvLCAuc3Rvcnkge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuXHRnYXA6IDE2cHg7XG59XG5cbi5jb250YWN0ID4gYSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiA4cHg7XG5cblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogZG9kZ2VyYmx1ZTtcbn1cblxuLmNvbnRhY3QgIGltZyB7XG5cdGhlaWdodDogMWVtO1xuXHRhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4vKiBGb290ZXIgU3R5bGluZyAqL1xuZm9vdGVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXG5cdGNvbG9yOiBoc2woMjA4LCAxMDAlLCA5NyUpO1xufVxuXG5mb290ZXIgPiBkaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiA4cHg7XG59XG5cbmZvb3RlciA+IGRpdiA+IGEge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDVweDtcblxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiBkb2RnZXJibHVlO1xufVxuXG5mb290ZXIgYSA+IGltZyB7XG5cdGhlaWdodDogMS4xNmVtO1xuXHRhc3BlY3QtcmF0aW86IDEgLyAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxZQUFZO0FBQ1o7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixtQ0FBbUM7QUFDcEM7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtBQUNiO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQSxzQkFBc0I7QUFDdEI7Q0FDQyxxQkFBcUI7Q0FDckI7O3dEQUUwRDtDQUMxRCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCOzt3REFFdUQ7Q0FDdkQsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQSxZQUFZO0FBQ1o7Q0FDQyx5REFBb0Q7O0NBRXBEO2dGQUMrRTtDQUMvRSxpQkFBaUI7O0NBRWpCLGFBQWE7Q0FDYixvRkFBb0Y7Q0FDcEY7OzZCQUU0QjtBQUM3Qjs7QUFFQTtDQUNDLGlCQUFpQjs7Q0FFakIsNkNBQTZDO0FBQzlDOztBQUVBO0NBQ0MsZUFBZTs7Q0FFZiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyxpQkFBaUI7O0NBRWpCLHlDQUF5QztBQUMxQzs7QUFFQSxtQkFBbUI7QUFDbkI7Q0FDQyxhQUFhO0NBQ2Isa0NBQWtDO0NBQ2xDLCtCQUErQjtDQUMvQix5QkFBeUI7Q0FDekIsdUJBQXVCO0NBQ3ZCLFNBQVM7O0NBRVQsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsYUFBYTs7Q0FFYixpQkFBaUI7Q0FDakIsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQyxjQUFjOztDQUVkLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsZUFBZTs7Q0FFZixxQkFBcUI7Q0FDckIsZ0JBQWdCOztDQUVoQiw2Q0FBNkM7O0NBRTdDLGtCQUFrQjtDQUNsQiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsNENBQTRDO0FBQzdDOztBQUVBLGlCQUFpQjtBQUNqQjtDQUNDLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMsU0FBUzs7Q0FFVCxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw0QkFBNEI7Q0FDNUIsU0FBUzs7Q0FFVCxpQkFBaUI7QUFDbEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0NBQ0MsYUFBYTtDQUNiLGtDQUFrQztDQUNsQyxTQUFTOztDQUVULGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMsNkNBQTZDO0NBQzdDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGNBQWM7O0NBRWQsWUFBWTtDQUNaLFVBQVU7Q0FDVixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUEsa0JBQWtCO0FBQ2xCO0NBQ0MsYUFBYTtDQUNiLG1DQUFtQztDQUNuQyxTQUFTOztDQUVULGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw0QkFBNEI7Q0FDNUIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLFFBQVE7O0NBRVIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBRUEsbUJBQW1CO0FBQ25CO0NBQ0MsYUFBYTtDQUNiLHFCQUFxQjs7Q0FFckIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFFBQVE7O0NBRVIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypDU1MgUmVzZXQqL1xcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG59XFxuaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxufVxcbnAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcblxcdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbiNyb290LCAjX19uZXh0IHtcXG5cXHRpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbi8qIEZvbnQgRGVjbGFyYXRpb25zICovXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdyb2JvdG8nO1xcblxcdHNyYzpcXG5cXHRcXHR1cmwoJy4vZm9udHMvcm9ib3RvLXJlZ3VsYXItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG5cXHRcXHR1cmwoJy4vZm9udHMvcm9ib3RvLXJlZ3VsYXItd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG5cXHRzcmM6XFxuXFx0XFx0dXJsKCcuL2ZvbnRzL3JvYm90by1ib2xkLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuXFx0XFx0dXJsKCcuL2ZvbnRzL3JvYm90by1ib2xkLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBTdHlsaW5nICovXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9iYWNrZ3JvdW5kLWltZy5qcGcnKTtcXG5cXG5cXHRmb250LWZhbWlseTogJ3JvYm90bycsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBcXG5cXHRcXHRcXHRcXHRSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZTogbWlubWF4KGF1dG8sIDIwMHB4KSAxZnIgbWlubWF4KGF1dG8sIDExNnB4KSAvIDFmciBtaW4oNjVjaCwgMTAwJSkgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQnLiBtYWluIC4nXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0J2Zvb3RlciBmb290ZXIgZm9vdGVyJztcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwOCwgMTAwJSwgOTclLCAwLjQ2Nik7XFxufVxcblxcbm1haW4ge1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwOSwgMzklLCA3NiUsIDAuNTY4KTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRncmlkLWFyZWE6IGZvb3RlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxNSUsIDAuOTA0KTtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxpbmcgKi9cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAnaDEnICduYXYnO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGVuZCBjZW50ZXI7XFxuXFx0cGxhY2UtaXRlbXM6IGVuZCBjZW50ZXI7XFxuXFx0Z2FwOiAzMnB4O1xcblxcblxcdHBhZGRpbmc6IDI2cHggMTZweCAwcHggMTZweDtcXG59XFxuXFxuaDEge1xcblxcdGdyaWQtYXJlYTogaDE7XFxuXFxuXFx0Zm9udC1zaXplOiAyLjhyZW07XFxuXFx0Y29sb3I6IGhzbCg3MCwgNzIlLCAxMSUpO1xcblxcdGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDExJSwgNDUlLCAwLjExKTtcXG59XFxuXFxubmF2IHtcXG5cXHRncmlkLWFyZWE6IG5hdjtcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0Z2FwOiAzMnB4O1xcbn1cXG5cXG5uYXYgPiBidXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXG5cXHRsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDI1OCwgMTAwJSwgNjclLCAwLjQxOCk7XFxuXFx0XFxuXFx0cGFkZGluZzogMTZweCAyMnB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5ob21lLWJ0biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMjUsIDQ2JSwgOTUlLCAwLjg0Mik7XFxufVxcblxcbi8qIEhvbWUgU3R5bGluZyAqL1xcbi5ob21lLWNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG5cXHRnYXA6IDE2cHg7XFxuXFxuXFx0cGFkZGluZy1pbmxpbmU6IDExcHg7XFxufVxcblxcbi5pbnRybyB7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdHdvcmQtc3BhY2luZzogMS41cHg7XFxufVxcblxcbi5vcGVuaW5nLWhvdXJzIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdhcDogMTZweDtcXG59XFxuXFxuLm9wZW5pbmctaG91cnMgPiB1bCB7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ub3BlbmluZy1ob3VycyBsaSB7XFxuXFx0bWFyZ2luLWJsb2NrOiA4cHg7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcblxcdGdhcDogMTZweDtcXG5cXG5cXHRwYWRkaW5nLXRvcDogMTZweDtcXG59XFxuXFxuLyogTWVudSBTdHlsaW5nICovXFxuLmRpc2gtbGlzdCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcblxcdGdhcDogMzJweDtcXG5cXG5cXHRwYWRkaW5nOiAzMnB4IDE2cHg7XFxufVxcblxcbi5kaXNoLWxpc3QgPiBkaXYge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDI1MHB4IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiAnaDInICdpbWcnICdkZXNjcmlwdGlvbic7XFxuXFx0Z2FwOiAxNnB4O1xcbn1cXG5cXG4uZGlzaC1saXN0ID4gZGl2ID4gaDIge1xcblxcdGdyaWQtYXJlYTogaDI7XFxufVxcblxcbi5kaXNoLWxpc3QgPiBkaXYgPiBpbWcge1xcblxcdGdyaWQtYXJlYTogaW1nO1xcblxcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogNjUlO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZGlzaC1saXN0ID4gZGl2ID4gZGl2IHtcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbn1cXG5cXG4vKiBBYm91dCBTdHlsaW5nICovXFxuLmFib3V0LWNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuXFx0Z2FwOiAzMnB4O1xcblxcblxcdHBhZGRpbmc6IDMycHggMTZweDtcXG59XFxuXFxuLmFib3V0LWludHJvLCAuc3Rvcnkge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG5cXHRnYXA6IDE2cHg7XFxufVxcblxcbi5jb250YWN0ID4gYSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogOHB4O1xcblxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogZG9kZ2VyYmx1ZTtcXG59XFxuXFxuLmNvbnRhY3QgIGltZyB7XFxuXFx0aGVpZ2h0OiAxZW07XFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxpbmcgKi9cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcblxcblxcdGNvbG9yOiBoc2woMjA4LCAxMDAlLCA5NyUpO1xcbn1cXG5cXG5mb290ZXIgPiBkaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiA4cHg7XFxufVxcblxcbmZvb3RlciA+IGRpdiA+IGEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDVweDtcXG5cXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IGRvZGdlcmJsdWU7XFxufVxcblxcbmZvb3RlciBhID4gaW1nIHtcXG5cXHRoZWlnaHQ6IDEuMTZlbTtcXG5cXHRhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaWNvblNyYyBmcm9tICcuL2ltYWdlcy9naXRodWItbWFyay5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250ZW50KClcbntcbiAgICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudCcpO1xuICAgIFxuICAgIFxuICAgIC8vQXR0YWNoIEludHJvXG4gICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnRyby5jbGFzc0xpc3QuYWRkKCdhYm91dC1pbnRybycpO1xuXG4gICAgY29uc3QgaW50cm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpbnRyb0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gQmx1ZSBhbmQgU2FrdXJhJ3MgVmVnZ2llIEhhdmVuIVwiO1xuICAgIGludHJvLmFwcGVuZENoaWxkKGludHJvSGVhZGluZyk7XG5cbiAgICBjb25zdCBpbnRyb01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnRyb01lc3NhZ2UudGV4dENvbnRlbnQgPSAoXG4gICAgICAgIGBXZSBpbnZpdGUgeW91IHRvIGVtYmFyayBvbiBhIGN1bGluYXJ5IGpvdXJuZXkgdGhhdCBjb21iaW5lcyB0aGUgXG4gICAgICAgIGVsZWdhbmNlIG9mIHRyYWRpdGlvbmFsIEphcGFuZXNlIGN1aXNpbmUgd2l0aCB0aGUgdmlicmFudCBmbGF2b3JzIG9mIFxuICAgICAgICBmcmVzaCwgbG9jYWxseS1zb3VyY2VkIHZlZ2V0YXJpYW4gaW5ncmVkaWVudHMuIE5lc3RsZWQgaW4gVG9reW8sIG91ciBcbiAgICAgICAgc2VyZW5lIGFuZCBzdHlsaXNoIGVhdGVyeSBvZmZlcnMgYSB0cmFucXVpbCBlc2NhcGUgd2hlcmUgeW91IGNhbiBzYXZvciBcbiAgICAgICAgdGhlIGJlc3Qgb2YgdmVnZXRhcmlhbiBkZWxpZ2h0cy5gXG4gICAgKTtcbiAgICBpbnRyby5hcHBlbmRDaGlsZChpbnRyb01lc3NhZ2UpO1xuICAgIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChpbnRybyk7XG5cblxuICAgIC8vQXR0YWNoIFN0b3J5XG4gICAgY29uc3Qgc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdG9yeS5jbGFzc0xpc3QuYWRkKCdzdG9yeScpO1xuXG4gICAgY29uc3Qgc3RvcnlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdG9yeUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk91ciBTdG9yeVwiO1xuICAgIHN0b3J5LmFwcGVuZENoaWxkKHN0b3J5SGVhZGluZyk7XG5cbiAgICBjb25zdCBzdG9yeUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdG9yeUNvbnRlbnQudGV4dENvbnRlbnQgPSAoXG4gICAgICAgIGBBcyB0aGUgb3duZXIgb2YgQmx1ZSBhbmQgU2FrdXJhJ3MgVmVnZ2llIEhhdmVuLCBJJ3ZlIHNlZW4gb3VyIHJlc3RhdXJhbnQgXG4gICAgICAgIGJsb3Nzb20gaW50byBhIGNoZXJpc2hlZCBzYW5jdHVhcnkgaW4gdGhlIGhlYXJ0IG9mIHRoZSBjaXR5LiBOYW1lZCBhZnRlciBcbiAgICAgICAgc2FrdXJhIGJsb3Nzb21zIGFuZCB0aGUgb2NlYW4ncyBzZXJlbmUgYmx1ZXMsIHdlIG9mZmVyIGRpc2hlcyB0aGF0IGJsZW5kIFxuICAgICAgICB0cmFkaXRpb24gd2l0aCBpbm5vdmF0aW9uLCBpbnZpdGluZyBndWVzdHMgdG8gZW5qb3kgZmxhdm9ycyB0aGF0IHRyYW5zY2VuZCBcbiAgICAgICAgbWVyZSBub3VyaXNobWVudC4gT3VyIGhhdmVuIGlzbid0IGp1c3QgYWJvdXQgZm9vZDsgaXQncyBhYm91dCBjcmVhdGluZyBhIFxuICAgICAgICB0cmFucXVpbCBlc2NhcGUgd2hlcmUgZXZlcnkgbWVhbCBwcm9taXNlcyBtb21lbnRzIG9mIHBlYWNlIGFuZCBkZWxpZ2h0LCBcbiAgICAgICAgcmVmbGVjdGluZyBvdXIgY29tbWl0bWVudCB0byBwcm92aWRpbmcgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZSBcbiAgICAgICAgY2VudGVyZWQgb24gcGFzc2lvbiBhbmQgaG9zcGl0YWxpdHkuYFxuICAgICk7XG4gICAgc3RvcnkuYXBwZW5kQ2hpbGQoc3RvcnlDb250ZW50KTtcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoc3RvcnkpO1xuXG5cbiAgICAvL0F0dGFjaCBDb250YWN0XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RIZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SGVhZGluZyk7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbi5zcmMgPSBpY29uU3JjO1xuICAgIGljb24uYWx0ID0gXCJHaXRodWIgUmVwb3NpdG9yeVwiO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlMDIwNi9yZXN0YXVyYW50LXBhZ2VcIjtcbiAgICBsaW5rLnRleHRDb250ZW50ID0gXCJCbHVlICYgU2FrdXJhJ3MgVmVnZ2llIEhhdmVuIFJlcG9zaXRvcnlcIjtcbiAgICBsaW5rLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG5cbiAgICByZXR1cm4gYWJvdXRDb250ZW50O1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250ZW50KClcbntcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGVudCcpO1xuXG4gICAgLy9BdHRhY2ggaW50cm9cbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGludHJvLmNsYXNzTGlzdC5hZGQoJ2ludHJvJyk7XG4gICAgaW50cm8udGV4dENvbnRlbnQgPSAoXG4gICAgICAgIGBXZWxjb21lIHRvIEJsdWUgYW5kIFNha3VyYSdzIFZlZ2dpZSBIYXZlbiwgd2hlcmUgSmFwYW5lc2UgY3VsaW5hcnkgYXJ0aXN0cnkgbWVldHMgXG4gICAgICAgIHZlZ2V0YXJpYW4gaW5ub3ZhdGlvbi4gRGlzY292ZXIgYSBzYW5jdHVhcnkgb2YgZmxhdm9ycyBpbnNwaXJlZCBieSB0aGUgc2VyZW5lIGJlYXV0eSBcbiAgICAgICAgb2Ygc2FrdXJhIGJsb3Nzb21zIGFuZCB0aGUgY2FsbWluZyBkZXB0aHMgb2Ygb2NlYW4gYmx1ZXMuIExvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIFRva3lvLCBcbiAgICAgICAgb3VyIHJlc3RhdXJhbnQgaW52aXRlcyB5b3UgdG8gaW5kdWxnZSBpbiBhIG1lbnUgY3JhZnRlZCB3aXRoIGNhcmUsIG9mZmVyaW5nIGEgaGFybW9uaW91cyBcbiAgICAgICAgYmxlbmQgb2YgdHJhZGl0aW9uIGFuZCBjcmVhdGl2aXR5LiBKb2luIHVzIGZvciBhbiB1bmZvcmdldHRhYmxlIGRpbmluZyBleHBlcmllbmNlIHdoZXJlIFxuICAgICAgICBldmVyeSBkaXNoIHRlbGxzIGEgc3Rvcnkgb2YgcGFzc2lvbiBhbmQgZGVkaWNhdGlvbiB0byBleHF1aXNpdGUgdmVnZXRhcmlhbiBjdWlzaW5lLmAgIFxuICAgICk7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaW50cm8pO1xuXG5cbiAgICAvL0F0dGFjaCBvcGVuaW5nIGhvdXJzXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3BlbmluZ0hvdXJzLmNsYXNzTGlzdC5hZGQoJ29wZW5pbmctaG91cnMnKTtcblxuICAgIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nMS50ZXh0Q29udGVudCA9IFwiT3BlbmluZyBIb3Vyc1wiO1xuICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChoZWFkaW5nMSk7XG5cbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgZGF5cyA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdO1xuICAgIGZvciAobGV0IGk9MDsgaTw3OyBpKyspXG4gICAge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGAke2RheXNbaV19OiA4YW0gLSAxMXBtYDtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgICBvcGVuaW5nSG91cnMuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzKTtcblxuXG4gICAgLy9BdHRhY2ggTG9jYXRpb25cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZzIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoaGVhZGluZzIpO1xuXG4gICAgY29uc3QgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gXCIxLTE1LTEzIFNvdG9rYW5kYSBBa2loYWJhcmEgQiZWIEJMREcuMTBGLCBDaGl5b2RhIDEwMS0wMDIxIFRva3lvIFByZWZlY3R1cmVcIjtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblRleHQpO1xuICAgIFxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICAgIHJldHVybiBob21lQ29udGVudDtcbn07IiwiaW1wb3J0IGltYWdlRGlzaDEgZnJvbSAnLi9pbWFnZXMvZGlzaDEuanBnJztcbmltcG9ydCBpbWFnZURpc2gyIGZyb20gXCIuL2ltYWdlcy9kaXNoMi5qcGdcIjtcbmltcG9ydCBpbWFnZURpc2gzIGZyb20gXCIuL2ltYWdlcy9kaXNoMy5qcGdcIjtcbmltcG9ydCBpbWFnZURpc2g0IGZyb20gXCIuL2ltYWdlcy9kaXNoNC5qcGdcIjtcbmltcG9ydCBpbWFnZURpc2g1IGZyb20gXCIuL2ltYWdlcy9kaXNoNS5qcGdcIjtcblxuY2xhc3MgRGlzaFxue1xuICAgIGRpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAjbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgI2ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgI2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBzdGF0aWMgZGlzaE51bWJlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZVNvdXJjZSwgZGVzY3JpcHRpb24pXG4gICAge1xuICAgICAgICB0aGlzLiNuYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgICAgICB0aGlzLiNpbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgICAgICAgdGhpcy4jaW1hZ2UuYWx0ID0gbmFtZTtcblxuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgICAgIHRoaXMuZGlzaC5hcHBlbmRDaGlsZCh0aGlzLiNuYW1lKTtcbiAgICAgICAgdGhpcy5kaXNoLmFwcGVuZENoaWxkKHRoaXMuI2ltYWdlKTtcbiAgICAgICAgdGhpcy5kaXNoLmFwcGVuZENoaWxkKHRoaXMuI2Rlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5kaXNoLmNsYXNzTGlzdC5hZGQoYGQke3RoaXMuY29uc3RydWN0b3IuZGlzaE51bWJlcisrfWApO1xuICAgIH07XG5cbiAgICBnZXQgcHJlcGFyZWREaXNoKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2g7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRlbnQoKVxue1xuICAgIGNvbnN0IGRpc2hMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzaExpc3QuY2xhc3NMaXN0LmFkZCgnZGlzaC1saXN0Jyk7XG5cbiAgICBjb25zdCBkaXNoMSA9IG5ldyBEaXNoKFxuICAgICAgICBcIlZlZ2V0YWJsZSBUZW1wdXJhXCIsXG4gICAgICAgIGltYWdlRGlzaDEsXG4gICAgICAgIGBMaWdodGx5IGJhdHRlcmVkIGFuZCBkZWVwLWZyaWVkIHNlYXNvbmFsIHZlZ2V0YWJsZXMsIHNlcnZlZCB3aXRoIGEgXG4gICAgICAgIGRpcHBpbmcgc2F1Y2UuIFRoaXMgZGlzaCBpcyBhIGNyaXNweSBhbmQgZGVsaWNpb3VzIHdheSB0byBlbmpveSBhIFxuICAgICAgICB2YXJpZXR5IG9mIGZyZXNoIHZlZ2V0YWJsZXMuYFxuICAgICk7XG4gICAgZGlzaExpc3QuYXBwZW5kQ2hpbGQoZGlzaDEucHJlcGFyZWREaXNoKTtcblxuICAgIGNvbnN0IGRpc2gyID0gbmV3IERpc2goXG4gICAgICAgIFwiWWFzYWkgSXRhbWVcIixcbiAgICAgICAgaW1hZ2VEaXNoMixcbiAgICAgICAgYFN0aXItZnJpZWQgbWl4ZWQgdmVnZXRhYmxlcyB3aXRoIHRvZnUgaW4gYSBzYXZvcnkgc295LWJhc2VkIHNhdWNlLlxuICAgICAgICBUaGlzIGRpc2ggaXMgZmxhdm9yZnVsIGFuZCBwYWNrZWQgd2l0aCBudXRyaXRpb3VzIHZlZ2dpZXMgbGlrZSBiZWxsIFxuICAgICAgICBwZXBwZXJzLCBicm9jY29saSwgYW5kIGNhcnJvdHMuYFxuICAgICk7XG4gICAgZGlzaExpc3QuYXBwZW5kQ2hpbGQoZGlzaDIucHJlcGFyZWREaXNoKTtcblxuICAgIGNvbnN0IGRpc2gzID0gbmV3IERpc2goXG4gICAgICAgIFwiSW5hcmkgU3VzaGlcIixcbiAgICAgICAgaW1hZ2VEaXNoMyxcbiAgICAgICAgYFN1c2hpIHJpY2Ugd3JhcHBlZCBpbiBzd2VldCBhbmQgc2F2b3J5IHRvZnUgcG9ja2V0cy4gVGhpcyBkaXNoIGlzIGEgXG4gICAgICAgIGRlbGlnaHRmdWwgYW5kIHNsaWdodGx5IHN3ZWV0IG9wdGlvbiB0aGF0IG9mZmVycyBhIHVuaXF1ZSB0d2lzdCBvbiBcbiAgICAgICAgdHJhZGl0aW9uYWwgc3VzaGkuYFxuICAgICk7XG4gICAgZGlzaExpc3QuYXBwZW5kQ2hpbGQoZGlzaDMucHJlcGFyZWREaXNoKTtcblxuICAgIGNvbnN0IGRpc2g0ID0gbmV3IERpc2goXG4gICAgICAgIFwiQWdlZGFzaGkgVG9mdVwiLFxuICAgICAgICBpbWFnZURpc2g0LFxuICAgICAgICBgRGVlcC1mcmllZCB0b2Z1IHNlcnZlZCBpbiBhIHNhdm9yeSBkYXNoaSBicm90aCwgdG9wcGVkIHdpdGggZ3JhdGVkIFxuICAgICAgICBkYWlrb24gcmFkaXNoLCBncmVlbiBvbmlvbnMsIGFuZCBib25pdG8gZmxha2VzLiBUaGlzIGRpc2ggaGFzIGEgY3Jpc3B5IFxuICAgICAgICBleHRlcmlvciBhbmQgYSBzb2Z0LCBjcmVhbXkgaW50ZXJpb3IsIG1ha2luZyBpdCBhIGZhdm9yaXRlIGFtb25nIHRvZnUgXG4gICAgICAgIGxvdmVycy5gXG4gICAgKTtcbiAgICBkaXNoTGlzdC5hcHBlbmRDaGlsZChkaXNoNC5wcmVwYXJlZERpc2gpO1xuXG4gICAgY29uc3QgZGlzaDUgPSBuZXcgRGlzaChcbiAgICAgICAgXCJNaXNvIFNvdXAgd2l0aCBWZWdldGFibGVzXCIsXG4gICAgICAgIGltYWdlRGlzaDUsXG4gICAgICAgIGBBIGNvbWZvcnRpbmcgYW5kIG51dHJpdGlvdXMgc291cCBtYWRlIHdpdGggbWlzbyBwYXN0ZSwgc2Vhd2VlZCwgdG9mdSwgXG4gICAgICAgIGFuZCBhbiBhc3NvcnRtZW50IG9mIHZlZ2V0YWJsZXMuIFRoaXMgY2xhc3NpYyBKYXBhbmVzZSBzb3VwIGlzIGJvdGggXG4gICAgICAgIGZsYXZvcmZ1bCBhbmQgc29vdGhpbmcsIHBlcmZlY3QgZm9yIHN0YXJ0aW5nIGFueSBtZWFsLmBcbiAgICApO1xuICAgIGRpc2hMaXN0LmFwcGVuZENoaWxkKGRpc2g1LnByZXBhcmVkRGlzaCk7XG5cbiAgICByZXR1cm4gZGlzaExpc3Q7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IGZvb3Rlckljb25TcmMgZnJvbSAnLi9pbWFnZXMvZ2l0aHViLW1hcmstd2hpdGUuc3ZnJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSk7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiA+IGJ1dHRvbicpO1xubmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2bnQpID0+IHtcbiAgICBzd2l0Y2ggKGV2bnQudGFyZ2V0LmNsYXNzTGlzdFswXSlcbiAgICB7XG4gICAgICAgIGNhc2UgJ2hvbWUtYnRuJzpcbiAgICAgICAgICAgIHRhYkxpc3RbMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJoc2xhKDI1OCwgMTAwJSwgNjclLCAwLjQxOClcIjtcbiAgICAgICAgICAgIHRhYkxpc3RbMl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJoc2xhKDI1OCwgMTAwJSwgNjclLCAwLjQxOClcIjtcbiAgICAgICAgICAgIGV2bnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsYSgyMjUsIDQ2JSwgOTUlLCAwLjg0MilcIjtcblxuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudS1idG4nOlxuICAgICAgICAgICAgdGFiTGlzdFswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbGEoMjU4LCAxMDAlLCA2NyUsIDAuNDE4KVwiO1xuICAgICAgICAgICAgdGFiTGlzdFsyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbGEoMjU4LCAxMDAlLCA2NyUsIDAuNDE4KVwiO1xuICAgICAgICAgICAgZXZudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJoc2xhKDIyNSwgNDYlLCA5NSUsIDAuODQyKVwiO1xuXG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhYm91dC1idG4nOlxuICAgICAgICAgICAgdGFiTGlzdFswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbGEoMjU4LCAxMDAlLCA2NyUsIDAuNDE4KVwiO1xuICAgICAgICAgICAgdGFiTGlzdFsxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbGEoMjU4LCAxMDAlLCA2NyUsIDAuNDE4KVwiO1xuICAgICAgICAgICAgZXZudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJoc2xhKDIyNSwgNDYlLCA5NSUsIDAuODQyKVwiO1xuXG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxuY29uc3QgZm9vdGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlciBhID4gaW1nJyk7XG5mb290ZXJJY29uLnNyYyA9IGZvb3Rlckljb25TcmM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9