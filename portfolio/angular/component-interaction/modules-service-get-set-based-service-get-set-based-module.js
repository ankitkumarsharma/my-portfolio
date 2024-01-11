(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-service-get-set-based-service-get-set-based-module"],{

/***/ "+41H":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/service-get-set-based/core/service-get-set-based.constant.ts ***!
  \**************************************************************************************/
/*! exports provided: CONTACT_HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACT_HEADER", function() { return CONTACT_HEADER; });
const CONTACT_HEADER = {
    title: 'Angular Service (Get/Set) ',
    subTitle: 'Service based via getter/setter methods'
};


/***/ }),

/***/ "3vMv":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/service-get-set-based/service-get-set-based-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ServiceGetSetBasedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceGetSetBasedRoutingModule", function() { return ServiceGetSetBasedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child/child.component */ "C1nq");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent/parent.component */ "EWKi");
/* harmony import */ var _service_get_set_based_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-get-set-based.component */ "jOyq");







const routes = [
    { path: '', pathMatch: 'full', component: _service_get_set_based_component__WEBPACK_IMPORTED_MODULE_4__["ServiceGetSetBasedComponent"] },
    { path: 'child', component: _child_child_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"] },
    { path: 'parent', component: _parent_parent_component__WEBPACK_IMPORTED_MODULE_3__["ParentComponent"] }
];
class ServiceGetSetBasedRoutingModule {
}
ServiceGetSetBasedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceGetSetBasedRoutingModule });
ServiceGetSetBasedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceGetSetBasedRoutingModule_Factory(t) { return new (t || ServiceGetSetBasedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceGetSetBasedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceGetSetBasedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "C1nq":
/*!************************************************************************!*\
  !*** ./src/app/modules/service-get-set-based/child/child.component.ts ***!
  \************************************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_service_get_set_based_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/service-get-set-based.constant */ "+41H");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/contact/contact.component */ "1vAT");






class ChildComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.contactData = _core_service_get_set_based_constant__WEBPACK_IMPORTED_MODULE_1__["CONTACT_HEADER"];
    }
    ngOnInit() {
        this.changeValue = this.dataService.getData();
    }
    changeCondition() {
        // for set/get method
        this.changeValue = !this.changeValue;
        this.dataService.setData(this.changeValue);
        // for behaviourSubject
        this.dataService.updateFullname('Ankit Kumar Sharma');
        // show alert
        alert('Done, Now click on Go to Parent');
    }
}
ChildComponent.ɵfac = function ChildComponent_Factory(t) { return new (t || ChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildComponent, selectors: [["app-child"]], decls: 12, vars: 1, consts: [[1, "space-30"], ["routerLink", "/", 1, "primary-btn"], [3, "data"], [1, "secondary-btn", 3, "click"], ["routerLink", "/service-based", 1, "primary-btn"]], template: function ChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "child works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildComponent_Template_button_click_6_listener() { return ctx.changeCondition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " <<< Go to Parent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.contactData);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGlsZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-child',
                templateUrl: './child.component.html',
                styleUrls: ['./child.component.scss']
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "EWKi":
/*!**************************************************************************!*\
  !*** ./src/app/modules/service-get-set-based/parent/parent.component.ts ***!
  \**************************************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a0, a1) { return { "true": a0, "false": a1 }; };
class ParentComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.getData();
        // for BehaviorSubject
        this.dataService.getFullName.subscribe((data) => {
            this.name = data;
        });
    }
    getData() {
        this.show_flag = this.dataService.getData();
    }
}
ParentComponent.ɵfac = function ParentComponent_Factory(t) { return new (t || ParentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
ParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentComponent, selectors: [["app-parent"]], decls: 11, vars: 6, consts: [[1, "ak-title"], [3, "ngClass"], ["routerLink", "child", 1, "primary-btn"]], template: function ParentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "parent works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go to child >>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.show_flag, !ctx.show_flag));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.show_flag ? "True" : "False");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".true[_ngcontent-%COMP%] {\n  color: #008000;\n}\n\n.false[_ngcontent-%COMP%] {\n  color: #ff4545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFyZW50LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF92YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0NNYztBRFBoQjs7QUFHQTtFQUNFLGNDRVk7QURGZCIsImZpbGUiOiJwYXJlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy92YXJpYWJsZSc7XHJcbi50cnVle1xyXG4gIGNvbG9yOiAkc3VjY2Vzc19jb2xvcjtcclxufVxyXG4uZmFsc2V7XHJcbiAgY29sb3I6ICRlcnJvcl9jb2xvcjtcclxufVxyXG4iLCIkcHJpbWFyeV9jb2xvcjogI0Q4M0Y4NztcclxuJHNlY29uZGFyeV9jb2xvcjogI2IxMDM1NTtcclxuJHRyaV9jb2xvcjogIzQ0MzE4RDtcclxuJGJhc2VfY29sb3I6ICNFOTgwNzQ7XHJcbiRiZ19jb2xvcjogI0E0QjNCNjtcclxuJHdoaXRlX2NvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2tfY29sb3I6ICMwMDAwMDA7XHJcblxyXG4kZXJyb3JfY29sb3I6ICNmZjQ1NDU7XHJcbiRzdWNjZXNzX2NvbG9yOiAjMDA4MDAwO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-parent',
                templateUrl: './parent.component.html',
                styleUrls: ['./parent.component.scss']
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class DataService {
    constructor() {
        // for get/set method
        this.isEnable = false;
        // for BehaviorSubject
        this.fullName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('Ankit');
        this.getFullName = this.fullName.asObservable();
    }
    // we are communication data between two component via service -- getter/setter method
    //-----------------------------------------------------------
    // setter method
    setData(data) {
        this.isEnable = data;
    }
    // getter method
    getData() {
        return this.isEnable;
    }
    // data communicate via BehaviourSubject
    updateFullname(name) {
        this.fullName.next(name);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HBpd":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/service-get-set-based/service-get-set-based.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ServiceGetSetBasedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceGetSetBasedModule", function() { return ServiceGetSetBasedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _service_get_set_based_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-get-set-based-routing.module */ "3vMv");
