(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts":
/*!*******************************************************************************************************************************************!*\
  !*** C:/works/source-code/github/V2Solve/app-security/modules/app-security-client/type-script/src/client-service/common-calls.service.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: CommonCallsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonCallsService", function() { return CommonCallsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _client_commmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service.ts");






class CommonCallsService {
    constructor(mgmtClient, conClient) {
        this.contextClient = conClient;
        this.managementClient = mgmtClient;
    }
    loadViewableApps() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchApplicationsRequest"];
            let sarr = yield this.managementClient.searchApplications(sar).toPromise();
            return sarr.applications;
        });
    }
    loadViewableActions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchActionRequest"]();
            let sarr = yield this.managementClient.searchActions(sar).toPromise();
            return sarr.actions;
        });
    }
    loadViewableBasicAuthClients() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchBasicAuthClientRequest"]();
            let sarr = yield this.managementClient.searchBasicAuthClients(sar).toPromise();
            return sarr.basicAuthClients;
        });
    }
    loadViewableResources() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchResourceRequest"]();
            let sarr = yield this.managementClient.searchResources(sar).toPromise();
            return sarr.resources;
        });
    }
    loadViewableClients() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchClientRequest"]();
            let sarr = yield this.managementClient.searchClients(sar).toPromise();
            return sarr.clients;
        });
    }
    loadViewableClientGroups() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchClientGroupRequest"]();
            let sarr = yield this.managementClient.searchClientGroups(sar).toPromise();
            return sarr.clientGroups;
        });
    }
    loadViewableClientRoles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchClientRoleRequest"]();
            let sarr = yield this.managementClient.searchClientRoles(sar).toPromise();
            return sarr.clientRoles;
        });
    }
    loadViewableDomainTypes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchDomainTypeRequest"]();
            let sarr = yield this.managementClient.searchDomainTypes(sar).toPromise();
            return sarr.domainTypes;
        });
    }
    loadViewableScopeTypes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchScopeTypeRequest"]();
            let sarr = yield this.managementClient.searchScopeTypes(sar).toPromise();
            return sarr.scopeTypes;
        });
    }
    loadViewablePermissions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchPermissionRequest"]();
            let sarr = yield this.managementClient.searchPermissions(sar).toPromise();
            return sarr.permissions;
        });
    }
    loadViewableDomains() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchDomainRequest"]();
            let sarr = yield this.managementClient.searchDomains(sar).toPromise();
            return sarr.domains;
        });
    }
    loadViewableScopes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SearchScopeRequest"]();
            let sarr = yield this.managementClient.searchScope(sar).toPromise();
            return sarr.scopes;
        });
    }
    hasPermission(action, resource) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sar = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SecurityAPIRequest"];
            sar.action = action;
            sar.resource = resource;
            let sarr = yield this.contextClient.hasPermission(sar).toPromise();
            return sarr.result;
        });
    }
}
CommonCallsService.ɵfac = function CommonCallsService_Factory(t) { return new (t || CommonCallsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_3__["SecMgmtApiClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ContextMgmtApiClientService"])); };
CommonCallsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonCallsService, factory: CommonCallsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommonCallsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_3__["SecMgmtApiClientService"] }, { type: _context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ContextMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "../../../modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service.ts":
/*!******************************************************************************************************************************************************!*\
  !*** C:/works/source-code/github/V2Solve/app-security/modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: ContextMgmtApiClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMgmtApiClientService", function() { return ContextMgmtApiClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _client_commmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");


 // Communication Objects.


class ContextMgmtApiClientService {
    constructor(httpClient, apibaseurl, username, password) {
        this.apibaseurl = apibaseurl;
        this.http = httpClient;
        this.username = username;
        this.password = password;
    }
    /**
     * Returns the http options to be appended.
     */
    getHttpHeaders() {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        if (this.username != null && this.username.length > 0) {
            let authorizationHeader = "Basic " + btoa(this.username + ":" + this.password);
            // console.log("Authorization header: " + authorizationHeader);
            httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": authorizationHeader });
        }
        return httpHeaders;
    }
    getHttpOptions() {
        var httpOptions = {
            headers: this.getHttpHeaders(),
        };
        return httpOptions;
    }
    hasGroup(request) {
        let methodUrl = this.apibaseurl + "/hasGroup";
        let obj = this.http.post(methodUrl, request, this.getHttpOptions());
        return obj;
    }
    hasRole(request) {
        let methodUrl = this.apibaseurl + "/hasRole";
        let obj = this.http.post(methodUrl, request, this.getHttpOptions());
        return obj;
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
    hasPermissionAs(action, resource) {
        let secApiR = new _client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SecurityAPIRequest"]();
        secApiR.action = action;
        secApiR.resource = resource;
        let permission = false;
        return this.hasPermission(secApiR);
    }
}
ContextMgmtApiClientService.ɵfac = function ContextMgmtApiClientService_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
ContextMgmtApiClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContextMgmtApiClientService, factory: ContextMgmtApiClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMgmtApiClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined }, { type: undefined }, { type: undefined }]; }, null); })();


/***/ }),

/***/ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts":
/*!**************************************************************************************************************************************************!*\
  !*** C:/works/source-code/github/V2Solve/app-security/modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: SecMgmtApiClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecMgmtApiClientService", function() { return SecMgmtApiClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class SecMgmtApiClientService {
    constructor(httpClient, apibaseurl, username, password) {
        this.apibaseurl = apibaseurl;
        this.http = httpClient;
        this.username = username;
        this.password = password;
    }
    /**
     * Returns the http options to be appended.
     */
    getHttpHeaders() {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        if (this.username != null && this.username.length > 0) {
            let authorizationHeader = "Basic " + btoa(this.username + ":" + this.password);
            // console.log("Authorization header: " + authorizationHeader);
            httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": authorizationHeader });
        }
        return httpHeaders;
    }
    getHttpOptions() {
        let body = "body";
        let response = "json";
        var httpOptions = {
            headers: this.getHttpHeaders()
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
    searchChangeLogs(request) {
        let methodUrl = this.apibaseurl + "/searchChangeLogs";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createBasicAuthClient(request) {
        let methodUrl = this.apibaseurl + "/createBasicAuthClient";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    deleteBasicAuthClient(request) {
        let methodUrl = this.apibaseurl + "/deleteBasicAuthClient";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    searchBasicAuthClients(request) {
        let methodUrl = this.apibaseurl + "/searchBasicAuthClients";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
    createTrustedBasicAuthApp(request) {
        let methodUrl = this.apibaseurl + "/createTrustedBasicApp";
        return this.http.post(methodUrl, request, this.getHttpOptions());
    }
}
SecMgmtApiClientService.ɵfac = function SecMgmtApiClientService_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
SecMgmtApiClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SecMgmtApiClientService, factory: SecMgmtApiClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecMgmtApiClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined }, { type: undefined }, { type: undefined }]; }, null); })();


/***/ }),

/***/ "../../../modules/app-security-client/type-script/src/client/commmodel.ts":
/*!************************************************************************************************************************!*\
  !*** C:/works/source-code/github/V2Solve/app-security/modules/app-security-client/type-script/src/client/commmodel.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PagingInformation, SortInfo, SortingInformation, RequestStatusInformation, ClientSecurityContext, BaseRequest, BaseResponse, SecurityAPIRequest, GetSecurityContextRequest, CreateBasicAuthClientRequest, CreateBasicAuthClientResponse, DeleteBasicAuthClientResponse, DeleteBasicAuthClientRequest, SearchBasicAuthClientRequest, SearchBasicAuthClientResponse, SearchChangeLogRequest, SearchChangeLogResponse, SecurityAPIResponse, GetSecurityContextResponse, CreateApplicationRequest, CreateApplicationResponse, DeleteApplicationRequest, DeleteApplicationResponse, CreateClientRequest, SearchClientRequest, SearchClientResponse, CreateClientResponse, DeleteClientRequest, DeleteClientResponse, CreateClientGroupRequest, CreateClientGroupResponse, CreateGroupMembershipRequest, CreateGroupMembershipResponse, DeleteClientGroupRequest, DeleteClientGroupResponse, DeleteGroupMembershipRequest, DeleteGroupMembershipResponse, CreateActionRequest, CreateActionResponse, CreatePermissionRequest, CreatePermissionResponse, CreateResourceRequest, CreateResourceResponse, SearchResourceRequest, SearchResourceResponse, DeleteResourceRequest, DeleteResourceResponse, DeleteActionRequest, DeleteActionResponse, DeletePermissionRequest, DeletePermissionResponse, SearchPermissionRequest, SearchPermissionResponse, CreateClientGroupRoleRequest, CreateClientGroupRoleResponse, CreateClientRolePermissionRequest, CreateClientRolePermissionResponse, DeleteClientRolePermissionRequest, DeleteClientRolePermissionResponse, CreateClientRoleRequest, CreateClientRoleResponse, DeleteClientGroupRoleRequest, DeleteClientGroupRoleResponse, DeleteClientRoleRequest, DeleteClientRoleResponse, CreateDomainRequest, CreateDomainResponse, CreateDomainTypeRequest, CreateDomainTypeResponse, CreateScopeRequest, CreateScopeResponse, DeleteScopeRequest, DeleteScopeResponse, SearchScopeRequest, SearchScopeResponse, CreateScopeTypeRequest, CreateScopeTypeResponse, DeleteDomainRequest, DeleteDomainResponse, DeleteDomainTypeRequest, DeleteDomainTypeResponse, DeleteScopeTypeRequest, DeleteScopeTypeResponse, SearchApplicationsRequest, SearchApplicationsResponse, SearchActionRequest, SearchActionResponse, SearchClientGroupRoleRequest, SearchClientGroupRoleResponse, SearchClientGroupRequest, SearchClientGroupResponse, SearchClientRoleRequest, SearchClientRoleResponse, SearchClientRolePermissionRequest, SearchClientRolePermissionResponse, SearchDomainTypeRequest, SearchDomainTypeResponse, SearchDomainRequest, SearchDomainResponse, SearchScopeTypeRequest, SearchScopeTypeResponse, CreateTrustedBasicAppRequest, CreateTrustedBasicAppResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingInformation", function() { return PagingInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortInfo", function() { return SortInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingInformation", function() { return SortingInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestStatusInformation", function() { return RequestStatusInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSecurityContext", function() { return ClientSecurityContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequest", function() { return BaseRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponse", function() { return BaseResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityAPIRequest", function() { return SecurityAPIRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSecurityContextRequest", function() { return GetSecurityContextRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBasicAuthClientRequest", function() { return CreateBasicAuthClientRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBasicAuthClientResponse", function() { return CreateBasicAuthClientResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBasicAuthClientResponse", function() { return DeleteBasicAuthClientResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBasicAuthClientRequest", function() { return DeleteBasicAuthClientRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBasicAuthClientRequest", function() { return SearchBasicAuthClientRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBasicAuthClientResponse", function() { return SearchBasicAuthClientResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchChangeLogRequest", function() { return SearchChangeLogRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchChangeLogResponse", function() { return SearchChangeLogResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityAPIResponse", function() { return SecurityAPIResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSecurityContextResponse", function() { return GetSecurityContextResponse; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTrustedBasicAppRequest", function() { return CreateTrustedBasicAppRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTrustedBasicAppResponse", function() { return CreateTrustedBasicAppResponse; });
class PagingInformation {
}
class SortInfo {
}
class SortingInformation {
}
class RequestStatusInformation {
}
RequestStatusInformation.standardSuccessCode = "Succeeded";
RequestStatusInformation.standardFailureCode = "Failed";
RequestStatusInformation.standardSuccessMessage = "Operation Succeeded";
RequestStatusInformation.standardFailureMessage = "Operation Failed";
class ClientSecurityContext {
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
class GetSecurityContextRequest extends BaseRequest {
}
class CreateBasicAuthClientRequest extends BaseRequest {
}
class CreateBasicAuthClientResponse extends BaseResponse {
}
class DeleteBasicAuthClientResponse extends BaseResponse {
}
class DeleteBasicAuthClientRequest extends BaseRequest {
}
class SearchBasicAuthClientRequest extends CreateBasicAuthClientRequest {
}
class SearchBasicAuthClientResponse extends BaseResponse {
}
class SearchChangeLogRequest extends BaseRequest {
}
class SearchChangeLogResponse extends BaseResponse {
}
class SecurityAPIResponse extends BaseResponse {
}
class GetSecurityContextResponse extends BaseResponse {
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
class CreateTrustedBasicAppRequest extends BaseRequest {
}
class CreateTrustedBasicAppResponse extends BaseResponse {
}


/***/ }),

/***/ "../../../modules/app-security-client/type-script/src/constants/constants.ts":
/*!***************************************************************************************************************************!*\
  !*** C:/works/source-code/github/V2Solve/app-security/modules/app-security-client/type-script/src/constants/constants.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: SecurityActions, SecurityResources, Scopes, Domains, SecurityGroupsAndRoles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityActions", function() { return SecurityActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityResources", function() { return SecurityResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scopes", function() { return Scopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domains", function() { return Domains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityGroupsAndRoles", function() { return SecurityGroupsAndRoles; });
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");


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
 * This class contains definitions of items which are the security resources defined by admin application.
 * They mostly represent rows of data in different tables of the security model. An application which deals
 * with a different model will probably have this different.
 *
 */
class SecurityResources {
}
SecurityResources.ACTION = "ACTION";
SecurityResources.APPLICATION = "APPLICATION";
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
SecurityResources.CHANGE_LOG = "CHANGE_LOG";
SecurityResources.BASIC_AUTH_CLIENT = "BASIC_AUTH_CLIENT";
SecurityResources.ONBOARD_TRUSTED_APP = "ONBOARD_TRUSTED_APP";
/**
 * These are different scopes that can come in play
 */
class Scopes {
    static clientGroupMembershipScope(value) {
        return new _model_model__WEBPACK_IMPORTED_MODULE_0__["Scope"](this.CLIENT_GROUP_MEMBERSHIP_SCOPE, this.VALUES_SCOPE_TYPE, value);
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
        return new _model_model__WEBPACK_IMPORTED_MODULE_0__["Domain"](domainName, this.APP_DOMAIN_TYPE);
    }
}
Domains.APP_DOMAIN_TYPE = "AppDomain";
/**
 * Predefined Security Groups and Roles in the system.
 */
class SecurityGroupsAndRoles {
}
SecurityGroupsAndRoles.TRUSTED_APP_GROUP = "TRUSTED_APPS";
SecurityGroupsAndRoles.TRUSTED_APP_ROLE = "TRUSTED_APP";
SecurityGroupsAndRoles.APP_OWNER_ROLE = "APP_OWNER";


/***/ }),

/***/ "../../../modules/app-security-client/type-script/src/model/model.ts":
/*!*******************************************************************************************************************!*\
  !*** C:/works/source-code/github/V2Solve/app-security/modules/app-security-client/type-script/src/model/model.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: Action, Resource, AppClient, Application, ChangeLog, ClientGroupRole, ClientRolePermission, Domain, Scope, ClientGroup, ClientRole, DomainType, ScopeType, Permission, PermitKey, Permit, BasicAuthClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppClient", function() { return AppClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLog", function() { return ChangeLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientGroupRole", function() { return ClientGroupRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRolePermission", function() { return ClientRolePermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientGroup", function() { return ClientGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRole", function() { return ClientRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainType", function() { return DomainType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeType", function() { return ScopeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermitKey", function() { return PermitKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permit", function() { return Permit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthClient", function() { return BasicAuthClient; });
class Action {
}
class Resource {
}
class AppClient {
}
class Application {
}
/**
 * A change log entry..
 */
