(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/action-mgmt/action-mgmt.component.ts":
/*!******************************************************!*\
  !*** ./src/app/action-mgmt/action-mgmt.component.ts ***!
  \******************************************************/
/*! exports provided: ActionMgmtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMgmtComponent", function() { return ActionMgmtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function ActionMgmtComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.appIdentifier, " ");
} }
class ActionMgmtComponent extends src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.actionName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.actionDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['ActionName', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.actionName == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        this.actionDescription.setValue(rr.actionDescription);
                        this.actionName.setValue(rr.actionName);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["CreateActionRequest"]();
        car.description = this.actionDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.actionName.value;
        this.managementClient.createAction(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update action.. check browser console for logs");
        });
    }
    deleteObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["DeleteActionRequest"]();
        car.name = this.actionName.value;
        this.managementClient.deleteAction(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete action.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableActions().then(values => {
            values.forEach(element => {
                this.viewableObjects.push(element);
                let ci = new Array();
                ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](element.actionName));
                ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](element.actionDescription));
                ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](element.appIdentifier));
                let rr = new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["ResultRow"](element.actionName, ci);
                this.formResults.push(rr);
            });
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Actions";
        this.loadViewableApps();
        this.loadViewableObjects();
    }
}
ActionMgmtComponent.ɵfac = function ActionMgmtComponent_Factory(t) { return new (t || ActionMgmtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
ActionMgmtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionMgmtComponent, selectors: [["app-action-mgmt"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 12, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["matInput", "", "placeholder", "Unique Action Name", 3, "formControl"], ["matInput", "", "placeholder", "describe the action..", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ActionMgmtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ActionMgmtComponent_Template_mat_select_valueChange_29_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ActionMgmtComponent_mat_option_30_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionMgmtComponent_Template_button_click_35_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionMgmtComponent_Template_button_click_40_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Existing Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-results-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ActionMgmtComponent_Template_app_results_table_currentRowSelected_49_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.actionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.actionDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbi1tZ210L2FjdGlvbi1tZ210LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmZvcm0tbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcblxyXG4ucmVzdWx0cy10YWJsZS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLW9kZC1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjQ1LCAyNDUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1ldmVuLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMjAsIDI1NSk7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWhlYWRpbmctcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4uaW5mby1ibG9jay10YWJsZS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4udGFibGUtbWVudS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LW91dGVyLWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWlubmVyLWNlbGwtdGFibGVcclxue1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLWNlbGxcclxue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2Utc3R5bGVcclxue1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXJvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1saW5rLXJvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1saW5rLWNlbGxcclxue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd29yZC13cmFwOiBub25lO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionMgmtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-mgmt',
                templateUrl: './action-mgmt.component.html',
                styleUrls: ['./action-mgmt.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _action_mgmt_action_mgmt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-mgmt/action-mgmt.component */ "./src/app/action-mgmt/action-mgmt.component.ts");
/* harmony import */ var _application_mgmt_application_mgmt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-mgmt/application-mgmt.component */ "./src/app/application-mgmt/application-mgmt.component.ts");
/* harmony import */ var _resource_management_resource_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource-management/resource-management.component */ "./src/app/resource-management/resource-management.component.ts");
/* harmony import */ var _client_management_client_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-management/client-management.component */ "./src/app/client-management/client-management.component.ts");
/* harmony import */ var _scope_type_management_scope_type_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scope-type-management/scope-type-management.component */ "./src/app/scope-type-management/scope-type-management.component.ts");
/* harmony import */ var _scope_management_scope_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scope-management/scope-management.component */ "./src/app/scope-management/scope-management.component.ts");
/* harmony import */ var _domain_management_domain_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domain-management/domain-management.component */ "./src/app/domain-management/domain-management.component.ts");
/* harmony import */ var _domain_type_management_domain_type_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./domain-type-management/domain-type-management.component */ "./src/app/domain-type-management/domain-type-management.component.ts");
/* harmony import */ var _client_group_management_client_group_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client-group-management/client-group-management.component */ "./src/app/client-group-management/client-group-management.component.ts");
/* harmony import */ var _client_to_groups_client_to_groups_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-to-groups/client-to-groups.component */ "./src/app/client-to-groups/client-to-groups.component.ts");
/* harmony import */ var _role_to_permissions_role_to_permissions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./role-to-permissions/role-to-permissions.component */ "./src/app/role-to-permissions/role-to-permissions.component.ts");
/* harmony import */ var _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./role-management/role-management.component */ "./src/app/role-management/role-management.component.ts");
/* harmony import */ var _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./permission-management/permission-management.component */ "./src/app/permission-management/permission-management.component.ts");
/* harmony import */ var _groups_to_roles_groups_to_roles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./groups-to-roles/groups-to-roles.component */ "./src/app/groups-to-roles/groups-to-roles.component.ts");


















