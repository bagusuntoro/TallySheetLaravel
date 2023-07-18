"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_UpdateNoteView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateNoteView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateNoteView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  // Tambahkan properti 'id' untuk menerima ID dari parameter rute
  data: function data() {
    return {
      form: []
    };
  },
  methods: {
    updateBarang: function updateBarang() {
      var _this = this;
      var formData = new FormData();
      formData.append("location", this.form.location);
      formData.append("date", this.form.date);
      formData.append("no_container", this.form.no_container);
      formData.append("no_seal", this.form.no_seal);
      formData.append("destination", this.form.destination);
      formData.append("no_truck", this.form.no_truck);
      formData.append("driver", this.form.driver);
      formData.append("telp", this.form.telp);
      console.log("test", formData);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:8080/api/update-note/".concat(this.id), formData) // Gunakan properti 'id' sebagai bagian dari URL endpoint
      .then(function (response) {
        console.log(response.data);
        _this.showAlert();
        _this.$router.push("/admin-note");
      })["catch"](function (error) {
        console.error(error);
      });
    },
    showAlert: function showAlert() {
      this.$swal("Data berhasil diperbarui!").then(function () {
        // Aksi lanjutan setelah menampilkan swal
      });
    }
  },
  created: function created() {
    var _this2 = this;
    console.log(this.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:8080/api/note/".concat(this.id)) // Gunakan properti 'id' sebagai bagian dari URL endpoint
    .then(function (response) {
      _this2.form = response.data.data;
    })["catch"](function (error) {
      console.error(error);
    });
  }
});

/***/ }),

/***/ "./resources/js/components/admin/UpdateNoteView.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/UpdateNoteView.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateNoteView_vue_vue_type_template_id_8dd56d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateNoteView.vue?vue&type=template&id=8dd56d6a& */ "./resources/js/components/admin/UpdateNoteView.vue?vue&type=template&id=8dd56d6a&");
/* harmony import */ var _UpdateNoteView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateNoteView.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/UpdateNoteView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateNoteView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateNoteView_vue_vue_type_template_id_8dd56d6a___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateNoteView_vue_vue_type_template_id_8dd56d6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/UpdateNoteView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/UpdateNoteView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/UpdateNoteView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNoteView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateNoteView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateNoteView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNoteView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/UpdateNoteView.vue?vue&type=template&id=8dd56d6a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/UpdateNoteView.vue?vue&type=template&id=8dd56d6a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNoteView_vue_vue_type_template_id_8dd56d6a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNoteView_vue_vue_type_template_id_8dd56d6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNoteView_vue_vue_type_template_id_8dd56d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateNoteView.vue?vue&type=template&id=8dd56d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateNoteView.vue?vue&type=template&id=8dd56d6a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateNoteView.vue?vue&type=template&id=8dd56d6a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateNoteView.vue?vue&type=template&id=8dd56d6a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  _c("h1", { staticClass: "text-center mt-3 mb-5" }, [
                    _vm._v("Update Data Note"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.updateBarang.apply(null, arguments)
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "headerNote" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "mb-3" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "location" },
                                },
                                [_vm._v("Location")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.location,
                                    expression: "form.location",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "location",
                                  placeholder: "input barang",
                                },
                                domProps: { value: _vm.form.location },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "location",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "mb-3" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "truck" },
                                },
                                [_vm._v("Nomor Truck")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.no_truck,
                                    expression: "form.no_truck",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "no_truck",
                                  placeholder: "input barang",
                                },
                                domProps: { value: _vm.form.no_truck },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "no_truck",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "mb-3" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "location" },
                                },
                                [_vm._v("Date")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.date,
                                    expression: "form.date",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  id: "date",
                                  placeholder: "input date",
                                },
                                domProps: { value: _vm.form.date },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "date",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "mb-3" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "driver" },
                                },
                                [_vm._v("Driver")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.driver,
                                    expression: "form.driver",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "driver",
                                  placeholder: "input driver",
                                },
                                domProps: { value: _vm.form.driver },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "driver",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "mb-3" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "container" },
                                },
                                [_vm._v("Nomor Container")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.no_container,
                                    expression: "form.no_container",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "no_container",
                                  placeholder: "input nomor container",
                                },
                                domProps: { value: _vm.form.no_container },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "no_container",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "mb-3" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "telp" },
                                },
                                [_vm._v("No Telp")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.telp,
                                    expression: "form.telp",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "telp",
                                  placeholder: "input telp",
                                },
                                domProps: { value: _vm.form.telp },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "telp",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "mb-3" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "seal" },
                                },
                                [_vm._v("Nomor Seal")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.no_seal,
                                    expression: "form.no_seal",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "no_seal",
                                  placeholder: "input nomor seal",
                                },
                                domProps: { value: _vm.form.no_seal },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "no_seal",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "mb-3" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "destination" },
                                },
                                [_vm._v("Destination")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.destination,
                                    expression: "form.destination",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "destination",
                                  placeholder: "input nomor destination",
                                },
                                domProps: { value: _vm.form.destination },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "destination",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-3" }, [
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
                    ]
                  ),
                ]),
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