class ChangeLog {
}
class ClientGroupRole {
}
class ClientRolePermission {
}
class Domain {
    constructor(domainName, domainType, parentDomain, description, appIdentifier) {
        this.name = domainName;
        this.domainType = domainType;
        if (appIdentifier != undefined)
            this.appIdentifier = appIdentifier;
        if (parentDomain != undefined)
            this.parentDomain = parentDomain;
        if (description != undefined)
            this.description = description;
    }
}
class Scope {
    constructor(scopeName, scopeType, scopeValue) {
        this.scopeName = scopeName;
        this.scopeType = scopeType;
        this.scopeValue = scopeValue;
    }
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
class PermitKey {
}
class Permit {
}
class BasicAuthClient {
}


/***/ }),

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
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");




















function ActionMgmtComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function ActionMgmtComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function ActionMgmtComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgTooManyCharacters);
} }
function ActionMgmtComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.appIdentifier, " ");
} }
class ActionMgmtComponent extends src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_5__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.actionName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]);
        this.actionDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ "actionName": this.actionName, "actionDescription": this.actionDescription });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['Select', 'ActionName', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.formResults);
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_3__["CreateActionRequest"]();
        car.description = this.actionDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.actionName.value;
        this.managementClient.createAction(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_3__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_3__["DeleteActionRequest"]();
        car.name = this.actionName.value;
        this.managementClient.deleteAction(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_3__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_2__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        }, error => { this.pushErrorMessage(JSON.stringify(error)); });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableActions().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_7__["CellInfo"](element.actionName));
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_7__["CellInfo"](element.actionName));
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_7__["CellInfo"](element.actionDescription));
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_7__["CellInfo"](element.appIdentifier));
                    let rr = new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_7__["ResultRow"](element.actionName, ci);
                    this.formResults.push(rr);
                });
            }
            this.dataSource.data = this.formResults;
        }, error => { this.pushErrorMessage(JSON.stringify(error)); });
    }
    ngOnInit() {
        this.formTitle = "Manage Actions";
        this.loadViewableApps();
        this.loadViewableObjects();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_4__["SecurityResources"].ACTION, this.callService);
    }
}
ActionMgmtComponent.ɵfac = function ActionMgmtComponent_Factory(t) { return new (t || ActionMgmtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
ActionMgmtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionMgmtComponent, selectors: [["app-action-mgmt"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 58, vars: 30, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["matInput", "", "placeholder", "Unique Action Name", 3, "formControl"], [4, "ngIf"], ["matInput", "", "placeholder", "describe the action..", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ActionMgmtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ActionMgmtComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ActionMgmtComponent_mat_error_22_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Action Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ActionMgmtComponent_mat_error_28_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ActionMgmtComponent_Template_mat_select_valueChange_34_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ActionMgmtComponent_mat_option_35_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionMgmtComponent_Template_button_click_41_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionMgmtComponent_Template_button_click_47_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Existing Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "app-results-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ActionMgmtComponent_Template_app_results_table_currentRowSelected_57_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.actionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.actionDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionDescription.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_7__["ResultsTableComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWN0aW9uLW1nbXQvYWN0aW9uLW1nbXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHRzLW9kZC1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1ldmVuLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTIsIDI1Mik7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWhlYWRpbmctcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7IFxyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdC1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5mb3JtLWNlbGxcclxue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1mb3JtLWNlbGxcclxue1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionMgmtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-mgmt',
                templateUrl: './action-mgmt.component.html',
                styleUrls: ['./action-mgmt.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


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
/* harmony import */ var _change_log_mgmt_change_log_mgmt_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./change-log-mgmt/change-log-mgmt.component */ "./src/app/change-log-mgmt/change-log-mgmt.component.ts");
/* harmony import */ var _basic_user_management_basic_user_management_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./basic-user-management/basic-user-management.component */ "./src/app/basic-user-management/basic-user-management.component.ts");
/* harmony import */ var _trusted_app_onboarding_trusted_app_onboarding_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./trusted-app-onboarding/trusted-app-onboarding.component */ "./src/app/trusted-app-onboarding/trusted-app-onboarding.component.ts");





















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
    { path: 'rolePermissionManagement', component: _role_to_permissions_role_to_permissions_component__WEBPACK_IMPORTED_MODULE_12__["RoleToPermissionsComponent"] },
    { path: 'viewChangeLogs', component: _change_log_mgmt_change_log_mgmt_component__WEBPACK_IMPORTED_MODULE_16__["ChangeLogMgmtComponent"] },
    { path: 'basicAuthClientManagement', component: _basic_user_management_basic_user_management_component__WEBPACK_IMPORTED_MODULE_17__["BasicUserManagementComponent"] },
    { path: 'onboardTrustedBasicApp', component: _trusted_app_onboarding_trusted_app_onboarding_component__WEBPACK_IMPORTED_MODULE_18__["TrustedAppOnboardingComponent"] }
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["id", "topSection"], ["id", "mainBody"], ["id", "bottomSection"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _application_mgmt_application_mgmt_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./application-mgmt/application-mgmt.component */ "./src/app/application-mgmt/application-mgmt.component.ts");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./table-menu/table-menu.component */ "./src/app/table-menu/table-menu.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./bottombar/bottombar.component */ "./src/app/bottombar/bottombar.component.ts");
/* harmony import */ var _action_mgmt_action_mgmt_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./action-mgmt/action-mgmt.component */ "./src/app/action-mgmt/action-mgmt.component.ts");
/* harmony import */ var _client_management_client_management_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./client-management/client-management.component */ "./src/app/client-management/client-management.component.ts");
/* harmony import */ var _resource_management_resource_management_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./resource-management/resource-management.component */ "./src/app/resource-management/resource-management.component.ts");
/* harmony import */ var _scope_type_management_scope_type_management_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./scope-type-management/scope-type-management.component */ "./src/app/scope-type-management/scope-type-management.component.ts");
/* harmony import */ var _client_group_management_client_group_management_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./client-group-management/client-group-management.component */ "./src/app/client-group-management/client-group-management.component.ts");
/* harmony import */ var _domain_type_management_domain_type_management_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./domain-type-management/domain-type-management.component */ "./src/app/domain-type-management/domain-type-management.component.ts");
/* harmony import */ var _scope_management_scope_management_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./scope-management/scope-management.component */ "./src/app/scope-management/scope-management.component.ts");
/* harmony import */ var _domain_management_domain_management_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./domain-management/domain-management.component */ "./src/app/domain-management/domain-management.component.ts");
/* harmony import */ var _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./role-management/role-management.component */ "./src/app/role-management/role-management.component.ts");
/* harmony import */ var _role_to_permissions_role_to_permissions_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./role-to-permissions/role-to-permissions.component */ "./src/app/role-to-permissions/role-to-permissions.component.ts");
/* harmony import */ var _client_to_groups_client_to_groups_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./client-to-groups/client-to-groups.component */ "./src/app/client-to-groups/client-to-groups.component.ts");
/* harmony import */ var _groups_to_roles_groups_to_roles_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./groups-to-roles/groups-to-roles.component */ "./src/app/groups-to-roles/groups-to-roles.component.ts");
/* harmony import */ var _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./permission-management/permission-management.component */ "./src/app/permission-management/permission-management.component.ts");
/* harmony import */ var src_app_loader_interceptor__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! src/app/loader-interceptor */ "./src/app/loader-interceptor.ts");
/* harmony import */ var _change_log_mgmt_change_log_mgmt_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./change-log-mgmt/change-log-mgmt.component */ "./src/app/change-log-mgmt/change-log-mgmt.component.ts");
/* harmony import */ var _dynamic_results_table_dynamic_results_table_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./dynamic-results-table/dynamic-results-table.component */ "./src/app/dynamic-results-table/dynamic-results-table.component.ts");
/* harmony import */ var _side_vertical_menu_side_vertical_menu_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./side-vertical-menu/side-vertical-menu.component */ "./src/app/side-vertical-menu/side-vertical-menu.component.ts");
/* harmony import */ var _table_menu_vert_table_menu_vert_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./table-menu-vert/table-menu-vert.component */ "./src/app/table-menu-vert/table-menu-vert.component.ts");
/* harmony import */ var _base_comps_client_services_provider__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./base-comps/client.services.provider */ "./src/app/base-comps/client.services.provider.ts");
/* harmony import */ var _basic_user_management_basic_user_management_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./basic-user-management/basic-user-management.component */ "./src/app/basic-user-management/basic-user-management.component.ts");
/* harmony import */ var _trusted_app_onboarding_trusted_app_onboarding_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./trusted-app-onboarding/trusted-app-onboarding.component */ "./src/app/trusted-app-onboarding/trusted-app-onboarding.component.ts");





















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: src_app_loader_interceptor__WEBPACK_IMPORTED_MODULE_43__["LoaderInterceptor"], multi: true },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["ShowOnDirtyErrorStateMatcher"] },
        _base_comps_client_services_provider__WEBPACK_IMPORTED_MODULE_48__["contextMgmtServiceProvider"],
        _base_comps_client_services_provider__WEBPACK_IMPORTED_MODULE_48__["securityMgmtServiceProvider"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_28__["TopbarComponent"],
        _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_29__["BottombarComponent"],
        _action_mgmt_action_mgmt_component__WEBPACK_IMPORTED_MODULE_30__["ActionMgmtComponent"],
        _application_mgmt_application_mgmt_component__WEBPACK_IMPORTED_MODULE_24__["ApplicationMgmtComponent"],
        _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_25__["ResultsTableComponent"],
        _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_26__["InfoBlockComponent"],
        _table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_27__["TableMenuComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"],
        _client_management_client_management_component__WEBPACK_IMPORTED_MODULE_31__["ClientManagementComponent"],
        _resource_management_resource_management_component__WEBPACK_IMPORTED_MODULE_32__["ResourceManagementComponent"],
        _scope_type_management_scope_type_management_component__WEBPACK_IMPORTED_MODULE_33__["ScopeTypeManagementComponent"],
        _client_group_management_client_group_management_component__WEBPACK_IMPORTED_MODULE_34__["ClientGroupManagementComponent"],
        _domain_type_management_domain_type_management_component__WEBPACK_IMPORTED_MODULE_35__["DomainTypeManagementComponent"],
        _scope_management_scope_management_component__WEBPACK_IMPORTED_MODULE_36__["ScopeManagementComponent"],
        _domain_management_domain_management_component__WEBPACK_IMPORTED_MODULE_37__["DomainManagementComponent"],
        _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_38__["RoleManagementComponent"],
        _role_to_permissions_role_to_permissions_component__WEBPACK_IMPORTED_MODULE_39__["RoleToPermissionsComponent"],
        _client_to_groups_client_to_groups_component__WEBPACK_IMPORTED_MODULE_40__["ClientToGroupsComponent"],
        _groups_to_roles_groups_to_roles_component__WEBPACK_IMPORTED_MODULE_41__["GroupsToRolesComponent"],
        _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_42__["PermissionManagementComponent"],
        _change_log_mgmt_change_log_mgmt_component__WEBPACK_IMPORTED_MODULE_44__["ChangeLogMgmtComponent"],
        _dynamic_results_table_dynamic_results_table_component__WEBPACK_IMPORTED_MODULE_45__["DynamicResultsTableComponent"],
        _side_vertical_menu_side_vertical_menu_component__WEBPACK_IMPORTED_MODULE_46__["SideVerticalMenuComponent"],
        _table_menu_vert_table_menu_vert_component__WEBPACK_IMPORTED_MODULE_47__["TableMenuVertComponent"],
        _basic_user_management_basic_user_management_component__WEBPACK_IMPORTED_MODULE_49__["BasicUserManagementComponent"],
        _trusted_app_onboarding_trusted_app_onboarding_component__WEBPACK_IMPORTED_MODULE_50__["TrustedAppOnboardingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_28__["TopbarComponent"],
                    _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_29__["BottombarComponent"],
                    _action_mgmt_action_mgmt_component__WEBPACK_IMPORTED_MODULE_30__["ActionMgmtComponent"],
                    _application_mgmt_application_mgmt_component__WEBPACK_IMPORTED_MODULE_24__["ApplicationMgmtComponent"],
                    _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_25__["ResultsTableComponent"],
                    _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_26__["InfoBlockComponent"],
                    _table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_27__["TableMenuComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"],
                    _client_management_client_management_component__WEBPACK_IMPORTED_MODULE_31__["ClientManagementComponent"],
                    _resource_management_resource_management_component__WEBPACK_IMPORTED_MODULE_32__["ResourceManagementComponent"],
                    _scope_type_management_scope_type_management_component__WEBPACK_IMPORTED_MODULE_33__["ScopeTypeManagementComponent"],
                    _client_group_management_client_group_management_component__WEBPACK_IMPORTED_MODULE_34__["ClientGroupManagementComponent"],
                    _domain_type_management_domain_type_management_component__WEBPACK_IMPORTED_MODULE_35__["DomainTypeManagementComponent"],
                    _scope_management_scope_management_component__WEBPACK_IMPORTED_MODULE_36__["ScopeManagementComponent"],
                    _domain_management_domain_management_component__WEBPACK_IMPORTED_MODULE_37__["DomainManagementComponent"],
                    _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_38__["RoleManagementComponent"],
                    _role_to_permissions_role_to_permissions_component__WEBPACK_IMPORTED_MODULE_39__["RoleToPermissionsComponent"],
                    _client_to_groups_client_to_groups_component__WEBPACK_IMPORTED_MODULE_40__["ClientToGroupsComponent"],
                    _groups_to_roles_groups_to_roles_component__WEBPACK_IMPORTED_MODULE_41__["GroupsToRolesComponent"],
                    _permission_management_permission_management_component__WEBPACK_IMPORTED_MODULE_42__["PermissionManagementComponent"],
                    _change_log_mgmt_change_log_mgmt_component__WEBPACK_IMPORTED_MODULE_44__["ChangeLogMgmtComponent"],
                    _dynamic_results_table_dynamic_results_table_component__WEBPACK_IMPORTED_MODULE_45__["DynamicResultsTableComponent"],
                    _side_vertical_menu_side_vertical_menu_component__WEBPACK_IMPORTED_MODULE_46__["SideVerticalMenuComponent"],
                    _table_menu_vert_table_menu_vert_component__WEBPACK_IMPORTED_MODULE_47__["TableMenuVertComponent"],
                    _basic_user_management_basic_user_management_component__WEBPACK_IMPORTED_MODULE_49__["BasicUserManagementComponent"],
                    _trusted_app_onboarding_trusted_app_onboarding_component__WEBPACK_IMPORTED_MODULE_50__["TrustedAppOnboardingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: src_app_loader_interceptor__WEBPACK_IMPORTED_MODULE_43__["LoaderInterceptor"], multi: true },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["ShowOnDirtyErrorStateMatcher"] },
                    _base_comps_client_services_provider__WEBPACK_IMPORTED_MODULE_48__["contextMgmtServiceProvider"],
                    _base_comps_client_services_provider__WEBPACK_IMPORTED_MODULE_48__["securityMgmtServiceProvider"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");


// Import Communication Model..

// Import constants.














function ApplicationMgmtComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function ApplicationMgmtComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function ApplicationMgmtComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgRequiredField);
} }
function ApplicationMgmtComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMsgTooManyCharacters);
} }
function ApplicationMgmtComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.errorMsgRequiredField);
} }
function ApplicationMgmtComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMsgTooManyCharacters);
} }
class ApplicationMgmtComponent extends src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_4__["BaseForm"] {
    constructor(callService, client) {
        super();
        // Fields on the form
        this.appIdentifier = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]);
        this.shortIdentifier = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]);
        this.appDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ "appIdentifier": this.appIdentifier, "shortIdentifier": this.shortIdentifier, "appDescription": this.appDescription });
        this.viewableApps = new Array();
        this.displayedColumns = ['Select', 'AppIdentifier', 'ShortIdentifier', 'Description'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.formResults);
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__["CreateApplicationRequest"]();
        car.description = this.appDescription.value;
        car.appIdentifier = this.appIdentifier.value;
        car.appShortIdentifier = this.shortIdentifier.value;
        this.managementClient.createApplication(car);
        this.managementClient.createApplication(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__["DeleteApplicationRequest"]();
        car.appIdentifier = this.appIdentifier.value;
        this.managementClient.deleteApplication(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode)
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
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_6__["CellInfo"](app.appIdentifier));
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_6__["CellInfo"](app.appIdentifier));
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_6__["CellInfo"](app.shortIdentifier));
                    ci.push(new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_6__["CellInfo"](app.appDescription));
                    let rr = new src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_6__["ResultRow"](app.appDescription, ci);
                    this.formResults.push(rr);
                });
                this.dataSource.data = this.formResults;
            }
        }, error => { this.pushErrorMessage(JSON.stringify(error)); });
    }
    ngOnInit() {
        // Lets load the viewable apps..
        this.formTitle = "Manage applications";
        this.loadViewableApps();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].APPLICATION, this.callService);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