const routes = [
    { path: 'actionManagement', component: _action_mgmt_action_mgmt_component__WEBPACK_IMPORTED_MODULE_2__["ActionMgmtComponent"] },
    { path: 'appManagement', component: _application_mgmt_application_mgmt_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationMgmtComponent"] },
    { path: 'resourceManagement', component: _resource_management_resource_management_component__WEBPACK_IMPORTED_MODULE_4__["ResourceManagementComponent"] },
    { path: 'clientManagement', component: _client_management_client_management_component__WEBPACK_IMPORTED_MODULE_5__["ClientManagementComponent"] },
    { path: 'scopetypeManagement', component: _scope_type_management_scope_type_management_component__WEBPACK_IMPORTED_MODULE_6__["ScopeTypeManagementComponent"] },
    { path: 'scopeManagement', component: _scope_management_scope_management_component__WEBPACK_IMPORTED_MODULE_7__["ScopeManagementComponent"] },
    { path: 'domainManagement', component: _domain_management_domain_management_component__WEBPACK_IMPORTED_MODULE_8__["DomainManagementComponent"] },
    { path: 'domaintypeManagement', component: _domain_type_management_domain_type_management_component__WEBPACK_IMPORTED_MODULE_9__["DomainTypeManagementComponent"] },
    { path: 'clientGroupManagement', component: _client_group_management_client_group_management_component__WEBPACK_IMPORTED_MODULE_10__["ClientGroupManagementComponent"] },
    { path: 'clientToGroups', component: _client_to_groups_client_to_groups_component__WEBPACK_IMPORTED_MODULE_11__["ClientToGroupsComponent"] },
    { path: 'roleToPermissions', component: _role_to_permissions_role_to_permissions_component__WEBPACK_IMPORTED_MODULE_12__["RoleToPermissionsComponent"] },
    { path: 'clientRoleManagement', component: _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_13__["RoleManagementComponent"] },
    { path: 'scopetypeManagement', component: _scope_type_management_scope_type_management_component__WEBPACK_IMPORTED_MODULE_6__["ScopeTypeManagementComponent"] },
    { path: 'permissionManagement', component: _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_14__["PermissionManagementComponent"] },
    { path: 'groupRoleManagement', component: _groups_to_roles_groups_to_roles_component__WEBPACK_IMPORTED_MODULE_15__["GroupsToRolesComponent"] },
    { path: 'rolePermissionManagement', component: _role_to_permissions_role_to_permissions_component__WEBPACK_IMPORTED_MODULE_12__["RoleToPermissionsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bottombar/bottombar.component */ "./src/app/bottombar/bottombar.component.ts");





class AppComponent {
    constructor() {
        this.title = 'adminapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["id", "topbar"], ["id", "routerarea"], ["id", "bottombar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-bottombar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__["TopbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_3__["BottombarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/__ivy_ngcc__/fesm2015/angular-auth-oidc-client.js");
/* harmony import */ var src_app_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bottombar/bottombar.component */ "./src/app/bottombar/bottombar.component.ts");
/* harmony import */ var _action_mgmt_action_mgmt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./action-mgmt/action-mgmt.component */ "./src/app/action-mgmt/action-mgmt.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _application_mgmt_application_mgmt_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./application-mgmt/application-mgmt.component */ "./src/app/application-mgmt/application-mgmt.component.ts");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./table-menu/table-menu.component */ "./src/app/table-menu/table-menu.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _client_management_client_management_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./client-management/client-management.component */ "./src/app/client-management/client-management.component.ts");
/* harmony import */ var _resource_management_resource_management_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./resource-management/resource-management.component */ "./src/app/resource-management/resource-management.component.ts");
/* harmony import */ var _scope_type_management_scope_type_management_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./scope-type-management/scope-type-management.component */ "./src/app/scope-type-management/scope-type-management.component.ts");
/* harmony import */ var _client_group_management_client_group_management_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./client-group-management/client-group-management.component */ "./src/app/client-group-management/client-group-management.component.ts");
/* harmony import */ var _domain_type_management_domain_type_management_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./domain-type-management/domain-type-management.component */ "./src/app/domain-type-management/domain-type-management.component.ts");
/* harmony import */ var _scope_management_scope_management_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./scope-management/scope-management.component */ "./src/app/scope-management/scope-management.component.ts");
/* harmony import */ var _domain_management_domain_management_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./domain-management/domain-management.component */ "./src/app/domain-management/domain-management.component.ts");
/* harmony import */ var _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./role-management/role-management.component */ "./src/app/role-management/role-management.component.ts");
/* harmony import */ var _role_to_permissions_role_to_permissions_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./role-to-permissions/role-to-permissions.component */ "./src/app/role-to-permissions/role-to-permissions.component.ts");
/* harmony import */ var _client_to_groups_client_to_groups_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./client-to-groups/client-to-groups.component */ "./src/app/client-to-groups/client-to-groups.component.ts");
/* harmony import */ var _groups_to_roles_groups_to_roles_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./groups-to-roles/groups-to-roles.component */ "./src/app/groups-to-roles/groups-to-roles.component.ts");
/* harmony import */ var _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./permission-management/permission-management.component */ "./src/app/permission-management/permission-management.component.ts");








































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__["OidcConfigService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: src_app_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["configureAuth"],
            deps: [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__["OidcConfigService"]],
            multi: true,
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__["AuthModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"],
        _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_9__["BottombarComponent"],
        _action_mgmt_action_mgmt_component__WEBPACK_IMPORTED_MODULE_10__["ActionMgmtComponent"],
        _application_mgmt_application_mgmt_component__WEBPACK_IMPORTED_MODULE_12__["ApplicationMgmtComponent"],
        _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_13__["ResultsTableComponent"],
        _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_14__["InfoBlockComponent"],
        _table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_15__["TableMenuComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"],
        _client_management_client_management_component__WEBPACK_IMPORTED_MODULE_26__["ClientManagementComponent"],
        _resource_management_resource_management_component__WEBPACK_IMPORTED_MODULE_27__["ResourceManagementComponent"],
        _scope_type_management_scope_type_management_component__WEBPACK_IMPORTED_MODULE_28__["ScopeTypeManagementComponent"],
        _client_group_management_client_group_management_component__WEBPACK_IMPORTED_MODULE_29__["ClientGroupManagementComponent"],
        _domain_type_management_domain_type_management_component__WEBPACK_IMPORTED_MODULE_30__["DomainTypeManagementComponent"],
        _scope_management_scope_management_component__WEBPACK_IMPORTED_MODULE_31__["ScopeManagementComponent"],
        _domain_management_domain_management_component__WEBPACK_IMPORTED_MODULE_32__["DomainManagementComponent"],
        _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_33__["RoleManagementComponent"],
        _role_to_permissions_role_to_permissions_component__WEBPACK_IMPORTED_MODULE_34__["RoleToPermissionsComponent"],
        _client_to_groups_client_to_groups_component__WEBPACK_IMPORTED_MODULE_35__["ClientToGroupsComponent"],
        _groups_to_roles_groups_to_roles_component__WEBPACK_IMPORTED_MODULE_36__["GroupsToRolesComponent"],
        _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_37__["PermissionManagementComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__["AuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"],
                    _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_9__["BottombarComponent"],
                    _action_mgmt_action_mgmt_component__WEBPACK_IMPORTED_MODULE_10__["ActionMgmtComponent"],
                    _application_mgmt_application_mgmt_component__WEBPACK_IMPORTED_MODULE_12__["ApplicationMgmtComponent"],
                    _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_13__["ResultsTableComponent"],
                    _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_14__["InfoBlockComponent"],
                    _table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_15__["TableMenuComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"],
                    _client_management_client_management_component__WEBPACK_IMPORTED_MODULE_26__["ClientManagementComponent"],
                    _resource_management_resource_management_component__WEBPACK_IMPORTED_MODULE_27__["ResourceManagementComponent"],
                    _scope_type_management_scope_type_management_component__WEBPACK_IMPORTED_MODULE_28__["ScopeTypeManagementComponent"],
                    _client_group_management_client_group_management_component__WEBPACK_IMPORTED_MODULE_29__["ClientGroupManagementComponent"],
                    _domain_type_management_domain_type_management_component__WEBPACK_IMPORTED_MODULE_30__["DomainTypeManagementComponent"],
                    _scope_management_scope_management_component__WEBPACK_IMPORTED_MODULE_31__["ScopeManagementComponent"],
                    _domain_management_domain_management_component__WEBPACK_IMPORTED_MODULE_32__["DomainManagementComponent"],
                    _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_33__["RoleManagementComponent"],
                    _role_to_permissions_role_to_permissions_component__WEBPACK_IMPORTED_MODULE_34__["RoleToPermissionsComponent"],
                    _client_to_groups_client_to_groups_component__WEBPACK_IMPORTED_MODULE_35__["ClientToGroupsComponent"],
                    _groups_to_roles_groups_to_roles_component__WEBPACK_IMPORTED_MODULE_36__["GroupsToRolesComponent"],
                    _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_37__["PermissionManagementComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                    angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__["AuthModule"].forRoot()
                ],
                providers: [
                    angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__["OidcConfigService"],
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                        useFactory: src_app_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["configureAuth"],
                        deps: [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_4__["OidcConfigService"]],
                        multi: true,
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/application-mgmt/application-mgmt.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/application-mgmt/application-mgmt.component.ts ***!
  \****************************************************************/
/*! exports provided: ApplicationMgmtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMgmtComponent", function() { return ApplicationMgmtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");















class ApplicationMgmtComponent extends src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__["BaseForm"] {
    constructor(callService, client) {
        super();
        // Fields on the form
        this.appIdentifier = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.shortIdentifier = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.appDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.viewableApps = new Array();
        this.displayedColumns = ['AppIdentifier', 'ShortIdentifier', 'Description'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        // console.log("Current Row Change Called." + key);
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableApps.forEach(element => {
                if (element.appIdentifier == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        this.appIdentifier.setValue(rr.appIdentifier);
                        this.shortIdentifier.setValue(rr.shortIdentifier);
                        this.appDescription.setValue(rr.appDescription);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateApplication() {
        console.debug("Update Application called..");
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["CreateApplicationRequest"]();
        car.description = this.appDescription.value;
        car.appIdentifier = this.appIdentifier.value;
        car.appShortIdentifier = this.shortIdentifier.value;
        this.managementClient.createApplication(car);
        this.managementClient.createApplication(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableApps();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update application.. check browser console for logs");
        });
    }
    deleteApplication() {
        console.debug("Delete Application called.");
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["DeleteApplicationRequest"]();
        car.appIdentifier = this.appIdentifier.value;
        this.managementClient.deleteApplication(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableApps();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete application.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.callService.loadViewableApps().then(values => {
            this.viewableApps = values;
            if (this.viewableApps != undefined && this.viewableApps.length > 0) {
                this.formResults.length = 0;
                this.viewableApps.forEach(app => {
                    let ci = new Array();
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](app.appIdentifier));
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](app.shortIdentifier));
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](app.appDescription));
                    let rr = new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["ResultRow"](app.appDescription, ci);
                    this.formResults.push(rr);
                });
                this.dataSource.data = this.formResults;
            }
        });
    }
    ngOnInit() {
        // Lets load the viewable apps..
        this.formTitle = "Manage applications";
        this.loadViewableApps();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
ApplicationMgmtComponent.ɵfac = function ApplicationMgmtComponent_Factory(t) { return new (t || ApplicationMgmtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
ApplicationMgmtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationMgmtComponent, selectors: [["app-application-mgmt"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 47, vars: 10, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["matInput", "", "placeholder", "unique app identifier", 3, "formControl"], ["matInput", "", "placeholder", "short identifier", 3, "formControl"], ["matInput", "", "placeholder", "describe the app..", 3, "formControl"], ["mat-icon-button", "", "title", "Save Application", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"]], template: function ApplicationMgmtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manage Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "AppIdentifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Short Identifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "App Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationMgmtComponent_Template_button_click_32_listener() { return ctx.updateApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationMgmtComponent_Template_button_click_37_listener() { return ctx.deleteApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Existing Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "app-results-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ApplicationMgmtComponent_Template_app_results_table_currentRowSelected_46_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.shortIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.appDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["ResultsTableComponent"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uLW1nbXQvYXBwbGljYXRpb24tbWdtdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDI0NSwgMjQ1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjIwLCAyNTUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1vdXRlci1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbm5lci1jZWxsLXRhYmxlXHJcbntcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXN0eWxlXHJcbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdvcmQtd3JhcDogbm9uZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationMgmtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-mgmt',
                templateUrl: './application-mgmt.component.html',
                styleUrls: ['./application-mgmt.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/auth-service.service.ts ***!
  \*****************************************/
/*! exports provided: configureAuth, AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureAuth", function() { return configureAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/__ivy_ngcc__/fesm2015/angular-auth-oidc-client.js");



function configureAuth(oidcConfigService) {
    return () => oidcConfigService.withConfig({
        stsServer: 'https://dev-869380-admin.okta.com/oauth2/default',
        authWellknownEndpoint: 'https://dev-869380-admin.okta.com/oauth2/default',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: '0oakw20w9Z9E55Be34x6',
        scope: 'openid profile email',
        responseType: 'id_token token',
        silentRenew: true,
        silentRenewUrl: `${window.location.origin}/silent-renew.html`,
        logLevel: angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug,
    });
}
class AuthServiceService {
    constructor() {
    }
}
AuthServiceService.ɵfac = function AuthServiceService_Factory(t) { return new (t || AuthServiceService)(); };
AuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthServiceService, factory: AuthServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/base-comps/commonforms.ts":
/*!*******************************************!*\
  !*** ./src/app/base-comps/commonforms.ts ***!
  \*******************************************/
/*! exports provided: BaseForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseForm", function() { return BaseForm; });
/* harmony import */ var src_app_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");

class BaseForm {
    constructor() {
        this.formTitle = "Base Title";
        /**
         * These are all pertaining to results component at the bottom of the form.
         */
        this.formResultsHeading = "Form Results";
        this.formResultsTitle = new Array();
        this.formResults = new Array();
        this.messages = new Array();
    }
    pushErrorMessage(msg) {
        let m = new src_app_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_0__["Message"](msg, true);
        this.messages.push(m);
    }
    pushInfoMessage(msg) {
        let m = new src_app_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_0__["Message"](msg, false);
        this.messages.push(m);
    }
    clearMessages() {
        this.messages.length = 0;
    }
    setErrorMessage(msg) {
        this.clearMessages();
        this.pushErrorMessage(msg);
    }
    setInfoMessage(msg) {
        this.clearMessages();
        this.pushInfoMessage(msg);
    }
}


/***/ }),

/***/ "./src/app/bottombar/bottombar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bottombar/bottombar.component.ts ***!
  \**************************************************/
/*! exports provided: BottombarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottombarComponent", function() { return BottombarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BottombarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BottombarComponent.ɵfac = function BottombarComponent_Factory(t) { return new (t || BottombarComponent)(); };
BottombarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottombarComponent, selectors: [["app-bottombar"]], decls: 3, vars: 0, consts: [[2, "vertical-align", "bottom", "text-align", "left"]], template: function BottombarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "AppSecurity Admin App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bottomBarText[_ngcontent-%COMP%]\r\n{\r\n    vertical-align: bottom;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm90dG9tYmFyL2JvdHRvbWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2JvdHRvbWJhci9ib3R0b21iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b21CYXJUZXh0XHJcbntcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottombarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bottombar',
                templateUrl: './bottombar.component.html',
                styleUrls: ['./bottombar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/client-group-management/client-group-management.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/client-group-management/client-group-management.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClientGroupManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientGroupManagementComponent", function() { return ClientGroupManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function ClientGroupManagementComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.appIdentifier, " ");
} }
class ClientGroupManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['GroupName', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.name == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        this.objectDescription.setValue(rr.description);
                        this.objectName.setValue(rr.name);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["CreateClientGroupRequest"]();
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        this.managementClient.createClientGroup(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    deleteObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["DeleteClientGroupRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteClientGroup(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete action.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableClientGroups().then(values => {
            values.forEach(element => {
                this.viewableObjects.push(element);
                let ci = new Array();
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.description));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.appIdentifier));
                let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultRow"](element.name, ci);
                this.formResults.push(rr);
            });
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Groups";
        this.loadViewableApps();
        this.loadViewableObjects();
    }
}
ClientGroupManagementComponent.ɵfac = function ClientGroupManagementComponent_Factory(t) { return new (t || ClientGroupManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
ClientGroupManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientGroupManagementComponent, selectors: [["app-client-group-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 12, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["matInput", "", "placeholder", "Unique Group Name", 3, "formControl"], ["matInput", "", "placeholder", "describe the Group..", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ClientGroupManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Resource Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ClientGroupManagementComponent_Template_mat_select_valueChange_29_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ClientGroupManagementComponent_mat_option_30_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientGroupManagementComponent_Template_button_click_35_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientGroupManagementComponent_Template_button_click_40_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-results-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ClientGroupManagementComponent_Template_app_results_table_currentRowSelected_49_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC1ncm91cC1tYW5hZ2VtZW50L2NsaWVudC1ncm91cC1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmZvcm0tbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcblxyXG4ucmVzdWx0cy10YWJsZS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLW9kZC1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjQ1LCAyNDUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1ldmVuLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMjAsIDI1NSk7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWhlYWRpbmctcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4uaW5mby1ibG9jay10YWJsZS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4udGFibGUtbWVudS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LW91dGVyLWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWlubmVyLWNlbGwtdGFibGVcclxue1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLWNlbGxcclxue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2Utc3R5bGVcclxue1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXJvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1saW5rLXJvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1saW5rLWNlbGxcclxue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd29yZC13cmFwOiBub25lO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientGroupManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-group-management',
                templateUrl: './client-group-management.component.html',
                styleUrls: ['./client-group-management.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/client-management/client-management.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/client-management/client-management.component.ts ***!
  \******************************************************************/
/*! exports provided: ClientManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientManagementComponent", function() { return ClientManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function ClientManagementComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.appIdentifier, " ");
} }
class ClientManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['Client Identifier', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.clientIdentifier == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        this.objectDescription.setValue(rr.description);
                        this.objectName.setValue(rr.clientIdentifier);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["CreateClientRequest"]();
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.clientIdentifier = this.objectName.value;
        this.managementClient.createClient(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    deleteObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["DeleteClientRequest"]();
        car.clientIdentifier = this.objectName.value;
        this.managementClient.deleteClient(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete record.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableClients().then(values => {
            values.forEach(element => {
                this.viewableObjects.push(element);
                let ci = new Array();
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.clientIdentifier));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.description));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.appIdentifier));
                let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultRow"](element.clientIdentifier, ci);
                this.formResults.push(rr);
            });
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Clients";
        this.loadViewableApps();
        this.loadViewableObjects();
    }
}
ClientManagementComponent.ɵfac = function ClientManagementComponent_Factory(t) { return new (t || ClientManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
ClientManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientManagementComponent, selectors: [["app-client-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 12, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["matInput", "", "placeholder", "Unique client id", 3, "formControl"], ["matInput", "", "placeholder", "describe the client", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ClientManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Client Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ClientManagementComponent_Template_mat_select_valueChange_29_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ClientManagementComponent_mat_option_30_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientManagementComponent_Template_button_click_35_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientManagementComponent_Template_button_click_40_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-results-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ClientManagementComponent_Template_app_results_table_currentRowSelected_49_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC1tYW5hZ2VtZW50L2NsaWVudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmZvcm0tbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcblxyXG4ucmVzdWx0cy10YWJsZS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLW9kZC1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjQ1LCAyNDUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1ldmVuLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMjAsIDI1NSk7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWhlYWRpbmctcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4uaW5mby1ibG9jay10YWJsZS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4udGFibGUtbWVudS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LW91dGVyLWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWlubmVyLWNlbGwtdGFibGVcclxue1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLWNlbGxcclxue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2Utc3R5bGVcclxue1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXJvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1saW5rLXJvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1saW5rLWNlbGxcclxue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd29yZC13cmFwOiBub25lO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-management',
                templateUrl: './client-management.component.html',
                styleUrls: ['./client-management.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/client-to-groups/client-to-groups.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/client-to-groups/client-to-groups.component.ts ***!
  \****************************************************************/
/*! exports provided: ClientToGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientToGroupsComponent", function() { return ClientToGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

















function ClientToGroupsComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r6.clientIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r6.clientIdentifier, " ");
} }
function ClientToGroupsComponent_mat_list_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function ClientToGroupsComponent_mat_list_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
} }
class ClientToGroupsComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_2__["BaseForm"] {
    constructor(callService, client) {
        super();
        // The text field that folks will put search item in.
        this.clientName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.clientIdentifier = null;
        // The viewable groups that can be assigned.
        this.assignableGroups = new Array();
        // The groups that have been assigned already.
        this.assignedGroups = new Array();
        this.searchedClients = new Array();
        this.callService = callService;
        this.managementClient = client;
    }
    swapVisible() {
        return (!(this.clientIdentifier == null || this.clientIdentifier == undefined));
    }
    searchClients() {
        let sc = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["SearchClientRequest"]();
        sc.clientIdentifier = this.clientName.value;
        this.searchedClients.length = 0;
        if (sc.clientIdentifier == null || sc.clientIdentifier.length <= 0) {
            return null;
        }
        this.managementClient.searchClients(sc).subscribe(element => {
            this.searchedClients.length = 0;
            if (element != null && element.clients != null) {
                element.clients.forEach(client => {
                    this.searchedClients.push(client);
                });
            }
        });
    }
    searchClient() {
        let sc = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["SearchClientRequest"]();
        sc.clientIdentifier = this.clientName.value;
        if (sc.clientIdentifier == null || sc.clientIdentifier.length <= 0) {
            this.pushErrorMessage("Provide a search string..");
            return;
        }
        this.clientIdentifier = null;
        this.managementClient.searchClients(sc).subscribe(element => {
            if (element != null && element.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["RequestStatusInformation"].standardSuccessCode) {
                if (element.clients != null && element.clients.length > 0) {
                    let appC = element.clients[0];
                    this.clientIdentifier = appC.clientIdentifier;
                    this.loadGroups();
                }
                else {
                    this.pushInfoMessage("No client found.");
                }
            }
            else {
                this.pushErrorMessage("Client with id: " + sc.clientIdentifier + " not found. - " + element.status.statusCode);
            }
        }, error => {
            this.pushErrorMessage(JSON.stringify(error));
        });
    }
    assignGroup(selected) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (selected != null) {
                let a = selected.selected;
                if (a != null) {
                    a.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        let aGM = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["CreateGroupMembershipRequest"]();
                        aGM.clientIdentifier = this.clientIdentifier;
                        aGM.clientGroupIdentifier = element.value;
                        yield this.managementClient.createGroupMembership(aGM).toPromise().then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (response.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["RequestStatusInformation"].standardSuccessCode) {
                                this.pushInfoMessage("Added membership: " + element.value);
                                this.loadGroups();
                            }
                            else {
                                this.pushErrorMessage("Error Adding membership: " + response.status.statusMessage);
                            }
                        }));
                    }));
                }
            }
        });
    }
    unAssignGroup(selected) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("UnAssign Group Called.");
            if (selected != null) {
                let a = selected.selected;
                if (a != null) {
                    a.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // console.log("UnAssigning: " + element.value);
                        let dGM = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["DeleteGroupMembershipRequest"]();
                        dGM.clientIdentifier = this.clientIdentifier;
                        dGM.clientGroupIdentifier = element.value;
                        yield this.managementClient.deleteGroupMembership(dGM).toPromise().then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (response.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["RequestStatusInformation"].standardSuccessCode) {
                                this.pushInfoMessage("Removed membership: " + element.value);
                                this.loadGroups();
                            }
                            else {
                                this.pushErrorMessage("Error removing membership: " + response.status.statusMessage);
                            }
                        }));
                    }));
                }
            }
        });
    }
    loadGroups() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let aGroups = new Array();
            let vGroups = new Array();
            let sgr = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["SearchClientGroupRequest"]();
            sgr.forClientIdentifier = this.clientIdentifier;
            yield this.managementClient.searchClientGroups(sgr).toPromise().then((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (element != null && element.clientGroups != null) {
                    element.clientGroups.forEach(group => {
                        // console.log("Assigned Group: " + JSON.stringify(group));
                        aGroups.push(group);
                    });
                }
            }));
            // Lets call the assignable groups.
            sgr.forClientIdentifier = null;
            yield this.managementClient.searchClientGroups(sgr).toPromise().then((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (element != null && element.clientGroups != null) {
                    element.clientGroups.forEach(group => {
                        // console.log("Assignable Group: " + JSON.stringify(group));
                        vGroups.push(group);
                    });
                }
            }));
            let fvGroups = new Array();
            // Okay now that both are available. lets remove common Groups.
            vGroups.forEach(vGrp => {
                let match = false;
                aGroups.forEach(aGrp => {
                    if (aGrp.name == vGrp.name) {
                        match = true;
                    }
                });
                if (match == false) {
                    // Push only if there is no match.
                    fvGroups.push(vGrp);
                }
            });
            // Okay so now move them to the respective arrays.
            this.assignedGroups.length = 0;
            this.assignableGroups.length = 0;
            fvGroups.forEach(element => {
                this.assignableGroups.push(element);
            });
            aGroups.forEach(element => {
                this.assignedGroups.push(element);
            });
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Client Group Memberships";
    }
}
ClientToGroupsComponent.ɵfac = function ClientToGroupsComponent_Factory(t) { return new (t || ClientToGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_5__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_6__["SecMgmtApiClientService"])); };
ClientToGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientToGroupsComponent, selectors: [["app-client-to-groups"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 66, vars: 15, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["type", "text", "matInput", "", "placeholder", "Type client unique Id", 3, "matAutocomplete", "formControl", "keypress"], ["firstAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Search client", 3, "click"], ["matSuffix", "", 2, "font-size", "24px"], [1, "form-main-square-back", 2, "width", "100%"], [1, "form-main-square-front", 2, "width", "100%"], [2, "align-content", "left", "text-align", "left"], [2, "width", "30%", "font-weight", "bold"], [2, "width", "10%"], [2, "width", "30%"], ["asgS", ""], [2, "align-items", "center", "text-align", "center", "width", "10%"], ["mat-icon-button", "", "title", "Assign Group", 3, "click"], ["mat-icon-button", "", "title", "Remove Group Membership", 3, "click"], ["assgS", ""], [3, "value"]], template: function ClientToGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Client Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function ClientToGroupsComponent_Template_input_keypress_18_listener() { return ctx.searchClients(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-autocomplete", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ClientToGroupsComponent_mat_option_22_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientToGroupsComponent_Template_button_click_24_listener() { return ctx.searchClient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Group Membership for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Assigned Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Available Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-selection-list", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ClientToGroupsComponent_mat_list_option_54_Template, 2, 2, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientToGroupsComponent_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](64); return ctx.assignGroup(_r4.selectedOptions); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " \u2190Assign ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientToGroupsComponent_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](53); return ctx.unAssignGroup(_r2.selectedOptions); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Remove\u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-selection-list", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, ClientToGroupsComponent_mat_list_option_65_Template, 2, 2, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r0)("formControl", ctx.clientName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.searchedClients);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.swapVisible() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.clientIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.assignedGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.assignableGroups);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_7__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatSelectionList"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC10by1ncm91cHMvY2xpZW50LXRvLWdyb3Vwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDI0NSwgMjQ1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjIwLCAyNTUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1vdXRlci1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbm5lci1jZWxsLXRhYmxlXHJcbntcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXN0eWxlXHJcbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdvcmQtd3JhcDogbm9uZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClientToGroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-client-to-groups',
                templateUrl: './client-to-groups.component.html',
                styleUrls: ['./client-to-groups.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_5__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_6__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/domain-management/domain-management.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/domain-management/domain-management.component.ts ***!
  \******************************************************************/
/*! exports provided: DomainManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainManagementComponent", function() { return DomainManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function DomainManagementComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
} }
function DomainManagementComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
} }
function DomainManagementComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.appIdentifier, " ");
} }
class DomainManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.viewableParents = new Array();
        this.viewableDomainTypes = new Array();
        this.displayedColumns = ['Name', 'Type', 'Parent', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.name == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        if (rr.parentDomain == null || rr.parentDomain.length <= 0)
                            this.parentDomain = "<ROOT>";
                        else
                            this.parentDomain = rr.parentDomain;
                        this.domainType = rr.domainType;
                        this.objectDescription.setValue(rr.description);
                        this.objectName.setValue(rr.name);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["CreateDomainRequest"]();
        car.name = this.objectName.value;
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        car.domainType = this.domainType;
        car.parentDomain = this.parentDomain;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        if (car.parentDomain == "<ROOT>")
            car.parentDomain = null;
        this.managementClient.createDomain(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    deleteObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["DeleteDomainRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteDomain(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete action.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    loadViewableDomainTypes() {
        this.viewableDomainTypes.length = 0;
        this.callService.loadViewableDomainTypes().then(values => {
            if (values != null) {
                values.forEach(element => {
                    this.viewableDomainTypes.push(element);
                });
            }
        });
    }
    loadViewableParents() {
        this.viewableParents.length = 0;
        let dom = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["Domain"]("<ROOT>", "<ROOT>");
        this.viewableParents.push(dom);
        this.callService.loadViewableDomains().then(values => {
            if (values != null) {
                values.forEach(element => {
                    this.viewableParents.push(element);
                });
            }
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableDomains().then(values => {
            if (values != null) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.domainType));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.parentDomain));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.description));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultRow"](element.name, ci);
                    this.formResults.push(rr);
                });
            }
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Domains";
        this.loadViewableApps();
        this.loadViewableDomainTypes();
        this.loadViewableParents();
        this.loadViewableObjects();
    }
}
DomainManagementComponent.ɵfac = function DomainManagementComponent_Factory(t) { return new (t || DomainManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
DomainManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomainManagementComponent, selectors: [["app-domain-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 60, vars: 16, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Unique Name", 3, "formControl"], ["matInput", "", "placeholder", "describe the Domain..", 3, "formControl"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function DomainManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DomainType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DomainManagementComponent_Template_mat_select_valueChange_18_listener($event) { return ctx.domainType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DomainManagementComponent_mat_option_19_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ParentDomain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DomainManagementComponent_Template_mat_select_valueChange_24_listener($event) { return ctx.parentDomain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DomainManagementComponent_mat_option_25_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Domain Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DomainManagementComponent_Template_mat_select_valueChange_40_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DomainManagementComponent_mat_option_41_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainManagementComponent_Template_button_click_45_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainManagementComponent_Template_button_click_50_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "app-results-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function DomainManagementComponent_Template_app_results_table_currentRowSelected_59_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.domainType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableDomainTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.parentDomain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableParents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2RvbWFpbi1tYW5hZ2VtZW50L2RvbWFpbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmZvcm0tbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcblxyXG4ucmVzdWx0cy10YWJsZS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLW9kZC1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjQ1LCAyNDUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1ldmVuLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMjAsIDI1NSk7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWhlYWRpbmctcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4uaW5mby1ibG9jay10YWJsZS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4udGFibGUtbWVudS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LW91dGVyLWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWlubmVyLWNlbGwtdGFibGVcclxue1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLWNlbGxcclxue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2Utc3R5bGVcclxue1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXJvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1saW5rLXJvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1saW5rLWNlbGxcclxue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd29yZC13cmFwOiBub25lO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-domain-management',
                templateUrl: './domain-management.component.html',
                styleUrls: ['./domain-management.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/domain-type-management/domain-type-management.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/domain-type-management/domain-type-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: DomainTypeManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainTypeManagementComponent", function() { return DomainTypeManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function DomainTypeManagementComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.appIdentifier, " ");
} }
class DomainTypeManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['DomainType', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.name == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        // this.objectDescription.setValue(rr.description);
                        this.objectName.setValue(rr.name);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__["CreateDomainTypeRequest"]();
        // car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        this.managementClient.createDomainType(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    deleteObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__["DeleteDomainTypeRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteDomainType(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete record.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableDomainTypes().then(values => {
            if (values != null) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.name));
                    // ci.push(new CellInfo(element.description));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultRow"](element.name, ci);
                    this.formResults.push(rr);
                });
            }
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Domain Types";
        this.loadViewableApps();
        this.loadViewableObjects();
    }
}
DomainTypeManagementComponent.ɵfac = function DomainTypeManagementComponent_Factory(t) { return new (t || DomainTypeManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
DomainTypeManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomainTypeManagementComponent, selectors: [["app-domain-type-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 45, vars: 11, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["matInput", "", "placeholder", "Unique Identifier", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function DomainTypeManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Domain Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DomainTypeManagementComponent_Template_mat_select_valueChange_24_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DomainTypeManagementComponent_mat_option_25_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainTypeManagementComponent_Template_button_click_30_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainTypeManagementComponent_Template_button_click_35_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-results-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function DomainTypeManagementComponent_Template_app_results_table_currentRowSelected_44_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2RvbWFpbi10eXBlLW1hbmFnZW1lbnQvZG9tYWluLXR5cGUtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDI0NSwgMjQ1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjIwLCAyNTUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1vdXRlci1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbm5lci1jZWxsLXRhYmxlXHJcbntcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXN0eWxlXHJcbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdvcmQtd3JhcDogbm9uZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainTypeManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-domain-type-management',
                templateUrl: './domain-type-management.component.html',
                styleUrls: ['./domain-type-management.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/groups-to-roles/groups-to-roles.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/groups-to-roles/groups-to-roles.component.ts ***!
  \**************************************************************/
/*! exports provided: GroupsToRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsToRolesComponent", function() { return GroupsToRolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function GroupsToRolesComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
} }
function GroupsToRolesComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
} }
function GroupsToRolesComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r7.scopeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.scopeName, " ");
} }
function GroupsToRolesComponent_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
} }
function GroupsToRolesComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r9.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9.appIdentifier, " ");
} }
class GroupsToRolesComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_2__["BaseForm"] {
    constructor(callService, client) {
        super();
        // The selected group name.
        this.groupName = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        // Selected role name
        this.roleName = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        // selected domain name
        this.domainName = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        // scope name - selected scope name
        this.scopeName = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        // the selected appidentifier
        this.appIdentifier = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        // The groups that are viewable by the person.
        this.viewableGroups = new Array();
        // The roles that are available to be assigned.
        this.viewableRoles = new Array();
        this.viewableObjects = new Array();
        this.viewableDomains = new Array();
        this.viewableApps = new Array();
        this.viewableScopes = new Array();
        this.displayedColumns = ['GroupName', 'RoleName', 'Domain', 'Scope', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            let dcgr = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["DeleteClientGroupRoleRequest"]();
            dcgr.key = this.currentKey;
            this.managementClient.deleteClientGroupRole(dcgr).subscribe(element => {
                if (element.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["RequestStatusInformation"].standardSuccessCode) {
                    this.pushInfoMessage(element.status.statusMessage);
                }
                else {
                    this.pushErrorMessage(element.status.statusMessage);
                }
                this.reloadObjects();
            }, error => {
                this.pushErrorMessage(JSON.stringify(error));
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["CreateClientGroupRoleRequest"]();
        car.groupName = this.groupName.value;
        car.domainName = this.domainName.value;
        car.scopeName = this.scopeName.value;
        car.roleName = this.roleName.value;
        car.appIdentifier = this.appIdentifier.value;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        this.managementClient.createClientGroupRole(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.reloadObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    reloadObjects() {
        this.loadViewableObjects();
    }
    loadViewableScopes() {
        this.viewableScopes.length = 0;
        this.callService.loadViewableScopes().then(values => {
            if (values != null) {
                values.forEach(element => {
                    this.viewableScopes.push(element);
                });
            }
        });
    }
    loadViewableGroups() {
        this.viewableGroups.length = 0;
        this.callService.loadViewableClientGroups().then(values => {
            values.forEach(element => {
                this.viewableGroups.push(element);
            });
        });
    }
    loadViewableDomains() {
        this.viewableDomains.length = 0;
        this.callService.loadViewableDomains().then(values => {
            if (values != null) {
                values.forEach(element => {
                    this.viewableDomains.push(element);
                });
            }
        });
    }
    loadViewableRoles() {
        this.viewableRoles.length = 0;
        this.callService.loadViewableClientRoles().then(values => {
            values.forEach(element => {
                this.viewableRoles.push(element);
            });
        });
    }
    receiveViewableOjects(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.viewableObjects.length = 0;
            this.formResults.length = 0;
            if (element != null && element.clientGroupRoles != null) {
                element.clientGroupRoles.forEach(cgr => {
                    this.viewableObjects.push(cgr);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.groupName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.roleName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.domainName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.scopeName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["ResultRow"](cgr.key, ci);
                    this.formResults.push(rr);
                });
                this.dataSource.data = this.formResults;
            }
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        if (this.groupName.value == null || this.groupName.value == undefined)
            return;
        let scgrr = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["SearchClientGroupRoleRequest"]();
        scgrr.groupName = this.groupName.value;
        scgrr.roleName = this.roleName.value;
        scgrr.domainName = this.domainName.value;
        scgrr.scopeName = this.scopeName.value;
        scgrr.appIdentifier = this.appIdentifier.value;
        if (scgrr.appIdentifier == "GLOBAL")
            scgrr.appIdentifier = "";
        this.managementClient.searchClientGroupRoles(scgrr).subscribe((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.receiveViewableOjects(element);
        }));
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_3__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    subscribeToChanges() {
        this.groupName.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
        this.roleName.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
        this.scopeName.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
        this.domainName.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
        this.appIdentifier.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
    }
    clearFormControls() {
        this.groupName.setValue("");
        this.roleName.setValue("");
        this.domainName.setValue("");
        this.scopeName.setValue("");
        this.appIdentifier.setValue("GLOBAL");
    }
    ngOnInit() {
        this.formTitle = "Manage Client Groups to Role Mappings.";
        this.loadViewableDomains();
        this.loadViewableGroups();
        this.loadViewableRoles();
        this.loadViewableScopes();
        this.loadViewableObjects();
        this.loadViewableApps();
        this.subscribeToChanges();
    }
}
GroupsToRolesComponent.ɵfac = function GroupsToRolesComponent_Factory(t) { return new (t || GroupsToRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_7__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_8__["SecMgmtApiClientService"])); };
GroupsToRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupsToRolesComponent, selectors: [["app-groups-to-roles"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 62, vars: 18, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Clear Form Values", 3, "click"], [2, "font-size", "16px"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function GroupsToRolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Client Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, GroupsToRolesComponent_mat_option_19_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Client Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, GroupsToRolesComponent_mat_option_25_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Scope");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, GroupsToRolesComponent_mat_option_31_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, GroupsToRolesComponent_mat_option_37_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, GroupsToRolesComponent_mat_option_43_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupsToRolesComponent_Template_button_click_47_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupsToRolesComponent_Template_button_click_52_listener() { return ctx.clearFormControls(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Clear Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "app-results-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("currentRowSelected", function GroupsToRolesComponent_Template_app_results_table_currentRowSelected_61_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.groupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.roleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.scopeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableScopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.domainName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_9__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy10by1yb2xlcy9ncm91cHMtdG8tcm9sZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZm9ybS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy10YWJsZS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAyNDUsIDI0NSk7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIyMCwgMjU1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7IFxyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10YWJsZS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi50YWJsZS1tZW51LW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtb3V0ZXItY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW5uZXItY2VsbC10YWJsZVxyXG57XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2UtY2VsbFxyXG57XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1zdHlsZVxyXG57XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2Utcm93XHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWxpbmstcm93XHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWxpbmstY2VsbFxyXG57XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3b3JkLXdyYXA6IG5vbmU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroupsToRolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-groups-to-roles',
                templateUrl: './groups-to-roles.component.html',
                styleUrls: ['./groups-to-roles.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_7__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_8__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/info-block/info-block.component.ts":
/*!****************************************************!*\
  !*** ./src/app/info-block/info-block.component.ts ***!
  \****************************************************/
/*! exports provided: InfoBlockComponent, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBlockComponent", function() { return InfoBlockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function InfoBlockComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](msg_r1.error ? ctx_r0.errorClass : ctx_r0.infoClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r1.msg);
} }
class InfoBlockComponent {
    constructor() { }
    ngOnInit() {
    }
    closeBox() {
        if (this.messages != undefined)
            this.messages.length = 0;
    }
    boxVisible() {
        if (this.messages == undefined || this.messages.length <= 0)
            return false;
        else
            return true;
    }
}
InfoBlockComponent.ɵfac = function InfoBlockComponent_Factory(t) { return new (t || InfoBlockComponent)(); };
InfoBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoBlockComponent, selectors: [["app-info-block"]], inputs: { informationBlockTitle: "informationBlockTitle", errorClass: "errorClass", infoClass: "infoClass", messages: "messages" }, decls: 14, vars: 5, consts: [[1, "info-block-table-main-square-back"], [1, "info-block-table-main-square-front"], [1, "info-block-title-row"], [2, "align-content", "left"], [2, "align-content", "right"], ["title", "Click to clear", 1, "info-block-button", 3, "click"], [4, "ngFor", "ngForOf"]], template: function InfoBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoBlockComponent_Template_button_click_9_listener() { return ctx.closeBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InfoBlockComponent_li_13_Template, 3, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.boxVisible() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.informationBlockTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2luZm8tYmxvY2svaW5mby1ibG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDI0NSwgMjQ1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjIwLCAyNTUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1vdXRlci1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbm5lci1jZWxsLXRhYmxlXHJcbntcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXN0eWxlXHJcbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdvcmQtd3JhcDogbm9uZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-block',
                templateUrl: './info-block.component.html',
                styleUrls: ['./info-block.component.css']
            }]
    }], function () { return []; }, { informationBlockTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], errorClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], infoClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class Message {
    constructor(msg, error = false) {
        this.msg = msg;
        this.error = error;
    }
}


/***/ }),

