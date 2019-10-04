(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>user</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        color=\"danger\"\n        text=\"erico\"\n        icon=\"bluetooth\"\n      ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <nav class=\"navbar navbar-expand-sm navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button\n      class=\"navbar-toggler d-lg-none\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#collapsibleNavId\"\n      aria-controls=\"collapsibleNavId\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    ></button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\"\n            >Home <span class=\"sr-only\">(current)</span></a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"profile\">Link</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a\n            class=\"nav-link dropdown-toggle\"\n            routerLink=\"/chat\"\n            id=\"dropdownId\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n            >Dropdown</a\n          >\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownId\">\n            <a class=\"dropdown-item\" href=\"#\">Action 1</a>\n            <a class=\"dropdown-item\" href=\"#\">Action 2</a>\n          </div>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" />\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">\n          Search\n        </button>\n      </form>\n    </div>\n  </nav>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/user/user.page.ts");







var routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]
    }
];
var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
        })
    ], UserPageModule);
    return UserPageModule;
}());



/***/ }),

/***/ "./src/app/user/user.page.scss":
/*!*************************************!*\
  !*** ./src/app/user/user.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/user.page.ts":
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserPage = /** @class */ (function () {
    function UserPage() {
    }
    UserPage.prototype.ngOnInit = function () {
    };
    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.page.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.page.html"),
            styles: [__webpack_require__(/*! ./user.page.scss */ "./src/app/user/user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserPage);
    return UserPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module-es5.js.map