ApplicationMgmtComponent.ɵfac = function ApplicationMgmtComponent_Factory(t) { return new (t || ApplicationMgmtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_7__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_8__["SecMgmtApiClientService"])); };
ApplicationMgmtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationMgmtComponent, selectors: [["app-application-mgmt"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 58, vars: 31, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["matInput", "", "placeholder", "unique app identifier", 3, "formControl"], [4, "ngIf"], ["matInput", "", "placeholder", "short identifier", 3, "formControl"], ["matInput", "", "placeholder", "describe the app..", 3, "formControl"], ["mat-icon-button", "", "title", "Save Application", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"]], template: function ApplicationMgmtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manage Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "AppIdentifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ApplicationMgmtComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ApplicationMgmtComponent_mat_error_22_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Short Identifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ApplicationMgmtComponent_mat_error_28_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ApplicationMgmtComponent_mat_error_29_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "App Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ApplicationMgmtComponent_mat_error_35_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ApplicationMgmtComponent_mat_error_36_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationMgmtComponent_Template_button_click_41_listener() { return ctx.updateApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationMgmtComponent_Template_button_click_47_listener() { return ctx.deleteApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Existing Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "app-results-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ApplicationMgmtComponent_Template_app_results_table_currentRowSelected_57_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appIdentifier.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appIdentifier.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.shortIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shortIdentifier.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shortIdentifier.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.appDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appDescription.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appDescription.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_9__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], src_app_results_table_results_table_component__WEBPACK_IMPORTED_MODULE_6__["ResultsTableComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24tbWdtdC9hcHBsaWNhdGlvbi1tZ210LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationMgmtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-mgmt',
                templateUrl: './application-mgmt.component.html',
                styleUrls: ['./application-mgmt.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_7__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_8__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/base-comps/client.services.provider.ts":
/*!********************************************************!*\
  !*** ./src/app/base-comps/client.services.provider.ts ***!
  \********************************************************/
/*! exports provided: securityMgmtServiceProvider, contextMgmtServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "securityMgmtServiceProvider", function() { return securityMgmtServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contextMgmtServiceProvider", function() { return contextMgmtServiceProvider; });
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/**
 * This file is to have factories so that the communication objects can be correctly created..
 */




const secMgmtClientServiceFactory = (http) => {
    console.log("Providing Security Management API Service");
    return new _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_0__["SecMgmtApiClientService"](http, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].managementApiBaseUrl, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].username, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].password);
};
const contextMgmtClientServiceFactory = (http) => {
    console.log("Providing Context Management API Service");
    return new _modules_app_security_client_type_script_src_client_service_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_1__["ContextMgmtApiClientService"](http, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].contextApiBaseUrl, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].username, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].password);
};
let securityMgmtServiceProvider = { provide: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_0__["SecMgmtApiClientService"],
    useFactory: secMgmtClientServiceFactory,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
};
let contextMgmtServiceProvider = { provide: _modules_app_security_client_type_script_src_client_service_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_1__["ContextMgmtApiClientService"],
    useFactory: contextMgmtClientServiceFactory,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
};


/***/ }),

/***/ "./src/app/base-comps/commonforms.ts":
/*!*******************************************!*\
  !*** ./src/app/base-comps/commonforms.ts ***!
  \*******************************************/
/*! exports provided: BaseForm, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseForm", function() { return BaseForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var src_app_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");

// Import constants.

class BaseForm {
    constructor() {
        /** Error Messages */
        this.errorMsgTooManyCharacters = "Field has too many characters";
        this.errorMsgRequiredField = "Field is required.";
        this.formTitle = "Base Title";
        this.objectReadPermission = false;
        this.objectUpdatePermission = false;
        this.objectDeletePermission = false;
        this.objectCreatePermission = false;
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
    updatePermissionFlags(objectType, callService) {
        callService.hasPermission(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_1__["SecurityActions"].READ, objectType).then(element => {
            this.objectReadPermission = element;
        });
        callService.hasPermission(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_1__["SecurityActions"].UPDATE, objectType).then(element => {
            this.objectUpdatePermission = element;
        });
        callService.hasPermission(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_1__["SecurityActions"].CREATE, objectType).then(element => {
            this.objectCreatePermission = element;
        });
        callService.hasPermission(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_1__["SecurityActions"].DELETE, objectType).then(element => {
            this.objectDeletePermission = element;
        });
    }
    isCreateOrDeletePermission() {
        return (this.objectCreatePermission || this.objectDeletePermission);
    }
    isDeletePermission() {
        return this.objectDeletePermission;
    }
    isCreatePermission() {
        return this.objectCreatePermission;
    }
    isReadPermission() {
        return this.objectReadPermission;
    }
}
class MenuItem {
    constructor(itemName, itemTitle, itemLink) {
        this.itemName = itemName;
        this.itemLink = itemLink;
        this.itemTitle = itemTitle;
    }
}


/***/ }),

