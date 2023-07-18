"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_signatureView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/signatureView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/signatureView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-signature'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
  name: "App",
  components: {
    vueSignature: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-signature'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(255,255,255)"
      },
      disabled: false,
      form: {
        jenis_barang: ""
      }
    };
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("signature", this.$refs.signature.save("image/svg+xml"));
      formData.append("id_note", this.id);
      console.log(formData);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:8080/api/signature/", formData).then(function (response) {
        console.log(response);
      });
      this.form.name = "";
      this.showAlert();
    },
    showAlert: function showAlert() {
      var _this = this;
      // Use sweetalert2
      this.$swal("Data Berhasil di inputkan!!").then(function () {
        // Redirect to a specific page
        _this.$router.push("/admin-note");
      });
    },
    save: function save() {
      var png = this.$refs.signature.save();
      var jpeg = this.$refs.signature.save("image/jpeg");
      var svg = this.$refs.signature.save("image/svg+xml");
      console.log(png);
      console.log(jpeg);
      console.log(svg);
    },
    clear: function clear() {
      this.$refs.signature.clear();
    },
    undo: function undo() {
      this.$refs.signature.undo();
    },
    addWatermark: function addWatermark() {
      this.$refs.signature.addWaterMark({
        text: "PT. Garam(Persero)",
        font: "20px Arial",
        style: "all",
        fillStyle: "red",
        strokeStyle: "blue",
        x: 100,
        y: 200,
        sx: 100,
        sy: 200
      });
    },
    toggleDisabled: function toggleDisabled() {
      this.disabled = !this.disabled;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/signatureView.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/signatureView.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _signatureView_vue_vue_type_template_id_e94ac77c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signatureView.vue?vue&type=template&id=e94ac77c&scoped=true& */ "./resources/js/components/admin/signatureView.vue?vue&type=template&id=e94ac77c&scoped=true&");
/* harmony import */ var _signatureView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signatureView.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/signatureView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _signatureView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _signatureView_vue_vue_type_template_id_e94ac77c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _signatureView_vue_vue_type_template_id_e94ac77c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e94ac77c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/signatureView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/signatureView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/signatureView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signatureView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./signatureView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/signatureView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signatureView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/signatureView.vue?vue&type=template&id=e94ac77c&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/admin/signatureView.vue?vue&type=template&id=e94ac77c&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signatureView_vue_vue_type_template_id_e94ac77c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signatureView_vue_vue_type_template_id_e94ac77c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signatureView_vue_vue_type_template_id_e94ac77c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./signatureView.vue?vue&type=template&id=e94ac77c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/signatureView.vue?vue&type=template&id=e94ac77c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/signatureView.vue?vue&type=template&id=e94ac77c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/signatureView.vue?vue&type=template&id=e94ac77c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
              _c("div", { attrs: { id: "app" } }, [
                _c("h1", { staticClass: "text-center" }, [
                  _vm._v("Signature Page"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-4" }, [
                  _c("div", { staticClass: "col-sm-1" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-10" },
                    [
                      _c("vueSignature", {
                        ref: "signature",
                        attrs: {
                          sigOption: _vm.option,
                          h: "400px",
                          disabled: _vm.disabled,
                          defaultUrl: _vm.dataUrl,
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-1" }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-2" }, [
                  _c("div", { staticClass: "col-sm-1" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary w-100",
                        attrs: { type: "button" },
                        on: { click: _vm.save },
                      },
                      [_c("i", { staticClass: "bi bi-file-check" })]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger w-100",
                        attrs: { type: "button" },
                        on: { click: _vm.clear },
                      },
                      [_c("i", { staticClass: "bi bi-x" })]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-warning w-100",
                        attrs: { type: "button" },
                        on: { click: _vm.undo },
                      },
                      [_c("i", { staticClass: "bi bi-arrow-counterclockwise" })]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success w-100",
                        attrs: { type: "button" },
                        on: { click: _vm.addWatermark },
                      },
                      [_c("i", { staticClass: "bi bi-droplet-half" })]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary w-100",
                        attrs: { type: "button" },
                        on: { click: _vm.toggleDisabled },
                      },
                      [_c("i", { staticClass: "bi bi-journal-x" })]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-1" }),
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { enctype: "multipart/form-data" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.handleSubmit.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "row mt-5" }, [
                      _c("div", { staticClass: "col-sm-1" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-10" }, [
                        _c("div", { staticClass: "mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "form-label",
                              attrs: { for: "name" },
                            },
                            [_vm._v("Name")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.name,
                                expression: "form.name",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "name",
                              placeholder: "input name",
                            },
                            domProps: { value: _vm.form.name },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "name", $event.target.value)
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1" }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-1" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-10" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-sm-6" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-danger mb-5",
                                  attrs: { to: "/admin-note" },
                                },
                                [_vm._v("Back")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(0),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1" }),
                    ]),
                  ]
                ),
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary float-end", attrs: { type: "submit" } },
        [_vm._v("\n                    Submit\n                  ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);