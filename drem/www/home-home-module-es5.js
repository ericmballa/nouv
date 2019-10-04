(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"light\" mode=\"ios\">\n      <ion-buttons slot=\"end\">\n        <ion-button class=\"btnh1\" (click)=\"menu()\" color=\"success\">\n          offres\n        </ion-button>\n        <ion-button (click)=\"menu2()\">\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"prev()\"\n          ><ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon> Prev</ion-button\n        >\n        <ion-button (click)=\"next()\"\n          >Next <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon\n        ></ion-button>\n      </ion-buttons>\n      <ion-buttons slot=\"primary\">\n        <ion-button color=\"secondary\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>\n        <h3 class=\"infinite animated flash slow delay-3s\">DOCTEUREMPLOI.COM</h3>\n      </ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n  \n      <!--\n        ici\n        <ion-buttons slot=\"end\">\n          <ion-button class=\"btnh1\" color=\"success\">\n              <ion-icon slot=\"icon-only\" name=\"contact\"></ion-icon>\n            </ion-button>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-buttons slot=\"primary\">\n        <ion-button color=\"secondary\">\n          <ion-ripple-effect></ion-ripple-effect>\n          <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n       fin\n        <ion-button class=\"btnh1\" color=\"success\">\n          <ion-icon slot=\"icon-only\" name=\"contact\"></ion-icon>\n        </ion-button>\n         <h3 class=\"animated infinite wobble delay-1s\">DOCTEUREMPLOI.COM</h3>\n        <ion-icon src=\"/path/to/external/file.svg\"></ion-icon>\n      <ion-buttons slot=\"end\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"contact\"></ion-icon>\n        </ion-button>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n        </ion-button>\n        <ion-button color=\"primary\" fill=\"clear\"\n          >add user\n          <ion-icon slot=\"end\" name=\"help-circle\"></ion-icon>\n        </ion-button>\n        <ion-button color=\"primary\" fill=\"clear\">conseils</ion-button>\n        <ion-button color=\"primary\" fill=\"clear\">autres</ion-button>\n        <ion-button color=\"primary\" fill=\"clear\">entreprise</ion-button>\n      </ion-buttons>\n      <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n      <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n      <ion-button color=\"primary\" fill=\"outline\">Primary</ion-button>\n      <ion-button class=\"titi\" mode=\"ios\">Danger</ion-button>\n      <ion-button color=\"secondary\">Secondary</ion-button>\n  class=\"animated infinite flash delay-2s\"\n    -->\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"avecimage\">\n  <div class=\"ladiv1\">\n  <ion-list class=\"malist\" *ngIf=\"ok\">\n    <ion-item lines=\"none\">\n      <ion-button>\n        Item\n      </ion-button>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-button>\n        No Lines Item\n      </ion-button>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-button>\n        Item with Full Lines\n      </ion-button>\n    </ion-item>\n  </ion-list>\n  <ion-list class=\"malist2\" *ngIf=\"ok2\">\n    <ion-item lines=\"none\">\n      <ion-label>\n        test2\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>\n        Item test2\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>\n        Item with Full Lines\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</div>\n  <!--\n  <div class=\"divp animated  flip slower delay-2s\">\n    <div class=\"div1\">\n      <h6>TOTAL ENREGISTRE</h6>\n      <p>86</p>\n    </div>\n    <div class=\"div2\">\n      <h6>TOTAL ENTREPRISE</h6>\n      <p>15</p>\n    </div>\n    <div class=\"div3\">\n      <h6>TOTAL SMS</h6>\n      <p>150</p>\n    </div>\n  </div>\n-->\n<div class=\"homegrid\">\n  <ion-grid >\n    <ion-row >\n      <ion-col size=\"6\" offset=\"3\" >\n        <ion-segment>\n          <ion-segment-button\n            class=\"cercle1\"\n            (ionSelect)=\"segmentButtonClicked($event)\"\n          >\n            <ion-label>ajouter un profile</ion-label>\n          </ion-segment-button>\n          <ion-segment-button\n            class=\"cercle2\"\n            (ionSelect)=\"segmentButtonClicked2($event)\"\n          >\n            <ion-label>ajouter une entreprise</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" >\n          <p *ngIf=\"submitAttempt\" style=\"color: #ea6153;\">\n              Please fill out all details accurately.\n            </p>\n            <ion-slides #signupSlider>\n              <!-- slide 1 ici-->\n              <ion-slide>\n                <ion-list >\n                  <form [formGroup]=\"slideOneForm\">\n                    \n                      \n                    <ion-row>\n                      <ion-col size=\"5\"  >\n                          <ion-item>\n                              <ion-label position=\"floating\">first name</ion-label>\n                            <ion-input  placeholder=\"prénom\" formControlName=\"prenom\" type=\"text\"></ion-input>\n                          </ion-item>\n                          <!-- name regex-->\n                          <ion-item\n                            *ngIf=\"\n                              !slideOneForm.controls.prenom.valid &&\n                              slideOneForm.controls.prenom.dirty &&\n                              slideOneForm.controls.prenom.touched\n                            \"\n                          >\n                            <p>Please enter a valid name. <br /></p>\n          \n                            <p *ngIf=\"slideOneForm.controls.nom.errors.minlength\">\n                              caractére minimum 2 caractéres. <br />\n                            </p>\n          \n                            <p *ngIf=\"slideOneForm.controls.nom.errors.maxlength\">\n                              25 caractéres maximum caractéres.\n                            </p>\n                          </ion-item>\n          \n                          <!-- validation name-->\n                          <ion-item>\n                            <ion-label position=\"floating\">name</ion-label>\n                            <ion-input placeholder=\"nom\" formControlName=\"nom\" type=\"text\"></ion-input>\n                          </ion-item>\n                          <ion-item>\n                            <ion-label position=\"floating\">Email</ion-label>\n                            <ion-input placeholder=\"user@domain.com\" formControlName=\"email\" type=\"email\"></ion-input>\n                          </ion-item>\n                          <!-- email regex-->\n                          <ion-item\n                            *ngIf=\"\n                              !slideOneForm.controls.email.valid &&\n                              slideOneForm.controls.email.dirty &&\n                              slideOneForm.controls.email.touched\n                            \"\n                          >\n                            <p>Please enter a valid email.</p>\n                          </ion-item>\n                          <ion-item>\n                            <ion-label position=\"floating\">Ville</ion-label>\n                            <ion-input placeholder=\"la ville\" formControlName=\"ville\" type=\"text\"></ion-input>\n                          </ion-item>\n                          <!-- viile regex-->\n                          <ion-item\n                            *ngIf=\"\n                              !slideOneForm.controls.ville.valid &&\n                              slideOneForm.controls.ville.dirty &&\n                              slideOneForm.controls.ville.touched\n                            \"\n                          >\n                            <p>Please enter a valid town.</p>\n                          </ion-item>\n                          <ion-item>\n                            <ion-label position=\"floating\">Age</ion-label>\n                            <ion-input placeholder=\"son age\" formControlName=\"age\" type=\"number\"></ion-input>\n                          </ion-item>\n                          <!-- age regex-->\n                          <ion-item\n                            *ngIf=\"\n                              !slideOneForm.controls.age.valid &&\n                              slideOneForm.controls.age.dirty &&\n                              slideOneForm.controls.age.touched\n                            \"\n                          >\n                            <p>Please enter a valid age.</p>\n                          </ion-item>\n          \n                          <ion-item-group *ngIf=\"pays\">\n                              <ion-item-divider>\n                                  <ion-label position=\"floating\">country</ion-label>\n                                  <div class=\"leflag\" style=\"width: 100%; text-align: center; \">\n                                      <div  style=\" color: black;\" *ngIf=\"lepays\">\n                                        +{{ lepays.callingCodes[0] }}\n                                           \n                                          <ion-icon class=\"para\" *ngIf=\"countryflag\"  [src]=\"countryflag\"></ion-icon>\n                                      </div>  \n                                  </div>\n                              </ion-item-divider>\n                              <ion-item *ngIf=\"pays\">\n                            <div class=\"choosecountry\"> choose your country</div>\n                                  <ion-select\n                                  placeholder=\"{{lepays.name}}\"\n                                  formControlName=\"country\" \n                                  [(ngModel)]=\"country\"\n                                 (ionChange)=\"takecountryflag()\"\n                                >\n                                  <div *ngFor=\"let user of pays; let i = index\">\n                                    <ion-select-option value=\"{{ i }}\">\n                                        <ion-label position=\"floating\">{{ user.name }}</ion-label>\n                                    </ion-select-option>\n                                  </div>\n                                </ion-select>\n                                </ion-item>\n                            </ion-item-group>\n                            \n                          <ion-item >\n                              <ion-label position=\"floating\">Telephone</ion-label>\n                            <ion-input\n                              placeholder=\"telephone\"\n                              formControlName=\"telephone\"\n                              type=\"type=tel\"\n                            ></ion-input>\n                          </ion-item>\n                          <!-- phone regex format kmer-->\n                          <ion-item\n                            *ngIf=\"\n                              !slideOneForm.controls.telephone.valid &&\n                              slideOneForm.controls.telephone.dirty &&\n                              slideOneForm.controls.telephone.touched\n                            \"\n                          >\n                            <p>Please enter a valid phone number.</p>\n                          </ion-item>\n\n                      </ion-col>\n\n                      <ion-col size=\"5\" offset=\"2\" >\n\n                          <ion-item>\n                              <ion-label position=\"stacked\">Diplôme(s)</ion-label>\n                              <ion-input formControlName=\"diplome1\" placeholder=\"diplôme obtenu1\"></ion-input>\n                              <ion-input formControlName=\"diplome2\" placeholder=\"diplôme obtenu2\"></ion-input>\n                              <ion-input formControlName=\"diplome3\" placeholder=\"diplôme obtenu3\"></ion-input>\n                              \n                            </ion-item>\n                            <ion-item>\n                                <ion-label position=\"stacked\">Formation(s)</ion-label>\n                                <ion-input formControlName=\"formation1\" placeholder=\"Formation 1\"></ion-input>\n                                <ion-input formControlName=\"formation2\" placeholder=\"Formation 2\"></ion-input>\n                                <ion-input formControlName=\"formation3\" placeholder=\"Formation 3\"></ion-input>\n                                \n                              </ion-item>\n                            <ion-item>\n                              <ion-label position=\"floating\">Sexe</ion-label>\n                              <ion-select formControlName=\"genre\" placeholder=\"son sexe\">\n                                <ion-select-option value=\"homme\">Homme</ion-select-option>\n                                <ion-select-option value=\"femme\">Femme</ion-select-option>\n                              </ion-select>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                  </form>\n                  \n                  </ion-list\n                ><br />\n    \n                <ion-button\n                class=\"leboutton\"\n                  color=\"danger\"\n                  (click)=\"save()\"\n                  [disabled]=\"!slideOneForm.valid\"\n                  >Create Account!</ion-button\n                >\n              </ion-slide>\n    \n              <!-- slide 2 ici-->\n              <ion-slide> \n\n                  <ion-col size=\"8\" offset=\"1\" >\n                      <form (ngSubmit)=\"log2Form()\">\n                        <ion-item>\n                          <ion-label>Nom Entreprise</ion-label>\n                          <ion-input\n                            type=\"text\"\n                            [(ngModel)]=\"entreprise.nom\"\n                            name=\"nom\"\n                          ></ion-input>\n                        </ion-item>\n              \n                        <ion-item>\n                          <ion-label>ville</ion-label>\n                          <ion-input\n                            type=\"text\"\n                            [(ngModel)]=\"entreprise.ville\"\n                            name=\"ville\"\n                          ></ion-input>\n                        </ion-item>\n              \n                        <ion-item>\n                          <ion-label>Télephone:</ion-label>\n                          <ion-input\n                            type=\"number\"\n                            [(ngModel)]=\"entreprise.telephone\"\n                            name=\"phone\"\n                          ></ion-input>\n                        </ion-item>\n              \n                        <ion-button mode=\"ios\" class=\"titi\" (click)=\"log2Form()\"\n                          >Add Entreprise</ion-button\n                        >\n                      </form>\n                    </ion-col>\n              </ion-slide>\n            </ion-slides>\n      </ion-col>\n\n      \n    </ion-row>\n  </ion-grid>\n</div>\n\n  <div class=\"lesusers\" *ngIf=\"listuser\">\n    <ion-list class=\"lalist\">\n      <ion-item\n        *ngFor=\"let c of listuser; let i = index\"\n        class=\"animated  delay-{{ i }}s\"\n        #itemlist\n      >\n        <ion-label\n          >\n          <p>{{ c.nom }}</p>\n          <p>{{ c.email }}</p>\n          <p>{{ c.telephone }}</p>\n        </ion-label>\n        <ion-icon name=\"contact\" slot=\"start\" class=\"iconeuser\"> </ion-icon>\n        <ion-buttons slot=\"end\">\n          <ion-button color=\"danger\" (click)=\"Deleteuser(c, i)\">\n            <ion-icon class=\"iconedel\" name=\"trash\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title> </ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







//import { NgxMatIntlTelInputModule } from "ngx-mat-intl-tel-input";

var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: "",
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
                // NgxMatIntlTelInputModule
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ladiv1 {\n  min-height: 40%;\n}\n\n.homegrid {\n  height: 30%;\n  width: 60%;\n  position: absolute;\n  left: 220px;\n  top: 10px;\n}\n\n.choosecountry {\n  font-size: 15px;\n}\n\n.leflag .para {\n  margin-left: 150pxpx;\n}\n\nion-button.titi {\n  --background: rgb(245, 184, 17);\n  --background-activated: rgb(243, 20, 131);\n  --background-hover: rgb(20, 79, 243);\n}\n\nion-button.leboutton {\n  width: 50%;\n}\n\nion-button.titi2 {\n  --background: rgb(20, 79, 243);\n  --background-activated: rgb(243, 20, 131);\n  --background-hover: rgb(245, 184, 17);\n}\n\n.iconedel {\n  font-size: 30px;\n}\n\n.iconeuser {\n  color: #5895f1;\n  font-size: 30px;\n}\n\n.cercle1 {\n  background-color: #00c2ff;\n}\n\n.cercle2 {\n  background-color: #00ff55;\n}\n\n.divhome {\n  margin-left: 2px;\n  height: 100%;\n}\n\n.divp {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 120px;\n}\n\n.divp > div {\n  width: 300px;\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-top: 5px;\n  padding: 5px;\n  text-align: center;\n  font-size: 30px;\n  height: 90%;\n  border: 1px solid white;\n}\n\n.div1 {\n  color: #0099ff;\n}\n\n.div2 {\n  color: #ffae00;\n}\n\n.div3 {\n  color: #fd1da0;\n}\n\nion-grid.divtest {\n  margin: 0px;\n  --ion-grid-width: 40%;\n}\n\n.jetestlegrid {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.gridtest {\n  background-color: #00c2ff;\n  position: absolute;\n  left: 1200px;\n  width: 100%;\n  height: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .divp {\n    display: none;\n  }\n}\n\nion-list.malist {\n  width: 200px;\n  position: absolute;\n  left: 79%;\n  z-index: 5;\n}\n\nion-list.malist:hover {\n  background-color: red;\n}\n\nion-list.malist2 {\n  width: 200px;\n  position: absolute;\n  left: 83%;\n  z-index: 5;\n}\n\np {\n  font-size: 0.8em;\n  color: #f56363;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-slides ion-list {\n  background: none;\n}\n\nion-list ion-item {\n  --background: none;\n  color: black;\n  font-weight: 800;\n  font-size: 14px;\n}\n\nion-list ion-label {\n  font-size: 18px;\n  font-weight: 600;\n  color: white;\n}\n\nion-slide {\n  display: block;\n}\n\nion-label,\n.select-text {\n  margin-left: 10px;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n\n.lesusers {\n  position: absolute;\n  top: 20px;\n  right: 12px;\n  width: 350px;\n  z-index: 15;\n  max-height: 80%;\n  overflow: scroll;\n}\n\n.lesusers ion-list {\n  background: none;\n}\n\n.lesusers ion-item {\n  --background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGVyaWNvXFxEcmVtcGxvaVxcREVhcHAxL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU9FLGVBQUE7QUNMRjs7QURRQTtFQU9FLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBRUEsU0FBQTtBQ1pGOztBRGVBO0VBQ0UsZUFBQTtBQ1pGOztBRGNBO0VBQ0Usb0JBQUE7QUNYRjs7QURjRTtFQUNFLCtCQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtBQ1hKOztBRGdCRTtFQUNFLFVBQUE7QUNiSjs7QURrQkU7RUFDRSw4QkFBQTtFQUNBLHlDQUFBO0VBQ0EscUNBQUE7QUNmSjs7QURtQkE7RUFFRSxlQUFBO0FDakJGOztBRG9CQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDakJGOztBRG9CQTtFQUlFLHlCQUFBO0FDcEJGOztBRHVCQTtFQUlFLHlCQUFBO0FDdkJGOztBRDRCQTtFQUNFLGdCQUFBO0VBRUEsWUFBQTtBQzFCRjs7QUQ0QkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUdBLGFBQUE7QUMzQkY7O0FEOEJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUVBLFdBQUE7RUFDQSx1QkFBQTtBQzdCRjs7QURnQ0E7RUFFRSxjQUFBO0FDOUJGOztBRGdDQTtFQUVFLGNBQUE7QUM5QkY7O0FEaUNBO0VBRUUsY0FBQTtBQy9CRjs7QURvQ0U7RUFHRSxXQUFBO0VBQ0EscUJBQUE7QUNuQ0o7O0FEc0NBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDbkNGOztBRHNDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNuQ0Y7O0FEc0NBO0VBQ0U7SUFDRSxhQUFBO0VDbkNGO0FBQ0Y7O0FEdUNFO0VBR0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLFVBQUE7QUN4Q0o7O0FENkNFO0VBRUUscUJBQUE7QUMzQ0o7O0FEZ0RFO0VBR0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLFVBQUE7QUNoREo7O0FEbURBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDaERGOztBRG9EQTtFQUNFLFlBQUE7QUNqREY7O0FEa0RFO0VBR0UsZ0JBQUE7QUNsREo7O0FEd0RFO0VBRUUsa0JBQUE7RUFJQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDekRKOztBRDhERTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7QUM3REo7O0FEaUVBO0VBQ0UsY0FBQTtBQzlERjs7QURpRUE7O0VBRUUsaUJBQUE7QUM5REY7O0FEaUVBO0VBQ0UseUJBQUE7QUM5REY7O0FEaUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDOURGOztBRGtFRTtFQUdFLGdCQUFBO0FDakVKOztBRHVFRTtFQUdFLG1CQUFBO0FDdEVKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWRpdjEge1xuICAvLy0tYmFja2dyb3VuZDogbm9uZTtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zcmMvYXNzZXRzL2ltYWdlMi5qcGdcIik7XG4gIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWluLWhlaWdodDogNDAlO1xufVxuXG4uaG9tZWdyaWQge1xuICAvLy0tYmFja2dyb3VuZDogbm9uZTtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9zcmMvYXNzZXRzL2ltYWdlMi5qcGdcIik7XG4gIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAvL2JhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDMwJTtcbiAgd2lkdGg6IDYwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMjBweDtcbiAgLy9ib3R0b206IDQwMHB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5jaG9vc2Vjb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmxlZmxhZyAucGFyYSB7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweHB4O1xufVxuaW9uLWJ1dHRvbiB7XG4gICYudGl0aSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ1LCAxODQsIDE3KTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjQzLCAyMCwgMTMxKTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYigyMCwgNzksIDI0Myk7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gICYubGVib3V0dG9uIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cbmlvbi1idXR0b24ge1xuICAmLnRpdGkyIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyMCwgNzksIDI0Myk7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiKDI0MywgMjAsIDEzMSk7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2IoMjQ1LCAxODQsIDE3KTtcbiAgfVxufVxuXG4uaWNvbmVkZWwge1xuICAvL2NvbG9yOiByZ2IoMjQ4LCAxMDEsIDEwMSk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmljb25ldXNlciB7XG4gIGNvbG9yOiByZ2IoODgsIDE0OSwgMjQxKTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY2VyY2xlMSB7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDYwJTtcbiAgLy8gd2lkdGg6IDIwMHB4O1xuICAvLyBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjMmZmO1xufVxuXG4uY2VyY2xlMiB7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDYwJTtcbiAgLy8gd2lkdGg6IDIwMHB4O1xuICAvLyBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjU1O1xufVxuaW9uLWNvbnRlbnQge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxYTk7XG59XG4uZGl2aG9tZSB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kaXZwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8vIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG4uZGl2cCA+IGRpdiB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy9saW5lLWhlaWdodDogOTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA5MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAvLyBjb2xvcjogIzAwZmY1NTtcbn1cbi5kaXYxIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjMDA5OWZmO1xufVxuLmRpdjIge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsIDI1NSwgMCk7XG4gIGNvbG9yOiAjZmZhZTAwO1xufVxuXG4uZGl2MyB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZkMWRhMDtcbn1cblxuaW9uLWdyaWQge1xuICAvLy0taW9uLWdyaWQtbWFyZ2luOiAyMDBweDtcbiAgJi5kaXZ0ZXN0IHtcbiAgICAvLyAtLWlvbi1ncmlkLXBhZGRpbmc6IDIwMHB4O1xuXG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLS1pb24tZ3JpZC13aWR0aDogNDAlO1xuICB9XG59XG4uamV0ZXN0bGVncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncmlkdGVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGMyZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kaXZwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlvbi1saXN0IHtcbiAgJi5tYWxpc3Qge1xuICAgIC8vIHotaW5kZXg6IDEwO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNzklO1xuICAgIC8vIGJvdHRvbTogNTBweDtcbiAgICB6LWluZGV4OiA1O1xuICB9XG59XG5cbmlvbi1saXN0IHtcbiAgJi5tYWxpc3Q6aG92ZXIge1xuICAgIC8vIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxufVxuXG5pb24tbGlzdCB7XG4gICYubWFsaXN0MiB7XG4gICAgLy8gei1pbmRleDogMTA7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4MyU7XG4gICAgLy8gYm90dG9tOiA1MHB4O1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cbnAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2Y1NjM2MztcbiAgLy8gY29sb3I6ICNkMmQyZDI7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGlvbi1saXN0IHtcbiAgICAvLyB6LWluZGV4OiAxMDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhZTAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgLy8gb3BhY2l0eTogMC41O1xuICB9XG59XG5cbmlvbi1saXN0IHtcbiAgaW9uLWl0ZW0ge1xuICAgIC8vIHotaW5kZXg6IDEwO1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAvL29wYWNpdHk6IDAuODtcbiAgICAvL2NvbG9yOiB3aGl0ZTtcbiAgICAvL2NvbG9yOiAjNmY4ZmY3O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG5pb24tbGlzdCB7XG4gIGlvbi1sYWJlbCB7XG4gICAgLy8gei1pbmRleDogMTA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLy9jb2xvcjogIzBlMGUwZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1sYWJlbCxcbi5zZWxlY3QtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG5cbi5sZXN1c2VycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMTJweDtcbiAgd2lkdGg6IDM1MHB4O1xuICB6LWluZGV4OiAxNTtcbiAgbWF4LWhlaWdodDogODAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4ubGVzdXNlcnMge1xuICBpb24tbGlzdCB7XG4gICAgLy8gei1pbmRleDogMTA7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmYWUwMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIC8vIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuXG4ubGVzdXNlcnMge1xuICBpb24taXRlbSB7XG4gICAgLy8gei1pbmRleDogMTA7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmYWUwMDtcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICAgIC8vIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuIiwiLmxhZGl2MSB7XG4gIG1pbi1oZWlnaHQ6IDQwJTtcbn1cblxuLmhvbWVncmlkIHtcbiAgaGVpZ2h0OiAzMCU7XG4gIHdpZHRoOiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjIwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmNob29zZWNvdW50cnkge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5sZWZsYWcgLnBhcmEge1xuICBtYXJnaW4tbGVmdDogMTUwcHhweDtcbn1cblxuaW9uLWJ1dHRvbi50aXRpIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ1LCAxODQsIDE3KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiKDI0MywgMjAsIDEzMSk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiKDIwLCA3OSwgMjQzKTtcbn1cblxuaW9uLWJ1dHRvbi5sZWJvdXR0b24ge1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tYnV0dG9uLnRpdGkyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjAsIDc5LCAyNDMpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjQzLCAyMCwgMTMxKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2IoMjQ1LCAxODQsIDE3KTtcbn1cblxuLmljb25lZGVsIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaWNvbmV1c2VyIHtcbiAgY29sb3I6ICM1ODk1ZjE7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmNlcmNsZTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjMmZmO1xufVxuXG4uY2VyY2xlMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmNTU7XG59XG5cbi5kaXZob21lIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGl2cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5kaXZwID4gZGl2IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmRpdjEge1xuICBjb2xvcjogIzAwOTlmZjtcbn1cblxuLmRpdjIge1xuICBjb2xvcjogI2ZmYWUwMDtcbn1cblxuLmRpdjMge1xuICBjb2xvcjogI2ZkMWRhMDtcbn1cblxuaW9uLWdyaWQuZGl2dGVzdCB7XG4gIG1hcmdpbjogMHB4O1xuICAtLWlvbi1ncmlkLXdpZHRoOiA0MCU7XG59XG5cbi5qZXRlc3RsZWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdyaWR0ZXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzJmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRpdnAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmlvbi1saXN0Lm1hbGlzdCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3OSU7XG4gIHotaW5kZXg6IDU7XG59XG5cbmlvbi1saXN0Lm1hbGlzdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuaW9uLWxpc3QubWFsaXN0MiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4MyU7XG4gIHotaW5kZXg6IDU7XG59XG5cbnAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2Y1NjM2Mztcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1zbGlkZXMgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1saXN0IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWxhYmVsLFxuLnNlbGVjdC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNjE1Mztcbn1cblxuLmxlc3VzZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAxMnB4O1xuICB3aWR0aDogMzUwcHg7XG4gIHotaW5kZXg6IDE1O1xuICBtYXgtaGVpZ2h0OiA4MCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5sZXN1c2VycyBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5sZXN1c2VycyBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validator_ageval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validator/ageval */ "./src/app/validator/ageval.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var HomePage = /** @class */ (function () {
    // user= {)
    function HomePage(rest, toastController, socket, formBuilder, http) {
        this.rest = rest;
        this.toastController = toastController;
        this.socket = socket;
        this.formBuilder = formBuilder;
        this.http = http;
        this.submitAttempt = false;
        this.ok = false;
        this.ok2 = false;
        this.entreprise = {};
        this.utilisateur = true;
        this.boulot = false;
        this.tabtest = [];
        // this.presentToaste2();
        this.socket.connect();
        this.Takeuser();
        this.ChangeDate();
        this.removeAnimation();
        this.Initform1();
        this.TakeCountry();
    }
    HomePage.prototype.ngOnInit = function () {
        this.socket.connect();
        this.Lasocket();
    };
    HomePage.prototype.TakeCountry = function () {
        var _this = this;
        this.http
            .get("https://restcountries.eu/rest/v2/region/africa")
            .subscribe(function (data) {
            console.log(data);
            _this.pays = data;
            _this.lepays = _this.pays[7];
            _this.countryflag = _this.pays[7]["flag"];
        });
    };
    HomePage.prototype.takecountryflag = function () {
        console.log(this.country);
        console.log(this.pays[this.country]);
        this.countryflag = this.pays[this.country]["flag"];
        this.lepays = this.pays[this.country];
    };
    HomePage.prototype.next = function () {
        this.signupSlider.nativeElement.slideNext();
    };
    HomePage.prototype.prev = function () {
        this.signupSlider.nativeElement.slidePrev();
    };
    HomePage.prototype.save = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.slideOneForm.valid) {
            // this.signupSlider.nativeElement.slideTo(0);
            console.log("echec desolé!");
        }
        else {
            this.submitAttempt = false;
            if (this.lepays) {
                this.slideOneForm.value.country = this.lepays["name"];
            }
            this.rest.Adduser(this.slideOneForm.value).subscribe(function (data) {
                // console.log(data);
                _this.slideOneForm.reset();
                _this.Takeuser();
                _this.presentToaste();
            }, function (error) {
                console.log(error);
            });
        }
    };
    HomePage.prototype.ChangeDate = function () {
        var _this = this;
        setInterval(function () {
            _this.value = new Date().toISOString();
        }, 1000);
    };
    HomePage.prototype.logForm = function () {
        var _this = this;
        /*  this.socket.on("newuser", data => {
          console.log(data);
          this.listuser.unshift(data);
        }); */
        this.rest.Adduser(this.user).subscribe(function (data) {
            console.log(data);
            // this.user = {};
            _this.Takeuser();
            _this.presentToaste();
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.log2Form = function () {
        // console.log(this.user);
        this.rest.Addentreprise(this.entreprise).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.Takeuser = function () {
        var _this = this;
        this.rest.Getuser().subscribe(function (data) {
            console.log(data);
            _this.listuser = data["users"];
            _this.tabtest = _this.listuser;
            // let tab = data["users"];
            // this.listuser = tab.reverse();
        });
    };
    HomePage.prototype.animateItems = function () {
        var _this = this;
        setTimeout(function () {
            var elements = _this.items.toArray();
            elements.map(function (elem) {
                return elem.nativeElement.classList.add("fadeInLeft");
            });
        }, 100);
    };
    HomePage.prototype.segmentButtonClicked = function (event) {
        /* console.log(event);
        if (this.boulot) {
          this.utilisateur = !this.utilisateur;
          this.boulot = !this.boulot;
        } */
        // this.signupSlider.nativeElement.slideNext();
        this.signupSlider.nativeElement.slidePrev();
    };
    HomePage.prototype.segmentButtonClicked2 = function (event) {
        /* console.log(event);
        if (this.utilisateur) {
          this.utilisateur = !this.utilisateur;
          this.boulot = !this.boulot;
        } */
        this.signupSlider.nativeElement.slideNext();
    };
    HomePage.prototype.presentToaste = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            header: "Message du serveur",
                            message: "utilisateur  enregistré",
                            position: "top",
                            cssClass: "my-custom-class",
                            duration: 1000,
                            buttons: [
                                {
                                    side: "start",
                                    icon: "person",
                                    text: "docteuremploi",
                                    handler: function () {
                                        console.log("Favorite clicked");
                                    }
                                },
                                {
                                    text: "Done",
                                    role: "cancel",
                                    handler: function () {
                                        console.log("Cancel clicked");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentToaste2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            header: "DOCETUREMPLOI.COM",
                            // message: "utilisateur  enregistré",
                            position: "top",
                            cssClass: "my-presentation",
                            duration: 10000,
                            buttons: [
                                {
                                    side: "start",
                                    icon: "star",
                                    text: "APPLICATION DESKTOP",
                                    handler: function () {
                                        console.log("Favorite clicked");
                                    }
                                },
                                {
                                    text: "Done",
                                    role: "cancel",
                                    handler: function () {
                                        console.log("Cancel clicked");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.Deleteuser = function (c, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var t, elements;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = 0.2;
                        elements = this.items.toArray();
                        console.log(i);
                        console.log(this.listuser);
                        return [4 /*yield*/, elements[i].nativeElement.classList.remove("fadeInLeft")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, elements[i].nativeElement.classList.add("delay-" + t + "s")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, elements[i].nativeElement.classList.add("bounceOutUp")];
                    case 3:
                        _a.sent();
                        this.rest.Removeuser(c._id).subscribe(function (data) {
                            console.log(data);
                            setTimeout(function () {
                                _this.removeAnimation();
                                //this.listuser.splice(i, 1);
                            }, 3000);
                        });
                        setTimeout(function () {
                            // this.removeAnimation();
                            //this.listuser.splice(i, 1);
                            _this.Takeuser();
                        }, 3000);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.Lasocket = function () {
        this.socket.emit("hello", "hello erico");
        this.socket.on("moi", function (data) {
            console.log(data);
        });
    };
    HomePage.prototype.removeAnimation = function () {
        console.log(this.listuser);
        this.listuser = this.tabtest;
        console.log(this.listuser);
    };
    HomePage.prototype.menu = function () {
        // this.ok2 = false;
        this.ok = !this.ok;
    };
    HomePage.prototype.menu2 = function () {
        this.ok = false;
        this.ok2 = !this.ok2;
    };
    //gestion du formulaire
    HomePage.prototype.Initform1 = function () {
        this.slideOneForm = this.formBuilder.group({
            prenom: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-zA-Z ]*"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ])
            ],
            nom: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-zA-Z ]*"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ])
            ],
            age: ["", _validator_ageval__WEBPACK_IMPORTED_MODULE_6__["AgeValidator"].isValid],
            genre: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            ville: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[(.)]+[a-zA-Z]{2,6}$")
                ])
            ],
            telephone: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("(^[6])([0-9]{2}){4}"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ])
            ],
            // country: ["", Validators.compose([Validators.required])],
            country: [""],
            diplome1: [""],
            diplome2: [""],
            diplome3: [""],
            formation1: [""],
            formation2: [""],
            formation3: [""]
            /*  telephone: ["", require],
            sex: [""],
            email: [""],
            poste: [
              "",
              Validators.compose([
                Validators.maxLength(30),
                Validators.pattern("[a-zA-Z ]*"),
                Validators.required
              ])
            ] */
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("signupSlider", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomePage.prototype, "signupSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("itemlist", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], HomePage.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("itemlist"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomePage.prototype, "elt", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/rest-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/rest-api.service.ts ***!
  \*************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RestApiService = /** @class */ (function () {
    //url = "http://localhost:3000/users";
    //url2 = "http://localhost:3000/entreprise";
    function RestApiService(http) {
        this.http = http;
        this.url2 = "http://ec2-3-16-163-232.us-east-2.compute.amazonaws.com:3000/entreprise";
        this.url = "http://ec2-3-16-163-232.us-east-2.compute.amazonaws.com:3000/users";
    }
    RestApiService.prototype.Adduser = function (user) {
        return this.http.post(this.url, user);
    };
    RestApiService.prototype.Getuser = function () {
        return this.http.get(this.url);
    };
    RestApiService.prototype.Addentreprise = function (entreprise) {
        return this.http.post(this.url2, entreprise);
    };
    RestApiService.prototype.Removeuser = function (id) {
        return this.http.delete(this.url + ("/" + id));
    };
    RestApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RestApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestApiService);
    return RestApiService;
}());



/***/ }),

/***/ "./src/app/validator/ageval.ts":
/*!*************************************!*\
  !*** ./src/app/validator/ageval.ts ***!
  \*************************************/
/*! exports provided: AgeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgeValidator", function() { return AgeValidator; });
var AgeValidator = /** @class */ (function () {
    function AgeValidator() {
    }
    AgeValidator.isValid = function (control) {
        if (isNaN(control.value)) {
            return {
                "not a number": true
            };
        }
        if (control.value % 1 !== 0) {
            return {
                "not a whole number": true
            };
        }
        if (control.value < 18) {
            return {
                "too young": true
            };
        }
        if (control.value > 120) {
            return {
                "not realistic": true
            };
        }
        return null;
    };
    return AgeValidator;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map