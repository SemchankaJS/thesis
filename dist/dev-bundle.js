/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/SliderCarousel */ \"./src/modules/SliderCarousel.js\");\n/* harmony import */ var _modules_scrolls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrolls */ \"./src/modules/scrolls.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/maskPhone */ \"./src/modules/maskPhone.js\");\n/* harmony import */ var _modules_modalWindow2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modalWindow2 */ \"./src/modules/modalWindow2.js\");\n\n\n\n\n\n\n\n\n\n\nvar carousel = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_2__.default({\n  main: '.services-elements',\n  wrap: '.services-carousel',\n  next: '.arrow-right',\n  prev: '.arrow-left',\n  slidesToShow: 3,\n  infinity: true,\n  responsive: [{\n    breakpoint: 1024,\n    slidesToShow: 3\n  }, {\n    breakpoint: 768,\n    slidesToShow: 2\n  }, {\n    breakpoint: 576,\n    slidesToShow: 1\n  }]\n});\ncarousel.init(); // Модальное окно и подложка\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__.default)(); // Главный слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.default)(); // Карусель\n\ncarousel(); // Прокрутка страницы\n\n(0,_modules_scrolls__WEBPACK_IMPORTED_MODULE_3__.default)(); // Отправка данных\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__.default)(); // Аккордион\n\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_6__.default)('.tel');\n(0,_modules_modalWindow2__WEBPACK_IMPORTED_MODULE_7__.default)();\n\n//# sourceURL=webpack://thesis/./src/index.js?");

/***/ }),

