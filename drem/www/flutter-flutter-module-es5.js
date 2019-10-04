(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flutter-flutter-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/flutter/flutter.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/flutter/flutter.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>flutter</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n"

/***/ }),

/***/ "./src/app/flutter/flutter.module.ts":
/*!*******************************************!*\
  !*** ./src/app/flutter/flutter.module.ts ***!
  \*******************************************/
/*! exports provided: FlutterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterPageModule", function() { return FlutterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flutter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flutter.page */ "./src/app/flutter/flutter.page.ts");







var routes = [
    {
        path: '',
        component: _flutter_page__WEBPACK_IMPORTED_MODULE_6__["FlutterPage"]
    }
];
var FlutterPageModule = /** @class */ (function () {
    function FlutterPageModule() {
    }
    FlutterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_flutter_page__WEBPACK_IMPORTED_MODULE_6__["FlutterPage"]]
        })
    ], FlutterPageModule);
    return FlutterPageModule;
}());



/***/ }),

/***/ "./src/app/flutter/flutter.page.scss":
/*!*******************************************!*\
  !*** ./src/app/flutter/flutter.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsdXR0ZXIvZmx1dHRlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/flutter/flutter.page.ts":
/*!*****************************************!*\
  !*** ./src/app/flutter/flutter.page.ts ***!
  \*****************************************/
/*! exports provided: FlutterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterPage", function() { return FlutterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FlutterPage = /** @class */ (function () {
    function FlutterPage() {
    }
    FlutterPage.prototype.ngOnInit = function () {
    };
    FlutterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flutter',
            template: __webpack_require__(/*! raw-loader!./flutter.page.html */ "./node_modules/raw-loader/index.js!./src/app/flutter/flutter.page.html"),
            styles: [__webpack_require__(/*! ./flutter.page.scss */ "./src/app/flutter/flutter.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FlutterPage);
    return FlutterPage;
}());



/***/ })

}]);
//# sourceMappingURL=flutter-flutter-module-es5.js.map