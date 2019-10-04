(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>chat</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"danger\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"users\">\n    <ion-list-header>\n      Recent Conversations\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let user of users\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"user.flag\" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ user.name }}</h2>\n        <h3>{{ user.callingCodes[0] }}</h3>\n        <p>Listen, I've had a pretty messed up day...</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <!--\n  <div class=\"container\">\n    <ion-searchbar\n      color=\"success\"\n      type=\"text\"\n      debounce=\"500\"\n      (ionInput)=\"getItems($event)\"\n    ></ion-searchbar>\n    <ion-list *ngIf=\"isItemAvailable\">\n      <ion-item *ngFor=\"let item of items\">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n\n    <form (ngSubmit)=\"logForm()\">\n      <ion-item>\n        <ion-label>Todo</ion-label>\n        <ion-input\n          type=\"text\"\n          [(ngModel)]=\"todo.title\"\n          name=\"title\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Description</ion-label>\n        <ion-textarea\n          [(ngModel)]=\"todo.description\"\n          name=\"description\"\n        ></ion-textarea>\n      </ion-item>\n\n      <ion-button type=\"submit\" color=\"secondary\">Add Todo</ion-button>\n    </form>\n\n    <ion-list>\n      <ion-list-header>Single Selection</ion-list-header>\n\n      <ion-item>\n        <ion-label>Gender</ion-label>\n        <ion-select placeholder=\"Select One\">\n          <ion-select-option value=\"f\">Female</ion-select-option>\n          <ion-select-option value=\"m\">Male</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Hair Color</ion-label>\n        <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>Multiple Selection</ion-list-header>\n\n      <ion-item>\n        <ion-label>Toppings</ion-label>\n        <ion-select multiple=\"true\" cancelText=\"Nah\" okText=\"Okay!\">\n          <ion-select-option value=\"bacon\">Bacon</ion-select-option>\n          <ion-select-option value=\"olives\">Black Olives</ion-select-option>\n          <ion-select-option value=\"xcheese\">Extra Cheese</ion-select-option>\n          <ion-select-option value=\"peppers\">Green Peppers</ion-select-option>\n          <ion-select-option value=\"mushrooms\">Mushrooms</ion-select-option>\n          <ion-select-option value=\"onions\">Onions</ion-select-option>\n          <ion-select-option value=\"pepperoni\">Pepperoni</ion-select-option>\n          <ion-select-option value=\"pineapple\">Pineapple</ion-select-option>\n          <ion-select-option value=\"sausage\">Sausage</ion-select-option>\n          <ion-select-option value=\"Spinach\">Spinach</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Pets</ion-label>\n        <ion-select multiple=\"true\" (ionChange)=\"Mballus($event)\">\n          <ion-select-option value=\"bird\" selected>Bird</ion-select-option>\n          <ion-select-option value=\"cat\">Cat</ion-select-option>\n          <ion-select-option value=\"dog\" selected>Dog</ion-select-option>\n          <ion-select-option value=\"honeybadger\"\n            >Honey Badger</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n  -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");







var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ChatPage = /** @class */ (function () {
    function ChatPage(http) {
        var _this = this;
        this.http = http;
        this.http
            .get("https://restcountries.eu/rest/v2/region/africa")
            .subscribe(function (data) {
            console.log(data);
            _this.users = data;
        });
    }
    ChatPage.prototype.ngOnInit = function () { };
    // initialize the items with false
    ChatPage.prototype.initializeItems = function () {
        // this.items = ["Ram", "gopi", "dravid"];
    };
    ChatPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-chat",
            template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es5.js.map