/***/ "./src/modules/SliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/SliderCarousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SliderCarousel = /*#__PURE__*/function () {\n  function SliderCarousel(_ref) {\n    var main = _ref.main,\n        wrap = _ref.wrap,\n        next = _ref.next,\n        prev = _ref.prev,\n        _ref$infinity = _ref.infinity,\n        infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n        _ref$position = _ref.position,\n        position = _ref$position === void 0 ? 0 : _ref$position,\n        _ref$slidesToShow = _ref.slidesToShow,\n        slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,\n        _ref$responsive = _ref.responsive,\n        responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n    _classCallCheck(this, SliderCarousel);\n\n    if (!main || !wrap) {\n      console.warn('slider-carousel: необходимо 2 свойства: \"main\" и \"wrap\"!');\n    }\n\n    this.main = document.querySelector(main);\n    this.wrap = document.querySelector(wrap);\n    this.slides = document.querySelector(wrap).children;\n    this.next = document.querySelector(next);\n    this.prev = document.querySelector(prev);\n    this.slidesToShow = slidesToShow;\n    this.options = {\n      position: position,\n      infinity: infinity,\n      widthSlide: Math.floor(100 / this.slidesToShow),\n      maxPosition: this.slides.length - this.slidesToShow\n    };\n    this.responsive = responsive;\n  }\n\n  _createClass(SliderCarousel, [{\n    key: \"init\",\n    value: function init() {\n      this.addGloClass();\n      this.addStyle();\n\n      if (this.prev && this.next) {\n        this.controlSlider();\n      } else {\n        this.addArrow();\n        this.controlSlider();\n      }\n\n      if (this.responsive) {\n        this.responseInit();\n      }\n    }\n  }, {\n    key: \"addGloClass\",\n    value: function addGloClass() {\n      this.main.classList.add('glo-slider');\n      this.wrap.classList.add('glo-slider__wrap');\n\n      var _iterator = _createForOfIteratorHelper(this.slides),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          item.classList.add('glo-slider__item');\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"addStyle\",\n    value: function addStyle() {\n      var style = document.getElementById('sliderCarousel-style');\n\n      if (!style) {\n        style = document.createElement('style');\n        style.id = 'sliderCarousel-style';\n      }\n\n      style.textContent = \"\\n      .glo-slider {\\n        overflow: hidden !important;\\n      }\\n      .glo-slider__wrap {\\n        display: flex !important;\\n        transition: transform 0.5s !important;\\n        will-change: transform !important;\\n      }\\n      .glo-slider__item {\\n        display: flex !important;\\n        align-items: center;\\n        justify-content: center;\\n        flex: 0 0 \".concat(this.options.widthSlide, \"% !important;\\n        margin: auto 0 !important;\\n      }\\n      \");\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"controlSlider\",\n    value: function controlSlider() {\n      this.prev.addEventListener('click', this.prevSlider.bind(this));\n      this.next.addEventListener('click', this.nextSlider.bind(this));\n    }\n  }, {\n    key: \"prevSlider\",\n    value: function prevSlider() {\n      if (this.options.infinity || this.options.position > 0) {\n        --this.options.position;\n\n        if (this.options.position < 0) {\n          this.options.position = this.options.maxPosition;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"nextSlider\",\n    value: function nextSlider() {\n      if (this.options.infinity || this.options.position < this.options.maxPosition) {\n        ++this.options.position;\n\n        if (this.options.position > this.options.maxPosition) {\n          this.options.position = 0;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"addArrow\",\n    value: function addArrow() {\n      this.prev = document.createElement('button');\n      this.next = document.createElement('button');\n      this.prev.className = 'glo-slider__prev';\n      this.next.className = 'glo-slider__next';\n      this.main.appendChild(this.prev);\n      this.main.appendChild(this.next);\n      var style = document.createElement('style');\n      style.textContent = \"\\n      .glo-slider__prev,\\n      .glo-slider__next {\\n        margin: 10px 10px;\\n        border: 20px solid transparent;\\n        background: transparent;\\n      }\\n      .glo-slider__next {\\n        border-left-color: #19b5fe\\n      }\\n      .glo-slider__prev {\\n        border-right-color: #19b5fe\\n      }\\n      .glo-slider__next:hover,\\n      .glo-slider__next:focus,\\n      .glo-slider__prev:hover,\\n      .glo-slider__prev:focus {\\n        background: transparent;\\n        outline: transparent;\\n      }\\n      \";\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"responseInit\",\n    value: function responseInit() {\n      var _this = this;\n\n      var slidesToShowDefault = this.slidesToShow,\n          allResponse = this.responsive.map(function (item) {\n        return item.breakpoint;\n      }),\n          maxResponse = Math.max.apply(Math, _toConsumableArray(allResponse));\n\n      var checkResponse = function checkResponse() {\n        var widthWindow = document.documentElement.clientWidth;\n\n        if (widthWindow < maxResponse) {\n          for (var i = 0; i < allResponse.length; i++) {\n            if (widthWindow < allResponse[i]) {\n              _this.slidesToShow = _this.responsive[i].slidesToShow;\n              _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n              _this.addStyle();\n            }\n          }\n        } else {\n          _this.slidesToShow = slidesToShowDefault;\n          _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n          _this.addStyle();\n        }\n      };\n\n      checkResponse();\n      window.addEventListener('resize', checkResponse);\n    }\n  }]);\n\n  return SliderCarousel;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderCarousel);\n\n//# sourceURL=webpack://thesis/./src/modules/SliderCarousel.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// Аккордион\nvar accordeon = function accordeon() {\n  var accordeon = document.querySelector('.accordeon'),\n      element = accordeon.querySelectorAll('.element');\n\n  var addStyle = function addStyle() {\n    var style = document.createElement('style');\n    style.textContent = \"\\n      .accordeon .element.active .element-content {\\n        display: block !important;\\n      }\\n      .accordeon .element-content {\\n        display: none !important;\\n      }\\n    \";\n    document.head.appendChild(style);\n  };\n\n  addStyle();\n\n  var _iterator = _createForOfIteratorHelper(element),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      item.addEventListener('click', function () {\n        if (this.classList.contains('active')) {\n          this.classList.remove('active');\n        } else {\n          var _iterator2 = _createForOfIteratorHelper(element),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var elem = _step2.value;\n              elem.classList.remove('active');\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n\n          this.classList.add('active');\n        }\n      });\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://thesis/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/maskPhone.js":
/*!**********************************!*\
  !*** ./src/modules/maskPhone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar maskPhone = function maskPhone(selector) {\n  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';\n  var elems = document.querySelectorAll(selector);\n\n  function mask(event) {\n    var keyCode = event.keyCode;\n    var template = masked,\n        def = template.replace(/\\D/g, \"\"),\n        val = this.value.replace(/\\D/g, \"\");\n    var i = 0,\n        newValue = template.replace(/[_\\d]/g, function (a) {\n      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n    });\n    i = newValue.indexOf(\"_\");\n\n    if (i !== -1) {\n      newValue = newValue.slice(0, i);\n    }\n\n    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n      return \"\\\\d{1,\" + a.length + \"}\";\n    }).replace(/[+()]/g, \"\\\\$&\");\n    reg = new RegExp(\"^\" + reg + \"$\");\n\n    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n      this.value = newValue;\n    }\n\n    if (event.type === \"blur\" && this.value.length < 5) {\n      this.value = \"\";\n    }\n  }\n\n  var _iterator = _createForOfIteratorHelper(elems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.addEventListener(\"input\", mask);\n      elem.addEventListener(\"focus\", mask);\n      elem.addEventListener(\"blur\", mask);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack://thesis/./src/modules/maskPhone.js?");

/***/ }),

