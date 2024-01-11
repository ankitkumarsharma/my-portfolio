(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-output-based-output-based-module"],{

/***/ "6Cu3":
/*!********************************************************************!*\
  !*** ./src/app/modules/output-based/core/output-based.constant.ts ***!
  \********************************************************************/
/*! exports provided: CONTACT_HEADER, OPERATION, BTN_OPERATION_ARR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACT_HEADER", function() { return CONTACT_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATION", function() { return OPERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTN_OPERATION_ARR", function() { return BTN_OPERATION_ARR; });
const CONTACT_HEADER = {
    title: 'Angular @Output() Decorator ',
    subTitle: 'We can communicate via Child to Parent and share the data'
};
const OPERATION = {
    addition: '+',
    subtract: '-',
    multiply: '*',
    division: '/'
};
const BTN_OPERATION_ARR = [
    { title: 'Add', status: true, opt: '+' },
    { title: 'Subtract', status: true, opt: '-' },
    { title: 'Multiply', status: true, opt: '*' },
    { title: 'Divide', status: true, opt: '/' },
];


/***/ }),

/***/ "EzrP":
/*!***************************************************************!*\
  !*** ./src/app/modules/output-based/child/child.component.ts ***!
  \***************************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_output_based_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/output-based.constant */ "6Cu3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ChildComponent_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildComponent_td_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeData(item_r1.opt); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
} }
class ChildComponent {
    constructor() {
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.btnArr = _core_output_based_constant__WEBPACK_IMPORTED_MODULE_1__["BTN_OPERATION_ARR"];
    }
    ngOnInit() {
    }
    changeData(value) {
        this.btnClick.emit(value);
    }
}
ChildComponent.ɵfac = function ChildComponent_Factory(t) { return new (t || ChildComponent)(); };
ChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildComponent, selectors: [["app-child"]], outputs: { btnClick: "btnClick" }, decls: 3, vars: 1, consts: [[1, "table"], [1, "row"], ["class", "col-md-3 col-6", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-6"], [1, "primary-btn", 3, "click"]], template: function ChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChildComponent_td_2_Template, 3, 1, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.btnArr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGlsZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-child',
                templateUrl: './child.component.html',
                styleUrls: ['./child.component.scss']
            }]
    }], function () { return []; }, { btnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "IFal":
/*!*****************************************************************!*\
  !*** ./src/app/modules/output-based/parent/parent.component.ts ***!
  \*****************************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_output_based_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/output-based.constant */ "6Cu3");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../child/child.component */ "EzrP");




class ParentComponent {
    constructor() {
        this.inputValue1 = 0;
        this.inputValue2 = 0;
        this.result = '0';
    }
    text2Data(value) {
        this.inputValue2 = Number(value);
    }
    text1Data(value) {
        this.inputValue1 = Number(value);
    }
    ngOnInit() {
    }
    operationClick($event) {
        this.optSymbal = $event;
        switch ($event) {
            case _core_output_based_constant__WEBPACK_IMPORTED_MODULE_1__["OPERATION"].addition:
                this.result = this.inputValue1 + this.inputValue2;
                break;
            case _core_output_based_constant__WEBPACK_IMPORTED_MODULE_1__["OPERATION"].subtract:
                this.result = this.inputValue1 - this.inputValue2;
                break;
            case _core_output_based_constant__WEBPACK_IMPORTED_MODULE_1__["OPERATION"].multiply:
                this.result = this.inputValue1 * this.inputValue2;
                break;
            case _core_output_based_constant__WEBPACK_IMPORTED_MODULE_1__["OPERATION"].division:
                this.result = this.inputValue1 / this.inputValue2;
                break;
            default:
                break;
        }
    }
}
ParentComponent.ɵfac = function ParentComponent_Factory(t) { return new (t || ParentComponent)(); };
ParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentComponent, selectors: [["app-parent"]], decls: 16, vars: 2, consts: [[1, "row"], [1, "col-md-2"], ["type", "number", "value", "0", 1, "form-control", 3, "change"], ["text1", ""], [1, "col-1"], [1, "ak-title-lg"], ["text2", ""], [1, "col-md-1"], [1, "ak-title"], [1, "col-md-3"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], [3, "btnClick"]], template: function ParentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ParentComponent_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.text1Data(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ParentComponent_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.text2Data(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-child", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function ParentComponent_Template_app_child_btnClick_15_listener($event) { return ctx.operationClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.optSymbal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.result);
    } }, directives: [_child_child_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-parent',
                templateUrl: './parent.component.html',
                styleUrls: ['./parent.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QHU1":
/*!*************************************************************!*\
  !*** ./src/app/modules/output-based/output-based.module.ts ***!
  \*************************************************************/
/*! exports provided: OutputBasedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputBasedModule", function() { return OutputBasedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _output_based_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./output-based-routing.module */ "ZHz0");
/* harmony import */ var _output_based_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output-based.component */ "nysl");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parent/parent.component */ "IFal");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./child/child.component */ "EzrP");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








