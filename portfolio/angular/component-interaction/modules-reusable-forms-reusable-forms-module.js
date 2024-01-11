(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-reusable-forms-reusable-forms-module"],{

/***/ "8NT+":
/*!*************************************************************************!*\
  !*** ./src/app/modules/reusable-forms/reusable-forms-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ReusableFormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReusableFormsRoutingModule", function() { return ReusableFormsRoutingModule; });
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "vpq0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reusable_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusable-forms.component */ "mAMP");






const routes = [
    { path: '', component: _reusable_forms_component__WEBPACK_IMPORTED_MODULE_3__["ReusableFormsComponent"] },
    { path: 'customer-form', component: _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_0__["CustomerFormComponent"] },
];
class ReusableFormsRoutingModule {
}
ReusableFormsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReusableFormsRoutingModule });
ReusableFormsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ReusableFormsRoutingModule_Factory(t) { return new (t || ReusableFormsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReusableFormsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReusableFormsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "9qLc":
/*!*****************************************************************!*\
  !*** ./src/app/modules/reusable-forms/reusable-forms.module.ts ***!
  \*****************************************************************/
/*! exports provided: ReusableFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReusableFormsModule", function() { return ReusableFormsModule; });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reusable_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusable-forms-routing.module */ "8NT+");
/* harmony import */ var _reusable_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reusable-forms.component */ "mAMP");
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "vpq0");







class ReusableFormsModule {
}
ReusableFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReusableFormsModule });
ReusableFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ReusableFormsModule_Factory(t) { return new (t || ReusableFormsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _reusable_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReusableFormsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReusableFormsModule, { declarations: [_reusable_forms_component__WEBPACK_IMPORTED_MODULE_4__["ReusableFormsComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_5__["CustomerFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _reusable_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReusableFormsRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReusableFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_reusable_forms_component__WEBPACK_IMPORTED_MODULE_4__["ReusableFormsComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_5__["CustomerFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _reusable_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReusableFormsRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "aKJ1":
/*!************************************************************************!*\
  !*** ./src/app/modules/reusable-forms/core/reusable-forms.constant.ts ***!
  \************************************************************************/
/*! exports provided: CONTACT_HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACT_HEADER", function() { return CONTACT_HEADER; });
const CONTACT_HEADER = {
    title: 'Angular Reusable Forms',
    subTitle: 'We can reuse one single form via config file in multiple parameters'
};


/***/ }),

/***/ "mAMP":
/*!********************************************************************!*\
  !*** ./src/app/modules/reusable-forms/reusable-forms.component.ts ***!
  \********************************************************************/
/*! exports provided: ReusableFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReusableFormsComponent", function() { return ReusableFormsComponent; });
/* harmony import */ var _core_reusable_forms_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/reusable-forms.constant */ "aKJ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_form_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/form.config */ "s6jL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/contact/contact.component */ "1vAT");
/* harmony import */ var _shared_forms_ak_body_ak_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/forms/ak-body/ak-body.component */ "yR1z");
/* harmony import */ var _shared_forms_ak_form_ak_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/forms/ak-form/ak-form.component */ "dxOj");








class ReusableFormsComponent {
    constructor() {
        this.contactData = _core_reusable_forms_constant__WEBPACK_IMPORTED_MODULE_0__["CONTACT_HEADER"];
        this.formConfig = _core_form_config__WEBPACK_IMPORTED_MODULE_2__["LOGIN_FORM"];
        this.formConfig2 = _core_form_config__WEBPACK_IMPORTED_MODULE_2__["LOGIN_FORM2"];
    }
    ngOnInit() {
    }
    onReceiveFormGroup(e) {
        this.formData = e;
    }
    onReceiveFormGroup2(e) {
        this.formGroup = e;
    }
    onSubmit() {
        console.log(this.formData.value);
    }
    onSubmitForm() {
        console.log(this.formGroup);
        this.formGroup.patchValue({
            password: "123456",
            user: "ankit"
        });
        console.log(this.formGroup.value);
    }
}
ReusableFormsComponent.ɵfac = function ReusableFormsComponent_Factory(t) { return new (t || ReusableFormsComponent)(); };
ReusableFormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReusableFormsComponent, selectors: [["app-reusable-forms"]], decls: 20, vars: 3, consts: [[1, "space-30"], ["routerLink", "/", 1, "primary-btn"], [3, "data"], [1, "row"], [1, "col-md-5"], [3, "formConfig", "formGroupReceiever"], ["type", "submit", 1, "primary-btn", 3, "click"], [1, "col-md-2"], ["routerLink", "customer-form", 1, "primary-btn"]], template: function ReusableFormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-contact", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-ak-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-ak-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("formGroupReceiever", function ReusableFormsComponent_Template_app_ak_form_formGroupReceiever_7_listener($event) { return ctx.onReceiveFormGroup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReusableFormsComponent_Template_button_click_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-ak-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-ak-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("formGroupReceiever", function ReusableFormsComponent_Template_app_ak_form_formGroupReceiever_12_listener($event) { return ctx.onReceiveFormGroup2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReusableFormsComponent_Template_button_click_13_listener() { return ctx.onSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "For customer form, please click on below button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "customer-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.contactData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formConfig", ctx.formConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formConfig", ctx.formConfig2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _shared_forms_ak_body_ak_body_component__WEBPACK_IMPORTED_MODULE_5__["AkBodyComponent"], _shared_forms_ak_form_ak_form_component__WEBPACK_IMPORTED_MODULE_6__["AkFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXVzYWJsZS1mb3Jtcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReusableFormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-reusable-forms',
                templateUrl: './reusable-forms.component.html',
                styleUrls: ['./reusable-forms.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s6jL":
/*!************************************************************!*\
  !*** ./src/app/modules/reusable-forms/core/form.config.ts ***!
  \************************************************************/
/*! exports provided: LOGIN_FORM, LOGIN_FORM2, CUSTOMER_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FORM", function() { return LOGIN_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FORM2", function() { return LOGIN_FORM2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_FORM", function() { return CUSTOMER_FORM; });
const LOGIN_FORM = {
    name: "Login Form",
    groups: [
        {
            columns: 3,
            groupName: 'Login Details',
            controls: [
                {
                    labelName: "User Name",
                    controlName: "user",
                    type: "text",
                    validator: []
                },
                {
                    labelName: "User Password",
                    controlName: "password",
                    type: "password",
                    validator: []
                }
            ]
        }
    ]
};
const LOGIN_FORM2 = {
    name: "Auto filled Login Form",
    groups: [
        {
            columns: 3,
            groupName: 'Auto filled Login Form',
            controls: [
                {
                    labelName: "Name",
                    controlName: "user",
                    type: "text",
                    validator: []
                },
                {
                    labelName: "Password",
                    controlName: "password",
                    type: "password",
                    validator: []
                }
            ]
        }
    ]
};
const CUSTOMER_FORM = {
    name: "Customer Form",
    groups: [
        {
            columns: 3,
            groupName: 'Personal Information',
            controls: [
                {
                    labelName: "Name",
                    controlName: "user",
                    type: "text",
                    validator: []
                },
                {
                    labelName: "Email Id",
                    controlName: "email",
                    type: "text",
                    validator: []
                },
                {
                    labelName: "Gender",
                    controlName: "gender",
                    type: "select",
                    validator: [],
                    dropdownData: [
                        { name: 'Select', value: '' },
                        { name: 'Male', value: 'M' },
                        { name: 'Female', value: 'F' },
                        { name: 'Other', value: 'O' },
                    ]
                },
                {
                    labelName: "Country",
                    controlName: "country",
                    type: "select",
                    validator: [],
                    dropdownData: [
                        { name: 'Select', value: '' },
                        { name: 'India', value: 'IN' },
                        { name: 'Other', value: 'OT' },
                    ]
                },
                {
                    labelName: "Country Name",
                    controlName: "country_other",
                    type: "text",
                    validator: []
                },
            ]
        }
    ]
};


/***/ }),

