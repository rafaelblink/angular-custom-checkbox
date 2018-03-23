webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin: 25px;\r\n}\r\n\r\npre {\r\n    display: block;\r\n    padding: 9.5px;\r\n    margin: 10px 0;\r\n    font-size: 13px;\r\n    line-height: 1.42857143;\r\n    color: #333;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n    background-color: #f5f5f5;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h2>Basic Configuration</h2>\n\n  <ngx-checkbox [configuration]=\"jsonModel\" [(ngModel)]=\"isSelected\" name=\"isSelected\"></ngx-checkbox>\n  <pre class=\"boolean\">{{ isSelected }}</pre>\n  <b>TS:</b>\n  <pre><![CDATA[\nimport { CustomCheckBoxModel } from 'angular-custom-checkbox';\n...\n\nexport class AppExampleComponent implements OnInit  {  \n  isSelected: boolean = false;\n  configuration: CustomCheckBoxModel = new CustomCheckBoxModel();´\n  ...\n}]]></pre>\n  <b>HTML:</b>\n  <pre><![CDATA[<ngx-checkbox [configuration]=\"configuration\" [(ngModel)]=\"isSelected\" name=\"isSelected\"></ngx-checkbox>]]></pre>  \n\n  <h4>Colors</h4> \n  p-primary\n  <ngx-checkbox [configuration]=\"configurationPrimary\" [(ngModel)]=\"isSelected\" name=\"isSelected\"></ngx-checkbox>\n  p-success \n  <ngx-checkbox [configuration]=\"configurationSuccess\" [(ngModel)]=\"isSelected\" name=\"isSelected\"></ngx-checkbox>\n  p-danger\n  <ngx-checkbox [configuration]=\"configurationDanger\" [(ngModel)]=\"isSelected\" name=\"isSelected\"></ngx-checkbox>\n  p-info\n  <ngx-checkbox [configuration]=\"configurationInfo\" [(ngModel)]=\"isSelected\" name=\"isSelected\"></ngx-checkbox>\n  p-warning\n  <ngx-checkbox [configuration]=\"configurationWarning\" [(ngModel)]=\"isSelected\" name=\"isSelected\"></ngx-checkbox>\n  \n  <h2>Advanced Configuration</h2>\n\n  <ngx-checkbox [configuration]=\"configurationCustom\" [(ngModel)]=\"isSelected\" name=\"isSelected\"></ngx-checkbox>\n  <br>\n  <br>\n  <b>TS:</b>\n  <pre><![CDATA[\nthis.configurationCustom.colorHex = '#F500FF';\nthis.configurationCustom.colorInside = '#FFF' //or 'white';\nthis.configurationCustom.rounded = true;\nthis.configurationCustom.icon = 'fa fa-pencil';]]></pre>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_checkbox_custom_checkbox_model__ = __webpack_require__("./src/app/custom-checkbox/custom-checkbox.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.isSelected = true;
        this.isSelected2 = true;
        this.jsonModel = new __WEBPACK_IMPORTED_MODULE_1__custom_checkbox_custom_checkbox_model__["a" /* CustomCheckBoxModel */]();
        this.configurationPrimary = new __WEBPACK_IMPORTED_MODULE_1__custom_checkbox_custom_checkbox_model__["a" /* CustomCheckBoxModel */]();
        this.configurationSuccess = new __WEBPACK_IMPORTED_MODULE_1__custom_checkbox_custom_checkbox_model__["a" /* CustomCheckBoxModel */]();
        this.configurationDanger = new __WEBPACK_IMPORTED_MODULE_1__custom_checkbox_custom_checkbox_model__["a" /* CustomCheckBoxModel */]();
        this.configurationInfo = new __WEBPACK_IMPORTED_MODULE_1__custom_checkbox_custom_checkbox_model__["a" /* CustomCheckBoxModel */]();
        this.configurationWarning = new __WEBPACK_IMPORTED_MODULE_1__custom_checkbox_custom_checkbox_model__["a" /* CustomCheckBoxModel */]();
        this.configurationCustom = new __WEBPACK_IMPORTED_MODULE_1__custom_checkbox_custom_checkbox_model__["a" /* CustomCheckBoxModel */]();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.jsonModel.color = 'p-primary';
        this.configurationPrimary.color = 'p-primary';
        this.configurationSuccess.color = 'p-success';
        this.configurationDanger.color = 'p-danger';
        this.configurationInfo.color = 'p-info';
        this.configurationWarning.color = 'p-warning';
        this.configurationCustom.colorHex = '#F500FF';
        this.configurationCustom.colorInside = '#FFF'; //or 'white'
        this.configurationCustom.rounded = true;
        this.configurationCustom.icon = 'fa fa-pencil';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_checkbox_custom_checkbox_module__ = __webpack_require__("./src/app/custom-checkbox/custom-checkbox.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__custom_checkbox_custom_checkbox_module__["a" /* CustomCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-checkbox/custom-checkbox.component.css":
/***/ (function(module, exports) {

module.exports = "/**\r\n * pretty-checkbox.css\r\n *\r\n * A pure CSS library to beautify checkbox and radio buttons\r\n *\r\n * Source: https://github.com/lokesh-coder/pretty-checkbox\r\n * Demo: https://lokesh-coder.github.io/pretty-checkbox\r\n *\r\n * Copyright (c) 2017 Lokesh rajendran\r\n */\r\n\r\n .pretty *{-webkit-box-sizing:border-box;box-sizing:border-box}\r\n\r\n .pretty input:not([type=checkbox]):not([type=radio]){display:none}\r\n\r\n .pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}\r\n\r\n .pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}\r\n\r\n .pretty .state label{position:initial;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}\r\n\r\n .pretty .state label:after,.pretty .state label:before{content:'';width:calc(1em + 2px);height:calc(1em + 2px);display:block;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc((0% - (100% - 1em)) - 8%);background-color:transparent}\r\n\r\n .pretty .state label:before{border-color:#bdc3c7}\r\n\r\n .pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}\r\n\r\n @-webkit-keyframes zoom{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}\r\n\r\n @keyframes zoom{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}\r\n\r\n @-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:scale(7);transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;-webkit-transform:scale(1);transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.5);transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.24);transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.04);transform:scale(1.04)}100%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}}\r\n\r\n @keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:scale(7);transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;-webkit-transform:scale(1);transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.5);transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.24);transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.04);transform:scale(1.04)}100%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}}\r\n\r\n @-webkit-keyframes jelly{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}40%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}50%{-webkit-transform:scale3d(.85,1.15,1);transform:scale3d(.85,1.15,1)}65%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}75%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}\r\n\r\n @keyframes jelly{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}40%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}50%{-webkit-transform:scale3d(.85,1.15,1);transform:scale3d(.85,1.15,1)}65%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}75%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}\r\n\r\n @-webkit-keyframes rotate{0%{opacity:0;-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg)}100%{opacity:1;-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0)}}\r\n\r\n @keyframes rotate{0%{opacity:0;-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg)}100%{opacity:1;-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0)}}\r\n\r\n @-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 #bdc3c7;box-shadow:0 0 0 0 #bdc3c7}100%{-webkit-box-shadow:0 0 0 1.5em rgba(189,195,199,0);box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}\r\n\r\n @keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 #bdc3c7;box-shadow:0 0 0 0 #bdc3c7}100%{-webkit-box-shadow:0 0 0 1.5em rgba(189,195,199,0);box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}\r\n\r\n .pretty.p-default.p-fill .state label:after{-webkit-transform:scale(1);transform:scale(1)}\r\n\r\n .pretty.p-default .state label:after{-webkit-transform:scale(.6);transform:scale(.6)}\r\n\r\n .pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}\r\n\r\n .pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:calc(1em / 7)}\r\n\r\n .pretty.p-default.p-thick .state label:after{-webkit-transform:scale(.4)!important;transform:scale(.4)!important}\r\n\r\n .pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc((0% - (100% - 1em)) - 8%);border:1px solid transparent;opacity:0}\r\n\r\n .pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1}\r\n\r\n .pretty.p-icon input:checked~.state .icon{opacity:1}\r\n\r\n .pretty.p-icon input:checked~.state label:before{border-color:#5a656b}\r\n\r\n .pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc((0% - (100% - 1em)) - 8%);border:1px solid transparent;opacity:0}\r\n\r\n .pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1}\r\n\r\n .pretty.p-svg input:checked~.state .svg{opacity:1}\r\n\r\n .pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc((0% - (100% - 1em)) - 8%);left:0;z-index:0;text-align:center;line-height:normal;-webkit-transform:scale(.8);transform:scale(.8)}\r\n\r\n .pretty.p-image input:checked~.state img{opacity:1}\r\n\r\n .pretty.p-switch input{min-width:2em}\r\n\r\n .pretty.p-switch .state{position:relative}\r\n\r\n .pretty.p-switch .state:before{content:'';border:1px solid #bdc3c7;border-radius:60px;width:2em;-webkit-box-sizing:unset;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc((0% - (100% - 1em)) - 16%);z-index:0;-webkit-transition:all .5s ease;transition:all .5s ease}\r\n\r\n .pretty.p-switch .state label{text-indent:2.5em}\r\n\r\n .pretty.p-switch .state label:after,.pretty.p-switch .state label:before{-webkit-transition:all .5s ease;transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;-webkit-transform:scale(.8);transform:scale(.8)}\r\n\r\n .pretty.p-switch .state label:after{background-color:#bdc3c7!important}\r\n\r\n .pretty.p-switch input:checked~.state:before{border-color:#5a656b}\r\n\r\n .pretty.p-switch input:checked~.state label:before{opacity:0}\r\n\r\n .pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}\r\n\r\n .pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}\r\n\r\n .pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}\r\n\r\n .pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}\r\n\r\n .pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}\r\n\r\n .pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}\r\n\r\n .pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}\r\n\r\n .pretty.p-has-hover input:hover~.state.p-is-hover{display:block}\r\n\r\n .pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}\r\n\r\n .pretty.p-has-focus input:focus~.state label:before{-webkit-box-shadow:0 0 3px 0 #bdc3c7;box-shadow:0 0 3px 0 #bdc3c7}\r\n\r\n .pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}\r\n\r\n .pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}\r\n\r\n .pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}\r\n\r\n .pretty.p-toggle .state.p-on{opacity:0;display:none}\r\n\r\n .pretty.p-toggle .state .icon,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img,.pretty.p-toggle .state.p-off{opacity:1;display:inherit}\r\n\r\n .pretty.p-toggle .state.p-off .icon{color:#bdc3c7}\r\n\r\n .pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}\r\n\r\n .pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}\r\n\r\n .pretty.p-plain input:checked~.state label:before,.pretty.p-plain.p-toggle .state label:before{content:none}\r\n\r\n .pretty.p-plain.p-plain .icon{-webkit-transform:scale(1.1);transform:scale(1.1)}\r\n\r\n .pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}\r\n\r\n .pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}\r\n\r\n .pretty.p-round.p-icon .state .icon:before{-webkit-transform:scale(.8);transform:scale(.8)}\r\n\r\n .pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}\r\n\r\n .pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{-webkit-transition:all .5s ease;transition:all .5s ease}\r\n\r\n .pretty.p-smooth input:checked+.state label:after{-webkit-transition:all .3s ease;transition:all .3s ease}\r\n\r\n .pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}\r\n\r\n .pretty.p-smooth.p-default input:checked+.state label:after{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}\r\n\r\n .pretty.p-smooth.p-plain input:checked+.state label:before{content:'';-webkit-transform:scale(0);transform:scale(0);-webkit-transition:all .5s ease;transition:all .5s ease}\r\n\r\n .pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}\r\n\r\n .pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}\r\n\r\n .pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}\r\n\r\n .pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}\r\n\r\n .pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}\r\n\r\n .pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}\r\n\r\n .pretty input[disabled]{cursor:not-allowed;display:none}\r\n\r\n .pretty input[disabled]~*{opacity:.5}\r\n\r\n .pretty.p-locked input{display:none;cursor:not-allowed}\r\n\r\n .pretty input:checked~.state.p-primary label:after,.pretty.p-toggle .state.p-primary label:after{background-color:#428bca!important}\r\n\r\n .pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg,.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg{color:#fff;stroke:#fff}\r\n\r\n .pretty input:checked~.state.p-primary-o label:before,.pretty.p-toggle .state.p-primary-o label:before{border-color:#428bca}\r\n\r\n .pretty input:checked~.state.p-primary-o label:after,.pretty.p-toggle .state.p-primary-o label:after{background-color:transparent}\r\n\r\n .pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg,.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg{color:#428bca;stroke:#428bca}\r\n\r\n .pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}\r\n\r\n .pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}\r\n\r\n .pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}\r\n\r\n .pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}\r\n\r\n .pretty input:checked~.state.p-info label:after,.pretty.p-toggle .state.p-info label:after{background-color:#5bc0de!important}\r\n\r\n .pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg,.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg{color:#fff;stroke:#fff}\r\n\r\n .pretty input:checked~.state.p-info-o label:before,.pretty.p-toggle .state.p-info-o label:before{border-color:#5bc0de}\r\n\r\n .pretty input:checked~.state.p-info-o label:after,.pretty.p-toggle .state.p-info-o label:after{background-color:transparent}\r\n\r\n .pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg,.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}\r\n\r\n .pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}\r\n\r\n .pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}\r\n\r\n .pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}\r\n\r\n .pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}\r\n\r\n .pretty input:checked~.state.p-success label:after,.pretty.p-toggle .state.p-success label:after{background-color:#5cb85c!important}\r\n\r\n .pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg,.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg{color:#fff;stroke:#fff}\r\n\r\n .pretty input:checked~.state.p-success-o label:before,.pretty.p-toggle .state.p-success-o label:before{border-color:#5cb85c}\r\n\r\n .pretty input:checked~.state.p-success-o label:after,.pretty.p-toggle .state.p-success-o label:after{background-color:transparent}\r\n\r\n .pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg,.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}\r\n\r\n .pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}\r\n\r\n .pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}\r\n\r\n .pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}\r\n\r\n .pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}\r\n\r\n .pretty input:checked~.state.p-warning label:after,.pretty.p-toggle .state.p-warning label:after{background-color:#f0ad4e!important}\r\n\r\n .pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg,.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg{color:#fff;stroke:#fff}\r\n\r\n .pretty input:checked~.state.p-warning-o label:before,.pretty.p-toggle .state.p-warning-o label:before{border-color:#f0ad4e}\r\n\r\n .pretty input:checked~.state.p-warning-o label:after,.pretty.p-toggle .state.p-warning-o label:after{background-color:transparent}\r\n\r\n .pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg,.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}\r\n\r\n .pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}\r\n\r\n .pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}\r\n\r\n .pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}\r\n\r\n .pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}\r\n\r\n .pretty input:checked~.state.p-danger label:after,.pretty.p-toggle .state.p-danger label:after{background-color:#d9534f!important}\r\n\r\n .pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg,.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg{color:#fff;stroke:#fff}\r\n\r\n .pretty input:checked~.state.p-danger-o label:before,.pretty.p-toggle .state.p-danger-o label:before{border-color:#d9534f}\r\n\r\n .pretty input:checked~.state.p-danger-o label:after,.pretty.p-toggle .state.p-danger-o label:after{background-color:transparent}\r\n\r\n .pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg,.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg{color:#d9534f;stroke:#d9534f}\r\n\r\n .pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}\r\n\r\n .pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}\r\n\r\n .pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}\r\n\r\n .pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}\r\n\r\n .pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc((0% - (100% - 1em)) - 35%)!important}\r\n\r\n .pretty.p-bigger label{text-indent:1.7em}\r\n\r\n @media print{.pretty .state .icon,.pretty .state label:after,.pretty .state label:before,.pretty .state:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}"

/***/ }),

/***/ "./src/app/custom-checkbox/custom-checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"toggleCheckbox()\" [class]=\"styleCheckBox\">\n  <input [value]=\"isSelected\" type=\"checkbox\" [checked]=\"isSelected\" />\n  <div [class]=\"styleColor\">\n    <i [class]=\"styleIcon\" [style.background]=\"configuration.colorHex\" [style.color]=\"configuration.colorInside\"></i>\n    <label></label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/custom-checkbox/custom-checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomCheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_checkbox_model__ = __webpack_require__("./src/app/custom-checkbox/custom-checkbox.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomCheckboxComponent = (function () {
    function CustomCheckboxComponent() {
        // call if value was changed inside our component
        this._onChange = function (_) { };
        // call if input was "touched" .. !
        this._onTouched = function () { };
    }
    CustomCheckboxComponent_1 = CustomCheckboxComponent;
    CustomCheckboxComponent.prototype.writeValue = function (obj) {
        this.isSelected = obj;
    };
    CustomCheckboxComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    CustomCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    CustomCheckboxComponent.prototype.setDisabledState = function (isDisabled) { };
    CustomCheckboxComponent.prototype.ngOnInit = function () {
        // STYLE CHECKBOX
        this.styleCheckBox = 'pretty p-icon p-smooth';
        if (this.configuration.rounded)
            this.styleCheckBox += ' p-round';
        // COLORS CHECKBOX
        this.styleColor = 'state ';
        if (this.configuration.color)
            this.styleColor = "" + this.styleColor + this.configuration.color;
        this.styleIcon = 'icon ';
        if (this.configuration.icon) {
            this.styleIcon = "" + this.styleIcon + this.configuration.icon;
        }
        else {
            this.styleIcon = "" + this.styleIcon;
        }
    };
    CustomCheckboxComponent.prototype.ngAfterViewInit = function () { };
    CustomCheckboxComponent.prototype.toggleCheckbox = function () {
        this.isSelected = !this.isSelected;
        this._onChange(this.isSelected);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__custom_checkbox_model__["a" /* CustomCheckBoxModel */])
    ], CustomCheckboxComponent.prototype, "configuration", void 0);
    CustomCheckboxComponent = CustomCheckboxComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-checkbox',
            template: __webpack_require__("./src/app/custom-checkbox/custom-checkbox.component.html"),
            styles: [__webpack_require__("./src/app/custom-checkbox/custom-checkbox.component.css")],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* forwardRef */])(function () { return CustomCheckboxComponent_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], CustomCheckboxComponent);
    return CustomCheckboxComponent;
    var CustomCheckboxComponent_1;
}());



/***/ }),

/***/ "./src/app/custom-checkbox/custom-checkbox.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomCheckBoxModel; });
var CustomCheckBoxModel = (function () {
    function CustomCheckBoxModel(icon, rounded, color, colorHex, colorInside) {
        this.rounded = false;
        this.icon = icon;
        this.rounded = rounded;
        this.color = color;
        this.colorHex = colorHex;
        this.colorInside = colorInside;
    }
    return CustomCheckBoxModel;
}());



/***/ }),

/***/ "./src/app/custom-checkbox/custom-checkbox.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomCheckboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_checkbox_component__ = __webpack_require__("./src/app/custom-checkbox/custom-checkbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomCheckboxModule = (function () {
    function CustomCheckboxModule() {
    }
    CustomCheckboxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__custom_checkbox_component__["a" /* CustomCheckboxComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__custom_checkbox_component__["a" /* CustomCheckboxComponent */]]
        })
    ], CustomCheckboxModule);
    return CustomCheckboxModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map