/***/ "./src/app/basic-user-management/basic-user-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/basic-user-management/basic-user-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: BasicUserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicUserManagementComponent", function() { return BasicUserManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





// Import Communication Model..

// Import Security Model

// Import constants.














function BasicUserManagementComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function BasicUserManagementComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function BasicUserManagementComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgRequiredField);
} }
function BasicUserManagementComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMsgTooManyCharacters);
} }
function BasicUserManagementComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.errorMsgRequiredField);
} }
function BasicUserManagementComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMsgTooManyCharacters);
} }
function BasicUserManagementComponent_mat_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r7.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.appIdentifier, " ");
} }
class BasicUserManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_4__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.oldPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.newPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.disabled = false;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ "objectName": this.objectName, "newPassword": this.newPassword, "oldPassword": this.oldPassword });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['Select', 'Username', 'Enabled?', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            this.viewableObjects.forEach(element => {
                if (element.username == this.currentKey) {
                    let rr = element;
                    if (rr != undefined) {
                        if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                            this.appIdentifier = "GLOBAL";
                        else
                            this.appIdentifier = rr.appIdentifier;
                        this.objectName.setValue(rr.username);
                        this.newPassword.setValue(null);
                        this.oldPassword.setValue(null);
                        this.disabled = !rr.enabled;
                        this.setInfoMessage("Updated selected value..");
                    }
                    return;
                }
            });
        }
    }
    updateObject() {
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["CreateBasicAuthClientRequest"]();
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        car.password = this.newPassword.value;
        car.oldpassword = this.oldPassword.value;
        car.enabled = !(this.disabled);
        this.managementClient.createBasicAuthClient(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["DeleteBasicAuthClientRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteBasicAuthClient(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Application"]();
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
        this.callService.loadViewableBasicAuthClients().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.username));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.username));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"]("" + element.enabled));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultRow"](element.username, ci);
                    this.formResults.push(rr);
                });
            }
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Basic Authentication Clients";
        this.loadViewableApps();
        this.loadViewableObjects();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].BASIC_AUTH_CLIENT, this.callService);
    }
}
BasicUserManagementComponent.ɵfac = function BasicUserManagementComponent_Factory(t) { return new (t || BasicUserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
BasicUserManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicUserManagementComponent, selectors: [["app-basic-user-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 70, vars: 36, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["matInput", "", "placeholder", "Unique Resource Name", 3, "formControl"], [4, "ngIf"], ["matInput", "", "placeholder", "password", "type", "password", 3, "formControl"], ["matInput", "", "placeholder", "oldpassword if updating", "type", "password", 3, "formControl"], ["name", "disabled", 3, "ngModel", "checked", "ngModelChange"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function BasicUserManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Client/UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BasicUserManagementComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BasicUserManagementComponent_mat_error_22_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BasicUserManagementComponent_mat_error_28_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BasicUserManagementComponent_mat_error_29_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BasicUserManagementComponent_mat_error_35_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BasicUserManagementComponent_mat_error_36_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasicUserManagementComponent_Template_mat_checkbox_ngModelChange_39_listener($event) { return ctx.disabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Disabled?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BasicUserManagementComponent_Template_mat_select_valueChange_46_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, BasicUserManagementComponent_mat_option_47_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicUserManagementComponent_Template_button_click_53_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicUserManagementComponent_Template_button_click_59_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "app-results-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function BasicUserManagementComponent_Template_app_results_table_currentRowSelected_69_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newPassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newPassword.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.oldPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.oldPassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.oldPassword.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disabled)("checked", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYmFzaWMtdXNlci1tYW5hZ2VtZW50L2Jhc2ljLXVzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicUserManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basic-user-management',
                templateUrl: './basic-user-management.component.html',
                styleUrls: ['./basic-user-management.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


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
BottombarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottombarComponent, selectors: [["app-bottombar"]], decls: 3, vars: 0, consts: [[2, "align-content", "bottom"]], template: function BottombarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "AppSecurity Admin App @All Rights Reserved");
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

/***/ "./src/app/change-log-mgmt/change-log-mgmt.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-log-mgmt/change-log-mgmt.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangeLogMgmtComponent, ChangeLogDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogMgmtComponent", function() { return ChangeLogMgmtComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogDataSource", function() { return ChangeLogDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






// Import Communication Model..

// Import constants.











class ChangeLogMgmtComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.actionName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.resourceName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.changerId = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.recordIdentifier = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.changeTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.toDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.fromDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.viewableObjects = new Array();
        this.displayedColumns = ['ChangeTime', 'ChangeTitle', 'Action', 'Resource', 'By', 'RecordId', 'CurrentRecord', 'OriginalRecord'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        let sar = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["SearchChangeLogRequest"]();
        sar.action = this.actionName.value;
        sar.resource = this.resourceName.value;
        sar.changerId = this.changerId.value;
        sar.changeTitle = this.changeTitle.value;
        sar.toDate = this.toDate.value;
        sar.fromDate = this.fromDate.value;
        this.managementClient.searchChangeLogs(sar).subscribe(value => {
            if (value.changes != null) {
                value.changes.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    if (element.datetime == null || element.datetime == undefined)
                        ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"]('undefined.'));
                    else {
                        let dt = new Date(element.datetime);
                        ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](dt.toUTCString()));
                    }
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.changeTitle));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.action));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.resource));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.changerId));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.recordIdentifier));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.changedRecord));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.originalRecord));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultRow"]("", ci);
                    this.formResults.push(rr);
                });
            }
            this.dataSource.data = this.formResults;
        }, error => {
            this.pushErrorMessage(JSON.stringify(error));
        });
    }
    ngOnInit() {
        this.formTitle = "View Change Logs";
        this.loadViewableObjects();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].CHANGE_LOG, this.callService);
    }
}
ChangeLogMgmtComponent.ɵfac = function ChangeLogMgmtComponent_Factory(t) { return new (t || ChangeLogMgmtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
ChangeLogMgmtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangeLogMgmtComponent, selectors: [["app-change-log-mgmt"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 65, vars: 27, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["appearance", "fill"], ["matInput", "", "placeholder", "words in title", 3, "formControl"], ["matInput", "", "placeholder", "for action..", 3, "formControl"], ["matInput", "", "placeholder", "for resource..", 3, "formControl"], ["matInput", "", "placeholder", "change By", 3, "formControl"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["startPicker", ""], ["endPicker", ""], ["mat-icon-button", "", "title", "Save Record", 3, "click"], [2, "font-size", "24px"], [3, "selectFunction", "iconTitle", "iconName", "dataSource", "displayedColumns", "currentRowSelected"]], template: function ChangeLogMgmtComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-datepicker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeLogMgmtComponent_Template_button_click_54_listener() { return ctx.loadViewableObjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "app-results-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ChangeLogMgmtComponent_Template_app_results_table_currentRowSelected_64_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.changeTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.actionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.resourceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.changerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("formControl", ctx.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1)("formControl", ctx.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", false)("iconTitle", "")("iconName", "")("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLWxvZy1tZ210L2NoYW5nZS1sb2ctbWdtdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeLogMgmtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-log-mgmt',
                templateUrl: './change-log-mgmt.component.html',
                styleUrls: ['./change-log-mgmt.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();
class ChangeLogDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["DataSource"] {
    connect(collectionViewer) {
        throw new Error("Method not implemented.");
    }
    disconnect(collectionViewer) {
        throw new Error("Method not implemented.");
    }
}


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





// Import Communication Model..

// Import Security Model

// Import constants.













function ClientGroupManagementComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function ClientGroupManagementComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function ClientGroupManagementComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgRequiredField);
} }
function ClientGroupManagementComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMsgTooManyCharacters);
} }
function ClientGroupManagementComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.appIdentifier, " ");
} }
class ClientGroupManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]);
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({ "objectName": this.objectName, "objectDescription": this.objectDescription });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['Select', 'GroupName', 'Description', 'Owner App'];
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["CreateClientGroupRequest"]();
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        this.managementClient.createClientGroup(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["DeleteClientGroupRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteClientGroup(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableClientGroups().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
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
        this.formTitle = "Manage Groups";
        this.loadViewableApps();
        this.loadViewableObjects();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].CLIENT_GROUP, this.callService);
    }
}
ClientGroupManagementComponent.ɵfac = function ClientGroupManagementComponent_Factory(t) { return new (t || ClientGroupManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
ClientGroupManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientGroupManagementComponent, selectors: [["app-client-group-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 31, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["matInput", "", "placeholder", "Unique Group Name", 3, "formControl"], [4, "ngIf"], ["matInput", "", "placeholder", "describe the Group..", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding", "10px"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ClientGroupManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ClientGroupManagementComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ClientGroupManagementComponent_mat_error_22_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Resource Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ClientGroupManagementComponent_mat_error_28_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ClientGroupManagementComponent_mat_error_29_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ClientGroupManagementComponent_Template_mat_select_valueChange_35_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ClientGroupManagementComponent_mat_option_36_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientGroupManagementComponent_Template_button_click_42_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientGroupManagementComponent_Template_button_click_48_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "app-results-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ClientGroupManagementComponent_Template_app_results_table_currentRowSelected_58_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50LWdyb3VwLW1hbmFnZW1lbnQvY2xpZW50LWdyb3VwLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHRzLW9kZC1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1ldmVuLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTIsIDI1Mik7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWhlYWRpbmctcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7IFxyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdC1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5mb3JtLWNlbGxcclxue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1mb3JtLWNlbGxcclxue1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientGroupManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-group-management',
                templateUrl: './client-group-management.component.html',
                styleUrls: ['./client-group-management.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





// Import Communication Model..

// Import Security Model

// Import constants.













function ClientManagementComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function ClientManagementComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function ClientManagementComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgRequiredField);
} }
function ClientManagementComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMsgTooManyCharacters);
} }
function ClientManagementComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.appIdentifier, " ");
} }
class ClientManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]);
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({ "objectName": this.objectName, "objectDescription": this.objectDescription });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['Select', 'Client Identifier', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.formResults);
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["CreateClientRequest"]();
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.clientIdentifier = this.objectName.value;
        this.managementClient.createClient(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["DeleteClientRequest"]();
        car.clientIdentifier = this.objectName.value;
        this.managementClient.deleteClient(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableClients().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.clientIdentifier));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.clientIdentifier));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.description));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultRow"](element.clientIdentifier, ci);
                    this.formResults.push(rr);
                });
            }
            this.dataSource.data = this.formResults;
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Clients";
        this.loadViewableApps();
        this.loadViewableObjects();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].CLIENT, this.callService);
    }
}
ClientManagementComponent.ɵfac = function ClientManagementComponent_Factory(t) { return new (t || ClientManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
ClientManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientManagementComponent, selectors: [["app-client-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 31, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["matInput", "", "placeholder", "Unique client id", 3, "formControl"], [4, "ngIf"], ["matInput", "", "placeholder", "describe the client", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ClientManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Client Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ClientManagementComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ClientManagementComponent_mat_error_22_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ClientManagementComponent_mat_error_28_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ClientManagementComponent_mat_error_29_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ClientManagementComponent_Template_mat_select_valueChange_35_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ClientManagementComponent_mat_option_36_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientManagementComponent_Template_button_click_42_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientManagementComponent_Template_button_click_48_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "app-results-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ClientManagementComponent_Template_app_results_table_currentRowSelected_58_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50LW1hbmFnZW1lbnQvY2xpZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHRzLW9kZC1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1ldmVuLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTIsIDI1Mik7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWhlYWRpbmctcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7IFxyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdC1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5mb3JtLWNlbGxcclxue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1mb3JtLWNlbGxcclxue1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-management',
                templateUrl: './client-management.component.html',
                styleUrls: ['./client-management.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");




// Import Communication Model..

// Import Security Model

// Import constants.














function ClientToGroupsComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function ClientToGroupsComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function ClientToGroupsComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r9.clientIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9.clientIdentifier, " ");
} }
function ClientToGroupsComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r10.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r10.appIdentifier, " ");
} }
function ClientToGroupsComponent_mat_list_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r11.name, " [", item_r11.appIdentifier == null ? "" : item_r11.appIdentifier, "] ");
} }
function ClientToGroupsComponent_mat_list_option_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r12.name, " ");
} }
class ClientToGroupsComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_2__["BaseForm"] {
    constructor(callService, client) {
        super();
        // The text field that folks will put search item in.
        this.clientName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({ "clientName": this.clientName });
        this.clientIdentifier = null;
        // The viewable groups that can be assigned.
        this.assignableGroups = new Array();
        // The groups that have been assigned already.
        this.assignedGroups = new Array();
        this.viewableApps = new Array();
        this.searchedClients = new Array();
        this.callService = callService;
        this.managementClient = client;
    }
    swapVisible() {
        return (!(this.clientIdentifier == null || this.clientIdentifier == undefined));
    }
    searchClients() {
        let sc = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__["SearchClientRequest"]();
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
        let sc = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__["SearchClientRequest"]();
        sc.clientIdentifier = this.clientName.value;
        if (sc.clientIdentifier == null || sc.clientIdentifier.length <= 0) {
            this.pushErrorMessage("Provide a search string..");
            return;
        }
        this.clientIdentifier = null;
        this.managementClient.searchClients(sc).subscribe(element => {
            if (element != null && element.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode) {
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
                        let aGM = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__["CreateGroupMembershipRequest"]();
                        aGM.clientIdentifier = this.clientIdentifier;
                        aGM.clientGroupIdentifier = element.value;
                        if (this.appIdentifier == "GLOBAL")
                            aGM.appIdentifier = null;
                        else
                            aGM.appIdentifier = this.appIdentifier;
                        yield this.managementClient.createGroupMembership(aGM).toPromise().then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (response.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode) {
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
                        let dGM = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__["DeleteGroupMembershipRequest"]();
                        dGM.clientIdentifier = this.clientIdentifier;
                        dGM.clientGroupIdentifier = element.value;
                        yield this.managementClient.deleteGroupMembership(dGM).toPromise().then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (response.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode) {
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
            let sgr = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__["SearchClientGroupRequest"]();
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
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_5__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Client Group Memberships";
        this.loadViewableApps();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_6__["SecurityResources"].CLIENT_GROUP_MEMBERSHIP, this.callService);
    }
}
ClientToGroupsComponent.ɵfac = function ClientToGroupsComponent_Factory(t) { return new (t || ClientToGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_7__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_8__["SecMgmtApiClientService"])); };
ClientToGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientToGroupsComponent, selectors: [["app-client-to-groups"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 79, vars: 26, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["type", "text", "matInput", "", "placeholder", "Type client unique Id", 3, "matAutocomplete", "formControl", "keypress"], [4, "ngIf"], ["firstAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Search client", 3, "disabled", "click"], ["matSuffix", "", 2, "font-size", "24px"], [2, "width", "100%"], ["appearance", "fill"], [3, "value", "valueChange"], [2, "align-content", "left", "text-align", "left"], [1, "form-cell", 2, "width", "30%", "font-weight", "bold"], [1, "form-cell", 2, "width", "10%"], [1, "form-cell", 2, "width", "30%"], ["asgS", ""], [1, "form-cell", 2, "align-items", "center", "text-align", "center", "width", "10%"], ["mat-icon-button", "", "title", "Assign Group", 3, "click"], ["mat-icon-button", "", "title", "Remove Group Membership", 3, "click"], ["assgS", ""], [3, "value"]], template: function ClientToGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Client Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function ClientToGroupsComponent_Template_input_keypress_19_listener() { return ctx.searchClients(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ClientToGroupsComponent_mat_error_20_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ClientToGroupsComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-autocomplete", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ClientToGroupsComponent_mat_option_25_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientToGroupsComponent_Template_button_click_27_listener() { return ctx.searchClient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ClientToGroupsComponent_Template_mat_select_valueChange_39_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ClientToGroupsComponent_mat_option_40_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Group Membership for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Assigned Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Available Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-selection-list", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, ClientToGroupsComponent_mat_list_option_65_Template, 2, 3, "mat-list-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientToGroupsComponent_Template_button_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](77); return ctx.assignGroup(_r7.selectedOptions); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " \u2190Assign ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientToGroupsComponent_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](64); return ctx.unAssignGroup(_r5.selectedOptions); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Remove\u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-selection-list", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, ClientToGroupsComponent_mat_list_option_78_Template, 2, 2, "mat-list-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r2)("formControl", ctx.clientName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clientName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clientName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.searchedClients);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.swapVisible() && ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.clientIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.assignedGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.assignableGroups);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_9__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatSelectionList"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListOption"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50LXRvLWdyb3Vwcy9jbGllbnQtdG8tZ3JvdXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClientToGroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-client-to-groups',
                templateUrl: './client-to-groups.component.html',
                styleUrls: ['./client-to-groups.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_7__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_8__["SecMgmtApiClientService"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





// Import Communication Model..

// Import Security Model

// Import constants.













function DomainManagementComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
function DomainManagementComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgRequiredField);
} }
function DomainManagementComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgTooManyCharacters);
} }
function DomainManagementComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
} }
function DomainManagementComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.errorMsgRequiredField);
} }
function DomainManagementComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMsgTooManyCharacters);
} }
function DomainManagementComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.errorMsgRequiredField);
} }
function DomainManagementComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.errorMsgTooManyCharacters);
} }
function DomainManagementComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r11.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.appIdentifier, " ");
} }
class DomainManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        // The type of domain that you are creating..
        this.domainType = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]);
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({ "objectName": this.objectName, "objectDescription": this.objectDescription, "domainType": this.domainType });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.viewableParents = new Array();
        this.viewableDomainTypes = new Array();
        this.displayedColumns = ['Select', 'Name', 'Type', 'Parent', 'Description', 'Owner App'];
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
                        if (rr.parentDomain == null || rr.parentDomain.name == null || rr.parentDomain.name.length <= 0)
                            this.parentDomain = "<ROOT>";
                        else
                            this.parentDomain = rr.parentDomain.name;
                        this.domainType.setValue(rr.domainType);
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["CreateDomainRequest"]();
        car.name = this.objectName.value;
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        car.domainType = this.domainType.value;
        car.parentDomain = this.parentDomain;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        if (car.parentDomain == "<ROOT>")
            car.parentDomain = null;
        this.managementClient.createDomain(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["DeleteDomainRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteDomain(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    loadViewableDomainTypes() {
        this.viewableDomainTypes.length = 0;
        this.callService.loadViewableDomainTypes().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableDomainTypes.push(element);
                });
            }
        });
    }
    loadViewableParents() {
        this.viewableParents.length = 0;
        let dom = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Domain"]("<ROOT>", "<ROOT>");
        this.viewableParents.push(dom);
        this.callService.loadViewableDomains().then(values => {
            if (values != null && values != undefined) {
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
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.domainType));
                    if (element.parentDomain != null && element.parentDomain != undefined) {
                        ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.parentDomain.name));
                    }
                    else {
                        ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"]("<ROOT>"));
                    }
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
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].RESOURCE_DOMAIN, this.callService);
    }
}
DomainManagementComponent.ɵfac = function DomainManagementComponent_Factory(t) { return new (t || DomainManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
DomainManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomainManagementComponent, selectors: [["app-domain-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 71, vars: 37, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value", "valueChange"], ["matInput", "", "placeholder", "Unique Name", 3, "formControl"], ["matInput", "", "placeholder", "describe the Domain..", 3, "formControl"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function DomainManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "DomainType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DomainManagementComponent_mat_option_21_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DomainManagementComponent_mat_error_22_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DomainManagementComponent_mat_error_23_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ParentDomain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DomainManagementComponent_Template_mat_select_valueChange_28_listener($event) { return ctx.parentDomain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DomainManagementComponent_mat_option_29_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Domain Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DomainManagementComponent_mat_error_35_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DomainManagementComponent_mat_error_36_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DomainManagementComponent_mat_error_42_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DomainManagementComponent_mat_error_43_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DomainManagementComponent_Template_mat_select_valueChange_48_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DomainManagementComponent_mat_option_49_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainManagementComponent_Template_button_click_54_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainManagementComponent_Template_button_click_60_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "app-results-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function DomainManagementComponent_Template_app_results_table_currentRowSelected_70_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.domainType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableDomainTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.domainType.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.domainType.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.parentDomain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableParents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZG9tYWluLW1hbmFnZW1lbnQvZG9tYWluLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHRzLW9kZC1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1ldmVuLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTIsIDI1Mik7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWhlYWRpbmctcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7IFxyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdC1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5mb3JtLWNlbGxcclxue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1mb3JtLWNlbGxcclxue1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-domain-management',
                templateUrl: './domain-management.component.html',
                styleUrls: ['./domain-management.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


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
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





// Import Communication Model..

// Import Security Model

// Import constants.













function DomainTypeManagementComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function DomainTypeManagementComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function DomainTypeManagementComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.appIdentifier, " ");
} }
class DomainTypeManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ "objectName": this.objectName, "objectDescription": this.objectDescription });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['Select', 'DomainType', 'Owner App'];
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["CreateDomainTypeRequest"]();
        // car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        this.managementClient.createDomainType(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["DeleteDomainTypeRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteDomainType(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableDomainTypes().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.name));
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
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].RESOURCE_DOMAIN_TYPE, this.callService);
    }
}
DomainTypeManagementComponent.ɵfac = function DomainTypeManagementComponent_Factory(t) { return new (t || DomainTypeManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
DomainTypeManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomainTypeManagementComponent, selectors: [["app-domain-type-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 52, vars: 28, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["matInput", "", "placeholder", "Unique Identifier", 3, "formControl"], [4, "ngIf"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function DomainTypeManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Domain Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DomainTypeManagementComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DomainTypeManagementComponent_mat_error_22_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DomainTypeManagementComponent_Template_mat_select_valueChange_28_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DomainTypeManagementComponent_mat_option_29_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainTypeManagementComponent_Template_button_click_35_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomainTypeManagementComponent_Template_button_click_41_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "app-results-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function DomainTypeManagementComponent_Template_app_results_table_currentRowSelected_51_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultsTableComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZG9tYWluLXR5cGUtbWFuYWdlbWVudC9kb21haW4tdHlwZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainTypeManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-domain-type-management',
                templateUrl: './domain-type-management.component.html',
                styleUrls: ['./domain-type-management.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dynamic-results-table/dynamic-results-table.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dynamic-results-table/dynamic-results-table.component.ts ***!
  \**************************************************************************/
/*! exports provided: DynamicResultsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicResultsTableComponent", function() { return DynamicResultsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DynamicResultsTableComponent {
    constructor() { }
    ngOnInit() {
    }
}
DynamicResultsTableComponent.ɵfac = function DynamicResultsTableComponent_Factory(t) { return new (t || DynamicResultsTableComponent)(); };
DynamicResultsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicResultsTableComponent, selectors: [["app-dynamic-results-table"]], decls: 2, vars: 0, template: function DynamicResultsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dynamic-results-table works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtcmVzdWx0cy10YWJsZS9keW5hbWljLXJlc3VsdHMtdGFibGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicResultsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-results-table',
                templateUrl: './dynamic-results-table.component.html',
                styleUrls: ['./dynamic-results-table.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");






// Import Communication Model..

// Import Security Model

// Import constants.












function GroupsToRolesComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
function GroupsToRolesComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMsgRequiredField);
} }
function GroupsToRolesComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.errorMsgTooManyCharacters);
} }
function GroupsToRolesComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
} }
function GroupsToRolesComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.errorMsgRequiredField);
} }
function GroupsToRolesComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.errorMsgTooManyCharacters);
} }
function GroupsToRolesComponent_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
} }
function GroupsToRolesComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r12, " ");
} }
function GroupsToRolesComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r13.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r13.appIdentifier, " ");
} }
class GroupsToRolesComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_2__["BaseForm"] {
    constructor(callService, client) {
        super();
        // The selected group name.
        this.groupName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        // Selected role name
        this.roleName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        // selected domain name
        this.domainName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        // Propogate or not ?
        this.propogate = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.propogateValues = ["Yes", "No"];
        // the selected appidentifier
        this.appIdentifier = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({ "groupName": this.groupName, "roleName": this.roleName, "domainName": this.domainName, "propogate": this.propogate, "appIdentifier": this.appIdentifier });
        // The groups that are viewable by the person.
        this.viewableGroups = new Array();
        // The roles that are available to be assigned.
        this.viewableRoles = new Array();
        this.viewableObjects = new Array();
        this.viewableDomains = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['Select', 'GroupName', 'RoleName', 'Domain', 'Propogate', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            let dcgr = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["DeleteClientGroupRoleRequest"]();
            dcgr.key = this.currentKey;
            this.managementClient.deleteClientGroupRole(dcgr).subscribe(element => {
                if (element.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["RequestStatusInformation"].standardSuccessCode) {
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["CreateClientGroupRoleRequest"]();
        car.groupName = this.groupName.value;
        car.domainName = this.domainName.value;
        car.roleName = this.roleName.value;
        if (this.propogate.value == "Yes")
            car.propogate = true;
        else
            car.propogate = false;
        car.appIdentifier = this.appIdentifier.value;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        this.managementClient.createClientGroupRole(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["RequestStatusInformation"].standardSuccessCode)
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
    loadViewableGroups() {
        this.viewableGroups.length = 0;
        this.callService.loadViewableClientGroups().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableGroups.push(element);
                });
            }
        });
    }
    loadViewableDomains() {
        this.viewableDomains.length = 0;
        this.callService.loadViewableDomains().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableDomains.push(element);
                });
            }
        });
    }
    loadViewableRoles() {
        this.viewableRoles.length = 0;
        this.callService.loadViewableClientRoles().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableRoles.push(element);
                });
            }
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
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](cgr.key));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](cgr.groupName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](cgr.roleName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](cgr.domainName));
                    if (cgr.propogate == true)
                        ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"]("Yes"));
                    else
                        ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"]("No"));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](cgr.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultRow"](cgr.key, ci);
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
        let scgrr = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["SearchClientGroupRoleRequest"]();
        scgrr.groupName = this.groupName.value;
        scgrr.roleName = this.roleName.value;
        scgrr.domainName = this.domainName.value;
        scgrr.appIdentifier = this.appIdentifier.value;
        if (scgrr.appIdentifier == "GLOBAL")
            scgrr.appIdentifier = "";
        this.managementClient.searchClientGroupRoles(scgrr).subscribe((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.receiveViewableOjects(element);
        }));
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_7__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    subscribeToChanges() {
        this.groupName.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
        this.roleName.valueChanges.subscribe(event => {
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
        this.appIdentifier.setValue("GLOBAL");
    }
    ngOnInit() {
        this.formTitle = "Manage Client Groups to Role Mappings.";
        this.loadViewableDomains();
        this.loadViewableGroups();
        this.loadViewableRoles();
        this.loadViewableObjects();
        this.loadViewableApps();
        this.subscribeToChanges();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_8__["SecurityResources"].GROUP_ROLE_MEMBERSHIP, this.callService);
    }
}
GroupsToRolesComponent.ɵfac = function GroupsToRolesComponent_Factory(t) { return new (t || GroupsToRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_9__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_10__["SecMgmtApiClientService"])); };
GroupsToRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupsToRolesComponent, selectors: [["app-groups-to-roles"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 70, vars: 35, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Clear Form Values", 3, "click"], [2, "font-size", "16px"], [3, "selectFunction", "iconTitle", "iconName", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function GroupsToRolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Client Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, GroupsToRolesComponent_mat_option_21_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, GroupsToRolesComponent_mat_error_22_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, GroupsToRolesComponent_mat_error_23_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Client Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, GroupsToRolesComponent_mat_option_29_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, GroupsToRolesComponent_mat_error_30_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, GroupsToRolesComponent_mat_error_31_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, GroupsToRolesComponent_mat_option_37_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Propogate?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, GroupsToRolesComponent_mat_option_43_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, GroupsToRolesComponent_mat_option_49_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupsToRolesComponent_Template_button_click_54_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupsToRolesComponent_Template_button_click_59_listener() { return ctx.clearFormControls(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Clear Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "app-results-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("currentRowSelected", function GroupsToRolesComponent_Template_app_results_table_currentRowSelected_69_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.groupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.roleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roleName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roleName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.domainName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.propogate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.propogateValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectFunction", ctx.objectDeletePermission)("iconTitle", "Delete this Record")("iconName", "delete")("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_11__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzLXRvLXJvbGVzL2dyb3Vwcy10by1yb2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroupsToRolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-groups-to-roles',
                templateUrl: './groups-to-roles.component.html',
                styleUrls: ['./groups-to-roles.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_9__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_10__["SecMgmtApiClientService"] }]; }, null); })();


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



function InfoBlockComponent_li_15_Template(rf, ctx) { if (rf & 1) {
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
InfoBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoBlockComponent, selectors: [["app-info-block"]], inputs: { informationBlockTitle: "informationBlockTitle", errorClass: "errorClass", infoClass: "infoClass", messages: "messages" }, decls: 16, vars: 5, consts: [[1, "mat-elevation-z8"], [1, "info-block-title-row"], [1, "info-block-form-cell", 2, "align-content", "left"], [2, "align-content", "right"], ["title", "Click to clear", 1, "info-block-button", 3, "click"], [1, "info-block-form-cell"], [4, "ngFor", "ngForOf"]], template: function InfoBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoBlockComponent_Template_button_click_10_listener() { return ctx.closeBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InfoBlockComponent_li_15_Template, 3, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.boxVisible() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.informationBlockTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaW5mby1ibG9jay9pbmZvLWJsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufSJdfQ== */"] });
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

/***/ "./src/app/loader-interceptor.ts":
/*!***************************************!*\
  !*** ./src/app/loader-interceptor.ts ***!
  \***************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_loader_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loader-service.service */ "./src/app/loader-service.service.ts");




class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.count = 0;
    }
    intercept(req, next) {
        // console.log("Intercepted..");
        if (this.count === 0) {
            this.loaderService.setHttpProgressStatus(true);
        }
        this.count++;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.count--;
            if (this.count === 0) {
                this.loaderService.setHttpProgressStatus(false);
            }
        }));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_loader_service_service__WEBPACK_IMPORTED_MODULE_2__["LoaderServiceService"])); };
LoaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_loader_service_service__WEBPACK_IMPORTED_MODULE_2__["LoaderServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/loader-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/loader-service.service.ts ***!
  \*******************************************/
/*! exports provided: LoaderServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderServiceService", function() { return LoaderServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class LoaderServiceService {
    constructor() {
        this.httpLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    httpProgress() {
        return this.httpLoading.asObservable();
    }
    setHttpProgressStatus(inprogess) {
        this.httpLoading.next(inprogess);
    }
}
LoaderServiceService.ɵfac = function LoaderServiceService_Factory(t) { return new (t || LoaderServiceService)(); };
LoaderServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderServiceService, factory: LoaderServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





// Import Communication Model..

// Import Security Model

// Import constants.













function PermissionManagementComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r11.actionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.actionName, " ");
} }
function PermissionManagementComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgRequiredField);
} }
function PermissionManagementComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgTooManyCharacters);
} }
function PermissionManagementComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.name, " ");
} }
function PermissionManagementComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.errorMsgRequiredField);
} }
function PermissionManagementComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMsgTooManyCharacters);
} }
function PermissionManagementComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.errorMsgRequiredField);
} }
function PermissionManagementComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.errorMsgTooManyCharacters);
} }
function PermissionManagementComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.errorMsgRequiredField);
} }
function PermissionManagementComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.errorMsgTooManyCharacters);
} }
function PermissionManagementComponent_mat_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r13.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.appIdentifier, " ");
} }
class PermissionManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.actionName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.resourceName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ "objectName": this.objectName, "objectDescription": this.objectDescription, "actionName": this.actionName, "resourceName": this.resourceName });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.viewableActions = new Array();
        this.viewableResources = new Array();
        this.displayedColumns = ['Select', 'Name', 'Action', 'Resource', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.formResults);
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
                        this.actionName.setValue(rr.action);
                        this.resourceName.setValue(rr.resource);
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["CreatePermissionRequest"]();
        car.name = this.objectName.value;
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        car.actionName = this.actionName.value;
        car.resourceName = this.resourceName.value;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        this.managementClient.createPermission(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["DeletePermissionRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deletePermission(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    loadViewableResources() {
        this.viewableResources.length = 0;
        this.callService.loadViewableResources().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableResources.push(element);
                });
            }
        });
    }
    loadViewableActions() {
        this.viewableActions.length = 0;
        this.callService.loadViewableActions().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableActions.push(element);
                });
            }
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewablePermissions().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.name));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.name));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.action));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.resource));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.description));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultRow"](element.name, ci);
                    this.formResults.push(rr);
                });
            }
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
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].PERMISSION, this.callService);
    }
}
PermissionManagementComponent.ɵfac = function PermissionManagementComponent_Factory(t) { return new (t || PermissionManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
PermissionManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermissionManagementComponent, selectors: [["app-permission-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 73, vars: 39, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "placeholder", "Unique Name", 3, "formControl"], ["matInput", "", "placeholder", "describe the permission..", 3, "formControl"], [3, "value", "valueChange"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function PermissionManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Associated Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PermissionManagementComponent_mat_option_21_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PermissionManagementComponent_mat_error_22_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PermissionManagementComponent_mat_error_23_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Associated Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PermissionManagementComponent_mat_option_29_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PermissionManagementComponent_mat_error_30_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PermissionManagementComponent_mat_error_31_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Permission Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PermissionManagementComponent_mat_error_37_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PermissionManagementComponent_mat_error_38_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PermissionManagementComponent_mat_error_44_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, PermissionManagementComponent_mat_error_45_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PermissionManagementComponent_Template_mat_select_valueChange_50_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, PermissionManagementComponent_mat_option_51_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionManagementComponent_Template_button_click_56_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionManagementComponent_Template_button_click_62_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "app-results-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function PermissionManagementComponent_Template_app_results_table_currentRowSelected_72_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.actionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.resourceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableResources);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resourceName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resourceName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGVybWlzc2lvbi1tYW5hZ2VtZW50L3Blcm1pc3Npb24tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permission-management',
                templateUrl: './permission-management.component.html',
                styleUrls: ['./permission-management.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





// Import Communication Model..

// Import Security Model

// Import constants.













function ResourceManagementComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function ResourceManagementComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function ResourceManagementComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgRequiredField);
} }
function ResourceManagementComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMsgTooManyCharacters);
} }
function ResourceManagementComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.appIdentifier, " ");
} }
class ResourceManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_4__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ "objectName": this.objectName, "objectDescription": this.objectDescription });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['Select', 'ResourceName', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.formResults);
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["CreateResourceRequest"]();
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        this.managementClient.createResource(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["DeleteResourceRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteResource(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Application"]();
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
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
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
        this.formTitle = "Manage Resources";
        this.loadViewableApps();
        this.loadViewableObjects();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].RESOURCE, this.callService);
    }
}
ResourceManagementComponent.ɵfac = function ResourceManagementComponent_Factory(t) { return new (t || ResourceManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
ResourceManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceManagementComponent, selectors: [["app-resource-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 31, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["matInput", "", "placeholder", "Unique Resource Name", 3, "formControl"], [4, "ngIf"], ["matInput", "", "placeholder", "describe the resource..", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ResourceManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ResourceManagementComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ResourceManagementComponent_mat_error_22_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Resource Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ResourceManagementComponent_mat_error_28_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ResourceManagementComponent_mat_error_29_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ResourceManagementComponent_Template_mat_select_valueChange_35_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ResourceManagementComponent_mat_option_36_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceManagementComponent_Template_button_click_42_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceManagementComponent_Template_button_click_48_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "app-results-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ResourceManagementComponent_Template_app_results_table_currentRowSelected_58_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcmVzb3VyY2UtbWFuYWdlbWVudC9yZXNvdXJjZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource-management',
                templateUrl: './resource-management.component.html',
                styleUrls: ['./resource-management.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


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
/* harmony import */ var _loader_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader-service.service */ "./src/app/loader-service.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");