/***/ "./src/modules/modalWindow.js":
/*!************************************!*\
  !*** ./src/modules/modalWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modalWindow = function modalWindow() {\n  var callback = document.querySelector('.modal-callback');\n  var modalOverlay = document.querySelector('.modal-overlay');\n  var modalBtn = document.querySelectorAll('a')[5];\n  var modalClose = document.querySelector('.modal-close>img');\n  modalBtn.addEventListener('click', function () {\n    callback.style.display = 'block';\n    modalOverlay.style.display = 'block';\n  });\n  modalClose.addEventListener('click', function () {\n    callback.style.display = 'none';\n    modalOverlay.style.display = 'none';\n    document.querySelectorAll('input').forEach(function (item) {\n      if (item.type === 'text' || item.type === 'tel') {\n        item.value = '';\n      }\n    });\n  });\n  modalOverlay.addEventListener('click', function () {\n    callback.style.display = 'none';\n    modalOverlay.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack://thesis/./src/modules/modalWindow.js?");

/***/ }),

/***/ "./src/modules/modalWindow2.js":
/*!*************************************!*\
  !*** ./src/modules/modalWindow2.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Зеленая кнопка \nvar modalWindow2 = function modalWindow2() {\n  var callback = document.querySelector('.modal-callback');\n  var modalOverlay = document.querySelector('.modal-overlay');\n  var modalBtn = document.querySelectorAll('a')[15];\n  var modalClose = document.querySelector('.modal-close>img');\n  modalBtn.addEventListener('click', function () {\n    callback.style.display = 'block';\n    modalOverlay.style.display = 'block';\n  });\n  modalClose.addEventListener('click', function () {\n    callback.style.display = 'none';\n    modalOverlay.style.display = 'none';\n    document.querySelectorAll('input').forEach(function (item) {\n      if (item.type === 'text' || item.type === 'tel') {\n        item.value = '';\n      }\n    });\n  });\n  modalOverlay.addEventListener('click', function () {\n    callback.style.display = 'none';\n    modalOverlay.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow2);\n\n//# sourceURL=webpack://thesis/./src/modules/modalWindow2.js?");

/***/ }),

