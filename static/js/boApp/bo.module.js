"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var bo_routing_1 = require('./bo.routing');
var content_module_1 = require('./content/content.module');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var bo_component_1 = require('./bo.component');
var navigation_component_1 = require('./navigation.component');
var BoModule = (function () {
    function BoModule() {
    }
    BoModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                bo_routing_1.routing,
                content_module_1.ContentModule,
                dashboard_module_1.DashboardModule
            ],
            declarations: [
                bo_component_1.BoComponent,
                navigation_component_1.NavigationComponent
            ],
            bootstrap: [
                bo_component_1.BoComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BoModule);
    return BoModule;
}());
exports.BoModule = BoModule;