function ResultsTableComponent_mat_spinner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function ResultsTableComponent_ng_container_8_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columnHeader_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](columnHeader_r6);
} }
function ResultsTableComponent_ng_container_8_td_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r11.rowdata[i_r7].data, " ");
} }
function ResultsTableComponent_ng_container_8_td_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsTableComponent_ng_container_8_td_2_ng_container_2_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.deletePressedOnKey(row_r11.rowdata[i_r7].data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r17.iconTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.iconName);
} }
function ResultsTableComponent_ng_container_8_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsTableComponent_ng_container_8_td_2_ng_container_2_ng_container_1_Template, 4, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.selectFunction);
} }
function ResultsTableComponent_ng_container_8_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsTableComponent_ng_container_8_td_2_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultsTableComponent_ng_container_8_td_2_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r12 = ctx.index;
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](count_r12 % 2 == 0 ? "results-odd-row" : "results-even-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 == 0);
} }
function ResultsTableComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsTableComponent_ng_container_8_th_1_Template, 2, 1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultsTableComponent_ng_container_8_td_2_Template, 3, 5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const columnHeader_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", columnHeader_r6);
} }
function ResultsTableComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
function ResultsTableComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function ResultsTableComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
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
    constructor(loadService) {
        this.loadService = loadService;
        this.copyOfDisplayedColumns = new Array();
        this.iconName = "arrow_circle_up";
        this.iconTitle = "Select this Record";
        this.selectFunction = true;
        this.currentRowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.spinbarVisibility = false;
    }
    deletePressedOnKey(key) {
        console.log("Delete pressed On Row: " + key);
        this.currentRowSelected.emit(key);
        console.log("Function Emittied: " + key);
    }
    dataFilter(rowdata, filter) {
        let decision = false;
        if (rowdata != null) {
            if (rowdata.rowdata != null) {
                rowdata.rowdata.forEach(value => {
                    let a = value;
                    if (a != null && a.data != null) {
                        if (a.data.toLowerCase().indexOf(filter) >= 0) {
                            decision = true;
                            return decision;
                        }
                    }
                });
            }
        }
        return decision;
    }
    sortDataAccessor(data, sortHeaderId) {
        let dataToReturn = null;
        if (this.displayedColumns != null && this.displayedColumns != undefined) {
            let i = 0;
            for (let header of this.displayedColumns) {
                if (header == sortHeaderId) {
                    dataToReturn = data.rowdata[i].data;
                    return dataToReturn;
                }
                i++;
            }
        }
        return dataToReturn;
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = this.dataFilter.bind(this);
        this.dataSource.sortingDataAccessor = this.sortDataAccessor.bind(this);
    }
    ngOnInit() {
        this.displayedColumns.forEach(columnName => {
            this.copyOfDisplayedColumns.push(columnName);
        });
        this.loadService.httpProgress().subscribe(element => {
            this.spinbarVisibility = element;
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
ResultsTableComponent.ɵfac = function ResultsTableComponent_Factory(t) { return new (t || ResultsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service_service__WEBPACK_IMPORTED_MODULE_3__["LoaderServiceService"])); };
ResultsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultsTableComponent, selectors: [["app-results-table"]], viewQuery: function ResultsTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { displayedColumns: "displayedColumns", dataSource: "dataSource", iconName: "iconName", iconTitle: "iconTitle", selectFunction: "selectFunction" }, outputs: { currentRowSelected: "currentRowSelected" }, decls: 13, vars: 8, consts: [["matInput", "", "placeholder", "search...", 3, "keyup"], ["searchValue", ""], [1, "mat-elevation-z8"], [4, "ngIf"], ["mat-table", "", "matSort", "", 2, "width", "100%", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", "class", "results-heading-row", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "results-heading-row"], ["mat-cell", ""], ["mat-icon-button", "", 3, "title", "click"], [2, "font-size", "24px"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell", 2, "font-size", "small"]], template: function ResultsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ResultsTableComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResultsTableComponent_mat_spinner_6_Template, 1, 0, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResultsTableComponent_ng_container_8_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResultsTableComponent_tr_9_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResultsTableComponent_tr_10_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResultsTableComponent_tr_11_Template, 3, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-paginator", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinbarVisibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 25)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiLCJzcmMvYXBwL3Jlc3VsdHMtdGFibGUvcmVzdWx0cy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUdBOztJQUVJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUNyR0E7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHRzLXRhYmxlL3Jlc3VsdHMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHRzLW9kZC1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1ldmVuLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTIsIDI1Mik7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWhlYWRpbmctcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7IFxyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmhpZGRlbkl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGVJdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbmZvTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmluZm8tYmxvY2stdGl0bGUtcm93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4udGFibGUtbWVudS1jZWxsXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdC1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5mb3JtLWNlbGxcclxue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1mb3JtLWNlbGxcclxue1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59IiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy9jb21tb25zdHlsZXMuY3NzJztcclxuXHJcbi50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-results-table',
                templateUrl: './results-table.component.html',
                styleUrls: ['./results-table.component.css']
            }]
    }], function () { return [{ type: _loader_service_service__WEBPACK_IMPORTED_MODULE_3__["LoaderServiceService"] }]; }, { displayedColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectFunction: [{
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
    toString() {
        return this.data;
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





// Import Communication Model..

// Import Security Model

// Import constants.













function RoleManagementComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function RoleManagementComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function RoleManagementComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgRequiredField);
} }
function RoleManagementComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMsgTooManyCharacters);
} }
function RoleManagementComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.appIdentifier, " ");
} }
class RoleManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_4__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ "objectName": this.objectName, "objectDescription": this.objectDescription });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['Select', 'RoleName', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.formResults);
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["CreateClientRoleRequest"]();
        car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        this.managementClient.createClientRole(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["DeleteClientRoleRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteClientRole(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableClientRoles().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["CellInfo"](element.name));
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
        this.formTitle = "Manage Roles";
        this.loadViewableApps();
        this.loadViewableObjects();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].CLIENT_ROLE, this.callService);
    }
}
RoleManagementComponent.ɵfac = function RoleManagementComponent_Factory(t) { return new (t || RoleManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
RoleManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleManagementComponent, selectors: [["app-role-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 31, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["matInput", "", "placeholder", "Unique Role Name", 3, "formControl"], [4, "ngIf"], ["matInput", "", "placeholder", "describe the role..", 3, "formControl"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function RoleManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RoleManagementComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RoleManagementComponent_mat_error_22_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Resource Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RoleManagementComponent_mat_error_28_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RoleManagementComponent_mat_error_29_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RoleManagementComponent_Template_mat_select_valueChange_35_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RoleManagementComponent_mat_option_36_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleManagementComponent_Template_button_click_42_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleManagementComponent_Template_button_click_48_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "app-results-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function RoleManagementComponent_Template_app_results_table_currentRowSelected_58_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_3__["ResultsTableComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcm9sZS1tYW5hZ2VtZW50L3JvbGUtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-role-management',
                templateUrl: './role-management.component.html',
                styleUrls: ['./role-management.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");






// Import Communication Model..

// Import Security Model

// Import constants.













function RoleToPermissionsComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r13.name, " ");
} }
function RoleToPermissionsComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMsgRequiredField);
} }
function RoleToPermissionsComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.errorMsgTooManyCharacters);
} }
function RoleToPermissionsComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r14.name, " ");
} }
function RoleToPermissionsComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.errorMsgRequiredField);
} }
function RoleToPermissionsComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.errorMsgTooManyCharacters);
} }
function RoleToPermissionsComponent_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r15, " ");
} }
function RoleToPermissionsComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.errorMsgRequiredField);
} }
function RoleToPermissionsComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.errorMsgTooManyCharacters);
} }
function RoleToPermissionsComponent_mat_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r16.scopeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r16.scopeName, " ");
} }
function RoleToPermissionsComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.errorMsgRequiredField);
} }
function RoleToPermissionsComponent_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.errorMsgTooManyCharacters);
} }
function RoleToPermissionsComponent_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r17.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r17.appIdentifier, " ");
} }
class RoleToPermissionsComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_4__["BaseForm"] {
    constructor(callService, client) {
        super();
        // The selected group name.
        this.roleName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        // selected permission name
        this.permissionName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        // scope name - selected scope name
        this.scopeName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]);
        this.scopeAssignmentType = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]);
        this.permissionValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]); // allow,deny
        // the selected appidentifier
        this.appIdentifier = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({ "roleName": this.roleName, "permissionName": this.permissionName, "permissionValue": this.permissionValue, "scopeName": this.scopeName, "appIdentifier": this.appIdentifier });
        // the selected permission value..
        this.permissionValues = ["allow", "deny"];
        // The roles that are available to be assigned.
        this.viewableRoles = new Array();
        // The groups that are viewable by the person.
        this.viewablePermissions = new Array();
        // THe objects that we are managing.
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.viewableScopes = new Array();
        this.displayedColumns = ['Select', 'RoleName', 'Permission', 'Value', 'Scope', 'Scope Assignment Type', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.formResults);
        this.callService = callService;
        this.managementClient = client;
    }
    rowSelected(key) {
        this.currentKey = key;
        if (this.currentKey != undefined) {
            let dcgr = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["DeleteClientRolePermissionRequest"]();
            dcgr.key = this.currentKey;
            this.managementClient.deleteClientRolePermission(dcgr).subscribe(element => {
                if (element.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["RequestStatusInformation"].standardSuccessCode) {
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["CreateClientRolePermissionRequest"]();
        car.roleName = this.roleName.value;
        car.permissionName = this.permissionName.value;
        car.value = this.permissionValue.value;
        car.scopeName = this.scopeName.value;
        car.appIdentifier = this.appIdentifier.value;
        car.scopeAssignmentType = this.scopeAssignmentType.value;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        this.managementClient.createClientRolePermission(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["RequestStatusInformation"].standardSuccessCode)
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
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableRoles.push(element);
                });
            }
        });
    }
    loadViewablePermissions() {
        this.viewablePermissions.length = 0;
        this.callService.loadViewablePermissions().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewablePermissions.push(element);
                });
            }
        });
    }
    loadViewableScopes() {
        this.viewableScopes.length = 0;
        this.callService.loadViewableScopes().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableScopes.push(element);
                });
            }
        });
    }
    receiveViewableOjects(element) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.viewableObjects.length = 0;
            this.formResults.length = 0;
            if (element != null && element.clientRolePermissions != null) {
                element.clientRolePermissions.forEach(cgr => {
                    this.viewableObjects.push(cgr);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.key));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.roleName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.permissionName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.value));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.scopeName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["CellInfo"](cgr.scopeAssignmentType));
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
        if (this.roleName.value == null || this.roleName.value == undefined)
            return;
        let scgrr = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_6__["SearchClientRolePermissionRequest"]();
        scgrr.roleName = this.roleName.value;
        scgrr.permissionName = this.permissionName.value;
        scgrr.appIdentifier = this.appIdentifier.value;
        if (scgrr.appIdentifier == "GLOBAL")
            scgrr.appIdentifier = null;
        scgrr.scopeName = this.scopeName.value;
        this.managementClient.searchClientRolePermissions(scgrr).subscribe((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.receiveViewableOjects(element);
        }));
    }
    loadViewableApps() {
        this.viewableApps.length = 0;
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_7__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    clearFormControls() {
        this.roleName.setValue("");
        this.scopeName.setValue("");
        this.permissionName.setValue("");
        this.appIdentifier.setValue("GLOBAL");
        this.scopeAssignmentType.setValue("allow");
    }
    subscribeToChanges() {
        this.roleName.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
        this.scopeName.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
        this.permissionName.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
        this.appIdentifier.valueChanges.subscribe(event => {
            this.reloadObjects();
        });
    }
    ngOnInit() {
        this.formTitle = "Manage Role to Permission Mappings.";
        this.loadViewableRoles();
        this.loadViewablePermissions();
        this.loadViewableObjects();
        this.loadViewableApps();
        this.loadViewableScopes();
        this.subscribeToChanges();
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_8__["SecurityResources"].PERMISSION_ROLE_MEMBERSHIP, this.callService);
    }
}
RoleToPermissionsComponent.ɵfac = function RoleToPermissionsComponent_Factory(t) { return new (t || RoleToPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_9__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_10__["SecMgmtApiClientService"])); };
RoleToPermissionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoleToPermissionsComponent, selectors: [["app-role-to-permissions"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 78, vars: 40, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "placeholder", "allow,deny..", 3, "formControl"], [3, "value", "valueChange"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Clear Form Values", 3, "click"], [2, "font-size", "16px"], [3, "selectFunction", "iconTitle", "iconName", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function RoleToPermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Role Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RoleToPermissionsComponent_mat_option_21_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RoleToPermissionsComponent_mat_error_22_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RoleToPermissionsComponent_mat_error_23_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RoleToPermissionsComponent_mat_option_29_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RoleToPermissionsComponent_mat_error_30_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RoleToPermissionsComponent_mat_error_31_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Allow/Deny?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, RoleToPermissionsComponent_mat_option_37_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RoleToPermissionsComponent_mat_error_38_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, RoleToPermissionsComponent_mat_error_39_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Scope");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, RoleToPermissionsComponent_mat_option_45_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "ScopeAssignmentType");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, RoleToPermissionsComponent_mat_error_51_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, RoleToPermissionsComponent_mat_error_52_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RoleToPermissionsComponent_Template_mat_select_valueChange_57_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, RoleToPermissionsComponent_mat_option_58_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoleToPermissionsComponent_Template_button_click_62_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoleToPermissionsComponent_Template_button_click_67_listener() { return ctx.clearFormControls(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Clear Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "app-results-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("currentRowSelected", function RoleToPermissionsComponent_Template_app_results_table_currentRowSelected_77_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.roleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roleName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roleName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.permissionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewablePermissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.permissionName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.permissionName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.permissionValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permissionValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.permissionValue.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.permissionValue.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.scopeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableScopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.scopeAssignmentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.scopeAssignmentType.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.scopeAssignmentType.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectFunction", ctx.objectDeletePermission)("iconTitle", "Delete this Record")("iconName", "delete")("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_11__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_5__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcm9sZS10by1wZXJtaXNzaW9ucy9yb2xlLXRvLXBlcm1pc3Npb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoleToPermissionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-role-to-permissions',
                templateUrl: './role-to-permissions.component.html',
                styleUrls: ['./role-to-permissions.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_9__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_10__["SecMgmtApiClientService"] }]; }, null); })();


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





// Import Communication Model..

// Import Security Model

// Import constants.













function ScopeManagementComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
} }
function ScopeManagementComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgRequiredField);
} }
function ScopeManagementComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgTooManyCharacters);
} }
function ScopeManagementComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMsgRequiredField);
} }
function ScopeManagementComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.errorMsgTooManyCharacters);
} }
function ScopeManagementComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMsgRequiredField);
} }
function ScopeManagementComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.errorMsgTooManyCharacters);
} }
function ScopeManagementComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.errorMsgRequiredField);
} }
function ScopeManagementComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.errorMsgTooManyCharacters);
} }
function ScopeManagementComponent_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r11.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.appIdentifier, " ");
} }
class ScopeManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__["BaseForm"] {
    constructor(callService, client) {
        super();
        // The type of Scope that you are creating..
        this.scopeType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1024)]);
        this.objectValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ "scopeType": this.scopeType, "objectName": this.objectName, "objectDescription": this.objectDescription, "objectValue": this.objectValue });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.viewableScopeTypes = new Array();
        this.displayedColumns = ['Select', 'Name', 'Type', 'Value', 'Description', 'Owner App'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.formResults);
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
                        this.scopeType.setValue(rr.scopeType);
                        this.objectValue.setValue(rr.scopeValue);
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["CreateScopeRequest"]();
        car.name = this.objectName.value;
        car.description = this.objectDescription.value;
        car.value = this.objectValue.value;
        car.scopeType = this.scopeType.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        this.managementClient.createScope(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["DeleteScopeRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteScope(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    loadViewableScopeTypes() {
        this.viewableScopeTypes.length = 0;
        this.callService.loadViewableScopeTypes().then(values => {
            if (values != null && values != undefined) {
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
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.scopeName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.scopeName));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.scopeType));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.scopeValue));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.description));
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.appIdentifier));
                    let rr = new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultRow"](element.scopeName, ci);
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
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].ROLE_SCOPE, this.callService);
    }
}
ScopeManagementComponent.ɵfac = function ScopeManagementComponent_Factory(t) { return new (t || ScopeManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
ScopeManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScopeManagementComponent, selectors: [["app-scope-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 72, vars: 38, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "placeholder", "Unique Name", 3, "formControl"], ["matInput", "", "placeholder", "set the values..", 3, "formControl"], ["matInput", "", "placeholder", "describe the scope..", 3, "formControl"], [3, "value", "valueChange"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ScopeManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ScopeType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ScopeManagementComponent_mat_option_21_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ScopeManagementComponent_mat_error_22_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ScopeManagementComponent_mat_error_23_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Scope Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ScopeManagementComponent_mat_error_29_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ScopeManagementComponent_mat_error_30_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ScopeManagementComponent_mat_error_36_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ScopeManagementComponent_mat_error_37_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ScopeManagementComponent_mat_error_43_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ScopeManagementComponent_mat_error_44_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ScopeManagementComponent_Template_mat_select_valueChange_49_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ScopeManagementComponent_mat_option_50_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScopeManagementComponent_Template_button_click_55_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScopeManagementComponent_Template_button_click_61_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "app-results-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ScopeManagementComponent_Template_app_results_table_currentRowSelected_71_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.scopeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableScopeTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scopeType.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scopeType.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectValue.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectValue.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectDescription.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultsTableComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2NvcGUtbWFuYWdlbWVudC9zY29wZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScopeManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scope-management',
                templateUrl: './scope-management.component.html',
                styleUrls: ['./scope-management.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../results-table/results-table.component */ "./src/app/results-table/results-table.component.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/model/model */ "../../../modules/app-security-client/type-script/src/model/model.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





// Import Communication Model..

// Import Security Model

// Import constants.













function ScopeTypeManagementComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function ScopeTypeManagementComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function ScopeTypeManagementComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.appIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.appIdentifier, " ");
} }
class ScopeTypeManagementComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_3__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.objectName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]);
        this.objectDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1024)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ "objectName": this.objectName, "objectDescription": this.objectDescription });
        this.viewableObjects = new Array();
        this.viewableApps = new Array();
        this.displayedColumns = ['Select', 'ScopeType', 'Owner App'];
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["CreateScopeTypeRequest"]();
        // car.description = this.objectDescription.value;
        car.appIdentifier = this.appIdentifier;
        if (car.appIdentifier == "GLOBAL")
            car.appIdentifier = null;
        car.name = this.objectName.value;
        this.managementClient.createScopeType(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["DeleteScopeTypeRequest"]();
        car.name = this.objectName.value;
        this.managementClient.deleteScopeType(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_5__["RequestStatusInformation"].standardSuccessCode)
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
        let app = new _modules_app_security_client_type_script_src_model_model__WEBPACK_IMPORTED_MODULE_6__["Application"]();
        app.appIdentifier = "GLOBAL";
        app.shortIdentifier = "GLOBAL";
        this.viewableApps.push(app);
        this.callService.loadViewableApps().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableApps.push(element);
                });
            }
        });
    }
    loadViewableObjects() {
        this.viewableObjects.length = 0;
        this.formResults.length = 0;
        this.callService.loadViewableScopeTypes().then(values => {
            if (values != null && values != undefined) {
                values.forEach(element => {
                    this.viewableObjects.push(element);
                    let ci = new Array();
                    ci.push(new _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["CellInfo"](element.name));
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
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_7__["SecurityResources"].SCOPE_TYPE, this.callService);
    }
}
ScopeTypeManagementComponent.ɵfac = function ScopeTypeManagementComponent_Factory(t) { return new (t || ScopeTypeManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"])); };
ScopeTypeManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScopeTypeManagementComponent, selectors: [["app-scope-type-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 52, vars: 28, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [1, "mat-elevation-z8"], [1, "form-cell"], ["matInput", "", "placeholder", "Unique Identifier", 3, "formControl"], [4, "ngIf"], ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "title", "Save Record", 3, "disabled", "click"], [2, "font-size", "24px"], ["mat-icon-button", "", "title", "Delete Record", 3, "disabled", "click"], [3, "selectFunction", "dataSource", "displayedColumns", "currentRowSelected"], [3, "value"]], template: function ScopeTypeManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Scope Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ScopeTypeManagementComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ScopeTypeManagementComponent_mat_error_22_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Associated App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ScopeTypeManagementComponent_Template_mat_select_valueChange_28_listener($event) { return ctx.appIdentifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ScopeTypeManagementComponent_mat_option_29_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScopeTypeManagementComponent_Template_button_click_35_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScopeTypeManagementComponent_Template_button_click_41_listener() { return ctx.deleteObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Existing Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "app-results-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentRowSelected", function ScopeTypeManagementComponent_Template_app_results_table_currentRowSelected_51_listener($event) { return ctx.rowSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.objectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objectName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.appIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewableApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isReadPermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectFunction", ctx.isCreateOrDeletePermission())("dataSource", ctx.dataSource)("displayedColumns", ctx.displayedColumns);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_10__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _results_table_results_table_component__WEBPACK_IMPORTED_MODULE_4__["ResultsTableComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2NvcGUtdHlwZS1tYW5hZ2VtZW50L3Njb3BlLXR5cGUtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScopeTypeManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scope-type-management',
                templateUrl: './scope-type-management.component.html',
                styleUrls: ['./scope-type-management.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_8__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_9__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/side-vertical-menu/side-vertical-menu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/side-vertical-menu/side-vertical-menu.component.ts ***!
  \********************************************************************/
/*! exports provided: SideVerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideVerticalMenuComponent", function() { return SideVerticalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service.ts");
/* harmony import */ var src_app_loader_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader-service.service */ "./src/app/loader-service.service.ts");
/* harmony import */ var _table_menu_vert_table_menu_vert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table-menu-vert/table-menu-vert.component */ "./src/app/table-menu-vert/table-menu-vert.component.ts");




// Import constants.





class SideVerticalMenuComponent extends src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(client, loadService) {
        super();
        this.loadService = loadService;
        this.allMenuItems = new Array();
        this.apiClient = client;
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
        let secApiRequest = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SecurityAPIRequest"]();
        secApiRequest.action = _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityActions"].READ;
        let resources = new Array();
        let menuItems = new Array();
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Actions", "Manage Actions", "/actionManagement");
            item.imageLink = "rowing";
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].ACTION);
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Applications", "Manage Applications", "/appManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].APPLICATION);
            item.imageLink = "apps";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Clients", "Manage clients", "/clientManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].CLIENT);
            item.imageLink = "person";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Permissions", "Manage Permissions", "/permissionManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].PERMISSION);
            item.imageLink = "lock";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Resources", "Manage Resources", "/resourceManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].RESOURCE);
            item.imageLink = "grain";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Domains", "Manage resource actions", "/domainManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].RESOURCE_DOMAIN);
            item.imageLink = "public";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Groups", "Manage Client Groups", "/clientGroupManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].CLIENT_GROUP);
            item.imageLink = "group";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Group-Roles", "Manage Role that Groups have", "/groupRoleManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].GROUP_ROLE_MEMBERSHIP);
            item.imageLink = "recent_actors";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Roles", "Manage Roles", "/clientRoleManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].CLIENT_ROLE);
            item.imageLink = "school";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Role to Permission", "Manage Roles to Permission Mapping", "/rolePermissionManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].PERMISSION_ROLE_MEMBERSHIP);
            item.imageLink = "psychology";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Scope-Types", "Manage types of scopes in the system.", "/scopetypeManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].SCOPE_TYPE);
            item.imageLink = "panorama_vertical";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Scope", "Manage scopes in the system.", "/scopeManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].ROLE_SCOPE);
            item.imageLink = "panorama_horizontal";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Memberships", "Manage Group Memberships", "/clientToGroups");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].CLIENT_GROUP_MEMBERSHIP);
            item.imageLink = "group_add";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Domain-Types", "Manage Resource Domain Types", "/domaintypeManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].RESOURCE_DOMAIN_TYPE);
            item.imageLink = "grain";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("ChangeLogs", "View Change Logs", "/viewChangeLogs");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].CHANGE_LOG);
            item.imageLink = "change_history";
            menuItems.push(item);
        }
        this.setUpMenuBasedOnPermission(secApiRequest, resources, menuItems);
    }
    ngOnInit() {
        this.figureOutMenutItems();
    }
}
SideVerticalMenuComponent.ɵfac = function SideVerticalMenuComponent_Factory(t) { return new (t || SideVerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ContextMgmtApiClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_service_service__WEBPACK_IMPORTED_MODULE_5__["LoaderServiceService"])); };
SideVerticalMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideVerticalMenuComponent, selectors: [["app-side-vertical-menu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "menuItems"]], template: function SideVerticalMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table-menu-vert", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuItems", ctx.allMenuItems);
    } }, directives: [_table_menu_vert_table_menu_vert_component__WEBPACK_IMPORTED_MODULE_6__["TableMenuVertComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtdmVydGljYWwtbWVudS9zaWRlLXZlcnRpY2FsLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideVerticalMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-vertical-menu',
                templateUrl: './side-vertical-menu.component.html',
                styleUrls: ['./side-vertical-menu.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ContextMgmtApiClientService"] }, { type: src_app_loader_service_service__WEBPACK_IMPORTED_MODULE_5__["LoaderServiceService"] }]; }, null); })();


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

/***/ "./src/app/table-menu-vert/table-menu-vert.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/table-menu-vert/table-menu-vert.component.ts ***!
  \**************************************************************/
/*! exports provided: TableMenuVertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableMenuVertComponent", function() { return TableMenuVertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





function TableMenuVertComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r1.itemLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r1.itemTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.imageLink == undefined || item_r1.imageLink == null ? "hiddenItem" : "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.itemName);
} }
class TableMenuVertComponent {
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
TableMenuVertComponent.ɵfac = function TableMenuVertComponent_Factory(t) { return new (t || TableMenuVertComponent)(); };
TableMenuVertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableMenuVertComponent, selectors: [["app-table-menu-vert"]], inputs: { menuItems: "menuItems" }, decls: 5, vars: 7, consts: [[2, "width", "auto", "table-layout", "auto"], [4, "ngFor", "ngForOf"], [1, "table-menu-cell"], ["routerLinkActive", "active", 3, "routerLink", "title"], ["aria-hidden", "false"], [2, "font-size", "smaller"]], template: function TableMenuVertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing to display, no menu items.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableMenuVertComponent_tr_4_Template, 9, 7, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.anyItems() ? "hiddenItem" : "visibleItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.anyItems() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLW1lbnUtdmVydC90YWJsZS1tZW51LXZlcnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableMenuVertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-menu-vert',
                templateUrl: './table-menu-vert.component.html',
                styleUrls: ['./table-menu-vert.component.css']
            }]
    }], function () { return []; }, { menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/table-menu/table-menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/table-menu/table-menu.component.ts ***!
  \****************************************************/
/*! exports provided: TableMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableMenuComponent", function() { return TableMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





function TableMenuComponent_td_9_Template(rf, ctx) { if (rf & 1) {
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
TableMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableMenuComponent, selectors: [["app-table-menu"]], inputs: { menuItems: "menuItems" }, decls: 10, vars: 7, consts: [[2, "width", "100%", "table-layout", "auto"], [1, "mat-elevation-z8"], ["class", "table-menu-cell", 4, "ngFor", "ngForOf"], [1, "table-menu-cell"], ["routerLinkActive", "active", 3, "routerLink", "title"], ["aria-hidden", "false"], [2, "font-size", "smaller"]], template: function TableMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing to display, no menu items.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableMenuComponent_td_9_Template, 8, 7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdGFibGUtbWVudS90YWJsZS1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufSJdfQ== */"] });
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
/* harmony import */ var src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service.ts");
/* harmony import */ var src_app_loader_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader-service.service */ "./src/app/loader-service.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../table-menu/table-menu.component */ "./src/app/table-menu/table-menu.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");




// Import constants








function TopbarComponent_mat_spinner_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
} }
class TopbarComponent extends src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(client, loadService) {
        super();
        this.loadService = loadService;
        this.spinBarVisibility = false;
        this.loggedInUser = "NotloggedIn";
        this.allMenuItems = new Array();
        this.apiClient = client;
    }
    setUpMenuBasedOnPermission(secApiRequest, mi) {
        this.allMenuItems.length = 0;
        let observable = this.apiClient.hasPermissions(secApiRequest);
        observable.subscribe((value) => {
            if (value.results != null) {
                let count = 0;
                value.results.forEach(element => {
                    if (element == true) {
                        this.allMenuItems.push(mi[count]);
                    }
                    count++;
                });
            }
        });
    }
    figureOutMenutItems() {
        this.allMenuItems.length = 0; // Clear the menu Items.
        let secApiRequest = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__["SecurityAPIRequest"]();
        secApiRequest.action = _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityActions"].READ;
        let resources = new Array();
        let menuItems = new Array();
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Actions", "Manage Actions", "/actionManagement");
            item.imageLink = "rowing";
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].ACTION);
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Applications", "Manage Applications", "/appManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].APPLICATION);
            item.imageLink = "apps";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Clients", "Manage clients", "/clientManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].CLIENT);
            item.imageLink = "person";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Permissions", "Manage Permissions", "/permissionManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].PERMISSION);
            item.imageLink = "lock";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Resources", "Manage Resources", "/resourceManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].RESOURCE);
            item.imageLink = "grain";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Domains", "Manage resource actions", "/domainManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].RESOURCE_DOMAIN);
            item.imageLink = "public";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Groups", "Manage Client Groups", "/clientGroupManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].CLIENT_GROUP);
            item.imageLink = "group";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Group-Roles", "Manage Role that Groups have", "/groupRoleManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].GROUP_ROLE_MEMBERSHIP);
            item.imageLink = "recent_actors";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Roles", "Manage Roles", "/clientRoleManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].CLIENT_ROLE);
            item.imageLink = "school";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Role to Permission", "Manage Roles to Permission Mapping", "/rolePermissionManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].PERMISSION_ROLE_MEMBERSHIP);
            item.imageLink = "psychology";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Scope-Types", "Manage types of scopes in the system.", "/scopetypeManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].SCOPE_TYPE);
            item.imageLink = "panorama_vertical";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Scope", "Manage scopes in the system.", "/scopeManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].ROLE_SCOPE);
            item.imageLink = "panorama_horizontal";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Memberships", "Manage Group Memberships", "/clientToGroups");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].CLIENT_GROUP_MEMBERSHIP);
            item.imageLink = "group_add";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Domain-Types", "Manage Resource Domain Types", "/domaintypeManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].RESOURCE_DOMAIN_TYPE);
            item.imageLink = "grain";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("ChangeLogs", "View Change Logs", "/viewChangeLogs");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].CHANGE_LOG);
            item.imageLink = "track_changes";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("BasicAuthClients", "Manage Basic Authentication Clients", "/basicAuthClientManagement");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].BASIC_AUTH_CLIENT);
            item.imageLink = "security";
            menuItems.push(item);
        }
        {
            let item = new src_app_base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]("Onboard-Apps", "Onboard a trusted Basic Auth App", "/onboardTrustedBasicApp");
            resources.push(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].ONBOARD_TRUSTED_APP);
            item.imageLink = "add";
            menuItems.push(item);
        }
        // Let us assign the resources..
        secApiRequest.resources = resources;
        this.setUpMenuBasedOnPermission(secApiRequest, menuItems);
    }
    figureOutLoggedInUser() {
        let req = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__["GetSecurityContextRequest"]();
        this.apiClient.getSecurityContext(req).subscribe(element => {
            if (element.status.statusCode = _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_2__["RequestStatusInformation"].standardSuccessCode) {
                this.loggedInUser = element.appClient.clientIdentifier;
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
        // console.log("Subscribing to the loadService..");
        this.loadService.httpProgress().subscribe(element => {
            this.spinBarVisibility = element;
        });
    }
    ngAfterViewInit() {
        this.figureOutLoggedInUser();
        this.figureOutMenutItems();
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ContextMgmtApiClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_service_service__WEBPACK_IMPORTED_MODULE_5__["LoaderServiceService"])); };
TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 3, consts: [[2, "width", "100%"], [2, "text-align", "right", "vertical-align", "middle", "width", "1%", "padding-right", "20px"], [2, "font-size", "40px", "align-content", "right"], [2, "text-align", "left", "vertical-align", "middle", "width", "60%", "font-size", "larger"], [2, "text-align", "right", "font-size", "smaller", "width", "20%", "vertical-align", "middle"], ["href", "/logout", "title", "logout"], [2, "font-size", "16px", "align-content", "right", "vertical-align", "middle"], [2, "width", "2%"], [3, "diameter", 4, "ngIf"], [3, "menuItems"], [3, "diameter"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "admin_panel_settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Application Security Management Console ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TopbarComponent_mat_spinner_13_Template, 1, 1, "mat-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-table-menu", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Logged user: ", ctx.loggedInUser, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinBarVisibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuItems", ctx.allMenuItems);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _table_menu_table_menu_component__WEBPACK_IMPORTED_MODULE_8__["TableMenuComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtb2RkLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV2ZW4tcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZy1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmdcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tY29udGVudDogbGVmdDsgXHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tbGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uaGlkZGVuSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZUl0ZW1cclxue1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmluZm9NZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmVycm9yTWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay10aXRsZS1yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW5mby1ibG9jay1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi50YWJsZS1tZW51LWNlbGxcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWZvcm0tY2VsbFxyXG57XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topbar',
                templateUrl: './topbar.component.html',
                styleUrls: ['./topbar.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_context_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_4__["ContextMgmtApiClientService"] }, { type: src_app_loader_service_service__WEBPACK_IMPORTED_MODULE_5__["LoaderServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/trusted-app-onboarding/trusted-app-onboarding.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/trusted-app-onboarding/trusted-app-onboarding.component.ts ***!
  \****************************************************************************/
/*! exports provided: TrustedAppOnboardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustedAppOnboardingComponent", function() { return TrustedAppOnboardingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-comps/commonforms */ "./src/app/base-comps/commonforms.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/constants/constants */ "../../../modules/app-security-client/type-script/src/constants/constants.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client/commmodel */ "../../../modules/app-security-client/type-script/src/client/commmodel.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service */ "../../../modules/app-security-client/type-script/src/client-service/common-calls.service.ts");
/* harmony import */ var _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service */ "../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service.ts");
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../info-block/info-block.component */ "./src/app/info-block/info-block.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



// Import constants











function TrustedAppOnboardingComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMsgRequiredField);
} }
function TrustedAppOnboardingComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsgTooManyCharacters);
} }
function TrustedAppOnboardingComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMsgRequiredField);
} }
function TrustedAppOnboardingComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMsgTooManyCharacters);
} }
function TrustedAppOnboardingComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.errorMsgRequiredField);
} }
function TrustedAppOnboardingComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMsgTooManyCharacters);
} }
function TrustedAppOnboardingComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.errorMsgRequiredField);
} }
function TrustedAppOnboardingComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.errorMsgTooManyCharacters);
} }
function TrustedAppOnboardingComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.errorMsgRequiredField);
} }
function TrustedAppOnboardingComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.errorMsgTooManyCharacters);
} }
function TrustedAppOnboardingComponent_mat_error_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.errorMsgRequiredField);
} }
function TrustedAppOnboardingComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.errorMsgTooManyCharacters);
} }
function TrustedAppOnboardingComponent_mat_error_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.errorMsgRequiredField);
} }
function TrustedAppOnboardingComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.errorMsgTooManyCharacters);
} }
function TrustedAppOnboardingComponent_mat_error_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.errorMsgRequiredField);
} }
function TrustedAppOnboardingComponent_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.errorMsgTooManyCharacters);
} }
function TrustedAppOnboardingComponent_mat_error_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.errorMsgRequiredField);
} }
function TrustedAppOnboardingComponent_mat_error_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.errorMsgTooManyCharacters);
} }
function TrustedAppOnboardingComponent_mat_error_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.errorMsgRequiredField);
} }
function TrustedAppOnboardingComponent_mat_error_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.errorMsgTooManyCharacters);
} }
class TrustedAppOnboardingComponent extends _base_comps_commonforms__WEBPACK_IMPORTED_MODULE_1__["BaseForm"] {
    constructor(callService, client) {
        super();
        this.appName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.appAccronym = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.appDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]);
        this.basicAuthAppUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.basicAuthAppPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.basicAuthAppOwnerClientId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.basicAuthAppOwnerPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.appOwnersGroupName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.trustedAppsGroupName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.appOwnerRole = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ "appName": this.appName,
            "appAccronym": this.appAccronym,
            "appDescription": this.appDescription,
            "basicAuthAppUser": this.basicAuthAppUser,
            "basicAuthAppPassword": this.basicAuthAppPassword,
            "basicAuthAppOwnerClientId": this.basicAuthAppOwnerClientId,
            "basicAuthAppOwnerPassword": this.basicAuthAppOwnerPassword,
            "appOwnersGroupName": this.appOwnersGroupName,
            "trustedAppsGroupName": this.trustedAppsGroupName,
            "appOwnerRole": this.appOwnerRole
        });
        this.callService = callService;
        this.managementClient = client;
    }
    loadDefaultValues() {
        this.formTitle = "Create A Trusted Basic Authentication App";
        this.updatePermissionFlags(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityResources"].ONBOARD_TRUSTED_APP, this.callService);
        this.appOwnerRole.setValue(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityGroupsAndRoles"].APP_OWNER_ROLE);
        this.trustedAppsGroupName.setValue(_modules_app_security_client_type_script_src_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SecurityGroupsAndRoles"].TRUSTED_APP_GROUP);
    }
    updateObject() {
        let car = new _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__["CreateTrustedBasicAppRequest"]();
        car.appAccronym = this.appAccronym.value;
        car.appName = this.appName.value;
        car.appDescription = this.appDescription.value;
        car.appOwnerRole = this.appOwnerRole.value;
        car.appOwnersGroupName = this.appOwnersGroupName.value;
        car.basicAuthAppOwnerClientId = this.basicAuthAppOwnerClientId.value;
        car.basicAuthAppOwnerPassword = this.basicAuthAppOwnerPassword.value;
        car.basicAuthAppUser = this.basicAuthAppUser.value;
        car.basicAuthAppPassword = this.basicAuthAppPassword.value;
        car.trustedAppsGroupName = this.trustedAppsGroupName.value;
        this.managementClient.createTrustedBasicAuthApp(car).subscribe(value => {
            console.log(value.status.statusMessage);
            if (value.status.statusCode == _modules_app_security_client_type_script_src_client_commmodel__WEBPACK_IMPORTED_MODULE_4__["RequestStatusInformation"].standardSuccessCode)
                this.setInfoMessage(value.status.statusMessage);
            else
                this.setErrorMessage(value.status.statusMessage);
        }, error => {
            console.log(JSON.stringify(error));
            this.setErrorMessage("Failed to create/update record.. check browser console for logs");
        });
    }
    onKeyUpAppName(event) {
        let appNameValue = this.appName.value;
        if (appNameValue != null || appNameValue != undefined) {
            this.appAccronym.setValue(appNameValue);
            this.appDescription.setValue("Trusted App: " + appNameValue);
            this.basicAuthAppUser.setValue(appNameValue + "_bac");
            this.basicAuthAppOwnerClientId.setValue(appNameValue + "_owner");
            this.appOwnersGroupName.setValue(appNameValue + "_owners");
        }
    }
    ngOnInit() {
        // Lets put default values..
        this.loadDefaultValues();
    }
}
TrustedAppOnboardingComponent.ɵfac = function TrustedAppOnboardingComponent_Factory(t) { return new (t || TrustedAppOnboardingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_5__["CommonCallsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_6__["SecMgmtApiClientService"])); };
TrustedAppOnboardingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrustedAppOnboardingComponent, selectors: [["app-trusted-app-onboarding"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 114, vars: 43, consts: [[3, "errorClass", "infoClass", "messages", "informationBlockTitle"], [1, "section-title"], [1, "section-heading"], [2, "width", "100%"], [1, "mat-elevation-z8"], [1, "form-cell", 2, "width", "30%", "vertical-align", "top"], ["matInput", "", "placeholder", "Unique name for application", 3, "formControl", "keyup"], [4, "ngIf"], ["title", "Provide a unique application name in the system", 2, "font-size", "16px"], ["matInput", "", "placeholder", "Unique Short Acronym", 3, "formControl"], ["title", "Provide a unique short Acronym.", 2, "font-size", "16px"], ["matInput", "", "placeholder", "Describe the application", 3, "formControl"], ["matInput", "", "placeholder", "A unique name for the basic apps client id", 3, "formControl"], ["title", "This is the client id that will be used in the basic auth client for the application.", 2, "font-size", "16px"], ["type", "password", "matInput", "", "placeholder", "A non zero password", 3, "formControl"], ["title", "Password for the above basic auth client id.", 2, "font-size", "16px"], ["matInput", "", "placeholder", "A unique client id for the app owner", 3, "formControl"], ["title", "This is the id for this applications owner. For basic auth, this will be what the user will use to sign in to the admin console.", 2, "font-size", "16px"], ["type", "password", "matInput", "", "placeholder", "A non zero password for app owner", 3, "formControl"], ["title", "Password for the above.", 2, "font-size", "16px"], ["matInput", "", "placeholder", "Name of the group to be created for this apps owner", 3, "formControl"], ["title", "This is the name of the group that needs to be created for the appowners to be placed in. The app owner role will be associated with this group.", 2, "font-size", "16px"], ["matInput", "", "placeholder", "Don't change unless required. The apps group where the app needs to be placed", 3, "formControl"], ["title", "System defined group to place the application in. Unless it is different then shown, no need to change this. ", 2, "font-size", "16px"], ["matInput", "", "placeholder", "Don't change unless required. The role to be granted to app owner", 3, "formControl"], ["title", "System defined app owner role. Unless you happen to know that it is different, no need to change this.", 2, "font-size", "16px"], [1, "form-cell"], ["mat-icon-button", "", "title", "Create Record", 3, "disabled", "click"], [2, "font-size", "24px"]], template: function TrustedAppOnboardingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info-block", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "AppName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TrustedAppOnboardingComponent_Template_input_keyup_20_listener($event) { return ctx.onKeyUpAppName($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TrustedAppOnboardingComponent_mat_error_21_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TrustedAppOnboardingComponent_mat_error_22_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "AppAcronym");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TrustedAppOnboardingComponent_mat_error_30_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TrustedAppOnboardingComponent_mat_error_31_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "AppDescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TrustedAppOnboardingComponent_mat_error_39_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TrustedAppOnboardingComponent_mat_error_40_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "BasicAppAuthUser(client-id)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, TrustedAppOnboardingComponent_mat_error_47_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TrustedAppOnboardingComponent_mat_error_48_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "BasicAuthAppPassword(password for basic auth client)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TrustedAppOnboardingComponent_mat_error_56_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TrustedAppOnboardingComponent_mat_error_57_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "App Owner Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, TrustedAppOnboardingComponent_mat_error_65_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, TrustedAppOnboardingComponent_mat_error_66_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "App Owner Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, TrustedAppOnboardingComponent_mat_error_74_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, TrustedAppOnboardingComponent_mat_error_75_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "AppOwners Group Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, TrustedAppOnboardingComponent_mat_error_83_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, TrustedAppOnboardingComponent_mat_error_84_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Trusted Apps Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, TrustedAppOnboardingComponent_mat_error_93_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, TrustedAppOnboardingComponent_mat_error_94_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "App Owner Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, TrustedAppOnboardingComponent_mat_error_102_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, TrustedAppOnboardingComponent_mat_error_103_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrustedAppOnboardingComponent_Template_button_click_110_listener() { return ctx.updateObject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "errorMessage")("infoClass", "infoMessage")("messages", ctx.messages)("informationBlockTitle", "Information !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreateOrDeletePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.appAccronym);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appAccronym.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appAccronym.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.appDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appDescription.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appDescription.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.basicAuthAppUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicAuthAppUser.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicAuthAppUser.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.basicAuthAppPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicAuthAppPassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicAuthAppPassword.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.basicAuthAppOwnerClientId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicAuthAppOwnerClientId.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicAuthAppOwnerClientId.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.basicAuthAppOwnerPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicAuthAppOwnerPassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicAuthAppOwnerPassword.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.appOwnersGroupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appOwnersGroupName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appOwnersGroupName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.trustedAppsGroupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trustedAppsGroupName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trustedAppsGroupName.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.appOwnerRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appOwnerRole.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appOwnerRole.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isCreatePermission() ? "visibleItem" : "hiddenItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
    } }, directives: [_info_block_info_block_component__WEBPACK_IMPORTED_MODULE_7__["InfoBlockComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".results-odd-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\r\n\r\n.results-even-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    background-color: rgb(252, 252, 252);\r\n    font-size: smaller;\r\n}\r\n\r\n.results-heading-row[_ngcontent-%COMP%]\r\n{\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    font-size: larger;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]\r\n{\r\n    width: 100%; \r\n    align-content: left; \r\n    border: 0;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]\r\n{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%]\r\n{\r\n    font-size: inherit;\r\n}\r\n\r\n.hiddenItem[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n.visibleItem[_ngcontent-%COMP%]\r\n{\r\n    display: inherit;\r\n}\r\n\r\n.infoMessage[_ngcontent-%COMP%]\r\n{\r\n    color: green;\r\n    font-size: smaller;\r\n}\r\n\r\n.errorMessage[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n    font-size: smaller;\r\n}\r\n\r\n.info-block-title-row[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: normal;\r\n}\r\n\r\n.info-block-button[_ngcontent-%COMP%]\r\n{\r\n    margin: 2px;\r\n}\r\n\r\n.table-menu-cell[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    align-content: center;\r\n}\r\n\r\n.form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.info-block-form-cell[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px;\r\n    font-size: smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL2NvbW1vbnN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUdBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBR0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdHJ1c3RlZC1hcHAtb25ib2FyZGluZy90cnVzdGVkLWFwcC1vbmJvYXJkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cy1vZGQtcm93XHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLnJlc3VsdHMtZXZlbi1yb3dcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZWFkaW5nLXJvd1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZ1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0OyBcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oaWRkZW5JdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlSXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uaW5mb01lc3NhZ2Vcclxue1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLXRpdGxlLXJvd1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrLWJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLnRhYmxlLW1lbnUtY2VsbFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvblxyXG57XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmluZm8tYmxvY2stZm9ybS1jZWxsXHJcbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrustedAppOnboardingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trusted-app-onboarding',
                templateUrl: './trusted-app-onboarding.component.html',
                styleUrls: ['./trusted-app-onboarding.component.css']
            }]
    }], function () { return [{ type: _modules_app_security_client_type_script_src_client_service_common_calls_service__WEBPACK_IMPORTED_MODULE_5__["CommonCallsService"] }, { type: _modules_app_security_client_type_script_src_client_service_sec_mgmt_api_client_service__WEBPACK_IMPORTED_MODULE_6__["SecMgmtApiClientService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    contextApiBaseUrl: "http://localhost:9570/v1/contextapi",
    managementApiBaseUrl: "http://localhost:9570/v1/managementapi",
    username: "",
    password: "admin"
};
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

module.exports = __webpack_require__(/*! C:\works\source-code\github\V2Solve\app-security\app-security-admin-app\angular\adminapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map