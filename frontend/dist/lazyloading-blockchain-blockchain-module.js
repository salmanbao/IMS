(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazyloading-blockchain-blockchain-module"],{

/***/ "./src/app/lazyloading/blockchain/blockchain.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/blockchain.module.ts ***!
  \*************************************************************/
/*! exports provided: BlockchainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainModule", function() { return BlockchainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blockchainhome_blockchainhome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockchainhome/blockchainhome.component */ "./src/app/lazyloading/blockchain/blockchainhome/blockchainhome.component.ts");
/* harmony import */ var _chaincode_addcc_addcc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chaincode/addcc/addcc.component */ "./src/app/lazyloading/blockchain/chaincode/addcc/addcc.component.ts");
/* harmony import */ var app_routings_blockchain_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/routings/blockchain.routing */ "./src/app/routings/blockchain.routing.ts");
/* harmony import */ var app_modules_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _ca_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ca/add-member/add-member.component */ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.ts");
/* harmony import */ var _chaincode_initiate_cc_initiate_cc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chaincode/initiate-cc/initiate-cc.component */ "./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.ts");
/* harmony import */ var _peers_add_peer_add_peer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./peers/add-peer/add-peer.component */ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.ts");
/* harmony import */ var _channel_managechannels_managechannels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./channel/managechannels/managechannels.component */ "./src/app/lazyloading/blockchain/channel/managechannels/managechannels.component.ts");
/* harmony import */ var _organization_manage_members_manage_members_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organization/manage-members/manage-members.component */ "./src/app/lazyloading/blockchain/organization/manage-members/manage-members.component.ts");
/* harmony import */ var _organization_add_members_certificates_add_members_certificates_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./organization/add-members-certificates/add-members-certificates.component */ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-members-certificates.component.ts");
/* harmony import */ var _channel_add_channel_add_channel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./channel/add-channel/add-channel.component */ "./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.ts");
/* harmony import */ var _ca_manage_certificates_authority_manage_certificates_authority_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ca/manage-certificates-authority/manage-certificates-authority.component */ "./src/app/lazyloading/blockchain/ca/manage-certificates-authority/manage-certificates-authority.component.ts");
/* harmony import */ var _organization_list_org_members_list_org_members_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./organization/list-org-members/list-org-members.component */ "./src/app/lazyloading/blockchain/organization/list-org-members/list-org-members.component.ts");
/* harmony import */ var _notification_manage_notifications_manage_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notification/manage-notifications/manage-notifications.component */ "./src/app/lazyloading/blockchain/notification/manage-notifications/manage-notifications.component.ts");
/* harmony import */ var _notification_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./notification/all-notifications/all-notifications.component */ "./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.ts");
/* harmony import */ var _notification_pending_notifications_pending_notifications_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notification/pending-notifications/pending-notifications.component */ "./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.ts");
/* harmony import */ var _notification_completed_notifications_completed_notifications_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notification/completed-notifications/completed-notifications.component */ "./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.ts");
/* harmony import */ var _organization_list_org_members_add_member_dialog_add_member_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./organization/list-org-members/add-member-dialog/add-member-dialog.component */ "./src/app/lazyloading/blockchain/organization/list-org-members/add-member-dialog/add-member-dialog.component.ts");
/* harmony import */ var _organization_add_members_certificates_add_member_certificates_dialog_add_member_certificates_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component */ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.ts");
/* harmony import */ var _peers_list_peers_list_peers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./peers/list-peers/list-peers.component */ "./src/app/lazyloading/blockchain/peers/list-peers/list-peers.component.ts");
/* harmony import */ var _channel_request_channel_request_channel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./channel/request-channel/request-channel.component */ "./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.ts");
/* harmony import */ var _chaincode_install_chaincode_install_chaincode_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./chaincode/install-chaincode/install-chaincode.component */ "./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.ts");
/* harmony import */ var _chaincode_list_chaincode_list_chaincode_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chaincode/list-chaincode/list-chaincode.component */ "./src/app/lazyloading/blockchain/chaincode/list-chaincode/list-chaincode.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var BlockchainModule = /** @class */ (function () {
    function BlockchainModule() {
    }
    BlockchainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                app_routings_blockchain_routing__WEBPACK_IMPORTED_MODULE_5__["BlockchainRoutingModule"]
            ],
            declarations: [
                _blockchainhome_blockchainhome_component__WEBPACK_IMPORTED_MODULE_3__["BlockchainhomeComponent"],
                _channel_managechannels_managechannels_component__WEBPACK_IMPORTED_MODULE_10__["ManagechannelsComponent"],
                _chaincode_addcc_addcc_component__WEBPACK_IMPORTED_MODULE_4__["AddccComponent"],
                _ca_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__["AddMemberComponent"],
                _organization_manage_members_manage_members_component__WEBPACK_IMPORTED_MODULE_11__["ManageMembersComponent"],
                _organization_add_members_certificates_add_members_certificates_component__WEBPACK_IMPORTED_MODULE_12__["AddMembersCertificatesComponent"],
                _channel_add_channel_add_channel_component__WEBPACK_IMPORTED_MODULE_13__["AddChannelComponent"],
                _chaincode_initiate_cc_initiate_cc_component__WEBPACK_IMPORTED_MODULE_8__["InitiateCCComponent"],
                _peers_add_peer_add_peer_component__WEBPACK_IMPORTED_MODULE_9__["AddPeerComponent"],
                _ca_manage_certificates_authority_manage_certificates_authority_component__WEBPACK_IMPORTED_MODULE_14__["ManageCertificatesAuthorityComponent"],
                _organization_list_org_members_list_org_members_component__WEBPACK_IMPORTED_MODULE_15__["ListOrgMembersComponent"],
                _notification_manage_notifications_manage_notifications_component__WEBPACK_IMPORTED_MODULE_16__["ManageNotificationsComponent"],
                _notification_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_17__["AllNotificationsComponent"],
                _notification_pending_notifications_pending_notifications_component__WEBPACK_IMPORTED_MODULE_18__["PendingNotificationsComponent"],
                _notification_completed_notifications_completed_notifications_component__WEBPACK_IMPORTED_MODULE_19__["CompletedNotificationsComponent"],
                _organization_list_org_members_add_member_dialog_add_member_dialog_component__WEBPACK_IMPORTED_MODULE_20__["AddMemberDialogComponent"],
                _organization_add_members_certificates_add_member_certificates_dialog_add_member_certificates_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddMemberCertificatesDialogComponent"],
                _peers_list_peers_list_peers_component__WEBPACK_IMPORTED_MODULE_22__["ListPeersComponent"],
                _channel_request_channel_request_channel_component__WEBPACK_IMPORTED_MODULE_23__["RequestChannelComponent"],
                _chaincode_install_chaincode_install_chaincode_component__WEBPACK_IMPORTED_MODULE_24__["InstallChaincodeComponent"],
                _chaincode_list_chaincode_list_chaincode_component__WEBPACK_IMPORTED_MODULE_25__["ListChaincodeComponent"]
            ],
            entryComponents: [
                _organization_list_org_members_add_member_dialog_add_member_dialog_component__WEBPACK_IMPORTED_MODULE_20__["AddMemberDialogComponent"],
                _organization_add_members_certificates_add_member_certificates_dialog_add_member_certificates_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddMemberCertificatesDialogComponent"],
                _channel_add_channel_add_channel_component__WEBPACK_IMPORTED_MODULE_13__["AddChannelComponent"],
                _channel_request_channel_request_channel_component__WEBPACK_IMPORTED_MODULE_23__["RequestChannelComponent"],
                _peers_add_peer_add_peer_component__WEBPACK_IMPORTED_MODULE_9__["AddPeerComponent"],
                _chaincode_install_chaincode_install_chaincode_component__WEBPACK_IMPORTED_MODULE_24__["InstallChaincodeComponent"],
                _ca_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__["AddMemberComponent"],
                _chaincode_initiate_cc_initiate_cc_component__WEBPACK_IMPORTED_MODULE_8__["InitiateCCComponent"]
            ]
        })
    ], BlockchainModule);
    return BlockchainModule;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/blockchainhome/blockchainhome.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/blockchainhome/blockchainhome.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n        <mat-tab-group>\n            <mat-tab label=\"Members\">  \n                <ng-template mat-tab-label>\n                    <mat-icon class=\"example-tab-icon\" matTooltip=\"Members\" class=\"text-danger\">group</mat-icon>\n                  </ng-template>\n                  <app-manage-members></app-manage-members>\n              </mat-tab>\n              <mat-tab label=\"Channel\">\n                  <ng-template mat-tab-label>\n                      <mat-icon class=\"example-tab-icon\" matTooltip=\"Channels\" class=\"text-danger\">settings_input_component</mat-icon>\n                    </ng-template>\n                    <app-managechannels></app-managechannels>\n              </mat-tab>\n              <mat-tab label=\"Notification\">\n                  <ng-template mat-tab-label>\n                      <mat-icon class=\"example-tab-icon\" matTooltip=\"Notifications\" class=\"text-danger\">notifications</mat-icon>\n                    </ng-template>\n                    <app-manage-notifications></app-manage-notifications>\n              </mat-tab>\n              <mat-tab label=\"CA\">\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"text-danger example-tab-icon\"  matTooltip=\"Certificate Authority\" >card_giftcard</mat-icon>\n                  </ng-template>  \n                  <app-manage-certificates-authority></app-manage-certificates-authority>  \n            </mat-tab>\n            <mat-tab label=\"Chaincode\">\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"text-danger example-tab-icon\"  matTooltip=\"Chaincode\" >dvr</mat-icon>\n                  </ng-template>\n                  <app-list-chaincode></app-list-chaincode>\n            </mat-tab>\n            <mat-tab label=\"Peers\">\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"text-danger example-tab-icon\" svgIcon=\"lan-pending\" matTooltip=\"Peers\" ></mat-icon>\n                  </ng-template>\n                  <app-list-peers></app-list-peers>\n            </mat-tab>\n\n        </mat-tab-group>\n\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/blockchainhome/blockchainhome.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/blockchainhome/blockchainhome.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tab-group {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/blockchainhome/blockchainhome.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/blockchainhome/blockchainhome.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BlockchainhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainhomeComponent", function() { return BlockchainhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockchainhomeComponent = /** @class */ (function () {
    function BlockchainhomeComponent() {
    }
    BlockchainhomeComponent.prototype.ngOnInit = function () {
    };
    BlockchainhomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blockchainhome',
            template: __webpack_require__(/*! ./blockchainhome.component.html */ "./src/app/lazyloading/blockchain/blockchainhome/blockchainhome.component.html"),
            styles: [__webpack_require__(/*! ./blockchainhome.component.scss */ "./src/app/lazyloading/blockchain/blockchainhome/blockchainhome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockchainhomeComponent);
    return BlockchainhomeComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/ca/add-member/add-member.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"User Name\" [(ngModel)]=\"data.name\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6\">\n          <mat-form-field>\n            <mat-label>Organizations</mat-label>\n            <mat-select [(value)]=\"data.orgName\">\n              <mat-option>--</mat-option>\n              <mat-option *ngFor=\"let org of organizations\" [value]=\"org\">{{org}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button class=\"btn btn-danger\" [mat-dialog-close]=\"data\" cdkFocusInitial>Add User</button>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/ca/add-member/add-member.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/ca/add-member/add-member.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddMemberComponent = /** @class */ (function () {
    function AddMemberComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.organizations = ['Gov', 'Hec'];
        data.title = 'Add User';
    }
    AddMemberComponent.prototype.ngOnInit = function () {
    };
    AddMemberComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddMemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-member',
            template: __webpack_require__(/*! ./add-member.component.html */ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.html"),
            styles: [__webpack_require__(/*! ./add-member.component.scss */ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddMemberComponent);
    return AddMemberComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/ca/manage-certificates-authority/manage-certificates-authority.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/ca/manage-certificates-authority/manage-certificates-authority.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">      \n    <mat-form-field> \n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search CA\">\n    </mat-form-field>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"addUser\" (click)=\"openAddUserDialog()\"><mat-icon svgIcon=\"account-plus-outline\"></mat-icon> Add User</button>\n  </div>\n\n\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n\n    <!-- Type Column -->\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TYPE </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n    </ng-container>\n\n    <!-- Affiliation Column -->\n    <ng-container matColumnDef=\"affiliation\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> AFFILIATION </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.affiliation}} </td>\n    </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button *ngIf=\"element.id == 'admin'\" mat-button (click)=\"checkClick()\">\n          <mat-icon matTooltip=\"Generate Certificate\">input</mat-icon></button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/ca/manage-certificates-authority/manage-certificates-authority.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/ca/manage-certificates-authority/manage-certificates-authority.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n#addUser {\n  float: right;\n  margin-top: 15px; }\n\nmat-form-field {\n  display: inline-block !important; }\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/ca/manage-certificates-authority/manage-certificates-authority.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/ca/manage-certificates-authority/manage-certificates-authority.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ManageCertificatesAuthorityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCertificatesAuthorityComponent", function() { return ManageCertificatesAuthorityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-member/add-member.component */ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ELEMENT_DATA = [
    {
        id: 'admin',
        type: 'Client',
        affiliation: 'msp PeerOrg2',
        action: "<button>Generate Certificate</button>"
    },
    {
        id: 'univeristy',
        type: 'Peer',
        affiliation: 'mspPeerOrg1',
        action: ""
    }
];
var ManageCertificatesAuthorityComponent = /** @class */ (function () {
    function ManageCertificatesAuthorityComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = [
            'id',
            'type',
            'affiliation',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    ManageCertificatesAuthorityComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    ManageCertificatesAuthorityComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ManageCertificatesAuthorityComponent.prototype.openAddUserDialog = function () {
        var dialogRef = this.dialog.open(_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_2__["AddMemberComponent"], {
            width: '60%',
            data: {
                title: this.title,
                name: this.name,
                orgName: this.orgName
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ManageCertificatesAuthorityComponent.prototype, "sort", void 0);
    ManageCertificatesAuthorityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-certificates-authority',
            template: __webpack_require__(/*! ./manage-certificates-authority.component.html */ "./src/app/lazyloading/blockchain/ca/manage-certificates-authority/manage-certificates-authority.component.html"),
            styles: [__webpack_require__(/*! ./manage-certificates-authority.component.scss */ "./src/app/lazyloading/blockchain/ca/manage-certificates-authority/manage-certificates-authority.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ManageCertificatesAuthorityComponent);
    return ManageCertificatesAuthorityComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/addcc/addcc.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/addcc/addcc.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  addcc works!\n</p>\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/addcc/addcc.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/addcc/addcc.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/addcc/addcc.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/addcc/addcc.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddccComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddccComponent", function() { return AddccComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddccComponent = /** @class */ (function () {
    function AddccComponent() {
    }
    AddccComponent.prototype.ngOnInit = function () {
    };
    AddccComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addcc',
            template: __webpack_require__(/*! ./addcc.component.html */ "./src/app/lazyloading/blockchain/chaincode/addcc/addcc.component.html"),
            styles: [__webpack_require__(/*! ./addcc.component.scss */ "./src/app/lazyloading/blockchain/chaincode/addcc/addcc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddccComponent);
    return AddccComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.cc_title}}</h1>\n<div mat-dialog-content>\n    <div class=\"card\">\n        <div class=\"card-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Chaincode Name\" [(ngModel)]=\"data.cc_name\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Version\" [(ngModel)]=\"data.cc_version\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Function Name\" [(ngModel)]=\"data.cc_function\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Function Arguments\" [(ngModel)]=\"data.cc_arguments\">\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div mat-dialog-actions>\n    <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button class=\"btn btn-danger\" [mat-dialog-close]=\"data\" cdkFocusInitial>Initiate</button>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InitiateCCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiateCCComponent", function() { return InitiateCCComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var InitiateCCComponent = /** @class */ (function () {
    function InitiateCCComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.cc_title = 'Initiate chaincode';
    }
    InitiateCCComponent.prototype.ngOnInit = function () {
    };
    InitiateCCComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    InitiateCCComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-initiate-cc',
            template: __webpack_require__(/*! ./initiate-cc.component.html */ "./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.html"),
            styles: [__webpack_require__(/*! ./initiate-cc.component.scss */ "./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], InitiateCCComponent);
    return InitiateCCComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Chaincode Name\" [(ngModel)]=\"data.name\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Peer Route\" [(ngModel)]=\"data.route\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Chaincode Version\" [(ngModel)]=\"data.version\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6\">\n          <mat-form-field>\n            <mat-label>MSP ID</mat-label>\n            <mat-select [(value)]=\"data.mspId\">\n              <mat-option>--</mat-option>\n              <mat-option *ngFor=\"let msp of msps\" [value]=\"msp\">{{msp}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <mat-form-field>\n            <mat-label>Chaincode Type</mat-label>\n            <mat-select [(value)]=\"data.languageType\">\n              <mat-option>--</mat-option>\n              <mat-option *ngFor=\"let language of languages\" [value]=\"language\">{{language}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6\">\n\n          <input class=\"btn btn-danger\" type=\"file\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button class=\"btn btn-danger\" [mat-dialog-close]=\"data\" cdkFocusInitial>Install</button>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: InstallChaincodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallChaincodeComponent", function() { return InstallChaincodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var InstallChaincodeComponent = /** @class */ (function () {
    function InstallChaincodeComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.languages = ['Golang', 'Javascript'];
        this.paths = ['gov', 'hec'];
        data.title = 'Install chaincode';
    }
    InstallChaincodeComponent.prototype.ngOnInit = function () {
    };
    InstallChaincodeComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    InstallChaincodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-install-chaincode',
            template: __webpack_require__(/*! ./install-chaincode.component.html */ "./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.html"),
            styles: [__webpack_require__(/*! ./install-chaincode.component.scss */ "./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], InstallChaincodeComponent);
    return InstallChaincodeComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/list-chaincode/list-chaincode.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/list-chaincode/list-chaincode.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-12\">\n    <div class=\"col-md-12\">\n        <mat-form-field>\n            <mat-label>Peers</mat-label>\n            <mat-select [(value)]=\"selected\">\n              <mat-option>--</mat-option>\n              <mat-option value=\"fabric-peer-org1\">fabric-peer-org1</mat-option>\n            </mat-select>\n          </mat-form-field>\n   \n      <button mat-raised-button class=\"btn btn-danger\" id=\"installCC\" (click)=\"openInstallChaincodeDialog()\">\n        <mat-icon svgIcon=\"cogs\"></mat-icon> Install Chaincode</button>\n    </div>\n  \n  \n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> CODE ID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container>\n  \n      <!-- Version Column -->\n      <ng-container matColumnDef=\"version\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> VERSION </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.version}} </td>\n      </ng-container>\n  \n      <!-- action Column -->\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n        <td mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Actions For Chaincode\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"openInitiateChaincodeDialog()\">\n                    <mat-icon svgIcon=\"rotate-3d\"></mat-icon>\n                  <span>Initiate</span>\n                </button>\n                <button mat-menu-item>\n                  <mat-icon>settings_input_component</mat-icon>\n                  <span>View Channels</span>\n                </button>\n              </mat-menu>\n        </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  \n  </div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/list-chaincode/list-chaincode.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/list-chaincode/list-chaincode.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n#installCC {\n  float: right;\n  margin-top: 15px; }\n\nmat-form-field {\n  display: inline-block !important; }\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/chaincode/list-chaincode/list-chaincode.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/chaincode/list-chaincode/list-chaincode.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ListChaincodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListChaincodeComponent", function() { return ListChaincodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _install_chaincode_install_chaincode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../install-chaincode/install-chaincode.component */ "./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.ts");
/* harmony import */ var _initiate_cc_initiate_cc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../initiate-cc/initiate-cc.component */ "./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ELEMENT_DATA = [
    {
        id: 'identity',
        version: '1.0.0',
        action: ""
    }
];
var ListChaincodeComponent = /** @class */ (function () {
    function ListChaincodeComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = [
            'id',
            'version',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    ListChaincodeComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    ListChaincodeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListChaincodeComponent.prototype.openInstallChaincodeDialog = function () {
        var dialogRef = this.dialog.open(_install_chaincode_install_chaincode_component__WEBPACK_IMPORTED_MODULE_2__["InstallChaincodeComponent"], {
            width: '80%',
            data: {
                title: this.title,
                name: this.name,
                version: this.version,
                languageType: this.languageType,
                choosedFiles: this.choosedFiles,
                selectedPath: this.selectedPath
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    ListChaincodeComponent.prototype.openInitiateChaincodeDialog = function () {
        var dialogRef = this.dialog.open(_initiate_cc_initiate_cc_component__WEBPACK_IMPORTED_MODULE_3__["InitiateCCComponent"], {
            width: '50%',
            data: {
                cc_title: this.cc_title,
                cc_name: this.cc_name,
                cc_version: this.cc_version,
                cc_function: this.cc_function,
                cc_arguments: this.cc_arguments
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListChaincodeComponent.prototype, "sort", void 0);
    ListChaincodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-chaincode',
            template: __webpack_require__(/*! ./list-chaincode.component.html */ "./src/app/lazyloading/blockchain/chaincode/list-chaincode/list-chaincode.component.html"),
            styles: [__webpack_require__(/*! ./list-chaincode.component.scss */ "./src/app/lazyloading/blockchain/chaincode/list-chaincode/list-chaincode.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ListChaincodeComponent);
    return ListChaincodeComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Channel Name\" [(ngModel)]=\"data.channelName\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6\">\n            <mat-form-field>\n                <mat-label>Channel File</mat-label>\n                <mat-select [(value)]=\"data.channelFile\">\n                  <mat-option>--</mat-option>\n                  <mat-option *ngFor=\"let channel of channels\" [value]=\"channel\">{{channel}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </div> \n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button class=\"btn btn-danger\" [mat-dialog-close]=\"data\" cdkFocusInitial>Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChannelComponent", function() { return AddChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddChannelComponent = /** @class */ (function () {
    function AddChannelComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.channels = ['channel1', 'channel2'];
        data.title = 'Add Channel';
    }
    AddChannelComponent.prototype.ngOnInit = function () {
    };
    AddChannelComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-channel',
            template: __webpack_require__(/*! ./add-channel.component.html */ "./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.html"),
            styles: [__webpack_require__(/*! ./add-channel.component.scss */ "./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddChannelComponent);
    return AddChannelComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/channel/managechannels/managechannels.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/channel/managechannels/managechannels.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Channel\">\n    </mat-form-field>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"addChannel\" (click)=\"openDialog()\">\n      <mat-icon svgIcon=\"account-clock\"></mat-icon> Add Channel\n    </button>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"addChannel\" (click)=\"openDialogRequestChannel()\">\n      <mat-icon svgIcon=\"account-clock\"></mat-icon> Request Channel\n    </button>\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n\n    <!-- Time Created Column -->\n    <ng-container matColumnDef=\"timeCreated\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TIME CREATED </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.timeCreated}} </td>\n    </ng-container>\n\n    <!-- Block HeightColumn -->\n    <ng-container matColumnDef=\"blockHeight\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> BLOCK HEIGHT </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.blockHeight}} </td>\n    </ng-container>\n\n    <!-- Peers Column -->\n    <ng-container matColumnDef=\"peers\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> PEERS </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.peers}} </td>\n    </ng-container>\n\n    <!-- Permissions Column -->\n    <ng-container matColumnDef=\"permissions\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> PERMISSIONS </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p style=\"margin-bottom:0px;\">\n          {{element.permissions[0]}}\n        </p>\n        <p style=\"margin-bottom:0px;\">\n          {{element.permissions[1]}}\n        </p>\n        <p style=\"margin-bottom:0px;\">\n          {{element.permissions[2]}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Actions For Chaincode\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item>\n            <mat-icon svgIcon=\"square-edit-outline\"></mat-icon>\n            <span>Edit Channel</span>\n          </button>\n          <button mat-menu-item (click)=\"openSnackBarSyncCertificate()\">\n            <mat-icon svgIcon=\"sync\"></mat-icon>\n            <span>Sync Certificates</span>\n          </button>\n        </mat-menu>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/channel/managechannels/managechannels.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/channel/managechannels/managechannels.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n#addChannel {\n  float: right;\n  margin-top: 15px; }\n\nmat-form-field {\n  display: inline-block !important; }\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/channel/managechannels/managechannels.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/channel/managechannels/managechannels.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ManagechannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagechannelsComponent", function() { return ManagechannelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_channel_add_channel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-channel/add-channel.component */ "./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.ts");
/* harmony import */ var _request_channel_request_channel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-channel/request-channel.component */ "./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ELEMENT_DATA = [
    {
        id: 'gov',
        timeCreated: '12/2/2019',
        blockHeight: 20,
        peers: 6,
        permissions: ['Operator', 'Writer', 'Reader'],
        action: "block"
    },
    {
        id: 'univeristy',
        timeCreated: '12/4/2019',
        blockHeight: 34,
        peers: 3,
        permissions: ['Operator', 'Writer', 'Reader'],
        action: "unblock"
    },
    {
        id: 'School',
        timeCreated: '12/4/2019',
        blockHeight: 67,
        peers: 6,
        permissions: ['Operator', 'Writer', 'Reader'],
        action: "block"
    }
];
var ManagechannelsComponent = /** @class */ (function () {
    function ManagechannelsComponent(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.displayedColumns = [
            'id',
            'timeCreated',
            'blockHeight',
            'peers',
            'permissions',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    ManagechannelsComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    ManagechannelsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ManagechannelsComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_add_channel_add_channel_component__WEBPACK_IMPORTED_MODULE_2__["AddChannelComponent"], {
            width: '50%',
            data: {
                title: this.title,
                channelName: this.channelName,
                channelFile: this.channelFile
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    ManagechannelsComponent.prototype.openDialogRequestChannel = function () {
        var dialogRef = this.dialog.open(_request_channel_request_channel_component__WEBPACK_IMPORTED_MODULE_3__["RequestChannelComponent"], {
            width: '50%',
            data: {
                title: this.title,
                channelName: this.channelName,
                peers: this.peers
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    ManagechannelsComponent.prototype.openSnackBarSyncCertificate = function () {
        this.snackBar.open('Certificates has been synchronized', 'Close', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ManagechannelsComponent.prototype, "sort", void 0);
    ManagechannelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-managechannels',
            template: __webpack_require__(/*! ./managechannels.component.html */ "./src/app/lazyloading/blockchain/channel/managechannels/managechannels.component.html"),
            styles: [__webpack_require__(/*! ./managechannels.component.scss */ "./src/app/lazyloading/blockchain/channel/managechannels/managechannels.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ManagechannelsComponent);
    return ManagechannelsComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n            <mat-form-field>\n                <mat-label>Channel Name</mat-label>\n                <mat-select [(value)]=\"data.channelName\">\n                  <mat-option>--</mat-option>\n                  <mat-option *ngFor=\"let channel of channels\" [value]=\"channel\">{{channel}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n        </div>\n        <div class=\"col-md-6\">\n          <mat-form-field>\n            <mat-label>Peers</mat-label>\n            <mat-select [formControl]=\"peers\" [(value)]= \"data.peers\" multiple>\n              <mat-option *ngFor=\"let peer of peersList\" [value]=\"peer\">{{peer}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button class=\"btn btn-danger\" [mat-dialog-close]=\"data\" cdkFocusInitial>Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RequestChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestChannelComponent", function() { return RequestChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var RequestChannelComponent = /** @class */ (function () {
    function RequestChannelComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.peers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.channels = ['channel1', 'channel2'];
        this.peersList = ['localhost:9001', 'localhost:9002'];
        data.title = 'Request For Joining Channel';
    }
    RequestChannelComponent.prototype.ngOnInit = function () {
    };
    RequestChannelComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        console.log(this.peers);
    };
    RequestChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-channel',
            template: __webpack_require__(/*! ./request-channel.component.html */ "./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.html"),
            styles: [__webpack_require__(/*! ./request-channel.component.scss */ "./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], RequestChannelComponent);
    return RequestChannelComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Notifications\">\n    </mat-form-field>\n\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- NAME Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> NAME </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"name\">{{element.name.type}}</span>\n        <p class=\"message\">\n          {{element.name.message}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- Time Updated Column -->\n    <ng-container matColumnDef=\"timeUpdated\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TIME UPDATED </th>\n      <td mat-cell *matCellDef=\"let element\">\n         <span class=\"name\">{{element.timeUpdated.by}}</span>\n         <p class=\"message\">\n           {{element.timeUpdated.date}} {{element.timeUpdated.time}}\n         </p> \n        </td>\n    </ng-container>\n\n    <!-- Block Status -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"name\">\n        <i class=\"fa fa-circle text-danger\"></i>\n        {{element.status}} </td>\n    </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-raised-button color='warn' (click)=\"checkClick()\">Reveiw Request</button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.name {\n  font-weight: 600;\n  font-family: serif; }\n\n.message {\n  font-size: 12px;\n  font-family: serif; }\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AllNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllNotificationsComponent", function() { return AllNotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ELEMENT_DATA = [
    {
        name: {
            "type": "Channel Request",
            "message": 'Join "School"'
        },
        timeUpdated: {
            "by": "By:Org1",
            "date": '12/2/2019',
            "time": "11:08:23 AM"
        },
        status: 'Vote Pending',
        action: "pending"
    },
    {
        name: {
            "type": "Channel Request",
            "message": 'Join "Gov"'
        },
        timeUpdated: {
            "by": "By:Org2",
            "date": '12/2/2019',
            "time": "11:08:23 AM"
        },
        status: 'Vote Pending',
        action: "pending"
    },
    {
        name: {
            "type": "Channel Request",
            "message": 'Join "HEC"'
        },
        timeUpdated: {
            "by": "By:Org3",
            "date": '12/2/2019',
            "time": "11:08:23 AM"
        },
        status: 'Vote Pending',
        action: "pending"
    }
];
var AllNotificationsComponent = /** @class */ (function () {
    function AllNotificationsComponent() {
        this.displayedColumns = [
            'name',
            'timeUpdated',
            'status',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    AllNotificationsComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    AllNotificationsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AllNotificationsComponent.prototype.checkClick = function () {
        console.log("clicked");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AllNotificationsComponent.prototype, "sort", void 0);
    AllNotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-notifications',
            template: __webpack_require__(/*! ./all-notifications.component.html */ "./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.html"),
            styles: [__webpack_require__(/*! ./all-notifications.component.scss */ "./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AllNotificationsComponent);
    return AllNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  completed-notifications works!\n</p>\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CompletedNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedNotificationsComponent", function() { return CompletedNotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompletedNotificationsComponent = /** @class */ (function () {
    function CompletedNotificationsComponent() {
    }
    CompletedNotificationsComponent.prototype.ngOnInit = function () {
    };
    CompletedNotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completed-notifications',
            template: __webpack_require__(/*! ./completed-notifications.component.html */ "./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.html"),
            styles: [__webpack_require__(/*! ./completed-notifications.component.scss */ "./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompletedNotificationsComponent);
    return CompletedNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/manage-notifications/manage-notifications.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/manage-notifications/manage-notifications.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <b class=\"text-danger\">All</b>\n      </ng-template>\n      <app-all-notifications></app-all-notifications>\n    </mat-tab>\n  \n    <mat-tab>\n      <ng-template mat-tab-label>\n        <b class=\"text-danger\">Pending</b>\n      </ng-template>\n      <app-pending-notifications></app-pending-notifications>\n    </mat-tab>\n\n    <mat-tab>\n        <ng-template mat-tab-label>\n          <b class=\"text-danger\">Completed</b>\n        </ng-template>\n        <app-completed-notifications></app-completed-notifications>\n      </mat-tab>\n  </mat-tab-group>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/manage-notifications/manage-notifications.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/manage-notifications/manage-notifications.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/manage-notifications/manage-notifications.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/manage-notifications/manage-notifications.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ManageNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageNotificationsComponent", function() { return ManageNotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageNotificationsComponent = /** @class */ (function () {
    function ManageNotificationsComponent() {
    }
    ManageNotificationsComponent.prototype.ngOnInit = function () {
    };
    ManageNotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-notifications',
            template: __webpack_require__(/*! ./manage-notifications.component.html */ "./src/app/lazyloading/blockchain/notification/manage-notifications/manage-notifications.component.html"),
            styles: [__webpack_require__(/*! ./manage-notifications.component.scss */ "./src/app/lazyloading/blockchain/notification/manage-notifications/manage-notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageNotificationsComponent);
    return ManageNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pending-notifications works!\n</p>\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PendingNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingNotificationsComponent", function() { return PendingNotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PendingNotificationsComponent = /** @class */ (function () {
    function PendingNotificationsComponent() {
    }
    PendingNotificationsComponent.prototype.ngOnInit = function () {
    };
    PendingNotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-notifications',
            template: __webpack_require__(/*! ./pending-notifications.component.html */ "./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.html"),
            styles: [__webpack_require__(/*! ./pending-notifications.component.scss */ "./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PendingNotificationsComponent);
    return PendingNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"data.name\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Certificate\" [(ngModel)]=\"data.certificate\">\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </div> \n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button class=\"btn btn-danger\" [mat-dialog-close]=\"data\" cdkFocusInitial>Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: AddMemberCertificatesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberCertificatesDialogComponent", function() { return AddMemberCertificatesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddMemberCertificatesDialogComponent = /** @class */ (function () {
    function AddMemberCertificatesDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.title = 'Add Certificate';
    }
    AddMemberCertificatesDialogComponent.prototype.ngOnInit = function () {
    };
    AddMemberCertificatesDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddMemberCertificatesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-member-certificates-dialog',
            template: __webpack_require__(/*! ./add-member-certificates-dialog.component.html */ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-member-certificates-dialog.component.scss */ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddMemberCertificatesDialogComponent);
    return AddMemberCertificatesDialogComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-members-certificates.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/add-members-certificates/add-members-certificates.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Certificate\">\n    </mat-form-field>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"addMember\" (click)=\"openDialog()\"><mat-icon>add_circle_outline</mat-icon> Add\n      Certificate</button>\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> NAME </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- date Added Column -->\n    <ng-container matColumnDef=\"dateAdded\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> DATE ADDED </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dateAdded}} </td>\n    </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Actions For Chaincode\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"openSnackBarCertificate()\" >\n                <mat-icon svgIcon=\"square-edit-outline\"></mat-icon>\n                <span>Revok</span>\n              </button>\n              <button mat-menu-item (click)=\"openSnackBarSyncCertificate()\">\n                <mat-icon svgIcon=\"sync\"></mat-icon>\n                <span>Sync Certificates</span>\n              </button>\n            </mat-menu>\n        </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-members-certificates.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/add-members-certificates/add-members-certificates.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n#addMember {\n  float: right;\n  margin-top: 15px; }\n\nmat-form-field {\n  display: inline-block !important; }\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-members-certificates.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/add-members-certificates/add-members-certificates.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: AddMembersCertificatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersCertificatesComponent", function() { return AddMembersCertificatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_member_certificates_dialog_add_member_certificates_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-member-certificates-dialog/add-member-certificates-dialog.component */ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ELEMENT_DATA = [
    {
        name: 'john@gmail.com',
        dateAdded: 'PeerOrg1',
        action: "block"
    },
    {
        name: 'johndoe@gmail.com',
        dateAdded: 'PeerOrg1',
        action: "unblock"
    },
    {
        name: 'doe@gmail.com',
        dateAdded: 'PeerOrg1',
        action: "block"
    }
];
var AddMembersCertificatesComponent = /** @class */ (function () {
    function AddMembersCertificatesComponent(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.displayedColumns = [
            'name',
            'dateAdded',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    AddMembersCertificatesComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    AddMembersCertificatesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AddMembersCertificatesComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_add_member_certificates_dialog_add_member_certificates_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddMemberCertificatesDialogComponent"], {
            width: '50%',
            data: {
                title: this.title,
                name: this.name,
                certificate: this.certificate
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    AddMembersCertificatesComponent.prototype.openSnackBarCertificate = function () {
        this.snackBar.open('Certificate has been revoked', 'Close', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddMembersCertificatesComponent.prototype.openSnackBarSyncCertificate = function () {
        this.snackBar.open('Certificate has been synchronized', 'Close', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AddMembersCertificatesComponent.prototype, "sort", void 0);
    AddMembersCertificatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-members-certificates',
            template: __webpack_require__(/*! ./add-members-certificates.component.html */ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-members-certificates.component.html"),
            styles: [__webpack_require__(/*! ./add-members-certificates.component.scss */ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-members-certificates.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AddMembersCertificatesComponent);
    return AddMembersCertificatesComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/list-org-members/add-member-dialog/add-member-dialog.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/list-org-members/add-member-dialog/add-member-dialog.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Organization Name\" [(ngModel)]=\"data.Orgname\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Operator Email\" [(ngModel)]=\"data.OperatorName\">\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button class=\"btn btn-danger\" [mat-dialog-close]=\"data\" cdkFocusInitial>Add member</button>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/list-org-members/add-member-dialog/add-member-dialog.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/list-org-members/add-member-dialog/add-member-dialog.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/list-org-members/add-member-dialog/add-member-dialog.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/list-org-members/add-member-dialog/add-member-dialog.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AddMemberDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberDialogComponent", function() { return AddMemberDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddMemberDialogComponent = /** @class */ (function () {
    function AddMemberDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.title = 'Add Member (organization)';
    }
    AddMemberDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddMemberDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-member-dialog',
            template: __webpack_require__(/*! ./add-member-dialog.component.html */ "./src/app/lazyloading/blockchain/organization/list-org-members/add-member-dialog/add-member-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-member-dialog.component.scss */ "./src/app/lazyloading/blockchain/organization/list-org-members/add-member-dialog/add-member-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddMemberDialogComponent);
    return AddMemberDialogComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/list-org-members/list-org-members.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/list-org-members/list-org-members.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Member\">\n    </mat-form-field>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"addMember\" (click)=\"openDialog()\">\n      <mat-icon svgIcon=\"account-plus-outline\"></mat-icon> Add User\n    </button>\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- Member Column -->\n    <ng-container matColumnDef=\"member\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> MEMBERS </th>\n      <td mat-cell *matCellDef=\"let element\"> \n        <span class=\"heading\">{{element.member.org}} </span>\n        <p class=\"message\">\n          {{element.member.email}}\n        </p> \n      </td> \n    </ng-container>\n \n    <!-- MSP Column -->\n    <ng-container matColumnDef=\"msp\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> MSP ID </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"heading\"> {{element.msp}} </td>\n    </ng-container>\n\n    <!-- Requester Column -->\n    <ng-container matColumnDef=\"requester\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> REQUESTER </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"message\"> {{element.requester}} </td>\n    </ng-container>\n\n    <!-- status Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"heading\"> <i *ngIf=\"element.status=='Joined';else pending\" matTooltip=\"Joined\"\n          class=\"fa fa-circle text-success\"></i> {{element.status}}\n        <ng-template #pending>\n          <i matTooltip=\"Joined\" class=\"fa fa-circle\"></i>\n        </ng-template>\n      </td>\n    </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color=\"warn\" aria-label=\"Icon\" [disabled]=\"!element.action\" (click)=\"openSnackBar()\" [(value)]=\"verticalPosition\">\n          <mat-icon svgIcon='close-circle-outline'></mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/list-org-members/list-org-members.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/list-org-members/list-org-members.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n#addMember {\n  float: right;\n  margin-top: 15px; }\n\nmat-form-field {\n  display: inline-block !important; }\n\n.heading {\n  font-family: serif; }\n\n.message {\n  font-size: 12px;\n  font-family: serif; }\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/list-org-members/list-org-members.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/list-org-members/list-org-members.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ListOrgMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrgMembersComponent", function() { return ListOrgMembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_member_dialog_add_member_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-member-dialog/add-member-dialog.component */ "./src/app/lazyloading/blockchain/organization/list-org-members/add-member-dialog/add-member-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ELEMENT_DATA = [
    {
        member: {
            "org": "Org1",
            "email": 'john@gmail.com'
        },
        msp: 'PeerOrg1',
        requester: 'john@gmail.com',
        status: "Joined",
        action: false
    },
    {
        member: {
            "org": "Org1",
            "email": 'johndoe@gmail.com'
        },
        msp: 'PeerOrg1',
        requester: 'johndoe@gmail.com',
        status: "Pending",
        action: true
    },
    {
        member: {
            "org": "Org1",
            "email": 'doe@gmail.com'
        },
        msp: 'PeerOrg1',
        requester: 'doe@gmail.com',
        status: "Joined",
        action: false
    }
];
var ListOrgMembersComponent = /** @class */ (function () {
    function ListOrgMembersComponent(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.verticalPosition = 'bottom';
        this.horizontalPosition = 'center';
        this.displayedColumns = [
            'member',
            'msp',
            'requester',
            'status',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.blinker = true;
    }
    ListOrgMembersComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    ListOrgMembersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListOrgMembersComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_add_member_dialog_add_member_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddMemberDialogComponent"], {
            width: '50%',
            data: {
                title: this.title,
                Orgname: this.Orgname,
                OperatorName: this.OperatorName
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    ListOrgMembersComponent.prototype.openSnackBar = function () {
        this.snackBar.open('Organization removed', 'Close', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListOrgMembersComponent.prototype, "sort", void 0);
    ListOrgMembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-org-members',
            template: __webpack_require__(/*! ./list-org-members.component.html */ "./src/app/lazyloading/blockchain/organization/list-org-members/list-org-members.component.html"),
            styles: [__webpack_require__(/*! ./list-org-members.component.scss */ "./src/app/lazyloading/blockchain/organization/list-org-members/list-org-members.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ListOrgMembersComponent);
    return ListOrgMembersComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/manage-members/manage-members.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/manage-members/manage-members.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <b class=\"text-danger\">Members</b>\n    </ng-template>\n    <app-list-org-members></app-list-org-members>\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <b class=\"text-danger\">Certificates</b>\n    </ng-template>\n    <app-add-members-certificates></app-add-members-certificates>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/manage-members/manage-members.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/manage-members/manage-members.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/organization/manage-members/manage-members.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/organization/manage-members/manage-members.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ManageMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageMembersComponent", function() { return ManageMembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageMembersComponent = /** @class */ (function () {
    function ManageMembersComponent() {
    }
    ManageMembersComponent.prototype.ngOnInit = function () {
    };
    ManageMembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-members',
            template: __webpack_require__(/*! ./manage-members.component.html */ "./src/app/lazyloading/blockchain/organization/manage-members/manage-members.component.html"),
            styles: [__webpack_require__(/*! ./manage-members.component.scss */ "./src/app/lazyloading/blockchain/organization/manage-members/manage-members.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageMembersComponent);
    return ManageMembersComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Peer Name\" [(ngModel)]=\"data.name\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Peer Route\" [(ngModel)]=\"data.route\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <mat-form-field>\n                  <mat-label>Node Type</mat-label>\n                  <mat-select [(value)]=\"data.type\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n          </div>\n          <div class=\"col-md-6\">\n              <mat-form-field>\n                  <mat-label>MSP ID</mat-label>\n                  <mat-select [(value)]=\"data.mspId\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let msp of msps\" [value]=\"msp\">{{msp}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button class=\"btn btn-danger\" [mat-dialog-close]=\"data\" cdkFocusInitial>Add node</button>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddPeerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPeerComponent", function() { return AddPeerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddPeerComponent = /** @class */ (function () {
    function AddPeerComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.types = ['peer', 'ca', 'orderer'];
        this.msps = ['gov', 'school'];
        data.title = 'Add Node';
    }
    AddPeerComponent.prototype.ngOnInit = function () {
    };
    AddPeerComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddPeerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-peer',
            template: __webpack_require__(/*! ./add-peer.component.html */ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.html"),
            styles: [__webpack_require__(/*! ./add-peer.component.scss */ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddPeerComponent);
    return AddPeerComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/peers/list-peers/list-peers.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/peers/list-peers/list-peers.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"addNode\" (click)=\"openDialog()\">\n      <mat-icon>add_to_queue</mat-icon> Add Node\n    </button>\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- NAME Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> NAME </th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.name}}\n      </td>\n    </ng-container>\n\n    <!-- ROUTE Column -->\n    <ng-container matColumnDef=\"route\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ROUTE </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.route}} </td>\n    </ng-container>\n\n    <!-- TYPE Column -->\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TYPE </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n    </ng-container>\n\n    <!-- MSP ID Column -->\n    <ng-container matColumnDef=\"mspId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> MSP ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.mspId}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/peers/list-peers/list-peers.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/peers/list-peers/list-peers.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n#addNode {\n  float: right;\n  margin-top: 15px; }\n\nmat-form-field {\n  display: inline-block !important; }\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/peers/list-peers/list-peers.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/peers/list-peers/list-peers.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListPeersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPeersComponent", function() { return ListPeersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_peer_add_peer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-peer/add-peer.component */ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ELEMENT_DATA = [
    {
        name: 'peer0.ims.com',
        route: 'grpc://localhost:2030',
        type: 'Peer(Member)',
        mspId: 'Gov',
    },
    {
        name: 'orderer.ims.com',
        route: 'grpc://localhost:2130',
        type: 'Orderer',
        mspId: 'Gov',
    },
    {
        name: 'govca.ims.com',
        route: 'grpc://localhost:2131',
        type: 'CA',
        mspId: 'Gov',
    },
];
var ListPeersComponent = /** @class */ (function () {
    function ListPeersComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = [
            'name',
            'route',
            'type',
            'mspId'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.blinker = true;
    }
    ListPeersComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    ListPeersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListPeersComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_add_peer_add_peer_component__WEBPACK_IMPORTED_MODULE_2__["AddPeerComponent"], {
            width: '50%',
            data: {
                title: this.title,
                name: this.name,
                route: this.route,
                type: this.type,
                mspId: this.mspId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListPeersComponent.prototype, "sort", void 0);
    ListPeersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-peers',
            template: __webpack_require__(/*! ./list-peers.component.html */ "./src/app/lazyloading/blockchain/peers/list-peers/list-peers.component.html"),
            styles: [__webpack_require__(/*! ./list-peers.component.scss */ "./src/app/lazyloading/blockchain/peers/list-peers/list-peers.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ListPeersComponent);
    return ListPeersComponent;
}());



/***/ }),

/***/ "./src/app/routings/blockchain.routing.ts":
/*!************************************************!*\
  !*** ./src/app/routings/blockchain.routing.ts ***!
  \************************************************/
/*! exports provided: BlockchainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainRoutingModule", function() { return BlockchainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_lazyloading_blockchain_blockchainhome_blockchainhome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/lazyloading/blockchain/blockchainhome/blockchainhome.component */ "./src/app/lazyloading/blockchain/blockchainhome/blockchainhome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: app_lazyloading_blockchain_blockchainhome_blockchainhome_component__WEBPACK_IMPORTED_MODULE_3__["BlockchainhomeComponent"] }
];
var BlockchainRoutingModule = /** @class */ (function () {
    function BlockchainRoutingModule() {
    }
    BlockchainRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BlockchainRoutingModule);
    return BlockchainRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=lazyloading-blockchain-blockchain-module.js.map