/***/ "./src/modules/scrolls.js":
/*!********************************!*\
  !*** ./src/modules/scrolls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrolls = function scrolls() {\n  var up = document.querySelector('.up');\n\n  var addStyle = function addStyle() {\n    var style = document.createElement('style');\n    style.textContent = \"\\n      .up {\\n        display: none;\\n      }  \\n      .up-active {\\n        display: block !important;\\n      }\\n      \";\n    document.head.appendChild(style);\n  };\n\n  addStyle();\n\n  var addClass = function addClass() {\n    var scroll = window.pageYOffset;\n\n    if (scroll >= 503) {\n      up.classList.add('up-active');\n    }\n\n    if (scroll === 0) {\n      up.classList.remove('up-active');\n    }\n  };\n\n  addClass();\n\n  var goTop = function goTop() {\n    if (window.pageYOffset > 0) {\n      window.scrollTo(window.pageYOffset, 0);\n    }\n  };\n\n  up.addEventListener('click', goTop);\n  document.addEventListener('scroll', addClass);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolls);\n\n//# sourceURL=webpack://thesis/./src/modules/scrolls.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!',\n      input = document.querySelectorAll('input'),\n      name = document.getElementsByName('fio')[0],\n      statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"\\n    font-size: 2rem;\\n    color: black;\\n    text-align: center;\\n  \";\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  document.addEventListener('input', function (event) {\n    if (event.target.placeholder === 'Ваше имя') {\n      event.target.value = event.target.value.replace(/[^а-яё\\s]/gi, '');\n    }\n  });\n  input.forEach(function (elem) {\n    elem.addEventListener('blur', function () {\n      name.value = name.value.replace(/([а-яё])([а-яё]+)/gi, function (match, val1, val2) {\n        return val1.toUpperCase() + val2;\n      });\n    });\n  });\n  var valid = false;\n  document.addEventListener('input', function (event) {\n    if (event.target.placeholder === 'Ваше имя' && /^[а-яё]{3,20}$/i.test(event.target.value)) {\n      valid = true;\n      return;\n    } else {\n      valid = false;\n    }\n\n    if (event.target.placeholder === 'Телефон*' && event.target.value.length === 18) {\n      valid = true;\n      return;\n    } else {\n      valid = false;\n    }\n  });\n  document.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (valid === true) {\n      target.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(target);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      input.forEach(function (item) {\n        item.value = '';\n      });\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('Status network not 200');\n        }\n\n        statusMessage.textContent = successMessage;\n        document.querySelector('.feedback').value = 'отправлено';\n        setTimeout(function () {\n          document.querySelector('.feedback').value = 'отправить';\n          statusMessage.textContent = '';\n        }, 5000);\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n        document.querySelector('.feedback').value = 'отправляется';\n        setTimeout(function () {\n          document.querySelector('.feedback').value = 'отправить';\n          statusMessage.textContent = '';\n        }, 5000);\n      });\n    } else {\n      return;\n    }\n\n    valid = false;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://thesis/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var indexSlider = 1;\n  var sliderItem = document.querySelectorAll('.item');\n  var table = document.querySelectorAll('.table');\n  table.forEach(function (item) {\n    item.classList.add('table');\n  });\n\n  var showSlides = function showSlides(n) {\n    if (n > sliderItem.length) {\n      indexSlider = 1;\n    }\n\n    if (n < 1) {\n      indexSlider = sliderItem.length;\n    }\n\n    sliderItem.forEach(function (item) {\n      item.classList.add('animated');\n      item.style.display = 'none';\n    });\n    sliderItem[indexSlider - 1].style.display = 'block';\n    table.forEach(function (item) {\n      item.classList.remove('active');\n    });\n  };\n\n  showSlides(indexSlider);\n\n  var nextSlides = function nextSlides(n) {\n    showSlides(indexSlider += n);\n  };\n\n  setInterval(function () {\n    nextSlides(1);\n    sliderItem[indexSlider - 1].classList.remove('fadeIn');\n    sliderItem[indexSlider - 1].classList.add('fadeIn');\n    setTimeout(function () {\n      return table[indexSlider - 1].classList.add('active');\n    }, 30);\n    setTimeout(function () {\n      return table[indexSlider - 1].classList.remove('active');\n    }, 2550);\n  }, 3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://thesis/./src/modules/slider.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;