/* harmony import */ var _service_get_set_based_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-get-set-based.component */ "jOyq");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parent/parent.component */ "EWKi");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./child/child.component */ "C1nq");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








class ServiceGetSetBasedModule {
}
ServiceGetSetBasedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceGetSetBasedModule });
ServiceGetSetBasedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceGetSetBasedModule_Factory(t) { return new (t || ServiceGetSetBasedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _service_get_set_based_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceGetSetBasedRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceGetSetBasedModule, { declarations: [_service_get_set_based_component__WEBPACK_IMPORTED_MODULE_3__["ServiceGetSetBasedComponent"], _parent_parent_component__WEBPACK_IMPORTED_MODULE_4__["ParentComponent"], _child_child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _service_get_set_based_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceGetSetBasedRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceGetSetBasedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_service_get_set_based_component__WEBPACK_IMPORTED_MODULE_3__["ServiceGetSetBasedComponent"], _parent_parent_component__WEBPACK_IMPORTED_MODULE_4__["ParentComponent"], _child_child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _service_get_set_based_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServiceGetSetBasedRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jOyq":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/service-get-set-based/service-get-set-based.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ServiceGetSetBasedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceGetSetBasedComponent", function() { return ServiceGetSetBasedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_service_get_set_based_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/service-get-set-based.constant */ "+41H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/contact/contact.component */ "1vAT");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parent/parent.component */ "EWKi");






class ServiceGetSetBasedComponent {
    constructor() {
        this.contactData = _core_service_get_set_based_constant__WEBPACK_IMPORTED_MODULE_1__["CONTACT_HEADER"];
    }
    ngOnInit() {
    }
}
ServiceGetSetBasedComponent.ɵfac = function ServiceGetSetBasedComponent_Factory(t) { return new (t || ServiceGetSetBasedComponent)(); };
ServiceGetSetBasedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceGetSetBasedComponent, selectors: [["app-service-get-set-based"]], decls: 6, vars: 1, consts: [[1, "space-30"], ["routerLink", "/", 1, "primary-btn"], [3, "data"]], template: function ServiceGetSetBasedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-parent");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.contactData);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _parent_parent_component__WEBPACK_IMPORTED_MODULE_4__["ParentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLWdldC1zZXQtYmFzZWQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceGetSetBasedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service-get-set-based',
                templateUrl: './service-get-set-based.component.html',
                styleUrls: ['./service-get-set-based.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-service-get-set-based-service-get-set-based-module.js.map