class OutputBasedModule {
}
OutputBasedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OutputBasedModule });
OutputBasedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OutputBasedModule_Factory(t) { return new (t || OutputBasedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _output_based_routing_module__WEBPACK_IMPORTED_MODULE_2__["OutputBasedRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OutputBasedModule, { declarations: [_output_based_component__WEBPACK_IMPORTED_MODULE_3__["OutputBasedComponent"], _parent_parent_component__WEBPACK_IMPORTED_MODULE_4__["ParentComponent"], _child_child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _output_based_routing_module__WEBPACK_IMPORTED_MODULE_2__["OutputBasedRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputBasedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_output_based_component__WEBPACK_IMPORTED_MODULE_3__["OutputBasedComponent"], _parent_parent_component__WEBPACK_IMPORTED_MODULE_4__["ParentComponent"], _child_child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _output_based_routing_module__WEBPACK_IMPORTED_MODULE_2__["OutputBasedRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZHz0":
/*!*********************************************************************!*\
  !*** ./src/app/modules/output-based/output-based-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OutputBasedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputBasedRoutingModule", function() { return OutputBasedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _output_based_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./output-based.component */ "nysl");





const routes = [{ path: '', component: _output_based_component__WEBPACK_IMPORTED_MODULE_2__["OutputBasedComponent"] }];
class OutputBasedRoutingModule {
}
OutputBasedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OutputBasedRoutingModule });
OutputBasedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OutputBasedRoutingModule_Factory(t) { return new (t || OutputBasedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OutputBasedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputBasedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nysl":
/*!****************************************************************!*\
  !*** ./src/app/modules/output-based/output-based.component.ts ***!
  \****************************************************************/
/*! exports provided: OutputBasedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputBasedComponent", function() { return OutputBasedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_output_based_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/output-based.constant */ "6Cu3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/contact/contact.component */ "1vAT");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parent/parent.component */ "IFal");






class OutputBasedComponent {
    constructor() {
        this.contactData = _core_output_based_constant__WEBPACK_IMPORTED_MODULE_1__["CONTACT_HEADER"];
    }
    ngOnInit() {
    }
}
OutputBasedComponent.ɵfac = function OutputBasedComponent_Factory(t) { return new (t || OutputBasedComponent)(); };
OutputBasedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputBasedComponent, selectors: [["app-output-based"]], decls: 5, vars: 1, consts: [[1, "space-30"], ["routerLink", "/", 1, "primary-btn"], [3, "data"]], template: function OutputBasedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-parent");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.contactData);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"], _parent_parent_component__WEBPACK_IMPORTED_MODULE_4__["ParentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRwdXQtYmFzZWQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputBasedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-output-based',
                templateUrl: './output-based.component.html',
                styleUrls: ['./output-based.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-output-based-output-based-module.js.map