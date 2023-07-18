"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_UpdateBarangView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateBarangView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateBarangView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["id"],
  // Tambahkan properti 'id' untuk menerima ID dari parameter rute
  data: function data() {
    return {
      barang: []
    };
  },
  methods: {
    updateBarang: function updateBarang() {
      var _this = this;
      var formData = new FormData();
      formData.append("jenis_barang", this.barang.jenis_barang);
      console.log("test", formData);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:8080/api/update-barang/".concat(this.id), formData) // Gunakan properti 'id' sebagai bagian dari URL endpoint
      .then(function (response) {
        console.log(response.data);
        _this.showAlert();
        _this.$router.push("/admin-barang");
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
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:8080/api/barang/".concat(this.id)) // Gunakan properti 'id' sebagai bagian dari URL endpoint
    .then(function (response) {
      _this2.barang = response.data.data;
    })["catch"](function (error) {
      console.error(error);
    });
  }
});

/***/ }),

/***/ "./resources/js/components/admin/UpdateBarangView.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/UpdateBarangView.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateBarangView_vue_vue_type_template_id_34887380___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateBarangView.vue?vue&type=template&id=34887380& */ "./resources/js/components/admin/UpdateBarangView.vue?vue&type=template&id=34887380&");
/* harmony import */ var _UpdateBarangView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateBarangView.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/UpdateBarangView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateBarangView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateBarangView_vue_vue_type_template_id_34887380___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateBarangView_vue_vue_type_template_id_34887380___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/UpdateBarangView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/UpdateBarangView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/UpdateBarangView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBarangView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateBarangView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateBarangView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBarangView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/UpdateBarangView.vue?vue&type=template&id=34887380&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/UpdateBarangView.vue?vue&type=template&id=34887380& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBarangView_vue_vue_type_template_id_34887380___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBarangView_vue_vue_type_template_id_34887380___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBarangView_vue_vue_type_template_id_34887380___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateBarangView.vue?vue&type=template&id=34887380& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateBarangView.vue?vue&type=template&id=34887380&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateBarangView.vue?vue&type=template&id=34887380&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/UpdateBarangView.vue?vue&type=template&id=34887380& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
              _c("h1", { staticClass: "text-center mt-3 mb-5" }, [
                _vm._v("Update Data Barang"),
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
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-8" }, [
                      _c("div", { staticClass: "mb-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "form-label",
                            attrs: { for: "jenis_barang" },
                          },
                          [_vm._v("Jenis Barang")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.barang.jenis_barang,
                              expression: "barang.jenis_barang",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "jenis_barang",
                            placeholder: "Masukkan jenis barang",
                          },
                          domProps: { value: _vm.barang.jenis_barang },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.barang,
                                "jenis_barang",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-2" }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-8" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-sm-6" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-danger mb-5",
                                attrs: { to: "/admin-barang" },
                              },
                              [
                                _vm._v(
                                  "\n                  Kembali\n                "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(0),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-2" }),
                  ]),
                ]
              ),
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
        [_vm._v("\n                  Update\n                ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);