/***/ "vpq0":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/reusable-forms/customer-form/customer-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_form_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/form.config */ "s6jL");
/* harmony import */ var _core_reusable_forms_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/reusable-forms.constant */ "aKJ1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/contact/contact.component */ "1vAT");
/* harmony import */ var _shared_forms_ak_body_ak_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/forms/ak-body/ak-body.component */ "yR1z");
/* harmony import */ var _shared_forms_ak_form_ak_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/forms/ak-form/ak-form.component */ "dxOj");








class CustomerFormComponent {
    constructor() {
        this.contactData = _core_reusable_forms_constant__WEBPACK_IMPORTED_MODULE_2__["CONTACT_HEADER"];
        this.customerForm = _core_form_config__WEBPACK_IMPORTED_MODULE_1__["CUSTOMER_FORM"];
    }
    ngOnInit() {
    }
    onReceiveFormGroup(form) {
        var _a;
        this.formGroup = form;
        (_a = this.formGroup.get("user")) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((data) => {
            var _a, _b, _c;
            if (data) {
                (_a = this.formGroup.get("email")) === null || _a === void 0 ? void 0 : _a.disable({
                    onlySelf: true
                });
            }
            else {
                (_b = this.formGroup.get("email")) === null || _b === void 0 ? void 0 : _b.enable({
                    onlySelf: true
                });
            }
            (_c = this.formGroup.get("email")) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
        });
    }
    onSubmit() {
        console.log(this.formGroup.value);
    }
}
CustomerFormComponent.ɵfac = function CustomerFormComponent_Factory(t) { return new (t || CustomerFormComponent)(); };
CustomerFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerFormComponent, selectors: [["app-customer-form"]], decls: 13, vars: 3, consts: [[1, "space-30"], ["routerLink", "/reusable-forms", 1, "primary-btn"], [3, "data"], [1, "row"], [1, "col-md-12"], [1, "ak-title"], [3, "formConfig", "formGroupReceiever"], ["type", "submit", 1, "primary-btn", 3, "click"]], template: function CustomerFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-ak-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-ak-form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formGroupReceiever", function CustomerFormComponent_Template_app_ak_form_formGroupReceiever_9_listener($event) { return ctx.onReceiveFormGroup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerFormComponent_Template_button_click_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.contactData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.customerForm.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formConfig", ctx.customerForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _shared_forms_ak_body_ak_body_component__WEBPACK_IMPORTED_MODULE_5__["AkBodyComponent"], _shared_forms_ak_form_ak_form_component__WEBPACK_IMPORTED_MODULE_6__["AkFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-form',
                templateUrl: './customer-form.component.html',
                styleUrls: ['./customer-form.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-reusable-forms-reusable-forms-module.js.map