/***/ "./src/app/permission-management/permission-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/permission-management/permission-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: PermissionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function() { return PermissionManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function PermissionManagementComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.actionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.actionName, " ");
} }
function PermissionManagementComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
} }
function PermissionManagementComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.appIdentifier, " ");
} }
class PermissionManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.viewableActions = new Array();
        this.viewableResources = new Array();
        this.displayedColumns = ['Name', 'Action', 'Resource', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.name == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        this.actionName = rr.action;
                        this.resourceName = rr.resource;
                        this.objectDescription.setValue(rr.description);
                        this.objectName.setValue(rr.name);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["CreatePermissionRequest"]();
        car.name = this.objectName.value;
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        car.actionName = this.actionName;
        car.resourceName = this.resourceName;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        this.managementClient.createPermission(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    deleteObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["DeletePermissionRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deletePermission(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete action.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    loadViewableResources() {
        this.viewableResources.length = 0;
        this.callService.loadViewableResources().then(values => {
            values.forEach(element => {
                this.viewableResources.push(element);
            });
        });
    }
    loadViewableActions() {
        this.viewableActions.length = 0;
        this.callService.loadViewableActions().then(values => {
            values.forEach(element => {
                this.viewableActions.push(element);
            });
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewablePermissions().then(values => {
            values.forEach(element => {
                this.viewableObjects.push(element);
                let ci = new Array();
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.action));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.resource));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.description));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.appIdentifier));
                let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultRow"](element.name, ci);
                this.formResults.push(rr);
            });
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        console.log("NgInit Permissions");
        this.formTitle = "Manage Permissions";
        this.loadViewableApps();
        this.loadViewableActions();
        this.loadViewableResources();
        this.loadViewableObjects();
    }
}
PermissionManagementComponent.ɵfac = function PermissionManagementComponent_Factory(t) { return new (t || PermissionManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
PermissionManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermissionManagementComponent, selectors: [["app-permission-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 60, vars: 16, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Unique Name", 3, "formControl"], ["matInput", "", "placeholder", "describe the permission..", 3, "formControl"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function PermissionManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Associated Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PermissionManagementComponent_Template_mat_select_valueChange_18_listener($event) { return ctx.actionName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PermissionManagementComponent_mat_option_19_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Associated Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PermissionManagementComponent_Template_mat_select_valueChange_24_listener($event) { return ctx.resourceName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PermissionManagementComponent_mat_option_25_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Permission Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PermissionManagementComponent_Template_mat_select_valueChange_40_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PermissionManagementComponent_mat_option_41_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionManagementComponent_Template_button_click_45_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionManagementComponent_Template_button_click_50_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "app-results-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function PermissionManagementComponent_Template_app_results_table_currentRowSelected_59_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.actionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.resourceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableResources);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Blcm1pc3Npb24tbWFuYWdlbWVudC9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZm9ybS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy10YWJsZS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAyNDUsIDI0NSk7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIyMCwgMjU1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7IFxyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10YWJsZS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi50YWJsZS1tZW51LW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtb3V0ZXItY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW5uZXItY2VsbC10YWJsZVxyXG57XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2UtY2VsbFxyXG57XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1zdHlsZVxyXG57XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2Utcm93XHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWxpbmstcm93XHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWxpbmstY2VsbFxyXG57XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3b3JkLXdyYXA6IG5vbmU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permission-management',
                templateUrl: './permission-management.component.html',
                styleUrls: ['./permission-management.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/resource-management/resource-management.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/resource-management/resource-management.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResourceManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceManagementComponent", function() { return ResourceManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function ResourceManagementComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.appIdentifier, " ");
} }
class ResourceManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['ResourceName', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.name == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        this.objectDescription.setValue(rr.description);
                        this.objectName.setValue(rr.name);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["CreateResourceRequest"]();
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        this.managementClient.createResource(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    deleteObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["DeleteResourceRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteResource(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete action.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableResources().then(values => {
            values.forEach(element => {
                this.viewableObjects.push(element);
                let ci = new Array();
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.description));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.appIdentifier));
                let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultRow"](element.name, ci);
                this.formResults.push(rr);
            });
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Resources";
        this.loadViewableApps();
        this.loadViewableObjects();
    }
}
ResourceManagementComponent.ɵfac = function ResourceManagementComponent_Factory(t) { return new (t || ResourceManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
ResourceManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceManagementComponent, selectors: [["app-resource-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 12, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["matInput", "", "placeholder", "Unique Resource Name", 3, "formControl"], ["matInput", "", "placeholder", "describe the resource..", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ResourceManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Resource Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ResourceManagementComponent_Template_mat_select_valueChange_29_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ResourceManagementComponent_mat_option_30_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceManagementComponent_Template_button_click_35_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceManagementComponent_Template_button_click_40_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-results-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ResourceManagementComponent_Template_app_results_table_currentRowSelected_49_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlLW1hbmFnZW1lbnQvcmVzb3VyY2UtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDI0NSwgMjQ1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjIwLCAyNTUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1vdXRlci1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbm5lci1jZWxsLXRhYmxlXHJcbntcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXN0eWxlXHJcbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdvcmQtd3JhcDogbm9uZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource-management',
                templateUrl: './resource-management.component.html',
                styleUrls: ['./resource-management.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/results-table/results-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/results-table/results-table.component.ts ***!
  \**********************************************************/
/*! exports provided: ResultsTableComponent, CellInfo, ResultRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsTableComponent", function() { return ResultsTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellInfo", function() { return CellInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultRow", function() { return ResultRow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











function ResultsTableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResultsTableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsTableComponent_td_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const row_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deletePressedOnKey(row_r7.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r2.iconTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.iconName);
} }
function ResultsTableComponent_ng_container_10_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columnHeader_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](columnHeader_r10);
} }
function ResultsTableComponent_ng_container_10_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r15.rowdata[i_r11].data);
} }
function ResultsTableComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsTableComponent_ng_container_10_th_1_Template, 2, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultsTableComponent_ng_container_10_td_2_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const columnHeader_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", columnHeader_r10);
} }
function ResultsTableComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
function ResultsTableComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function ResultsTableComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class ResultsTableComponent {
    constructor() {
        this.iconName = "arrow_circle_up";
        this.iconTitle = "Select this Record";
        this.currentRowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allColumns = new Array();
    }
    deletePressedOnKey(key) {
        console.log("Delete pressed On Row: " + key);
        this.currentRowSelected.emit(key);
        console.log("Function Emittied: " + key);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.allColumns.length = 0;
        this.allColumns.push("selectColumn");
        this.displayedColumns.forEach(element => {
            this.allColumns.push(element);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
ResultsTableComponent.ɵfac = function ResultsTableComponent_Factory(t) { return new (t || ResultsTableComponent)(); };
ResultsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultsTableComponent, selectors: [["app-results-table"]], viewQuery: function ResultsTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { displayedColumns: "displayedColumns", dataSource: "dataSource", iconName: "iconName", iconTitle: "iconTitle" }, outputs: { currentRowSelected: "currentRowSelected" }, decls: 15, vars: 6, consts: [["matInput", "", "placeholder", "search...", 3, "keyup"], ["searchValue", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "selectColumn"], ["mat-header-cell", "", "mat-sort-header", "", "style", "font-weight: bolder;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 2, "font-weight", "bolder"], ["mat-cell", ""], ["mat-icon-button", "", 3, "title", "click"], [2, "font-size", "24px"], [3, "matColumnDef"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function ResultsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ResultsTableComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResultsTableComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResultsTableComponent_td_9_Template, 4, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResultsTableComponent_ng_container_10_Template, 3, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResultsTableComponent_tr_11_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResultsTableComponent_tr_12_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResultsTableComponent_tr_13_Template, 3, 1, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-paginator", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.allColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.allColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiLCJzcmMvYXBwL3Jlc3VsdHMtdGFibGUvcmVzdWx0cy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSxvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBR0E7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUdBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUdBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FDaE1BO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0cy10YWJsZS9yZXN1bHRzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmZvcm0tbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcblxyXG4ucmVzdWx0cy10YWJsZS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLW9kZC1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjQ1LCAyNDUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1ldmVuLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMjAsIDI1NSk7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWhlYWRpbmctcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4uaW5mby1ibG9jay10YWJsZS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4udGFibGUtbWVudS1tYWluLXNxdWFyZS1iYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LW91dGVyLWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWlubmVyLWNlbGwtdGFibGVcclxue1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLWNlbGxcclxue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2Utc3R5bGVcclxue1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXJvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1saW5rLXJvd1xyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1saW5rLWNlbGxcclxue1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgd29yZC13cmFwOiBub25lO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn0iLCJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MnO1xyXG5cclxuLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-results-table',
                templateUrl: './results-table.component.html',
                styleUrls: ['./results-table.component.css']
            }]
    }], function () { return []; }, { displayedColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentRowSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }] }); })();
class CellInfo {
    constructor(data, link = null, title = null) {
        this.data = data;
        this.link = link;
        this.title = title;
    }
}
class ResultRow {
    constructor(key, rowdata) {
        this.key = key;
        this.rowdata = rowdata;
    }
}


/***/ }),

/***/ "./src/app/role-management/role-management.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/role-management/role-management.component.ts ***!
  \**************************************************************/
/*! exports provided: RoleManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function() { return RoleManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function RoleManagementComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.appIdentifier, " ");
} }
class RoleManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['RoleName', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.name == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        this.objectDescription.setValue(rr.description);
                        this.objectName.setValue(rr.name);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["CreateClientRoleRequest"]();
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        this.managementClient.createClientRole(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    deleteObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["DeleteClientRoleRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteClientRole(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete action.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableClientRoles().then(values => {
            values.forEach(element => {
                this.viewableObjects.push(element);
                let ci = new Array();
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.description));
                ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.appIdentifier));
                let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultRow"](element.name, ci);
                this.formResults.push(rr);
            });
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Roles";
        this.loadViewableApps();
        this.loadViewableObjects();
    }
}
RoleManagementComponent.ɵfac = function RoleManagementComponent_Factory(t) { return new (t || RoleManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
RoleManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleManagementComponent, selectors: [["app-role-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 12, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["matInput", "", "placeholder", "Unique Role Name", 3, "formControl"], ["matInput", "", "placeholder", "describe the role..", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function RoleManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Resource Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RoleManagementComponent_Template_mat_select_valueChange_29_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RoleManagementComponent_mat_option_30_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleManagementComponent_Template_button_click_35_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleManagementComponent_Template_button_click_40_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-results-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function RoleManagementComponent_Template_app_results_table_currentRowSelected_49_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3JvbGUtbWFuYWdlbWVudC9yb2xlLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZm9ybS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy10YWJsZS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAyNDUsIDI0NSk7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIyMCwgMjU1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7IFxyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10YWJsZS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi50YWJsZS1tZW51LW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtb3V0ZXItY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW5uZXItY2VsbC10YWJsZVxyXG57XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2UtY2VsbFxyXG57XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1zdHlsZVxyXG57XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2Utcm93XHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWxpbmstcm93XHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWxpbmstY2VsbFxyXG57XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3b3JkLXdyYXA6IG5vbmU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-role-management',
                templateUrl: './role-management.component.html',
                styleUrls: ['./role-management.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/role-to-permissions/role-to-permissions.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/role-to-permissions/role-to-permissions.component.ts ***!
  \**********************************************************************/
/*! exports provided: RoleToPermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleToPermissionsComponent", function() { return RoleToPermissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

















function RoleToPermissionsComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
} }
function RoleToPermissionsComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
} }
function RoleToPermissionsComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6, " ");
} }
function RoleToPermissionsComponent_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r7.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.appIdentifier, " ");
} }
class RoleToPermissionsComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        // The selected group name.
        this.roleName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.permissionValues = ["allow", "deny"];
        // The roles that are available to be assigned.
        this.viewableRoles = new Array();
        // The groups that are viewable by the person.
        this.viewablePermissions = new Array();
        // THe objects that we are managing.
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['RoleName', 'Permission', 'Value', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            let dcgr = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["DeleteClientRolePermissionRequest"]();
            dcgr.key = this.currentKey;
            this.managementClient.deleteClientRolePermission(dcgr).subscribe(element => {
                if (element.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode) {
                    this.pushInfoMessage(element.status.statusMessage);
                }
                else {
                    this.pushErrorMessage(element.status.statusMessage);
                }
                this.reloadObjects();
            }, error => {
                this.pushErrorMessage(JSON.stringify(error));
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["CreateClientRolePermissionRequest"]();
        car.roleName = this.roleName.value;
        car.permissionName = this.permissionName;
        car.value = this.permissionValue;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        this.managementClient.createClientRolePermission(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.reloadObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    reloadObjects() {
        this.loadViewableObjects();
    }
    loadViewableRoles() {
        this.viewableRoles.length = 0;
        this.callService.loadViewableClientRoles().then(values => {
            values.forEach(element => {
                this.viewableRoles.push(element);
            });
        });
    }
    loadViewablePermissions() {
        this.viewablePermissions.length = 0;
        this.callService.loadViewablePermissions().then(values => {
            values.forEach(element => {
                this.viewablePermissions.push(element);
            });
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        if (this.roleName.value == null || this.roleName.value == undefined)
            return;
        let scgrr = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchClientRolePermissionRequest"]();
        scgrr.roleName = this.roleName.value;
        scgrr.permissionName = this.permissionName;
        scgrr.appIdentifier = this.appIdentifier;
        this.managementClient.searchClientRolePermissions(scgrr).subscribe(element => {
            if (element != null && element.clientRolePermissions != null) {
                element.clientRolePermissions.forEach(cgr => {
                    this.viewableObjects.push(cgr);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](cgr.roleName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](cgr.permissionName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](cgr.value));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](cgr.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultRow"](cgr.key, ci);
                    this.formResults.push(rr);
                });
            }
            this.dataSource.data = this.formResults;
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Role to Permission Mappings.";
        this.loadViewableRoles();
        this.loadViewablePermissions();
        this.loadViewableObjects();
        this.loadViewableApps();
        this.roleName.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
    }
}
RoleToPermissionsComponent.ɵfac = function RoleToPermissionsComponent_Factory(t) { return new (t || RoleToPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
RoleToPermissionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleToPermissionsComponent, selectors: [["app-role-to-permissions"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 18, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value", "valueChange"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], [3, "iconTitle", "iconName", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function RoleToPermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Role Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RoleToPermissionsComponent_mat_option_19_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RoleToPermissionsComponent_Template_mat_select_valueChange_24_listener($event) { return ctx.permissionName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RoleToPermissionsComponent_mat_option_25_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Allow/Deny?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RoleToPermissionsComponent_Template_mat_select_valueChange_30_listener($event) { return ctx.permissionValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RoleToPermissionsComponent_mat_option_31_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RoleToPermissionsComponent_Template_mat_select_valueChange_36_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RoleToPermissionsComponent_mat_option_37_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleToPermissionsComponent_Template_button_click_40_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-results-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function RoleToPermissionsComponent_Template_app_results_table_currentRowSelected_49_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.roleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.permissionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewablePermissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.permissionValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.permissionValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconTitle", "Delete this Record")("iconName", "delete")("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3JvbGUtdG8tcGVybWlzc2lvbnMvcm9sZS10by1wZXJtaXNzaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDI0NSwgMjQ1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjIwLCAyNTUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1vdXRlci1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbm5lci1jZWxsLXRhYmxlXHJcbntcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXN0eWxlXHJcbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdvcmQtd3JhcDogbm9uZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleToPermissionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-role-to-permissions',
                templateUrl: './role-to-permissions.component.html',
                styleUrls: ['./role-to-permissions.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/scope-management/scope-management.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/scope-management/scope-management.component.ts ***!
  \****************************************************************/
/*! exports provided: ScopeManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeManagementComponent", function() { return ScopeManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function ScopeManagementComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
} }
function ScopeManagementComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.appIdentifier, " ");
} }
class ScopeManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.objectValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.viewableScopeTypes = new Array();
        this.displayedColumns = ['Name', 'Type', 'Value', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.scopeName == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        this.scopeType = rr.scopeType;
                        this.objectDescription.setValue(rr.description);
                        this.objectName.setValue(rr.scopeName);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["CreateScopeRequest"]();
        car.name = this.objectName.value;
        car.description = this.objectDescription.value;
        car.value = this.objectValue.value;
        car.scopeType = this.scopeType;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        this.managementClient.createScope(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    deleteObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["DeleteScopeRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteScope(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete record.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_4__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    loadViewableScopeTypes() {
        this.viewableScopeTypes.length = 0;
        this.callService.loadViewableScopeTypes().then(values => {
            if (values != null) {
                values.forEach(element => {
                    this.viewableScopeTypes.push(element);
                });
            }
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableScopes().then(values => {
            if (values != null) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.scopeName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.scopeType));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.scopeValue));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.description));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultRow"](element.scopeName, ci);
                    this.formResults.push(rr);
                });
            }
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Scopes";
        this.loadViewableApps();
        this.loadViewableScopeTypes();
        this.loadViewableObjects();
    }
}
ScopeManagementComponent.ɵfac = function ScopeManagementComponent_Factory(t) { return new (t || ScopeManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
ScopeManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScopeManagementComponent, selectors: [["app-scope-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 15, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Unique Name", 3, "formControl"], ["matInput", "", "placeholder", "set the values..", 3, "formControl"], ["matInput", "", "placeholder", "describe the scope..", 3, "formControl"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ScopeManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ScopeType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ScopeManagementComponent_Template_mat_select_valueChange_18_listener($event) { return ctx.scopeType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ScopeManagementComponent_mat_option_19_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Scope Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ScopeManagementComponent_Template_mat_select_valueChange_39_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ScopeManagementComponent_mat_option_40_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScopeManagementComponent_Template_button_click_44_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScopeManagementComponent_Template_button_click_49_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "app-results-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ScopeManagementComponent_Template_app_results_table_currentRowSelected_58_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.scopeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableScopeTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Njb3BlLW1hbmFnZW1lbnQvc2NvcGUtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDI0NSwgMjQ1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjIwLCAyNTUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1vdXRlci1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbm5lci1jZWxsLXRhYmxlXHJcbntcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXN0eWxlXHJcbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdvcmQtd3JhcDogbm9uZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScopeManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scope-management',
                templateUrl: './scope-management.component.html',
                styleUrls: ['./scope-management.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/scope-type-management/scope-type-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/scope-type-management/scope-type-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScopeTypeManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeTypeManagementComponent", function() { return ScopeTypeManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/domainmodel/common-calls.service */ "./src/assets/domainmodel/common-calls.service.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function ScopeTypeManagementComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.appIdentifier, " ");
} }
class ScopeTypeManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['ScopeType', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.name == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        // this.objectDescription.setValue(rr.description);
                        this.objectName.setValue(rr.name);
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__["CreateScopeTypeRequest"]();
        // car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        this.managementClient.createScopeType(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    deleteObject() {
        let car = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__["DeleteScopeTypeRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteScopeType(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
            this.loadViewableObjects();
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to delete record.. check browser console for logs");
        });
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_5__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            values.forEach(element => {
                this.viewableApps.push(element);
            });
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableScopeTypes().then(values => {
            if (values != null) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.name));
                    // ci.push(new CellInfo(element.description));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultRow"](element.name, ci);
                    this.formResults.push(rr);
                });
            }
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Scope Types";
        this.loadViewableApps();
        this.loadViewableObjects();
    }
}
ScopeTypeManagementComponent.ɵfac = function ScopeTypeManagementComponent_Factory(t) { return new (t || ScopeTypeManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"])); };
ScopeTypeManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScopeTypeManagementComponent, selectors: [["app-scope-type-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 45, vars: 11, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "form-main-square-back"], [1, "form-main-square-front"], ["matInput", "", "placeholder", "Unique Identifier", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "click"], [3, "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ScopeTypeManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Scope Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ScopeTypeManagementComponent_Template_mat_select_valueChange_24_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ScopeTypeManagementComponent_mat_option_25_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScopeTypeManagementComponent_Template_button_click_30_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScopeTypeManagementComponent_Template_button_click_35_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-results-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ScopeTypeManagementComponent_Template_app_results_table_currentRowSelected_44_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_8__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Njb3BlLXR5cGUtbWFuYWdlbWVudC9zY29wZS10eXBlLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZm9ybS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy10YWJsZS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAyNDUsIDI0NSk7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIyMCwgMjU1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7IFxyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10YWJsZS1tYWluLXNxdWFyZS1mcm9udFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi50YWJsZS1tZW51LW1haW4tc3F1YXJlLWJhY2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtb3V0ZXItY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW5uZXItY2VsbC10YWJsZVxyXG57XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2UtY2VsbFxyXG57XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1zdHlsZVxyXG57XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtaW1hZ2Utcm93XHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWxpbmstcm93XHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWxpbmstY2VsbFxyXG57XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3b3JkLXdyYXA6IG5vbmU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScopeTypeManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scope-type-management',
                templateUrl: './scope-type-management.component.html',
                styleUrls: ['./scope-type-management.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_common_calls_service__WEBPACK_IMPORTED_MODULE_6__["CommonCallsService"] }, { type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_7__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 2, vars: 0, template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "spinner works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/table-menu/table-menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/table-menu/table-menu.component.ts ***!
  \****************************************************/
/*! exports provided: TableMenuComponent, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableMenuComponent", function() { return TableMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





function TableMenuComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r1.itemLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r1.itemTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.imageLink == undefined || item_r1.imageLink == null ? "hiddenItem" : "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.itemName);
} }
class TableMenuComponent {
    constructor() { }
    ngOnInit() {
    }
    getWidth(index) {
        return "20%";
    }
    anyItems() {
        if (this.menuItems == undefined || this.menuItems.length <= 0)
            return false;
        else
            return true;
    }
}
TableMenuComponent.ɵfac = function TableMenuComponent_Factory(t) { return new (t || TableMenuComponent)(); };
TableMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableMenuComponent, selectors: [["app-table-menu"]], inputs: { menuItems: "menuItems" }, decls: 9, vars: 7, consts: [[1, "table-menu-main-square-back"], [1, "table-menu-main-square-front"], ["class", "table-menu-outer-cell", 4, "ngFor", "ngForOf"], [1, "table-menu-outer-cell"], ["routerLinkActive", "active", 3, "routerLink", "title"], ["aria-hidden", "false"], [2, "font-size", "smaller"]], template: function TableMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing to display, no menu items.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableMenuComponent_td_8_Template, 8, 7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.anyItems() ? "hiddenItem" : "visibleItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.anyItems() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".form-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.form-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    padding: 20px;\r\n    border: 1px;\r\n    border-spacing: 1px;\r\n}\r\n\r\n.results-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(158, 245, 245);\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: rgb(219, 220, 255);\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.info-block-table-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border-width: 1px;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    border-style: solid;\r\n    table-layout: auto;\r\n}\r\n\r\n.info-block-table-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    border-width: 0px;\r\n    border-style: solid;\r\n    border-spacing: 2px;\r\n    table-layout: auto;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-main-square-back[_ngcontent-%COMP%]\r\n{\r\n    background-color: blue;\r\n    border: 0;\r\n    border-spacing: 0;\r\n    padding: 0px;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-main-square-front[_ngcontent-%COMP%]\r\n{\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    table-layout: auto;\r\n}\r\n\r\n.table-menu-outer-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\r\n\r\n.table-menu-inner-cell-table[_ngcontent-%COMP%]\r\n{\r\n    border: 0px;\r\n}\r\n\r\n.table-menu-image-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    width: 20%;\r\n}\r\n\r\n.table-menu-image-style[_ngcontent-%COMP%]\r\n{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.table-menu-image-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-row[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.table-menu-link-cell[_ngcontent-%COMP%]\r\n{\r\n    align-content: center;\r\n    word-wrap: none;\r\n    width: 20%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7O0lBRUksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLW1lbnUvdGFibGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5cclxuLnJlc3VsdHMtdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDI0NSwgMjQ1KTtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjIwLCAyNTUpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmluZm8tYmxvY2stdGFibGUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRhYmxlLW1haW4tc3F1YXJlLWZyb250XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtYmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbWFpbi1zcXVhcmUtZnJvbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1vdXRlci1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbm5lci1jZWxsLXRhYmxlXHJcbntcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWltYWdlLXN0eWxlXHJcbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1pbWFnZS1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1yb3dcclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtbGluay1jZWxsXHJcbntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdvcmQtd3JhcDogbm9uZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-menu',
                templateUrl: './table-menu.component.html',
                styleUrls: ['./table-menu.component.css']
            }]
    }], function () { return []; }, { menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class MenuItem {
    constructor(itemName, itemTitle, itemLink) {
        this.itemName = itemName;
        this.itemLink = itemLink;
        this.itemTitle = itemTitle;
    }
}


/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/table-menu/table-menu.component */ "./src/app/table-menu/table-menu.component.ts");
/* harmony import */ var src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var src_assets_domainmodel_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/domainmodel/context-mgmt-api-client.service */ "./src/assets/domainmodel/context-mgmt-api-client.service.ts");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/__ivy_ngcc__/fesm2015/angular-auth-oidc-client.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









class TopbarComponent extends src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__["BaseForm"] {
    constructor(client, oidcSecurityService) {
        super();
        this.loggedInUser = "NotloggedIn";
        this.allMenuItems = new Array();
        this.apiClient = client;
        this.oidcService = oidcSecurityService;
    }
    login() {
        this.oidcService.authorize();
    }
    logout() {
        this.oidcService.logoff();
    }
    setUpMenuBasedOnPermission(secApiRequest, resources, mi) {
        secApiRequest.resources = resources;
        let observable = this.apiClient.hasPermissions(secApiRequest);
        observable.subscribe((value) => {
            let count = 0;
            if (value.results != null) {
                value.results.forEach(element => {
                    if (element == true) {
                        this.allMenuItems.push(mi[count]);
                        count++;
                    }
                });
            }
        });
    }
    figureOutMenutItems() {
        this.allMenuItems.length = 0; // Clear the menu Items.
        let secApiRequest = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityAPIRequest"]();
        secApiRequest.action = src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityActions"].READ;
        let resources = new Array();
        let menuItems = new Array();
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Actions", "Manage Actions", "/actionManagement");
            item.imageLink = "rowing";
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].ACTION);
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Applications", "Manage Applications", "/appManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].APPLICATION);
            item.imageLink = "apps";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Clients", "Manage clients", "/clientManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].CLIENT);
            item.imageLink = "person";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Permissions", "Manage Permissions", "/permissionManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].PERMISSION);
            item.imageLink = "lock";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Resources", "Manage Resources", "/resourceManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].RESOURCE);
            item.imageLink = "grain";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Domains", "Manage resource actions", "/domainManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].RESOURCE_DOMAIN);
            item.imageLink = "public";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Groups", "Manage Client Groups", "/clientGroupManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].CLIENT_GROUP);
            item.imageLink = "group";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Group-Roles", "Manage Role that Groups have", "/groupRoleManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].GROUP_ROLE_MEMBERSHIP);
            item.imageLink = "recent_actors";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Roles", "Manage Roles", "/clientRoleManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].CLIENT_ROLE);
            item.imageLink = "school";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Role to Permission", "Manage Roles to Permission Mapping", "/rolePermissionManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].PERMISSION_ROLE_MEMBERSHIP);
            item.imageLink = "psychology";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Scope-Types", "Manage types of scopes in the system.", "/scopetypeManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].SCOPE_TYPE);
            item.imageLink = "panorama_vertical";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Scope", "Manage scopes in the system.", "/scopeManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].ROLE_SCOPE);
            item.imageLink = "panorama_horizontal";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Memberships", "Manage Group Memberships", "/clientToGroups");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].CLIENT_GROUP_MEMBERSHIP);
            item.imageLink = "group_add";
            menuItems.push(item);
        }
        {
            let item = new src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]("Domain-Types", "Manage Resource Domain Types", "/domaintypeManagement");
            resources.push(src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityResources"].RESOURCE_DOMAIN_TYPE);
            item.imageLink = "grain";
            menuItems.push(item);
        }
        this.setUpMenuBasedOnPermission(secApiRequest, resources, menuItems);
    }
    figureOutLoggedInUser() {
        let req = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["SecurityAPIRequest"]();
        this.apiClient.getSecurityContext(req).subscribe(element => {
            if (element.status.statusCode = src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_1__["RequestStatusInformation"].standardSuccessCode) {
                this.loggedInUser = element.clientSecurityContext.client.clientIdentifier;
                if (this.loggedInUser == null || this.loggedInUser.length <= 0)
                    this.loggedInUser = "Unknown.";
            }
            else {
                this.loggedInUser = "Error fetching user info.";
            }
        }, pipe => {
            this.loggedInUser = "Error!";
        });
    }
    ngOnInit() {
        this.figureOutLoggedInUser();
        this.figureOutMenutItems();
        this.oidcService.checkAuth().subscribe((auth) => console.log('is authenticated', auth));
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_assets_domainmodel_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ContextMgmtApiClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_5__["OidcSecurityService"])); };
TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 16, vars: 2, consts: [["id", "applogo"], [2, "width", "100%"], [2, "text-align", "left"], [2, "font-size", "50px"], [2, "text-align", "right", "font-size", "smaller"], [3, "click"], [3, "menuItems"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "admin_panel_settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Application Security Management Console");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_13_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-table-menu", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Logged user: ", ctx.loggedInUser, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuItems", ctx.allMenuItems);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], src_app_table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_2__["TableMenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGJhci90b3BiYXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topbar',
                templateUrl: './topbar.component.html',
                styleUrls: ['./topbar.component.css']
            }]
    }], function () { return [{ type: src_assets_domainmodel_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ContextMgmtApiClientService"] }, { type: angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_5__["OidcSecurityService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/domainmodel/appsecuritymodel.ts":
/*!****************************************************!*\
  !*** ./src/assets/domainmodel/appsecuritymodel.ts ***!
  \****************************************************/
/*! exports provided: ClientSecurityContext, Domain, Scope, ClientGroupRole, ClientRolePermission, RequestStatusInformation, PagingInformation, SecurityActions, SecurityResources, Scopes, Domains, Application, AppClient, Action, Resource, ClientGroup, ClientRole, DomainType, ScopeType, Permission, BaseRequest, BaseResponse, SecurityAPIRequest, SecurityAPIResponse, CreateApplicationRequest, CreateApplicationResponse, DeleteApplicationRequest, DeleteApplicationResponse, CreateClientRequest, SearchClientRequest, SearchClientResponse, CreateClientResponse, DeleteClientRequest, DeleteClientResponse, CreateClientGroupRequest, CreateClientGroupResponse, CreateGroupMembershipRequest, CreateGroupMembershipResponse, DeleteClientGroupRequest, DeleteClientGroupResponse, DeleteGroupMembershipRequest, DeleteGroupMembershipResponse, CreateActionRequest, CreateActionResponse, CreatePermissionRequest, CreatePermissionResponse, CreateResourceRequest, CreateResourceResponse, SearchResourceRequest, SearchResourceResponse, DeleteResourceRequest, DeleteResourceResponse, DeleteActionRequest, DeleteActionResponse, DeletePermissionRequest, DeletePermissionResponse, SearchPermissionRequest, SearchPermissionResponse, CreateClientGroupRoleRequest, CreateClientGroupRoleResponse, CreateClientRolePermissionRequest, CreateClientRolePermissionResponse, DeleteClientRolePermissionRequest, DeleteClientRolePermissionResponse, CreateClientRoleRequest, CreateClientRoleResponse, DeleteClientGroupRoleRequest, DeleteClientGroupRoleResponse, DeleteClientRoleRequest, DeleteClientRoleResponse, CreateDomainRequest, CreateDomainResponse, CreateDomainTypeRequest, CreateDomainTypeResponse, CreateScopeRequest, CreateScopeResponse, DeleteScopeRequest, DeleteScopeResponse, SearchScopeRequest, SearchScopeResponse, CreateScopeTypeRequest, CreateScopeTypeResponse, DeleteDomainRequest, DeleteDomainResponse, DeleteDomainTypeRequest, DeleteDomainTypeResponse, DeleteScopeTypeRequest, DeleteScopeTypeResponse, SearchApplicationsRequest, SearchApplicationsResponse, SearchActionRequest, SearchActionResponse, SearchClientGroupRoleRequest, SearchClientGroupRoleResponse, SearchClientGroupRequest, SearchClientGroupResponse, SearchClientRoleRequest, SearchClientRoleResponse, SearchClientRolePermissionRequest, SearchClientRolePermissionResponse, SearchDomainTypeRequest, SearchDomainTypeResponse, SearchDomainRequest, SearchDomainResponse, SearchScopeTypeRequest, SearchScopeTypeResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSecurityContext", function() { return ClientSecurityContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientGroupRole", function() { return ClientGroupRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRolePermission", function() { return ClientRolePermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestStatusInformation", function() { return RequestStatusInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingInformation", function() { return PagingInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityActions", function() { return SecurityActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityResources", function() { return SecurityResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scopes", function() { return Scopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domains", function() { return Domains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppClient", function() { return AppClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientGroup", function() { return ClientGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRole", function() { return ClientRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainType", function() { return DomainType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeType", function() { return ScopeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequest", function() { return BaseRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponse", function() { return BaseResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityAPIRequest", function() { return SecurityAPIRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityAPIResponse", function() { return SecurityAPIResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateApplicationRequest", function() { return CreateApplicationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateApplicationResponse", function() { return CreateApplicationResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteApplicationRequest", function() { return DeleteApplicationRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteApplicationResponse", function() { return DeleteApplicationResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientRequest", function() { return CreateClientRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientRequest", function() { return SearchClientRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientResponse", function() { return SearchClientResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientResponse", function() { return CreateClientResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientRequest", function() { return DeleteClientRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientResponse", function() { return DeleteClientResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientGroupRequest", function() { return CreateClientGroupRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientGroupResponse", function() { return CreateClientGroupResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupMembershipRequest", function() { return CreateGroupMembershipRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupMembershipResponse", function() { return CreateGroupMembershipResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientGroupRequest", function() { return DeleteClientGroupRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientGroupResponse", function() { return DeleteClientGroupResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteGroupMembershipRequest", function() { return DeleteGroupMembershipRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteGroupMembershipResponse", function() { return DeleteGroupMembershipResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateActionRequest", function() { return CreateActionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateActionResponse", function() { return CreateActionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePermissionRequest", function() { return CreatePermissionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePermissionResponse", function() { return CreatePermissionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateResourceRequest", function() { return CreateResourceRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateResourceResponse", function() { return CreateResourceResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResourceRequest", function() { return SearchResourceRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResourceResponse", function() { return SearchResourceResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteResourceRequest", function() { return DeleteResourceRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteResourceResponse", function() { return DeleteResourceResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteActionRequest", function() { return DeleteActionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteActionResponse", function() { return DeleteActionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePermissionRequest", function() { return DeletePermissionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePermissionResponse", function() { return DeletePermissionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPermissionRequest", function() { return SearchPermissionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPermissionResponse", function() { return SearchPermissionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientGroupRoleRequest", function() { return CreateClientGroupRoleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientGroupRoleResponse", function() { return CreateClientGroupRoleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientRolePermissionRequest", function() { return CreateClientRolePermissionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientRolePermissionResponse", function() { return CreateClientRolePermissionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientRolePermissionRequest", function() { return DeleteClientRolePermissionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientRolePermissionResponse", function() { return DeleteClientRolePermissionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientRoleRequest", function() { return CreateClientRoleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientRoleResponse", function() { return CreateClientRoleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientGroupRoleRequest", function() { return DeleteClientGroupRoleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientGroupRoleResponse", function() { return DeleteClientGroupRoleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientRoleRequest", function() { return DeleteClientRoleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteClientRoleResponse", function() { return DeleteClientRoleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDomainRequest", function() { return CreateDomainRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDomainResponse", function() { return CreateDomainResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDomainTypeRequest", function() { return CreateDomainTypeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDomainTypeResponse", function() { return CreateDomainTypeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateScopeRequest", function() { return CreateScopeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateScopeResponse", function() { return CreateScopeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteScopeRequest", function() { return DeleteScopeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteScopeResponse", function() { return DeleteScopeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchScopeRequest", function() { return SearchScopeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchScopeResponse", function() { return SearchScopeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateScopeTypeRequest", function() { return CreateScopeTypeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateScopeTypeResponse", function() { return CreateScopeTypeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDomainRequest", function() { return DeleteDomainRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDomainResponse", function() { return DeleteDomainResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDomainTypeRequest", function() { return DeleteDomainTypeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDomainTypeResponse", function() { return DeleteDomainTypeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteScopeTypeRequest", function() { return DeleteScopeTypeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteScopeTypeResponse", function() { return DeleteScopeTypeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchApplicationsRequest", function() { return SearchApplicationsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchApplicationsResponse", function() { return SearchApplicationsResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchActionRequest", function() { return SearchActionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchActionResponse", function() { return SearchActionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientGroupRoleRequest", function() { return SearchClientGroupRoleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientGroupRoleResponse", function() { return SearchClientGroupRoleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientGroupRequest", function() { return SearchClientGroupRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientGroupResponse", function() { return SearchClientGroupResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientRoleRequest", function() { return SearchClientRoleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientRoleResponse", function() { return SearchClientRoleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientRolePermissionRequest", function() { return SearchClientRolePermissionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientRolePermissionResponse", function() { return SearchClientRolePermissionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDomainTypeRequest", function() { return SearchDomainTypeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDomainTypeResponse", function() { return SearchDomainTypeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDomainRequest", function() { return SearchDomainRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDomainResponse", function() { return SearchDomainResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchScopeTypeRequest", function() { return SearchScopeTypeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchScopeTypeResponse", function() { return SearchScopeTypeResponse; });
/**
 * All the data structures..
 */
class ClientSecurityContext {
}
class Domain {
    constructor(domainName, domainType) {
        this.name = domainName;
        this.domainType = domainType;
    }
}
class Scope {
    constructor(scopeName, scopeType, scopeValue) {
        this.scopeName = scopeName;
        this.scopeType = scopeType;
        this.scopeValue = scopeValue;
    }
}
class ClientGroupRole {
}
class ClientRolePermission {
}
class RequestStatusInformation {
}
RequestStatusInformation.standardSuccessCode = "Succeeded";
RequestStatusInformation.standardFailureCode = "Failed";
RequestStatusInformation.standardSuccessMessage = "Operation Succeeded";
RequestStatusInformation.standardFailureMessage = "Operation Failed";
class PagingInformation {
}
/**
 * The different security actions
 */
class SecurityActions {
}
// CRUD actions..
SecurityActions.CREATE = "CREATE";
SecurityActions.READ = "READ";
SecurityActions.UPDATE = "UPDATE";
SecurityActions.DELETE = "DELETE";
SecurityActions.ASSUME = "ASSUME";
/**
 * This class contains definitions of items which are the security resources defined by this application.
 * They mostly represent rows of data in different tables of the security model. An application which deals
 * with a different model will probably have this different.
 * @author Saurin Magiawala
 *
 */
class SecurityResources {
}
SecurityResources.APPLICATION = "APPLICATION";
SecurityResources.ACTION = "ACTION";
SecurityResources.RESOURCE = "RESOURCE";
SecurityResources.CLIENT = "CLIENT";
SecurityResources.PERMISSION = "PERMISSION";
SecurityResources.CLIENT_ROLE = "CLIENT_ROLE";
SecurityResources.CLIENT_GROUP = "CLIENT_GROUP";
SecurityResources.CLIENT_GROUP_MEMBERSHIP = "CLIENT_GROUP_MEMBERSHIP";
SecurityResources.RESOURCE_DOMAIN = "RESOURCE_DOMAIN";
SecurityResources.RESOURCE_DOMAIN_TYPE = "RESOURCE_DOMAIN_TYPE";
SecurityResources.SCOPE_TYPE = "SCOPE_TYPE";
SecurityResources.ROLE_SCOPE = "ROLE_SCOPE";
SecurityResources.GROUP_ROLE_MEMBERSHIP = "GROUP_ROLE_MEMBERSHIP";
SecurityResources.PERMISSION_ROLE_MEMBERSHIP = "PERMISSION_ROLE_MEMBERSHIP";
/**
 * These are different scopes that can come in play
 */
class Scopes {
    static clientGroupMembershipScope(value) {
        return new Scope(this.CLIENT_GROUP_MEMBERSHIP_SCOPE, this.VALUES_SCOPE_TYPE, value);
    }
}
// Client Scopes
Scopes.CLIENT_SCOPE_ALL = "ALL"; // Indicates ALL records  
Scopes.CLIENT_SCOPE_OWN = "OWN"; // Own Records
Scopes.CLIENT_GROUP_MEMBERSHIP_SCOPE = "CLIENT_GROUP_MEMBERSHIP";
Scopes.VALUES_SCOPE_TYPE = "VALUES";
/**
 * Different domains..
 */
class Domains {
    static appDomain(domainName) {
        return new Domain(domainName, this.APP_DOMAIN_TYPE);
    }
}
Domains.APP_DOMAIN_TYPE = "AppDomain";
// 334064633910
// 061000052
// ksmkhushi
// V537750J
class Application {
}
class AppClient {
}
class Action {
}
class Resource {
}
class ClientGroup {
}
class ClientRole {
}
class DomainType {
}
class ScopeType {
}
class Permission {
}
/**
 * The request and response classes start from here..
 */
class BaseRequest {
}
class BaseResponse {
}
class SecurityAPIRequest extends BaseRequest {
}
class SecurityAPIResponse extends BaseResponse {
}
class CreateApplicationRequest extends BaseRequest {
}
class CreateApplicationResponse extends BaseResponse {
}
class DeleteApplicationRequest extends BaseRequest {
}
class DeleteApplicationResponse extends BaseResponse {
}
class CreateClientRequest extends BaseRequest {
}
class SearchClientRequest extends CreateClientRequest {
}
class SearchClientResponse extends BaseResponse {
}
class CreateClientResponse extends BaseResponse {
}
class DeleteClientRequest extends BaseRequest {
}
class DeleteClientResponse extends BaseResponse {
}
class CreateClientGroupRequest extends BaseRequest {
}
class CreateClientGroupResponse extends BaseResponse {
}
class CreateGroupMembershipRequest extends BaseRequest {
}
class CreateGroupMembershipResponse extends BaseResponse {
}
class DeleteClientGroupRequest extends BaseRequest {
}
class DeleteClientGroupResponse extends BaseResponse {
}
class DeleteGroupMembershipRequest extends BaseRequest {
}
class DeleteGroupMembershipResponse extends BaseResponse {
}
class CreateActionRequest extends BaseRequest {
}
class CreateActionResponse extends BaseResponse {
}
class CreatePermissionRequest extends BaseRequest {
}
class CreatePermissionResponse extends BaseResponse {
}
class CreateResourceRequest extends BaseRequest {
}
class CreateResourceResponse extends BaseResponse {
}
class SearchResourceRequest extends CreateResourceRequest {
}
class SearchResourceResponse extends BaseResponse {
}
class DeleteResourceRequest extends BaseRequest {
}
class DeleteResourceResponse extends BaseResponse {
}
class DeleteActionRequest extends BaseRequest {
}
class DeleteActionResponse extends BaseResponse {
}
class DeletePermissionRequest extends BaseRequest {
}
class DeletePermissionResponse extends BaseResponse {
}
class SearchPermissionRequest extends CreatePermissionRequest {
}
class SearchPermissionResponse extends BaseResponse {
}
class CreateClientGroupRoleRequest extends BaseRequest {
}
class CreateClientGroupRoleResponse extends BaseResponse {
}
class CreateClientRolePermissionRequest extends BaseRequest {
}
class CreateClientRolePermissionResponse extends BaseResponse {
}
class DeleteClientRolePermissionRequest extends BaseRequest {
}
class DeleteClientRolePermissionResponse extends BaseResponse {
}
class CreateClientRoleRequest extends BaseRequest {
}
class CreateClientRoleResponse extends BaseResponse {
}
class DeleteClientGroupRoleRequest extends BaseRequest {
}
class DeleteClientGroupRoleResponse extends BaseResponse {
}
class DeleteClientRoleRequest extends BaseRequest {
}
class DeleteClientRoleResponse extends BaseResponse {
}
class CreateDomainRequest extends BaseRequest {
}
class CreateDomainResponse extends BaseResponse {
}
class CreateDomainTypeRequest extends BaseRequest {
}
class CreateDomainTypeResponse extends BaseResponse {
}
class CreateScopeRequest extends BaseRequest {
}
class CreateScopeResponse extends BaseResponse {
}
class DeleteScopeRequest extends BaseRequest {
}
class DeleteScopeResponse extends BaseResponse {
}
class SearchScopeRequest extends CreateScopeRequest {
}
class SearchScopeResponse extends BaseResponse {
}
class CreateScopeTypeRequest extends BaseRequest {
}
class CreateScopeTypeResponse extends BaseResponse {
}
class DeleteDomainRequest extends BaseRequest {
}
class DeleteDomainResponse extends BaseResponse {
}
class DeleteDomainTypeRequest extends BaseRequest {
}
class DeleteDomainTypeResponse extends BaseResponse {
}
class DeleteScopeTypeRequest extends BaseRequest {
}
class DeleteScopeTypeResponse extends BaseResponse {
}
class SearchApplicationsRequest extends BaseRequest {
}
class SearchApplicationsResponse extends BaseResponse {
}
class SearchActionRequest extends CreateActionRequest {
}
class SearchActionResponse extends BaseResponse {
}
class SearchClientGroupRoleRequest extends CreateClientGroupRoleRequest {
}
class SearchClientGroupRoleResponse extends BaseResponse {
}
class SearchClientGroupRequest extends CreateClientGroupRequest {
}
class SearchClientGroupResponse extends BaseResponse {
}
class SearchClientRoleRequest extends CreateClientRoleRequest {
}
class SearchClientRoleResponse extends BaseResponse {
}
class SearchClientRolePermissionRequest extends CreateClientRolePermissionRequest {
}
class SearchClientRolePermissionResponse extends BaseResponse {
}
class SearchDomainTypeRequest extends CreateDomainTypeRequest {
}
class SearchDomainTypeResponse extends BaseResponse {
}
class SearchDomainRequest extends CreateDomainRequest {
}
class SearchDomainResponse extends BaseResponse {
}
class SearchScopeTypeRequest extends CreateScopeTypeRequest {
}
class SearchScopeTypeResponse extends BaseResponse {
}


/***/ }),

/***/ "./src/assets/domainmodel/common-calls.service.ts":
/*!********************************************************!*\
  !*** ./src/assets/domainmodel/common-calls.service.ts ***!
  \********************************************************/
/*! exports provided: CommonCallsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonCallsService", function() { return CommonCallsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/domainmodel/appsecuritymodel */ "./src/assets/domainmodel/appsecuritymodel.ts");
/* harmony import */ var src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/domainmodel/sec-mgmt-api-client.service */ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts");
/* harmony import */ var src_assets_domainmodel_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/domainmodel/context-mgmt-api-client.service */ "./src/assets/domainmodel/context-mgmt-api-client.service.ts");






