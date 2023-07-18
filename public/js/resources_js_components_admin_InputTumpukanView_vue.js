"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_InputTumpukanView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["id"],
  data: function data() {
    return {
      tumpukan: 0,
      selectedBarang: "",
      listBarang: [],
      dataBarang: [],
      headers: [],
      // Menyimpan nama header
      detailNote: []
    };
  },
  created: function created() {
    this.fetchBarang();
  },
  methods: {
    submitData: function submitData() {
      var _this = this;
      console.log(this.dataBarang);
      var requestData = new FormData();
      var tumpukanCount = 1;
      this.dataBarang.forEach(function (item) {
        var tumpukanFields = {};
        for (var header in item.tumpukan) {
          tumpukanFields["tumpukan_".concat(tumpukanCount)] = item.tumpukan[header].join(",");
          tumpukanCount++;
        }
        requestData.append("id_note", _this.id);
        requestData.append("id_barang", item.barang);
        for (var key in tumpukanFields) {
          requestData.append("".concat(key), tumpukanFields[key]);
        }
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:8080/api/createTumpukan", requestData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.error(error);
      });
    },
    fetchBarang: function fetchBarang() {
      var _this2 = this;
      console.log("tesss id :", this.id);
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:8080/api/barang").then(function (response) {
        _this2.listBarang = response.data.data;
      })["catch"](function (error) {
        console.error(error);
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:8080/api/note/".concat(this.id)).then(function (response) {
        _this2.detailNote = response.data.data;
      })["catch"](function (error) {
        console.error(error);
      });
      console.log(this.detailNote);
    },
    submitBarang: function submitBarang() {
      if (this.selectedBarang) {
        this.dataBarang.push({
          barang: this.selectedBarang,
          tumpukan: {}
        });
        this.selectedBarang = "";
      }
    },
    hitungTumpukan: function hitungTumpukan() {
      this.tumpukan = parseInt(this.tumpukan + 1);
    },
    submitTumpukan: function submitTumpukan() {
      if (this.tumpukan && this.dataBarang.length > 0) {
        var lastBarang = this.dataBarang[this.dataBarang.length - 1];
        var header = Object.keys(lastBarang.tumpukan).length + 1;
        if (header <= 10) {
          if (!this.headers.includes(header.toString())) {
            this.headers.push(header.toString());
          }
          if (!lastBarang.tumpukan[header.toString()]) {
            lastBarang.tumpukan[header.toString()] = [];
          }
          lastBarang.tumpukan[header.toString()].push(parseInt(this.tumpukan));
        }
        this.tumpukan = "";
      }
    },
    getTotalTumpukan: function getTotalTumpukan(item) {
      var total = 0;
      for (var header in item.tumpukan) {
        var _iterator = _createForOfIteratorHelper(item.tumpukan[header]),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var tumpukan = _step.value;
            total += tumpukan;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return total;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bordered-table {\r\n  border-collapse: collapse;\n}\n.bordered-table th,\r\n.bordered-table td {\r\n  border: 1px solid #ccc;\r\n  padding: 5px;\n}\n.bordered-li {\r\n  border-bottom: 1px solid #ccc;\r\n  padding: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTumpukanView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputTumpukanView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTumpukanView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTumpukanView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/admin/InputTumpukanView.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/InputTumpukanView.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputTumpukanView_vue_vue_type_template_id_1b09d8fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputTumpukanView.vue?vue&type=template&id=1b09d8fb& */ "./resources/js/components/admin/InputTumpukanView.vue?vue&type=template&id=1b09d8fb&");
/* harmony import */ var _InputTumpukanView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputTumpukanView.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/InputTumpukanView.vue?vue&type=script&lang=js&");
/* harmony import */ var _InputTumpukanView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputTumpukanView.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/admin/InputTumpukanView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InputTumpukanView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputTumpukanView_vue_vue_type_template_id_1b09d8fb___WEBPACK_IMPORTED_MODULE_0__.render,
  _InputTumpukanView_vue_vue_type_template_id_1b09d8fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/InputTumpukanView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/InputTumpukanView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/InputTumpukanView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTumpukanView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputTumpukanView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTumpukanView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/InputTumpukanView.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/InputTumpukanView.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTumpukanView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputTumpukanView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/admin/InputTumpukanView.vue?vue&type=template&id=1b09d8fb&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/InputTumpukanView.vue?vue&type=template&id=1b09d8fb& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTumpukanView_vue_vue_type_template_id_1b09d8fb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTumpukanView_vue_vue_type_template_id_1b09d8fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTumpukanView_vue_vue_type_template_id_1b09d8fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputTumpukanView.vue?vue&type=template&id=1b09d8fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=template&id=1b09d8fb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=template&id=1b09d8fb&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/InputTumpukanView.vue?vue&type=template&id=1b09d8fb& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "wrapper" } },
    [
      _c("Sidebar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-column", attrs: { id: "content-wrapper" } },
        [
          _c(
            "div",
            { attrs: { id: "content" } },
            [
              _c("Navbar"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-1" }),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-10" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("h5", [
                        _vm._v("Lokasi :" + _vm._s(this.detailNote.location)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("h5", [
                        _vm._v(
                          "Nomor Truk :" + _vm._s(this.detailNote.no_truck)
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("h5", [
                        _vm._v("Date :" + _vm._s(this.detailNote.date)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("h5", [
                        _vm._v("Driver :" + _vm._s(this.detailNote.driver)),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("h5", [
                        _vm._v(
                          "Nomor Container :" +
                            _vm._s(this.detailNote.no_container)
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("h5", [
                        _vm._v("Nomor Telp :" + _vm._s(this.detailNote.telp)),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("h5", [
                        _vm._v(
                          "Nomor Seal :" + _vm._s(this.detailNote.no_seal)
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("h5", [
                        _vm._v(
                          "Destination :" + _vm._s(this.detailNote.destination)
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-1" }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-4" }, [
                _c("div", { staticClass: "col-sm-1" }),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-10" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "label",
                        { staticClass: "form-label", attrs: { for: "barang" } },
                        [_vm._v("Barang")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-9" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selectedBarang,
                                  expression: "selectedBarang",
                                },
                              ],
                              staticClass: "form-select",
                              attrs: { "aria-label": "Default select example" },
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.selectedBarang = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                              },
                            },
                            [
                              _c(
                                "option",
                                { attrs: { disabled: "", value: "" } },
                                [_vm._v("Pilih barang")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.listBarang, function (barang) {
                                return _c(
                                  "option",
                                  {
                                    key: barang.id,
                                    domProps: { value: barang.jenis_barang },
                                  },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(barang.jenis_barang) +
                                        "\n                    "
                                    ),
                                  ]
                                )
                              }),
                            ],
                            2
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary ms-3",
                              on: { click: _vm.submitBarang },
                            },
                            [
                              _c("i", {
                                staticClass: "bi bi-arrow-down-square",
                              }),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "tumpukan" },
                        },
                        [_vm._v("Tumpukan")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-9" }, [
                          _c("div", { staticClass: "row bg-white" }, [
                            _c("div", { staticClass: "col-sm-8" }, [
                              _c("h4", [_vm._v(_vm._s(this.tumpukan))]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary ms-3",
                                  on: {
                                    click: function ($event) {
                                      return _vm.hitungTumpukan()
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "bi bi-plus" })]
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary ms-3",
                              on: { click: _vm.submitTumpukan },
                            },
                            [
                              _c("i", {
                                staticClass: "bi bi-arrow-down-square",
                              }),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("h4", { staticClass: "text-center mt-5 mb-3" }, [
                    _vm._v("Data Barang"),
                  ]),
                  _vm._v(" "),
                  _c("table", { staticClass: "bordered-table m-auto" }, [
                    _c("thead", [
                      _c(
                        "tr",
                        [
                          _c("th", [_vm._v("Barang")]),
                          _vm._v(" "),
                          _vm._l(_vm.headers, function (header) {
                            return _c(
                              "th",
                              { key: header, staticClass: "text-center" },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(header) +
                                    "\n                "
                                ),
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _c("th", [_vm._v("Total")]),
                        ],
                        2
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.dataBarang, function (item, index) {
                        return _c(
                          "tr",
                          { key: index },
                          [
                            _c("td", [_vm._v(_vm._s(item.barang))]),
                            _vm._v(" "),
                            _vm._l(_vm.headers, function (header) {
                              return _c(
                                "td",
                                { key: header },
                                _vm._l(
                                  item.tumpukan[header],
                                  function (tumpukan) {
                                    return _c(
                                      "p",
                                      {
                                        key: tumpukan,
                                        staticClass: "bordered-li",
                                      },
                                      [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(tumpukan) +
                                            "\n                  "
                                        ),
                                      ]
                                    )
                                  }
                                ),
                                0
                              )
                            }),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.getTotalTumpukan(item))),
                            ]),
                          ],
                          2
                        )
                      }),
                      0
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-1" }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-1" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-10" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary mb-5",
                        staticStyle: { float: "right" },
                        attrs: { to: "/admin-signature" },
                        on: { click: _vm.submitData },
                      },
                      [_vm._v("Selanjutnya")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-1" }),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("Footer"),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);