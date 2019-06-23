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
/* harmony import */ var app_routes_blockchain_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/routes/blockchain.routing */ "./src/app/routes/blockchain.routing.ts");
/* harmony import */ var app_modules_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _ca_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ca/add-member/add-member.component */ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.ts");
/* harmony import */ var _chaincode_initiate_cc_initiate_cc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chaincode/initiate-cc/initiate-cc.component */ "./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.ts");
/* harmony import */ var _peers_add_peer_add_peer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./peers/add-peer/add-peer.component */ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.ts");
/* harmony import */ var _channel_managechannels_managechannels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./channel/managechannels/managechannels.component */ "./src/app/lazyloading/blockchain/channel/managechannels/managechannels.component.ts");
/* harmony import */ var _organization_add_members_certificates_add_members_certificates_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./organization/add-members-certificates/add-members-certificates.component */ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-members-certificates.component.ts");
/* harmony import */ var _channel_add_channel_add_channel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./channel/add-channel/add-channel.component */ "./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.ts");
/* harmony import */ var _notification_manage_notifications_manage_notifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/manage-notifications/manage-notifications.component */ "./src/app/lazyloading/blockchain/notification/manage-notifications/manage-notifications.component.ts");
/* harmony import */ var _notification_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notification/all-notifications/all-notifications.component */ "./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.ts");
/* harmony import */ var _notification_pending_notifications_pending_notifications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notification/pending-notifications/pending-notifications.component */ "./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.ts");
/* harmony import */ var _notification_completed_notifications_completed_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notification/completed-notifications/completed-notifications.component */ "./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.ts");
/* harmony import */ var _organization_add_members_certificates_add_member_certificates_dialog_add_member_certificates_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component */ "./src/app/lazyloading/blockchain/organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component.ts");
/* harmony import */ var _peers_list_peers_list_peers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./peers/list-peers/list-peers.component */ "./src/app/lazyloading/blockchain/peers/list-peers/list-peers.component.ts");
/* harmony import */ var _channel_request_channel_request_channel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./channel/request-channel/request-channel.component */ "./src/app/lazyloading/blockchain/channel/request-channel/request-channel.component.ts");
/* harmony import */ var _chaincode_install_chaincode_install_chaincode_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chaincode/install-chaincode/install-chaincode.component */ "./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.ts");
/* harmony import */ var _chaincode_list_chaincode_list_chaincode_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chaincode/list-chaincode/list-chaincode.component */ "./src/app/lazyloading/blockchain/chaincode/list-chaincode/list-chaincode.component.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ca_list_members_list_members_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ca/list-members/list-members.component */ "./src/app/lazyloading/blockchain/ca/list-members/list-members.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// tslint:disable-next-line: max-line-length







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
                app_routes_blockchain_routing__WEBPACK_IMPORTED_MODULE_5__["BlockchainRoutingModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"]
            ],
            declarations: [
                _blockchainhome_blockchainhome_component__WEBPACK_IMPORTED_MODULE_3__["BlockchainhomeComponent"],
                _channel_managechannels_managechannels_component__WEBPACK_IMPORTED_MODULE_10__["ManagechannelsComponent"],
                _chaincode_addcc_addcc_component__WEBPACK_IMPORTED_MODULE_4__["AddccComponent"],
                _ca_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__["AddMemberComponent"],
                _organization_add_members_certificates_add_members_certificates_component__WEBPACK_IMPORTED_MODULE_11__["AddMembersCertificatesComponent"],
                _channel_add_channel_add_channel_component__WEBPACK_IMPORTED_MODULE_12__["AddChannelComponent"],
                _chaincode_initiate_cc_initiate_cc_component__WEBPACK_IMPORTED_MODULE_8__["InitiateCCComponent"],
                _peers_add_peer_add_peer_component__WEBPACK_IMPORTED_MODULE_9__["AddPeerComponent"],
                _notification_manage_notifications_manage_notifications_component__WEBPACK_IMPORTED_MODULE_13__["ManageNotificationsComponent"],
                _notification_all_notifications_all_notifications_component__WEBPACK_IMPORTED_MODULE_14__["AllNotificationsComponent"],
                _notification_pending_notifications_pending_notifications_component__WEBPACK_IMPORTED_MODULE_15__["PendingNotificationsComponent"],
                _notification_completed_notifications_completed_notifications_component__WEBPACK_IMPORTED_MODULE_16__["CompletedNotificationsComponent"],
                _organization_add_members_certificates_add_member_certificates_dialog_add_member_certificates_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AddMemberCertificatesDialogComponent"],
                _peers_list_peers_list_peers_component__WEBPACK_IMPORTED_MODULE_18__["ListPeersComponent"],
                _channel_request_channel_request_channel_component__WEBPACK_IMPORTED_MODULE_19__["RequestChannelComponent"],
                _chaincode_install_chaincode_install_chaincode_component__WEBPACK_IMPORTED_MODULE_20__["InstallChaincodeComponent"],
                _chaincode_list_chaincode_list_chaincode_component__WEBPACK_IMPORTED_MODULE_21__["ListChaincodeComponent"],
                _ca_list_members_list_members_component__WEBPACK_IMPORTED_MODULE_23__["ListMembersComponent"],
            ],
            entryComponents: [
                _organization_add_members_certificates_add_member_certificates_dialog_add_member_certificates_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AddMemberCertificatesDialogComponent"],
                _channel_add_channel_add_channel_component__WEBPACK_IMPORTED_MODULE_12__["AddChannelComponent"],
                _channel_request_channel_request_channel_component__WEBPACK_IMPORTED_MODULE_19__["RequestChannelComponent"],
                _peers_add_peer_add_peer_component__WEBPACK_IMPORTED_MODULE_9__["AddPeerComponent"],
                _chaincode_install_chaincode_install_chaincode_component__WEBPACK_IMPORTED_MODULE_20__["InstallChaincodeComponent"],
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

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <mat-tab-group>\n        <mat-tab label=\"Members\">\n          <ng-template mat-tab-label>\n            <mat-icon class=\"text-danger example-tab-icon\" matTooltip=\"Members\" class=\"text-danger\">group</mat-icon>\n          </ng-template>\n          <app-list-members></app-list-members>\n        </mat-tab>\n        <mat-tab label=\"CA\">\n          <ng-template mat-tab-label>\n            <mat-icon class=\"example-tab-icon\" matTooltip=\"CA\" class=\"text-danger\">card_giftcard</mat-icon>\n          </ng-template>\n          <app-add-members-certificates></app-add-members-certificates>\n        </mat-tab>\n        <mat-tab label=\"Channel\">\n          <ng-template mat-tab-label>\n            <mat-icon class=\"example-tab-icon\" matTooltip=\"Channels\" class=\"text-danger\">settings_input_component\n            </mat-icon>\n          </ng-template>\n          <app-managechannels></app-managechannels>\n        </mat-tab>\n        <mat-tab label=\"Notification\">\n          <ng-template mat-tab-label>\n            <mat-icon class=\"example-tab-icon\" matTooltip=\"Notifications\" class=\"text-danger\">notifications</mat-icon>\n          </ng-template>\n          <app-manage-notifications></app-manage-notifications>\n        </mat-tab>\n        <mat-tab label=\"Chaincode\">\n          <ng-template mat-tab-label>\n            <mat-icon class=\"text-danger example-tab-icon\" matTooltip=\"Chaincode\">dvr</mat-icon>\n          </ng-template>\n          <app-list-chaincode></app-list-chaincode>\n        </mat-tab>\n        <mat-tab label=\"Peers\">\n          <ng-template mat-tab-label>\n            <mat-icon class=\"text-danger example-tab-icon\" svgIcon=\"lan-pending\" matTooltip=\"Peers\"></mat-icon>\n          </ng-template>\n          <app-list-peers></app-list-peers>\n        </mat-tab>\n\n      </mat-tab-group>\n\n    </div>\n  </div>\n</div>"

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

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n    <div class=\"card\">\n        <div class=\"card-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"User Name\" [(ngModel)]=\"data.username\">\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <mat-form-field>\n                        <mat-label>Password</mat-label>\n                        <input matInput [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"data.password\">\n                        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n                            [attr.aria-pressed]=\"hide\">\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </button>\n                        <mat-icon matPrefix>vpn_key</mat-icon>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <mat-form-field>\n                        <mat-label>Affliation</mat-label>\n                        <mat-select [(value)]=\"data.affliation\">\n                            <mat-option>--</mat-option>\n                            <mat-option *ngFor=\"let affliation of affliations\" [value]=\"affliation\">{{affliation}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3\">\n                    <mat-form-field>\n                        <mat-label>Organizations</mat-label>\n                        <mat-select [(value)]=\"data.orgName\">\n                            <mat-option>--</mat-option>\n                            <mat-option *ngFor=\"let organization of organizations\" [value]=\"organization\">\n                                {{organization}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <mat-form-field>\n                        <mat-label>Type</mat-label>\n                        <mat-select [(value)]=\"data.role\">\n                            <mat-option>--</mat-option>\n                            <mat-option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field>\n                        <mat-label>Roles</mat-label>\n                        <mat-select  [(value)]=\"data.attributes\" multiple>\n                            <mat-option *ngFor=\"let attribute of attributes\" [value]=\"attribute\">{{attribute}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div mat-dialog-actions>\n    <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button class=\"btn btn-danger\" (click)=\"register()\" cdkFocusInitial>Add User</button>\n</div>"

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
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/models/user */ "./src/app/models/user.ts");
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
    function AddMemberComponent(userService, dialogRef, data) {
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.hide = true;
        this.organizations = ['Org1', 'Org2'];
        this.types = ['CLIENT', 'ORDERER', 'PEER', 'USER'];
        this.affliations = ['org1.department1', 'ims'];
        this.attributes = [
            'HF REGISTRAR DELEGATE ROLES',
            'HF REGISTRAR ATTRIBUTES',
            'HF AFFILIATION MGR',
            'HF REGISTRAR ROLES',
            'HFINTERMEDIATECA',
            'HF REVOKER',
            'HF GEN CRL'
        ];
        data.title = 'Add User';
    }
    AddMemberComponent.prototype.ngOnInit = function () {
    };
    AddMemberComponent.prototype.register = function () {
        var _this = this;
        var user = new app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        user.username = this.data.username;
        user.password = this.data.password;
        user.affiliation = this.data.affliation;
        user.role = this.data.role;
        user.orgName = this.data.orgName;
        user.attributes = this.data.attributes;
        this.userService.register(user).subscribe(function (result) {
            _this.onNoClick(result);
        }, function (err) { console.log(err); });
    };
    AddMemberComponent.prototype.onNoClick = function (result) {
        this.dialogRef.close(result);
    };
    AddMemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-member',
            template: __webpack_require__(/*! ./add-member.component.html */ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.html"),
            styles: [__webpack_require__(/*! ./add-member.component.scss */ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddMemberComponent);
    return AddMemberComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/ca/list-members/list-members.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/ca/list-members/list-members.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"col-md-12\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Member\">\n        </mat-form-field>\n        <button mat-raised-button class=\"btn btn-danger\" id=\"addUser\" (click)=\"openAddUserDialog()\">\n            <mat-icon svgIcon=\"account-plus-outline\"></mat-icon> Add User\n        </button>\n    </div>\n\n\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n        </ng-container>\n \n        <!-- Type Column -->\n        <ng-container matColumnDef=\"type\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> TYPE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n        </ng-container>\n\n        <!-- Affiliation Column -->\n        <ng-container matColumnDef=\"affiliation\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> AFFILIATION </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.affiliation}} </td>\n        </ng-container>\n\n        <!-- Roles Column -->\n        <ng-container matColumnDef=\"attributes\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> ATTRIBUTES </th>\n            <td mat-cell *matCellDef=\"let element\">\n                <p *ngFor=\"let attr of element.attributes\"><b>{{attr.name}}</b>: {{attr.value}}</p>\n            </td>\n        </ng-container>\n\n        <!-- action Column -->\n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n            <td mat-cell *matCellDef=\"let element\">\n                <button *ngIf=\"element.id == 'admin'\" mat-button (click)=\"checkClick()\">\n                    <mat-icon matTooltip=\"Generate Certificate\">input</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/ca/list-members/list-members.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/ca/list-members/list-members.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n#addUser {\n  float: right;\n  margin-top: 15px; }\n\nmat-form-field {\n  display: inline-block !important; }\n"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/ca/list-members/list-members.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/ca/list-members/list-members.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMembersComponent", function() { return ListMembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-member/add-member.component */ "./src/app/lazyloading/blockchain/ca/add-member/add-member.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListMembersComponent = /** @class */ (function () {
    function ListMembersComponent(dialog, snackBar, userService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.userService = userService;
        this.users = [];
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.displayedColumns = [
            'id',
            'type',
            'affiliation',
            'attributes',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ListMembersComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.getAllUsers();
    };
    ListMembersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (res) {
            var response = res.valueOf();
            if (response['success']) {
                response['result'].forEach(function (identity) {
                    _this.users.push({
                        id: identity.id,
                        type: identity.type,
                        attributes: identity.attrs,
                        affiliation: identity.affiliation,
                    });
                });
                _this.dataSource.data = _this.users;
                _this.dataSource._updateChangeSubscription();
            }
            else {
                _this.dataSource.data = [];
            }
        }, function (err) { console.log(err); });
    };
    ListMembersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListMembersComponent.prototype.openAddUserDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_3__["AddMemberComponent"], {
            width: '60%',
            data: {
                title: this.title,
                name: this.name,
                password: this.password,
                affliation: this.affliation,
                roles: this.roles,
                orgName: this.orgName
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result !== 'undefined') {
                _this.openSnackBar(result['message']);
            }
        });
    };
    ListMembersComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'Close', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListMembersComponent.prototype, "sort", void 0);
    ListMembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-members',
            template: __webpack_require__(/*! ./list-members.component.html */ "./src/app/lazyloading/blockchain/ca/list-members/list-members.component.html"),
            styles: [__webpack_require__(/*! ./list-members.component.scss */ "./src/app/lazyloading/blockchain/ca/list-members/list-members.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ListMembersComponent);
    return ListMembersComponent;
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

module.exports = "<h1 mat-dialog-title>{{data.cc_title}}</h1>\n<div mat-dialog-content>\n    <div class=\"card\">\n        <div class=\"card-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Chaincode Name\" [(ngModel)]=\"data.chaincodeName\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Version\" [(ngModel)]=\"data.chaincodeVersion\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Function Name\" [(ngModel)]=\"data.fcn\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Function Arguments\" [(ngModel)]=\"data.args\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field>\n                        <mat-label>Peers</mat-label>\n                        <mat-select [formControl]=\"peers\" [(value)]=\"data.peers\" multiple>\n                            <mat-option *ngFor=\"let peer of peersList\" [value]=\"peer\">{{peer}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field>\n                        <mat-label>Chaincode Type</mat-label>\n                        <mat-select [(value)]=\"data.chaincodeType\">\n                            <mat-option>--</mat-option>\n                            <mat-option *ngFor=\"let language of languages\" [value]=\"language\">{{language}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div mat-dialog-actions>\n    <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button class=\"btn btn-danger\" (click)=\"initiateChaincode()\" cdkFocusInitial>Initiate</button>\n</div>"

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
/* harmony import */ var app_services_chaincode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/chaincode.service */ "./src/app/services/chaincode.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_models_chaincode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/models/chaincode */ "./src/app/models/chaincode.ts");
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
    function InitiateCCComponent(chaincodeService, dialogRef, data) {
        this.chaincodeService = chaincodeService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.peers = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.peersList = ['peer0.org1.example.com', 'peer1.org1.example.com'];
        this.languages = ['golang', 'node'];
        data.cc_title = 'Initiate chaincode';
        data.fcn = '';
        data.args = [''];
    }
    InitiateCCComponent.prototype.ngOnInit = function () {
    };
    InitiateCCComponent.prototype.initiateChaincode = function () {
        var _this = this;
        var chaincodeConfig = new app_models_chaincode__WEBPACK_IMPORTED_MODULE_4__["InitiateChaincode"](this.data);
        this.chaincodeService.initiateChaincode(chaincodeConfig).subscribe(function (res) {
            if (res['success']) {
                _this.onNoClick(res['message']);
            }
        }, function (err) { _this.onNoClick(err); });
    };
    InitiateCCComponent.prototype.onNoClick = function (result) {
        this.dialogRef.close(result);
    };
    InitiateCCComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-initiate-cc',
            template: __webpack_require__(/*! ./initiate-cc.component.html */ "./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.html"),
            styles: [__webpack_require__(/*! ./initiate-cc.component.scss */ "./src/app/lazyloading/blockchain/chaincode/initiate-cc/initiate-cc.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [app_services_chaincode_service__WEBPACK_IMPORTED_MODULE_2__["ChaincodeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
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

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n    <div class=\"card\">\n        <div class=\"card-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Chaincode Name\" [(ngModel)]=\"data.chaincodeName\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field>\n                        <mat-label>Path</mat-label>\n                        <mat-select [(value)]=\"data.chaincodePath\">\n                            <mat-option>--</mat-option>\n                            <mat-option *ngFor=\"let path of paths\" [value]=\"path\">{{path}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Chaincode Version\" [(ngModel)]=\"data.chaincodeVersion\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field>\n                        <mat-label>Chaincode Type</mat-label>\n                        <mat-select [(value)]=\"data.chaincodeType\">\n                            <mat-option>--</mat-option>\n                            <mat-option *ngFor=\"let language of languages\" [value]=\"language\">{{language}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field>\n                        <mat-label>Peers</mat-label>\n                        <mat-select [formControl]=\"peers\" [(value)]=\"data.peers\" multiple>\n                            <mat-option *ngFor=\"let peer of peersList\" [value]=\"peer\">{{peer}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div mat-dialog-actions>\n    <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button class=\"btn btn-danger\" (click)=\"installChaincode()\" cdkFocusInitial>Install</button>\n</div>"

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
/* harmony import */ var app_services_chaincode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/chaincode.service */ "./src/app/services/chaincode.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_models_chaincode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/models/chaincode */ "./src/app/models/chaincode.ts");
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
    function InstallChaincodeComponent(chaincodeService, dialogRef, data) {
        this.chaincodeService = chaincodeService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.peers = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.languages = ['golang', 'node'];
        this.peersList = ['peer0.org1.example.com', 'peer1.org1.example.com'];
        this.chaincodeFilesObj = {};
        data.title = 'Install chaincode';
    }
    InstallChaincodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chaincodeService.getChaincodeFiles().subscribe(function (res) {
            _this.chaincodeFilesObj = res;
            _this.paths = Object.keys(res);
        });
    };
    InstallChaincodeComponent.prototype.installChaincode = function () {
        var _this = this;
        this.data.chaincodePath = this.chaincodeFilesObj[this.data.chaincodePath];
        var chaincodeConfig = new app_models_chaincode__WEBPACK_IMPORTED_MODULE_4__["InstallChaincode"](this.data);
        this.chaincodeService.installChaincode(chaincodeConfig).subscribe(function (res) {
            _this.onNoClick(res);
        }, function (err) { console.log(err); });
    };
    InstallChaincodeComponent.prototype.onNoClick = function (result) {
        this.dialogRef.close(result);
    };
    InstallChaincodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-install-chaincode',
            template: __webpack_require__(/*! ./install-chaincode.component.html */ "./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.html"),
            styles: [__webpack_require__(/*! ./install-chaincode.component.scss */ "./src/app/lazyloading/blockchain/chaincode/install-chaincode/install-chaincode.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [app_services_chaincode_service__WEBPACK_IMPORTED_MODULE_2__["ChaincodeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
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

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Chaincode\">\n    </mat-form-field>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"installCC\" (click)=\"listChaincode()\">\n      <mat-icon svgIcon=\"cogs\"></mat-icon> Refresh\n    </button>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"installCC\" (click)=\"openInstallChaincodeDialog()\">\n      <mat-icon svgIcon=\"cogs\"></mat-icon> Install Chaincode\n    </button>\n  </div>\n\n\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> CODE ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Version Column -->\n    <ng-container matColumnDef=\"version\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> VERSION </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.version}} </td>\n    </ng-container>\n\n    <!-- Status Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n    </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Actions For Chaincode\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item *ngIf=\"element.status == 'Installed'\"\n            (click)=\"openInitiateChaincodeDialog(element.name,element.version)\">\n            <mat-icon svgIcon=\"rotate-3d\"></mat-icon>\n            <span>Initiate</span>\n          </button>\n        </mat-menu>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

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
/* harmony import */ var app_services_peer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/peer.service */ "./src/app/services/peer.service.ts");
/* harmony import */ var app_services_chaincode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/chaincode.service */ "./src/app/services/chaincode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListChaincodeComponent = /** @class */ (function () {
    function ListChaincodeComponent(peerService, chaincodeService, dialog, snackBar) {
        this.peerService = peerService;
        this.chaincodeService = chaincodeService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = [
            'id',
            'version',
            'status',
            'action'
        ];
        this.listPeers = [];
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ListChaincodeComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.loadPeers();
        this.listChaincode();
    };
    ListChaincodeComponent.prototype.loadPeers = function () {
        var _this = this;
        this.peerService.getPeers().subscribe(function (res) {
            res.forEach(function (peer) {
                _this.listPeers.push(peer.name);
            });
        }, function (err) { console.log(err); });
    };
    ListChaincodeComponent.prototype.listChaincode = function () {
        var _this = this;
        this.chaincodeService.listChaincodes().subscribe(function (res) {
            var initiated = res.initiated;
            var installed = res.installed;
            var chaincodes = installed.concat(initiated);
            _this.dataSource.data = chaincodes;
            _this.dataSource._updateChangeSubscription();
        }, function (err) { console.log(err); });
    };
    ListChaincodeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListChaincodeComponent.prototype.openInstallChaincodeDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_install_chaincode_install_chaincode_component__WEBPACK_IMPORTED_MODULE_2__["InstallChaincodeComponent"], {
            width: '80%',
            data: {
                title: this.title,
                chaincodeName: this.name,
                chaincodeVersion: this.version,
                chaincodeType: this.languageType,
                chaincodePath: this.selectedPath
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result !== 'undefined') {
                _this.openSnackBar(result.message);
            }
        });
    };
    ListChaincodeComponent.prototype.openInitiateChaincodeDialog = function (CCname, CCversion) {
        var _this = this;
        var dialogRef = this.dialog.open(_initiate_cc_initiate_cc_component__WEBPACK_IMPORTED_MODULE_3__["InitiateCCComponent"], {
            width: '50%',
            data: {
                cc_title: this.cc_title,
                peers: this.peers,
                chaincodeName: CCname,
                chaincodeVersion: CCversion,
                fcn: this.fcn,
                args: this.args
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (typeof result !== 'undefined') {
                _this.openSnackBar(result);
            }
        });
    };
    ListChaincodeComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'Close', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
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
        __metadata("design:paramtypes", [app_services_peer_service__WEBPACK_IMPORTED_MODULE_4__["PeerService"],
            app_services_chaincode_service__WEBPACK_IMPORTED_MODULE_5__["ChaincodeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
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

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n    <div class=\"card\">\n        <div class=\"card-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Channel Name\" [(ngModel)]=\"data.channelName\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field>\n                        <mat-label>Channel File</mat-label>\n                        <mat-select [(value)]=\"data.channelFile\">\n                            <mat-option>--</mat-option>\n                            <mat-option *ngFor=\"let channel of channels\" [value]=\"channel\">{{channel}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div mat-dialog-actions>\n    <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button class=\"btn btn-danger\" (click)=\"addChannel()\" cdkFocusInitial>Submit</button>\n</div>"

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
/* harmony import */ var app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/channel.service */ "./src/app/services/channel.service.ts");
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
    function AddChannelComponent(channelService, dialogRef, data) {
        this.channelService = channelService;
        this.dialogRef = dialogRef;
        this.data = data;
        data.title = 'Add Channel';
    }
    AddChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.channelService.getChannelFiles().subscribe(function (res) {
            _this.channels = res;
        });
    };
    AddChannelComponent.prototype.addChannel = function () {
        var _this = this;
        this.channelService.setCurrentChannel(this.data.channelName);
        var channelDetails = {
            channelName: this.data.channelName,
            channelFile: this.data.channelFile
        };
        this.channelService.addChannel(channelDetails).subscribe(function (res) {
            _this.onNoClick(res);
        }, function (err) {
            _this.onNoClick('fail');
        });
    };
    AddChannelComponent.prototype.onNoClick = function (result) {
        this.dialogRef.close(result);
    };
    AddChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-channel',
            template: __webpack_require__(/*! ./add-channel.component.html */ "./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.html"),
            styles: [__webpack_require__(/*! ./add-channel.component.scss */ "./src/app/lazyloading/blockchain/channel/add-channel/add-channel.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [app_services_channel_service__WEBPACK_IMPORTED_MODULE_2__["ChannelService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
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

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Channel\">\n    </mat-form-field>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"addChannel\" (click)=\"getChannelInfo()\">\n      <mat-icon svgIcon=\"account-clock\"></mat-icon> Refresh</button>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"addChannel\" (click)=\"openDialog()\">\n      <mat-icon svgIcon=\"account-clock\"></mat-icon> Add Channel</button>\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Block HeightColumn -->\n    <ng-container matColumnDef=\"blockHeight\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> BLOCK HEIGHT </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.height}} </td>\n    </ng-container>\n\n    <!-- Peers Column -->\n    <ng-container matColumnDef=\"peers\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> PEERS </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.peers}} </td>\n    </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Actions For Chaincode\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item>\n            <mat-icon svgIcon=\"square-edit-outline\"></mat-icon>\n            <span>Edit Channel</span>\n          </button>\n        </mat-menu>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

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
/* harmony import */ var app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/channel.service */ "./src/app/services/channel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagechannelsComponent = /** @class */ (function () {
    function ManagechannelsComponent(channelService, dialog, snackBar) {
        this.channelService = channelService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = [
            'id',
            'blockHeight',
            'peers',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
    }
    ManagechannelsComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.getChannelInfo();
    };
    ManagechannelsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ManagechannelsComponent.prototype.getChannelInfo = function () {
        var _this = this;
        this.channelService.getChannelInfo().subscribe(function (res) {
            _this.dataSource.data = res;
            _this.dataSource._updateChangeSubscription();
        }, function (err) {
            console.log(err);
        });
    };
    ManagechannelsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_channel_add_channel_component__WEBPACK_IMPORTED_MODULE_2__["AddChannelComponent"], {
            width: '50%',
            data: {
                title: this.title,
                channelName: this.channelName,
                channelFile: this.channelFile
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.message) {
                _this.openSnackBar(result.message);
            }
            else if (result === 'fail') {
                _this.openSnackBar('Unhandled exception might be occured');
            }
        });
    };
    ManagechannelsComponent.prototype.openDialogRequestChannel = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_request_channel_request_channel_component__WEBPACK_IMPORTED_MODULE_3__["RequestChannelComponent"], {
            width: '50%',
            data: {
                title: this.title,
                channelName: this.channelName,
                peers: this.peers
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.openSnackBar(result);
        });
    };
    ManagechannelsComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'Close', {
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
        __metadata("design:paramtypes", [app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
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

module.exports = "<div class=\"col-md-12 full-width\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Notifications\">\n    </mat-form-field>\n\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- NAME Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> NAME </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"name\">{{element.title}}</span>\n        <p class=\"message\">\n          username: {{element.username}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- Time Updated Column -->\n    <ng-container matColumnDef=\"time\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TIME REQUESTED </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"name\">username: {{element.username}}</span>\n        <p class=\"message\">\n          {{element.date}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- Block Status -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"name\">\n        <i class=\"fa fa-circle text-danger\"></i>\n        {{element.status}} </td>\n    </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color='primary' (click)=\"approveRequest({title:element.title,username:element.username})\" matTooltip=\"Approve\"\n        *ngIf='element.status == \"pending\" ||  element.status == \"reject\" '>\n          <mat-icon>done</mat-icon>\n        </button>\n        <button mat-icon-button color='warn' (click)=\"rejectRequest(element.username)\" matTooltip=\"Reject\"\n          *ngIf='element.status == \"pending\" || element.status == \"approve\" '>\n          <mat-icon>clear</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/all-notifications/all-notifications.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.name {\n  font-weight: 600;\n  font-family: serif; }\n\n.message {\n  font-size: 12px;\n  font-family: serif; }\n\n.full-width {\n  width: 100%; }\n"

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
/* harmony import */ var app_services_certificate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/certificate.service */ "./src/app/services/certificate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllNotificationsComponent = /** @class */ (function () {
    function AllNotificationsComponent(snackBar, certificateService) {
        this.snackBar = snackBar;
        this.certificateService = certificateService;
        this.displayedColumns = [
            'name',
            'time',
            'status',
            'action'
        ];
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    AllNotificationsComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.getAllCertificates();
    };
    AllNotificationsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AllNotificationsComponent.prototype.approveRequest = function (data) {
        if (data.title === 'Birth Certificate') {
            this.addBirth(data);
        }
        if (data.title === 'National ID') {
            this.addNational(data);
        }
        if (data.title === 'Marriage Certificate') {
            this.addMarriage(data);
        }
    };
    AllNotificationsComponent.prototype.rejectRequest = function (username) {
        this.certificateService.rejectBirthRequest({ username: username }).subscribe(function (res) { console.log(res); }, function (err) { console.log(err); });
    };
    AllNotificationsComponent.prototype.addBirth = function (data) {
        var _this = this;
        this.certificateService.approveBirthRequest(data).subscribe(function (res) {
            if (res['success']) {
                _this.certificateService.getFromMongo({ path: 'birth', id: res['docs']._id }).subscribe(function (response) {
                    if (response['success']) {
                        _this.openSnackBar(response['msg']);
                    }
                    var birthData = response['docs'].info;
                    _this.certificateService.addBirth(birthData).subscribe(function (finalResponse) {
                        if (finalResponse['success']) {
                            _this.openSnackBar('Transaction successfully executed');
                        }
                    }, function (finalError) { console.log(finalError); });
                }, function (error) { console.log(error); });
            }
        }, function (err) { console.log(err); });
    };
    AllNotificationsComponent.prototype.addNational = function (data) {
        var _this = this;
        this.certificateService.approvenationalRequest(data).subscribe(function (res) {
            if (res['success']) {
                _this.certificateService.getFromMongo({ path: 'nationalid', id: res['docs']._id }).subscribe(function (response) {
                    if (response['success']) {
                        _this.openSnackBar(response['msg']);
                    }
                    var nationalData = response['docs'];
                    console.log(nationalData);
                    _this.certificateService.addNationalId(nationalData).subscribe(function (finalResponse) {
                        if (finalResponse['success']) {
                            _this.openSnackBar('Transaction successfully executed');
                        }
                    }, function (finalError) { console.log(finalError); });
                }, function (error) { console.log(error); });
            }
        }, function (err) { console.log(err); });
    };
    AllNotificationsComponent.prototype.addMarriage = function (data) {
        var _this = this;
        this.certificateService.approvemarriageRequest(data).subscribe(function (res) {
            if (res['success']) {
                _this.certificateService.getFromMongo({ path: 'marriage', id: res['docs']._id }).subscribe(function (response) {
                    if (response['success']) {
                        _this.openSnackBar(response['msg']);
                    }
                    var marriageData = response['docs'];
                    _this.certificateService.addMarriage(marriageData.info).subscribe(function (finalResponse) {
                        if (finalResponse['success']) {
                            _this.openSnackBar('Transaction successfully executed');
                        }
                    }, function (finalError) { console.log(finalError); });
                }, function (error) { console.log(error); });
            }
        }, function (err) { console.log(err); });
    };
    AllNotificationsComponent.prototype.getAllCertificates = function () {
        var _this = this;
        this.certificateService.getBirthAll().subscribe(function (res) {
            _this.dataSource.data = res.docs;
            _this.dataSource._updateChangeSubscription();
        }, function (err) { console.log(err); });
        this.certificateService.getNationAll().subscribe(function (resp) {
            var _a;
            _this.dataSource.data = (_a = _this.dataSource.data).concat.apply(_a, resp.docs);
            _this.dataSource._updateChangeSubscription();
        }, function (err) { console.log(err); });
        this.certificateService.getMarriageAll().subscribe(function (response) {
            var _a;
            _this.dataSource.data = (_a = _this.dataSource.data).concat.apply(_a, response.docs);
            _this.dataSource._updateChangeSubscription();
        }, function (err) { console.log(err); });
    };
    AllNotificationsComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'Close', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
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
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            app_services_certificate_service__WEBPACK_IMPORTED_MODULE_2__["CertificateService"]])
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

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Notifications\">\n    </mat-form-field>\n\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- NAME Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> NAME </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"name\">{{element.title}}</span>\n        <p class=\"message\">\n          username: {{element.username}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- Time Updated Column -->\n    <ng-container matColumnDef=\"time\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TIME REQUESTED </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"name\">username: {{element.username}}</span>\n        <p class=\"message\">\n          {{element.date}}\n        </p>\n      </td>\n    </ng-container>\n \n    <!-- Block Status -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"name\">\n        <i class=\"fa fa-circle text-danger\"></i>\n        {{element.status}} </td>\n    </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color='primary' (click)=\"approveRequest(element.username)\" matTooltip=\"Approve\"\n        *ngIf='element.status == \"pending\" ||  element.status == \"reject\" '>\n          <mat-icon>done</mat-icon>\n        </button>\n        <button mat-icon-button color='warn' (click)=\"rejectRequest(element.username)\" matTooltip=\"Reject\"\n          *ngIf='element.status == \"pending\" || element.status == \"approve\" '>\n          <mat-icon>clear</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.name {\n  font-weight: 600;\n  font-family: serif; }\n\n.message {\n  font-size: 12px;\n  font-family: serif; }\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_services_certificate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/certificate.service */ "./src/app/services/certificate.service.ts");
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
    function CompletedNotificationsComponent(certificateService) {
        this.certificateService = certificateService;
        this.displayedColumns = [
            'name',
            'time',
            'status',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    CompletedNotificationsComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.getAllCertificates();
    };
    CompletedNotificationsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CompletedNotificationsComponent.prototype.approveRequest = function (username) {
        this.certificateService.approveBirthRequest({ username: username }).subscribe(function (res) { console.log(res); }, function (err) { console.log(err); });
    };
    CompletedNotificationsComponent.prototype.rejectRequest = function (username) {
        this.certificateService.rejectBirthRequest({ username: username }).subscribe(function (res) { console.log(res); }, function (err) { console.log(err); });
    };
    CompletedNotificationsComponent.prototype.getAllCertificates = function () {
        var _this = this;
        this.certificateService.getBirthAll().subscribe(function (res) {
            _this.dataSource.data = res['docs'].filter(function (doc) {
                if (doc.status === 'approve') {
                    return doc;
                }
            });
            _this.dataSource._updateChangeSubscription();
        }, function (err) { console.log(err); });
        this.certificateService.getNationAll().subscribe(function (resp) {
            var filtered = resp.docs.filter(function (doc) {
                if (doc.status === 'approve') {
                    return doc;
                }
                console.log(doc);
            });
            _this.dataSource.data = _this.dataSource.data.concat(filtered);
            _this.dataSource._updateChangeSubscription();
        }, function (err) { console.log(err); });
        this.certificateService.getMarriageAll().subscribe(function (response) {
            var filtered = response.docs.filter(function (doc) {
                if (doc.status === 'approve') {
                    return doc;
                }
            });
            _this.dataSource.data = _this.dataSource.data.concat(filtered);
            _this.dataSource._updateChangeSubscription();
        }, function (err) { console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CompletedNotificationsComponent.prototype, "sort", void 0);
    CompletedNotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completed-notifications',
            template: __webpack_require__(/*! ./completed-notifications.component.html */ "./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.html"),
            styles: [__webpack_require__(/*! ./completed-notifications.component.scss */ "./src/app/lazyloading/blockchain/notification/completed-notifications/completed-notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_certificate_service__WEBPACK_IMPORTED_MODULE_2__["CertificateService"]])
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

module.exports = "<mat-tab-group>\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <b class=\"text-danger\">All</b>\n      </ng-template>\n      <app-all-notifications></app-all-notifications>\n    </mat-tab>\n  \n    <mat-tab>\n      <ng-template mat-tab-label>\n        <b class=\"text-danger\">Pending</b>\n      </ng-template>\n      <app-pending-notifications></app-pending-notifications>\n    </mat-tab>\n\n    <mat-tab>\n        <ng-template mat-tab-label>\n          <b class=\"text-danger\">Approved</b>\n        </ng-template>\n        <app-completed-notifications></app-completed-notifications>\n      </mat-tab>\n  </mat-tab-group>"

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

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Notifications\">\n    </mat-form-field>\n\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- NAME Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> NAME </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"name\">{{element.title}}</span>\n        <p class=\"message\">\n          username: {{element.username}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- Time Updated Column -->\n    <ng-container matColumnDef=\"time\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TIME REQUESTED </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span class=\"name\">username: {{element.username}}</span>\n        <p class=\"message\">\n          {{element.date}}\n        </p>\n      </td>\n    </ng-container>\n\n    <!-- Block Status -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"name\">\n        <i class=\"fa fa-circle text-danger\"></i>\n        {{element.status}} </td>\n    </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color='primary' (click)=\"approveRequest(element.username)\" matTooltip=\"Approve\"\n        *ngIf='element.status == \"pending\" ||  element.status == \"reject\" '>\n          <mat-icon>done</mat-icon>\n        </button>\n        <button mat-icon-button color='warn' (click)=\"rejectRequest(element.username)\" matTooltip=\"Reject\"\n          *ngIf='element.status == \"pending\" || element.status == \"approve\" '>\n          <mat-icon>clear</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.name {\n  font-weight: 600;\n  font-family: serif; }\n\n.message {\n  font-size: 12px;\n  font-family: serif; }\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_services_certificate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/certificate.service */ "./src/app/services/certificate.service.ts");
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
    function PendingNotificationsComponent(certificateService) {
        this.certificateService = certificateService;
        this.displayedColumns = [
            'name',
            'time',
            'status',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    PendingNotificationsComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.getAllCertificates();
    };
    PendingNotificationsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PendingNotificationsComponent.prototype.approveRequest = function (username) {
        this.certificateService.approveBirthRequest({ username: username }).subscribe(function (res) { console.log(res); }, function (err) { console.log(err); });
    };
    PendingNotificationsComponent.prototype.rejectRequest = function (username) {
        this.certificateService.rejectBirthRequest({ username: username }).subscribe(function (res) { console.log(res); }, function (err) { console.log(err); });
    };
    PendingNotificationsComponent.prototype.getAllCertificates = function () {
        var _this = this;
        this.certificateService.getBirthAll().subscribe(function (res) {
            _this.dataSource.data = res['docs'].filter(function (doc) {
                if (doc.status === 'pending') {
                    return doc;
                }
            });
            _this.dataSource._updateChangeSubscription();
        }, function (err) { console.log(err); });
        this.certificateService.getNationAll().subscribe(function (resp) {
            var filtered = resp.docs.filter(function (doc) {
                if (doc.status === 'pending') {
                    return doc;
                }
            });
            _this.dataSource.data = _this.dataSource.data.concat(filtered);
            _this.dataSource._updateChangeSubscription();
        }, function (err) { console.log(err); });
        this.certificateService.getMarriageAll().subscribe(function (response) {
            var filtered = response.docs.filter(function (doc) {
                if (doc.status === 'pending') {
                    return doc;
                }
            });
            _this.dataSource.data = _this.dataSource.data.concat(filtered);
            _this.dataSource._updateChangeSubscription();
        }, function (err) { console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], PendingNotificationsComponent.prototype, "sort", void 0);
    PendingNotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-notifications',
            template: __webpack_require__(/*! ./pending-notifications.component.html */ "./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.html"),
            styles: [__webpack_require__(/*! ./pending-notifications.component.scss */ "./src/app/lazyloading/blockchain/notification/pending-notifications/pending-notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_certificate_service__WEBPACK_IMPORTED_MODULE_2__["CertificateService"]])
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

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n    <div class=\"card\">\n        <div class=\"card-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Name\" [(ngModel)]=\"data.name\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Certificate\" [(ngModel)]=\"data.certificate\">\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div mat-dialog-actions>\n    <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button class=\"btn btn-danger\" [mat-dialog-close]=\"data\" cdkFocusInitial>Submit</button>\n</div>"

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

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Certificate\">\n    </mat-form-field>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"addMember\" (click)=\"openDialog()\"><mat-icon>add_circle_outline</mat-icon> Add\n      Certificate</button>\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <!-- Type Column -->\n  <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TYPE </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n  </ng-container>\n\n  <!-- Affiliation Column -->\n  <ng-container matColumnDef=\"affiliation\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> AFFILIATION </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.affiliation}} </td>\n  </ng-container>\n\n    <!-- action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </th>\n      <td mat-cell *matCellDef=\"let element\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Actions For Certificate\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"openSnackBarCertificate()\" >\n                <mat-icon svgIcon=\"square-edit-outline\"></mat-icon>\n                <span>Revok</span>\n              </button>\n              <button mat-menu-item (click)=\"openSnackBarSyncCertificate()\">\n                <mat-icon svgIcon=\"sync\"></mat-icon>\n                <span>Reenroll</span>\n              </button>\n            </mat-menu>\n        </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

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
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line: max-line-length



var AddMembersCertificatesComponent = /** @class */ (function () {
    function AddMembersCertificatesComponent(dialog, snackBar, userService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.userService = userService;
        this.users = [];
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.displayedColumns = [
            'id',
            'type',
            'affiliation',
            'action'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    AddMembersCertificatesComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.getAllUsers();
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
    AddMembersCertificatesComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (res) {
            var response = res.valueOf();
            if (response['success']) {
                response['result'].forEach(function (identity) {
                    _this.users.push({
                        id: identity.id,
                        type: identity.type,
                        affiliation: identity.affiliation,
                    });
                });
                _this.dataSource.data = _this.users;
                _this.dataSource._updateChangeSubscription();
            }
            else {
                _this.dataSource.data = [];
            }
        }, function (err) { console.log(err); });
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
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AddMembersCertificatesComponent);
    return AddMembersCertificatesComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Peer Name\" [(ngModel)]=\"data.name\">\n          </mat-form-field>\n        </div>\n        <!-- <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Channel Name\" [(ngModel)]=\"data.channel\">\n          </mat-form-field>\n        </div> -->\n\n        <!--\n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <mat-form-field>\n                  <mat-label>Node Type</mat-label>\n                  <mat-select [(value)]=\"data.type\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n          </div>\n          <div class=\"col-md-6\">\n              <mat-form-field>\n                  <mat-label>MSP ID</mat-label>\n                  <mat-select [(value)]=\"data.mspId\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let msp of msps\" [value]=\"msp\">{{msp}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n          </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button class=\"btn btn-danger\" (click)=\"joinPeer()\" cdkFocusInitial>Join Peer</button>\n</div>"

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
/* harmony import */ var app_services_peer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/peer.service */ "./src/app/services/peer.service.ts");
/* harmony import */ var app_services_channel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/channel.service */ "./src/app/services/channel.service.ts");
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
    function AddPeerComponent(peerService, channelService, dialogRef, data) {
        this.peerService = peerService;
        this.channelService = channelService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.Channels = [];
        this.Peers = [];
        data.title = 'Join Channel';
    }
    AddPeerComponent.prototype.ngOnInit = function () {
        this.getPeers();
        this.channel = this.channelService.getCurrentChannel();
        console.log(this.channel);
    };
    AddPeerComponent.prototype.joinPeer = function () {
        var _this = this;
        var peerDetails = {
            peers: [this.data.name],
            channel: this.channel
        };
        this.peerService.joinChannel(peerDetails).subscribe(function (res) {
            _this.onNoClick(res);
        }, function (err) {
            _this.onNoClick(err);
        });
    };
    AddPeerComponent.prototype.getChannels = function () {
        var _this = this;
        this.channelService.getChannels().subscribe(function (res) {
            res.forEach(function (channel) {
                _this.Channels.push(channel.name);
            });
        }, function (err) { console.log(err); });
    };
    AddPeerComponent.prototype.getPeers = function () {
        var _this = this;
        this.peerService.getPeers().subscribe(function (res) {
            res.forEach(function (peer) {
                _this.Peers.push(peer.name);
            });
        }, function (err) { console.log(err); });
    };
    AddPeerComponent.prototype.onNoClick = function (result) {
        this.dialogRef.close(result);
    };
    AddPeerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-peer',
            template: __webpack_require__(/*! ./add-peer.component.html */ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.html"),
            styles: [__webpack_require__(/*! ./add-peer.component.scss */ "./src/app/lazyloading/blockchain/peers/add-peer/add-peer.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [app_services_peer_service__WEBPACK_IMPORTED_MODULE_2__["PeerService"],
            app_services_channel_service__WEBPACK_IMPORTED_MODULE_3__["ChannelService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
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

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <button mat-raised-button class=\"btn btn-danger\" id=\"addNode\" (click)=\"openDialog()\">\n      <mat-icon>add_to_queue</mat-icon> Join Channel</button>\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- NAME Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> NAME </th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.name}}\n      </td>\n    </ng-container>\n\n    <!-- ROUTE Column -->\n    <ng-container matColumnDef=\"route\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ROUTE </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.route}} </td>\n    </ng-container>\n\n    <!-- TYPE Column -->\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> TYPE </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n    </ng-container>\n\n    <!-- MSP ID Column -->\n    <ng-container matColumnDef=\"mspId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> MSP ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.mspId}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>"

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
/* harmony import */ var app_services_peer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/peer.service */ "./src/app/services/peer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPeersComponent = /** @class */ (function () {
    function ListPeersComponent(peerService, dialog, snackBar) {
        this.peerService = peerService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = [
            'name',
            'route',
            'type',
            'mspId'
        ];
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.blinker = true;
        this.dataSource.sort = this.sort;
    }
    ListPeersComponent.prototype.ngOnInit = function () {
        this.getPeers();
        this.getOrderers();
    };
    ListPeersComponent.prototype.getOrderers = function () {
        var _this = this;
        this.peerService.getOrderers().subscribe(function (res) {
            res.orderers.forEach(function (orderer) {
                var or = _this.buildOrderer(orderer, res.mspId);
                _this.dataSource.data.push(or);
                _this.dataSource._updateChangeSubscription();
            });
        }, function (err) { console.log(err); });
    };
    ListPeersComponent.prototype.getPeers = function () {
        var _this = this;
        this.peerService.getPeers().subscribe(function (res) {
            res.forEach(function (peer) {
                _this.dataSource.data.push(peer);
                _this.dataSource._updateChangeSubscription();
            });
        }, function (err) { console.log(err); });
    };
    ListPeersComponent.prototype.buildOrderer = function (orderer, mspId) {
        return { name: orderer._name, route: orderer._url, mspId: mspId, type: 'Orderer' };
    };
    ListPeersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListPeersComponent.prototype.openDialog = function () {
        var _this = this;
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
            if (result.message) {
                _this.openSnackBar(result.message);
            }
            else if (result === 'fail') {
                _this.openSnackBar('Unhandled exception might be occured');
            }
        });
    };
    ListPeersComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'Close', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
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
        __metadata("design:paramtypes", [app_services_peer_service__WEBPACK_IMPORTED_MODULE_3__["PeerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ListPeersComponent);
    return ListPeersComponent;
}());



/***/ }),

/***/ "./src/app/models/chaincode.ts":
/*!*************************************!*\
  !*** ./src/app/models/chaincode.ts ***!
  \*************************************/
/*! exports provided: InitiateChaincode, InstallChaincode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiateChaincode", function() { return InitiateChaincode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallChaincode", function() { return InstallChaincode; });
var InitiateChaincode = /** @class */ (function () {
    function InitiateChaincode(config) {
        this.peers = config.peers;
        this.chaincodeName = config.chaincodeName;
        this.chaincodeVersion = config.chaincodeVersion;
        this.chaincodeType = config.chaincodeType;
        this.fcn = config.fcn;
        this.args = config.args;
    }
    return InitiateChaincode;
}());

var InstallChaincode = /** @class */ (function () {
    function InstallChaincode(_config) {
        this.peers = _config.peers;
        this.chaincodeName = _config.chaincodeName;
        this.chaincodeType = _config.chaincodeType;
        this.chaincodeVersion = _config.chaincodeVersion;
        this.chaincodePath = _config.chaincodePath;
    }
    return InstallChaincode;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/routes/blockchain.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/blockchain.routing.ts ***!
  \**********************************************/
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