class CommonCallsService {
    constructor(mgmtClient, conClient) {
        this.contextClient = conClient;
        this.managementClient = mgmtClient;
    }
    loadViewableApps() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchApplicationsRequest"];
            let sarr = yield this.managementClient.searchApplications(sar).toPromise();
            return sarr.applications;
        });
    }
    loadViewableActions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchActionRequest"]();
            let sarr = yield this.managementClient.searchActions(sar).toPromise();
            return sarr.actions;
        });
    }
    loadViewableResources() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchResourceRequest"]();
            let sarr = yield this.managementClient.searchResources(sar).toPromise();
            return sarr.resources;
        });
    }
    loadViewableClients() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchClientRequest"]();
            let sarr = yield this.managementClient.searchClients(sar).toPromise();
            return sarr.clients;
        });
    }
    loadViewableClientGroups() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchClientGroupRequest"]();
            let sarr = yield this.managementClient.searchClientGroups(sar).toPromise();
            return sarr.clientGroups;
        });
    }
    loadViewableClientRoles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchClientRoleRequest"]();
            let sarr = yield this.managementClient.searchClientRoles(sar).toPromise();
            return sarr.clientRoles;
        });
    }
    loadViewableDomainTypes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchDomainTypeRequest"]();
            let sarr = yield this.managementClient.searchDomainTypes(sar).toPromise();
            return sarr.domainTypes;
        });
    }
    loadViewableScopeTypes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchScopeTypeRequest"]();
            let sarr = yield this.managementClient.searchScopeTypes(sar).toPromise();
            return sarr.scopeTypes;
        });
    }
    loadViewablePermissions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchPermissionRequest"]();
            let sarr = yield this.managementClient.searchPermissions(sar).toPromise();
            return sarr.permissions;
        });
    }
    loadViewableDomains() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchDomainRequest"]();
            let sarr = yield this.managementClient.searchDomains(sar).toPromise();
            return sarr.domains;
        });
    }
    loadViewableScopes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new src_assets_domainmodel_appsecuritymodel__WEBPACK_IMPORTED_MODULE_2__["SearchScopeRequest"]();
            let sarr = yield this.managementClient.searchScope(sar).toPromise();
            return sarr.scopes;
        });
    }
}
CommonCallsService.ɵfac = function CommonCallsService_Factory(t) { return new (t || CommonCallsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_3__["SecMgmtApiClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_assets_domainmodel_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ContextMgmtApiClientService"])); };
CommonCallsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonCallsService, factory: CommonCallsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommonCallsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_assets_domainmodel_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_3__["SecMgmtApiClientService"] }, { type: src_assets_domainmodel_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ContextMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/domainmodel/context-mgmt-api-client.service.ts":
/*!*******************************************************************!*\
  !*** ./src/assets/domainmodel/context-mgmt-api-client.service.ts ***!
  \*******************************************************************/
/*! exports provided: ContextMgmtApiClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMgmtApiClientService", function() { return ContextMgmtApiClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/__ivy_ngcc__/fesm2015/angular-auth-oidc-client.js");






class ContextMgmtApiClientService {
    constructor(httpClient, oidcSecService) {
        this.authenticated = false;
        this.apibaseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].contextApiBaseUrl;
        this.http = httpClient;
        this.username = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].username;
        this.password = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].password;
        this.oidcSecurityService = oidcSecService;
        if (this.oidcSecurityService != null) {
            this.oidcSecurityService.isAuthenticated$.subscribe(auth => {
                this.authenticated = auth;
            });
        }
    }
    /**
     * Returns the http options to be appended.
     */
    getHttpHeaders() {
        let httpHeaders;
        if (this.authenticated) {
            let token = this.oidcSecurityService.getToken();
            if (token != null) {
                httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + token });
                return httpHeaders;
            }
            else {
                console.error("The token service says it is is authenticated, yet, no token!.");
            }
        }
        if (this.username != null && this.username.length > 0) {
            let authorizationHeader = "Basic " + btoa(this.username + ":" + this.password);
            // console.log("Authorization header: " + authorizationHeader);
            httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": authorizationHeader });
        }
        return httpHeaders;
    }
    getHttpOptions() {
        let body;
        let response;
        var httpOptions = {
            headers: this.getHttpHeaders(),
            observe: body,
            responseType: response
        };
        return httpOptions;
    }
    hasGroup(request) {
        let methodUrl = this.apibaseurl + "/hasGroup";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    hasRole(request) {
        let methodUrl = this.apibaseurl + "/hasRole";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    hasPermission(request) {
        let methodUrl = this.apibaseurl + "/hasPermission";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    hasPermissions(request) {
        let methodUrl = this.apibaseurl + "/hasPermissions";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    hasPermissionInScope(request) {
        let methodUrl = this.apibaseurl + "/hasPermissionInScope";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    hasPermissionReturnGroups(request) {
        let methodUrl = this.apibaseurl + "/hasPermissionReturnGroups";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    hasPermissionReturnRoles(request) {
        let methodUrl = this.apibaseurl + "/hasPermissionReturnRoles";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    hasPermissionReturnScopes(request) {
        let methodUrl = this.apibaseurl + "/hasPermissionReturnScopes";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    getSecurityContext(request) {
        let methodUrl = this.apibaseurl + "/getSecurityContext";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
}
ContextMgmtApiClientService.ɵfac = function ContextMgmtApiClientService_Factory(t) { return new (t || ContextMgmtApiClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__["OidcSecurityService"])); };
ContextMgmtApiClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContextMgmtApiClientService, factory: ContextMgmtApiClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMgmtApiClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__["OidcSecurityService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/domainmodel/sec-mgmt-api-client.service.ts":
/*!***************************************************************!*\
  !*** ./src/assets/domainmodel/sec-mgmt-api-client.service.ts ***!
  \***************************************************************/
/*! exports provided: SecMgmtApiClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecMgmtApiClientService", function() { return SecMgmtApiClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





class SecMgmtApiClientService {
    constructor(httpClient) {
        this.apibaseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].managementApiBaseUrl;
        this.http = httpClient;
        this.username = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].username;
        this.password = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].password;
    }
    /**
     * Returns the http options to be appended.
     */
    getHttpHeaders() {
        let httpHeaders;
        if (this.username != null && this.username.length > 0) {
            let authorizationHeader = "Basic " + btoa(this.username + ":" + this.password);
            // console.log("Authorization header: " + authorizationHeader);
            httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": authorizationHeader });
        }
        return httpHeaders;
    }
    getHttpOptions() {
        let body;
        let response;
        var httpOptions = {
            headers: this.getHttpHeaders(),
            observe: body,
            responseType: response
        };
        return httpOptions;
    }
    deleteClient(request) {
        let methodUrl = this.apibaseurl + "/deleteClient";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createClient(request) {
        let methodUrl = this.apibaseurl + "/createClient";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createApplication(request) {
        let methodUrl = this.apibaseurl + "/createApplication";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteApplication(request) {
        let methodUrl = this.apibaseurl + "/deleteApplication";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createAction(request) {
        let methodUrl = this.apibaseurl + "/createAction";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteAction(request) {
        let methodUrl = this.apibaseurl + "/deleteAction";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createResource(request) {
        let methodUrl = this.apibaseurl + "/createResource";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteResource(request) {
        let methodUrl = this.apibaseurl + "/deleteResource";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createPermission(request) {
        let methodUrl = this.apibaseurl + "/createPermission";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deletePermission(request) {
        let methodUrl = this.apibaseurl + "/deletePermission";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createClientGroup(request) {
        let methodUrl = this.apibaseurl + "/createClientGroup";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteClientGroup(request) {
        let methodUrl = this.apibaseurl + "/deleteClientGroup";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createClientRole(request) {
        let methodUrl = this.apibaseurl + "/createClientRole";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteClientRole(request) {
        let methodUrl = this.apibaseurl + "/deleteClientRole";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createClientRolePermission(request) {
        let methodUrl = this.apibaseurl + "/createClientRolePermission";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteClientRolePermission(request) {
        let methodUrl = this.apibaseurl + "/deleteClientRolePermission";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchClientRolePermissions(request) {
        let methodUrl = this.apibaseurl + "/searchClientRolePermissions";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createDomain(request) {
        let methodUrl = this.apibaseurl + "/createDomain";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteDomain(request) {
        let methodUrl = this.apibaseurl + "/deleteDomain";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createDomainType(request) {
        let methodUrl = this.apibaseurl + "/createDomainType";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteDomainType(request) {
        let methodUrl = this.apibaseurl + "/deleteDomainType";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createScopeType(request) {
        let methodUrl = this.apibaseurl + "/createScopeType";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteScopeType(request) {
        let methodUrl = this.apibaseurl + "/deleteScopeType";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createScope(request) {
        let methodUrl = this.apibaseurl + "/createScope";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteScope(request) {
        let methodUrl = this.apibaseurl + "/deleteScope";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createGroupMembership(request) {
        let methodUrl = this.apibaseurl + "/createGroupMembership";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteGroupMembership(request) {
        let methodUrl = this.apibaseurl + "/deleteGroupMembership";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchApplications(request) {
        let methodUrl = this.apibaseurl + "/searchApplications";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchActions(request) {
        let methodUrl = this.apibaseurl + "/searchActions";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchResources(request) {
        let methodUrl = this.apibaseurl + "/searchResources";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchClients(request) {
        let methodUrl = this.apibaseurl + "/searchClients";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchClientRoles(request) {
        let methodUrl = this.apibaseurl + "/searchClientRoles";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchClientGroups(request) {
        let methodUrl = this.apibaseurl + "/searchClientGroups";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchScopeTypes(request) {
        let methodUrl = this.apibaseurl + "/searchScopeTypes";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchDomainTypes(request) {
        let methodUrl = this.apibaseurl + "/searchDomainTypes";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchPermissions(request) {
        let methodUrl = this.apibaseurl + "/searchPermissions";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchDomains(request) {
        let methodUrl = this.apibaseurl + "/searchDomains";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchScope(request) {
        let methodUrl = this.apibaseurl + "/searchScopes";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchClientGroupRoles(request) {
        let methodUrl = this.apibaseurl + "/searchClientGroupRoles";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createClientGroupRole(request) {
        let methodUrl = this.apibaseurl + "/createClientGroupRole";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteClientGroupRole(request) {
        let methodUrl = this.apibaseurl + "/deleteClientGroupRole";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
}
SecMgmtApiClientService.ɵfac = function SecMgmtApiClientService_Factory(t) { return new (t || SecMgmtApiClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SecMgmtApiClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SecMgmtApiClientService, factory: SecMgmtApiClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecMgmtApiClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, AuthConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthConfig", function() { return AuthConfig; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    contextApiBaseUrl: "http://localhost:8080/v1/contextapi",
    managementApiBaseUrl: "http://localhost:8080/v1/managementapi",
    // username: "saurinya@gmail.com",
    username: "",
    password: "admin"
};
class AuthConfig {
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\works\source-code\github\V2Solve\appsecurity\securitymodel\angularsrc\adminapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map