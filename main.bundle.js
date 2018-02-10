webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n  height: 85px;\r\n  border-bottom: 1px solid #000000;\r\n}\r\n\r\nheader, footer {\r\n  width: 100%;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#404040), to(#303030));\r\n  background: linear-gradient(#404040, #303030);\r\n  background: #404040;\r\n}\r\n\r\nheader .line {\r\n  width: 100%;\r\n  height: 20px;\r\n  background: #606060; \r\n}\r\n\r\nheader h1 {\r\n  font-weight: normal;\r\n  font-size: 18px;\r\n  letter-spacing: 0.5px;\r\n  color: rgba(255, 255, 255, 0.96);\r\n  text-shadow: 2px 2px 5px rgba(0,0,0,0.3);\r\n  margin: 22px 0;\r\n}\r\n\r\nheader img {\r\n  margin: 0 15px 0 20px;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  height: calc(100vh - 85px - 50px - 2px);\r\n  background:#151515;\r\n}\r\n\r\nmain #tools {\r\n  width: 20vw;\r\n  height: calc(88vh - 85px - 50px - 2px);\r\n  overflow-y: auto;\r\n  padding: 6vh 1vw;\r\n  background: rgba(255,255,255,0.05);\r\n  float: left;\r\n}\r\n\r\nmain #tools #mainMenu .mainMenuItem {\r\n  color: #808080;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  padding: 0 15px;\r\n  text-shadow: 2px 2px 3px rgba(0,0,0,0.3);\r\n  cursor: pointer;\r\n  margin: 8px 0;\r\n}\r\n\r\nmain #tools #mainMenu .active {\r\n  border-left: 3px solid rgba(255, 255, 255, 0.96);\r\n  color: rgba(255, 255, 255, 0.96);\r\n  cursor: default;\r\n  padding: 0 12px;\r\n}\r\n\r\nmain #tools #mainMenu .mainMenuItem:hover {\r\n  color: #346680;\r\n}\r\n\r\nmain #tools #mainMenu .active:hover {\r\n  color: rgba(255, 255, 255, 0.96);\r\n}\r\n\r\nmain #tools #subMenus {\r\n  margin: 40px 0 0 20px;\r\n}\r\n\r\nmain #tools #subMenus .subMenuItemGroup {\r\n  font-size: 12px;\r\n  border: 2px solid rgba(255, 255, 255, 0.96);\r\n  border-radius: 18px;\r\n  cursor: pointer;\r\n  margin: 10px 0 0 0;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  text-shadow: 2px 2px 3px rgba(0,0,0,0.3);\r\n  background: white;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\nmain #tools #subMenus .subMenuItemGroup .subMenuItem, \r\nmain #tools #subMenus .subMenuItemGroup input {\r\n  float: left;\r\n  padding: 8px 12px;\r\n  margin: 0;\r\n}\r\n\r\nmain #tools #subMenus .subMenuItemGroup input {\r\n  background: none;\r\n  color: #262626;\r\n  font-weight: normal;\r\n  text-shadow: none;\r\n}\r\n\r\nmain #tools #subMenus .subMenuItemGroup .small {\r\n  width: 50px;\r\n}\r\n\r\nmain #tools #subMenus .subMenuItem,\r\nmain #tools #subMenus input {\r\n  font-size: 12px;\r\n  color: rgba(255, 255, 255, 0.96);\r\n  border: 2px solid rgba(255, 255, 255, 0.96);\r\n  border-radius: 18px;\r\n  cursor: pointer;\r\n  padding: 8px 12px;\r\n  margin: 10px 0 0 0;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  max-width: 200px;\r\n  font-weight: bold;\r\n  letter-spacing: 1px;\r\n  text-shadow: 2px 2px 3px rgba(0,0,0,0.3);\r\n  background: #262626;\r\n}\r\n\r\nmain #tools #subMenus input {\r\n  cursor: text;\r\n  max-width: 120px;\r\n}\r\n\r\nmain #tools #subMenus .subMenuItem:hover {\r\n  background: #346680;\r\n}\r\n\r\nmain #tools #subMenus .subMenu p {\r\n  color: #346680;\r\n  border: 2px solid #346680;\r\n  border-radius: 18px;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  max-width: 200px;\r\n  padding: 8px 12px;\r\n  line-height: 22px;\r\n}\r\n\r\n.mainMenuItem, .subMenuItem {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.mainMenuItem span, .subMenuItem span {\r\n  font-size: 18px;\r\n  padding: 0 6px;\r\n  font-weight: bold;\r\n}\r\n\r\nmain #viewer {\r\n  height: 100%;\r\n  width: 73vw;\r\n  float: left;\r\n}\r\n\r\nfooter {\r\n  height: 50px;\r\n  border-top: 1px solid #000000;\r\n}\r\n\r\nfooter p {\r\n  text-align: center;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n  color: rgba(255,255,255,0.4);\r\n  letter-spacing: 2px;\r\n  text-shadow: 2px 2px 3px rgba(0,0,0,0.5);\r\n}\r\n\r\n#outline {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #aaaaaa;\r\n  overflow: auto;\r\n  height: calc(88vh - 210px);\r\n}\r\n\r\n#outline h2 {\r\n  margin: 0 0 10px 0;\r\n  padding: 0;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color: #dddddd;\r\n}\r\n\r\n#outline ul {\r\n  margin: 0;\r\n  padding: 5px 1vw;\r\n}\r\n\r\n#outline li {\r\n  font-size: 14px;\r\n}\r\n\r\n#outline .outline-main-item {\r\n  font-weight: bold;\r\n  color: #dddddd;\r\n}\r\n\r\n#outline a {\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n#outline a:hover {\r\n  color: #346680;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"line\">&nbsp;</div>\n  <div class=\"flex-container\">\n    <img src=\"assets/icon.png\" />\n    <h1>Simple PDF Viewer</h1>\n  </div>\n</header>\n\n<main>\n  <section id=\"tools\">\n\n    <!-- Main Menu -->\n    <div id=\"mainMenu\">\n      <div *ngIf=\"!backButtonVisible\">\n        <div class=\"mainMenuItem\" [class.active]=\"isActiveMenu(1)\" (click)=\"setActiveMenu(1)\">Document</div>\n        <div class=\"mainMenuItem\" [class.active]=\"isActiveMenu(2)\" (click)=\"setActiveMenu(2)\">Table of Content</div>\n        <div class=\"mainMenuItem\" [class.active]=\"isActiveMenu(3)\" (click)=\"setActiveMenu(3)\">Navigation</div>\n        <div class=\"mainMenuItem\" [class.active]=\"isActiveMenu(4)\" (click)=\"setActiveMenu(4)\">Zooming</div>\n        <div class=\"mainMenuItem\" [class.active]=\"isActiveMenu(5)\" (click)=\"setActiveMenu(5)\">Rotation</div>\n        <div class=\"mainMenuItem\" [class.active]=\"isActiveMenu(6)\" (click)=\"setActiveMenu(6)\">Searching</div>\n      </div>\n      <div *ngIf=\"backButtonVisible\">\n        <div class=\"mainMenuItem\" [class.active]=\"isActiveMenu(1)\" (click)=\"setActiveMenu(1)\"><span class=\"fa fa-angle-double-left\"></span>Back</div>\n      </div>\n    </div>\n\n    <!-- Sub Menus -->\n    <div id=\"subMenus\">\n      <!-- Document -->\n      <div class=\"subMenu\" *ngIf=\"isActiveMenu(1)\">\n          <div class=\"subMenuItem\" (click)=\"urlField.click()\">Open Document...</div>\n          <input style=\"display: none;\" #urlField type=\"file\" (change)=\"openDocument(urlField.files)\">\n      </div>\n      <!-- Table of Content -->\n      <div class=\"subMenu\" *ngIf=\"isActiveMenu(2)\">\n        <div id=\"outline\" *ngIf=\"pdfViewer.hasOutline()\">\n          <h2>Table of Content</h2>\n          <ul *ngFor=\"let item of pdfViewer.getOutline()\" class=\"outline-list\">\n            <li>\n              <a (click)=\"pdfViewer.navigateToDestination(item.dest)\" class=\"outline-main-item\">{{ item.title }}</a>\n              <ul class=\"outline-sub-item\" *ngFor=\"let child of item.items\">\n                <li><a (click)=\"pdfViewer.navigateToDestination(child.dest)\">{{ child.title }}</a></li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!-- Navigation -->\n      <div class=\"subMenu\" *ngIf=\"isActiveMenu(3)\">\n        <div class=\"subMenuItemGroup\">\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.firstPage()\">First Page</div>\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.lastPage()\">Last Page</div>\n          <div class=\"clear\"></div>\n        </div>\n          <div class=\"subMenuItemGroup\">\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.prevPage()\">Previous Page</div>\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.nextPage()\">Next Page</div>\n          <div class=\"clear\"></div>\n        </div>\n        <div class=\"subMenuItemGroup\">\n          <input class=\"small\" type=\"number\" pattern=\"-?[0-9]*(\\.[0-9]+)?\" [(ngModel)]=\"pageBox\" size=\"5\" (keyup.enter)=\"pdfViewer.navigateToPage(pageBox)\" placeholder=\"Page..\">\n          <div class=\"subMenuItem fa fa-search\" (click)=\"pdfViewer.navigateToPage(pageBox)\"></div>\n          <div class=\"clear\"></div>\n        </div>\n        <p>\n          Number of Pages: {{pdfViewer.getNumberOfPages()}} <br/> \n          Actual page: {{pdfViewer.getCurrentPage()}}\n        </p>\n      </div>\n      <!-- Zooming -->\n      <div class=\"subMenu\" *ngIf=\"isActiveMenu(4)\">\n        <div class=\"subMenuItemGroup\">\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.zoomIn()\">In</div>\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.setZoom(0.5)\">50%</div>\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.zoomReset()\">100%</div>\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.zoomOut()\">Out</div>\n          <div class=\"clear\"></div>\n        </div>\n        <div class=\"subMenuItemGroup\">\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.zoomPageWidth()\">Width</div>\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.zoomFullPage()\">Full</div>\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.zoomPageHeight()\">Height</div>\n          <div class=\"clear\"></div>\n        </div>\n          <div class=\"subMenuItemGroup\">\n            <input class=\"small\" type=\"number\" pattern=\"-?[0-9]*(\\.[0-9]+)?\" [(ngModel)]=\"zoomBox\" size=\"5\" (keyup.enter)=\"pdfViewer.setZoomInPercent(zoomBox)\" placeholder=\"Zoom...\">\n            <div class=\"subMenuItem fa fa-search\" (click)=\"pdfViewer.setZoomInPercent(zoomBox)\"></div>\n            <div class=\"clear\"></div>\n          </div>\n          <p>\n            Actual zoom value: {{getZoomPercent()}} % <br/>\n            Constraint: 5% <= Zoom <= 500%\n          </p>\n      </div>\n      <!-- Rotation -->\n      <div class=\"subMenu\" *ngIf=\"isActiveMenu(5)\">\n        <div class=\"subMenuItemGroup\">\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.turnLeft()\"><span class=\"fa fa-rotate-left\"></span></div>\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.resetRotation()\">Reset</div>\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.turnRight()\"><span class=\"fa fa-rotate-right\"></span></div>\n          <div class=\"clear\"></div>\n        </div>\n        <p>Actual rotation: {{pdfViewer.getRotation()}} &deg;</p>\n      </div>\n      <!-- Searching -->\n      <div class=\"subMenu\" *ngIf=\"isActiveMenu(6)\">\n        <div class=\"subMenuItemGroup\">\n          <input type=\"input\" [(ngModel)]=\"searchBox\" (keyup.enter)=\"searchText(searchBox)\" placeholder=\"Type...\" value=\"{{lastSearch}}\">\n          <div class=\"subMenuItem fa fa-search\" (click)=\"searchText(searchBox)\"></div>\n          <div class=\"clear\"></div>\n        </div>\n        <div class=\"subMenuItemGroup\" *ngIf=\"pdfViewer.hasMatches()\">\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.previousMatch()\">Previous</div>\n          <div class=\"subMenuItem\" (click)=\"pdfViewer.nextMatch()\">Next</div>\n          <div class=\"clear\"></div>\n        </div>\n        <p *ngIf=\"!pdfViewer.isSearching()\">Number of matches: {{pdfViewer.getNumberOfMatches()}}</p>\n        <p *ngIf=\"pdfViewer.isSearching()\">Searching...</p>\n      </div>\n    </div>\n\n  </section>\n\n  <!-- Simple PDF Viewer Container -->\n  <section id=\"viewer\">\n    <simple-pdf-viewer #pdfViewer [src]=\"'assets/example/pdf-test.pdf'\" (onProgress)=\"onProgress($event)\" (onError)=\"onError($event)\"></simple-pdf-viewer>\n  </section>\n</main>\n\n<footer>\n  <p>{{pdfViewer.getCurrentPage() + ' / ' + pdfViewer.getNumberOfPages()}} ({{getZoomPercent()}}%)</p>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simple_pdf_viewer_simplePdfViewer_component__ = __webpack_require__("../../../../../src/simple-pdf-viewer/simplePdfViewer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OUTLINE_MENU = 2;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.renderedPercent = 0;
        this.activeMenu = 1;
        this.backButtonVisible = false;
        this.errorMsg = '';
        this.lastSearch = '';
    }
    AppComponent.prototype.isActiveMenu = function (activeMenu) {
        return this.pdfComponent.isDocumentLoaded() && this.activeMenu === activeMenu;
    };
    AppComponent.prototype.setActiveMenu = function (activeMenuID) {
        this.activeMenu = activeMenuID;
        if (activeMenuID == OUTLINE_MENU) {
            this.backButtonVisible = true;
        }
        else {
            this.backButtonVisible = false;
        }
    };
    AppComponent.prototype.onProgress = function (event) {
        this.renderedPercent = Math.round((event.loaded / event.total) * 100);
        this.renderedPercent = this.renderedPercent > 100 ? 100 : this.renderedPercent;
    };
    AppComponent.prototype.getZoomPercent = function () {
        return Math.floor(this.pdfComponent.getZoom() * 1000) / 10;
    };
    AppComponent.prototype.openDocument = function (documents) {
        var _this = this;
        this.errorMsg = '';
        if (documents) {
            var fileReader_1 = new FileReader();
            fileReader_1.onload = function () {
                _this.pdfComponent.openDocument(new Uint8Array(fileReader_1.result));
            };
            fileReader_1.readAsArrayBuffer(documents[0]);
        }
    };
    AppComponent.prototype.searchText = function (text) {
        this.lastSearch = this.pdfComponent.search(text);
    };
    AppComponent.prototype.onError = function (event) {
        this.errorMsg = 'Failed to load the document';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__simple_pdf_viewer_simplePdfViewer_component__["a" /* SimplePdfViewerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__simple_pdf_viewer_simplePdfViewer_component__["a" /* SimplePdfViewerComponent */])
    ], AppComponent.prototype, "pdfComponent", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_pdf_viewer_simplePdfViewer_module__ = __webpack_require__("../../../../../src/simple-pdf-viewer/simplePdfViewer.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__simple_pdf_viewer_simplePdfViewer_module__["a" /* SimplePdfViewerModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/simple-pdf-viewer/simplePdfViewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .pdfViewerContainer {\r\n  overflow: auto;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:host /deep/ .textLayer {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow: hidden;\r\n  opacity: 0.2;\r\n  line-height: 1.0;\r\n}\r\n\r\n:host /deep/ .textLayer > div {\r\n  color: transparent;\r\n  position: absolute;\r\n  white-space: pre;\r\n  cursor: text;\r\n  -webkit-transform-origin: 0% 0%;\r\n  transform-origin: 0% 0%;\r\n}\r\n\r\n:host /deep/ .textLayer .highlight {\r\n  margin: -1px;\r\n  padding: 1px;\r\n\r\n  background-color: #002bff;\r\n  border-radius: 4px;\r\n}\r\n\r\n:host /deep/ .textLayer .highlight.begin {\r\n  border-radius: 4px 0px 0px 4px;\r\n}\r\n\r\n:host /deep/ .textLayer .highlight.end {\r\n  border-radius: 0px 4px 4px 0px;\r\n}\r\n\r\n:host /deep/ .textLayer .highlight.middle {\r\n  border-radius: 0px;\r\n}\r\n\r\n:host /deep/ .textLayer .highlight.selected {\r\n  background-color: rgb(0, 100, 0);\r\n}\r\n\r\n:host /deep/ .textLayer ::-moz-selection { background: #002bff; }\r\n\r\n:host /deep/ .textLayer ::selection { background: #002bff; }\r\n\r\n:host /deep/ .textLayer ::-moz-selection { background: #002bff; }\r\n\r\n:host /deep/ .textLayer .endOfContent {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 100%;\r\n  right: 0px;\r\n  bottom: 0px;\r\n  z-index: -1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  -moz-user-select: none;\r\n}\r\n\r\n:host /deep/ .textLayer .endOfContent.active {\r\n  top: 0px;\r\n}\r\n\r\n:host /deep/ .annotationLayer section {\r\n  position: absolute;\r\n}\r\n\r\n:host /deep/ .annotationLayer .linkAnnotation > a {\r\n  position: absolute;\r\n  font-size: 1em;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n:host /deep/ .annotationLayer .linkAnnotation > a /* -ms-a */  {\r\n  background: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\") 0 0 repeat;\r\n}\r\n\r\n:host /deep/ .annotationLayer .linkAnnotation > a:hover {\r\n  opacity: 0.2;\r\n  background: #002bff;\r\n  -webkit-box-shadow: 0px 2px 10px #002bff;\r\n          box-shadow: 0px 2px 10px #002bff;\r\n}\r\n\r\n:host /deep/ .annotationLayer .textAnnotation img {\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n\r\n:host /deep/ .annotationLayer .textWidgetAnnotation input,\r\n:host /deep/ .annotationLayer .textWidgetAnnotation textarea,\r\n:host /deep/ .annotationLayer .choiceWidgetAnnotation select,\r\n:host /deep/ .annotationLayer .buttonWidgetAnnotation.checkBox input,\r\n:host /deep/ .annotationLayer .buttonWidgetAnnotation.radioButton input {\r\n  background-color: #002bff;\r\n  border: 1px solid transparent;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size: 9px;\r\n  height: 100%;\r\n  padding: 0 3px;\r\n  vertical-align: top;\r\n  width: 100%;\r\n}\r\n\r\n:host /deep/ .annotationLayer .textWidgetAnnotation textarea {\r\n  font: message-box;\r\n  font-size: 9px;\r\n  resize: none;\r\n}\r\n\r\n:host /deep/ .annotationLayer .textWidgetAnnotation input[disabled],\r\n:host /deep/ .annotationLayer .textWidgetAnnotation textarea[disabled],\r\n:host /deep/ .annotationLayer .choiceWidgetAnnotation select[disabled],\r\n:host /deep/ .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],\r\n:host /deep/ .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {\r\n  background: none;\r\n  border: 1px solid transparent;\r\n  cursor: not-allowed;\r\n}\r\n\r\n:host /deep/ .annotationLayer .textWidgetAnnotation input:hover,\r\n:host /deep/ .annotationLayer .textWidgetAnnotation textarea:hover,\r\n:host /deep/ .annotationLayer .choiceWidgetAnnotation select:hover,\r\n:host /deep/ .annotationLayer .buttonWidgetAnnotation.checkBox input:hover,\r\n:host /deep/ .annotationLayer .buttonWidgetAnnotation.radioButton input:hover {\r\n  border: 1px solid #000;\r\n}\r\n\r\n:host /deep/ .annotationLayer .textWidgetAnnotation input:focus,\r\n:host /deep/ .annotationLayer .textWidgetAnnotation textarea:focus,\r\n:host /deep/ .annotationLayer .choiceWidgetAnnotation select:focus {\r\n  background: none;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n:host /deep/ .annotationLayer .textWidgetAnnotation input.comb {\r\n  font-family: monospace;\r\n  padding-left: 2px;\r\n  padding-right: 0;\r\n}\r\n\r\n:host /deep/ .annotationLayer .textWidgetAnnotation input.comb:focus {\r\n  width: 115%;\r\n}\r\n\r\n:host /deep/ .annotationLayer .buttonWidgetAnnotation.checkBox input,\r\n:host /deep/ .annotationLayer .buttonWidgetAnnotation.radioButton input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  -ms-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n:host /deep/ .annotationLayer .popupWrapper {\r\n  position: absolute;\r\n  width: 20em;\r\n}\r\n\r\n:host /deep/ .annotationLayer .popup {\r\n  position: absolute;\r\n  z-index: 200;\r\n  max-width: 20em;\r\n  background-color: #FFFF99;\r\n  -webkit-box-shadow: 0px 2px 5px #333;\r\n          box-shadow: 0px 2px 5px #333;\r\n  border-radius: 2px;\r\n  padding: 0.6em;\r\n  margin-left: 5px;\r\n  cursor: pointer;\r\n  word-wrap: break-word;\r\n}\r\n\r\n:host /deep/ .annotationLayer .popup h1 {\r\n  font-size: 1em;\r\n  border-bottom: 1px solid #000000;\r\n  padding-bottom: 0.2em;\r\n}\r\n\r\n:host /deep/ .annotationLayer .popup p {\r\n  padding-top: 0.2em;\r\n}\r\n\r\n:host /deep/ .annotationLayer .highlightAnnotation,\r\n:host /deep/ .annotationLayer .underlineAnnotation,\r\n:host /deep/ .annotationLayer .squigglyAnnotation,\r\n:host /deep/ .annotationLayer .strikeoutAnnotation,\r\n:host /deep/ .annotationLayer .fileAttachmentAnnotation {\r\n  cursor: pointer;\r\n}\r\n\r\n:host /deep/ .pdfViewer .canvasWrapper {\r\n  overflow: hidden;\r\n}\r\n\r\n:host /deep/ .pdfViewer .page {\r\n  direction: ltr;\r\n  width: 816px;\r\n  height: 1056px;\r\n  margin: 1px auto -8px auto;\r\n  position: relative;\r\n  overflow: visible;\r\n  border: 9px solid transparent;\r\n  background-clip: content-box;\r\n  -o-border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=') 9 9 repeat;\r\n     border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=') 9 9 repeat;\r\n  background-color: white;\r\n}\r\n\r\n:host /deep/ .pdfViewer.removePageBorders .page {\r\n  margin: 0px auto 10px auto;\r\n  border: none;\r\n}\r\n\r\n:host /deep/ .pdfViewer.singlePageView {\r\n  display: inline-block;\r\n}\r\n\r\n:host /deep/ .pdfViewer.singlePageView .page {\r\n  margin: 0;\r\n  border: none;\r\n}\r\n\r\n:host /deep/ .pdfViewer .page canvas {\r\n  margin: 0;\r\n  display: block;\r\n}\r\n\r\n:host /deep/ .pdfViewer .page .loadingIcon {\r\n  position: absolute;\r\n  display: block;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: url('data:image/gif;base64,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') center no-repeat;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/simple-pdf-viewer/simplePdfViewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearchState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplePdfViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Viktor Hajer on 02/08/2018.
 */

var SearchState;
(function (SearchState) {
    SearchState[SearchState["FOUND"] = 0] = "FOUND";
    SearchState[SearchState["NOT_FOUND"] = 1] = "NOT_FOUND";
    SearchState[SearchState["WRAPPED"] = 2] = "WRAPPED";
    SearchState[SearchState["PENDING"] = 3] = "PENDING";
})(SearchState || (SearchState = {}));
var ScalePriority;
(function (ScalePriority) {
    ScalePriority[ScalePriority["FULL"] = 0] = "FULL";
    ScalePriority[ScalePriority["WIDTH"] = 1] = "WIDTH";
    ScalePriority[ScalePriority["HEIGHT"] = 2] = "HEIGHT";
})(ScalePriority || (ScalePriority = {}));
if (typeof window !== 'undefined') {
    window['pdfjs-dist/build/pdf'] = __webpack_require__("../../../../pdfjs-dist/build/pdf.js");
    __webpack_require__("../../../../pdfjs-dist/web/compatibility.js");
    __webpack_require__("../../../../pdfjs-dist/web/pdf_viewer.js");
    PDFJS.verbosity = PDFJS.VERBOSITY_LEVELS.errors;
}
/**
 * PDF Viewer component created by SET
 */
var SimplePdfViewerComponent = /** @class */ (function () {
    function SimplePdfViewerComponent(element) {
        this.element = element;
        /**
         * The document will be opened at this page first (Optional)
         * @type {number}
         */
        this.startPage = 1;
        /**
         * Disable the rendering of the text layer (Optional)
         * @type {boolean}
         */
        this.disableTextLayer = false;
        this.onLoadComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onProgress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onSearchStateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.loaded = false;
        this.currentPage = 1;
        this.numberOfPages = 1;
        this.outline = [];
        this.zoom = 1.0;
        this.rotation = 0;
        this.searching = false;
        this.lastSearchText = '';
        this.searchPrevious = false;
        this.searchCaseSensitive = false;
    }
    SimplePdfViewerComponent_1 = SimplePdfViewerComponent;
    /**
     * Init angular component
     */
    SimplePdfViewerComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            if (typeof PDFJS.workerSrc !== 'string') {
                var workerUrl = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + PDFJS.version + "/pdf.worker.min.js";
                PDFJS.workerSrc = workerUrl;
            }
            this.initPDFJS();
            this.loadFile();
        }
    };
    /**
     * Open a PDF document at the specified page (at the first page by default)
     * @param src Source of the PDF document
     * @param page The specified page where should start
     */
    SimplePdfViewerComponent.prototype.openDocument = function (src, page) {
        if (page) {
            this.startPage = parseInt("" + page, 10);
        }
        if (!page || !this.startPage) {
            this.startPage = 1;
        }
        this.src = src;
        if (this.pdfFindController) {
            this.pdfFindController.reset();
        }
        this.loadFile();
    };
    /**
     * Returns whether the PDF document is loaded properly
     * @returns {boolean} true if document is loaded
     */
    SimplePdfViewerComponent.prototype.isDocumentLoaded = function () {
        return this.loaded;
    };
    /**
     * Init PDFjs releated entries
     */
    SimplePdfViewerComponent.prototype.initPDFJS = function () {
        PDFJS.disableTextLayer = this.disableTextLayer;
        this.pdfLinkService = new PDFJS.PDFLinkService();
        this.pdfViewer = new PDFJS.PDFSinglePageViewer({
            container: this.getContainer(),
            removePageBorders: false,
            linkService: this.pdfLinkService,
        });
        this.pdfLinkService.setViewer(this.pdfViewer);
        this.pdfFindController = new PDFJS.PDFFindController({
            pdfViewer: this.pdfViewer
        });
        this.pdfViewer.setFindController(this.pdfFindController);
    };
    /**
     * Load the specified document
     */
    SimplePdfViewerComponent.prototype.loadFile = function () {
        var _this = this;
        this.loaded = false;
        if (this.src) {
            var progressSrc = void 0;
            if (typeof this.src === 'string') {
                progressSrc = PDFJS.getDocument({ url: this.src, withCredentials: true });
            }
            else {
                progressSrc = PDFJS.getDocument(this.src);
            }
            // progress
            progressSrc.onProgress = function (progressData) {
                _this.onProgress.emit(progressData);
            };
            // loaded
            progressSrc.promise.then(function (pdfDocument) {
                var container = _this.getContainer();
                _this.pdfViewer.setDocument(pdfDocument);
                _this.pdfViewer.currentScaleValue = SimplePdfViewerComponent_1.PDF_VIEWER_DEFAULT_SCALE;
                _this.pdfLinkService.setDocument(pdfDocument, null);
                _this.pdf = pdfDocument;
                _this.pdf.getOutline().then(function (outline) {
                    _this.outline = outline;
                });
                _this.currentPage = 1;
                _this.zoom = 1;
                _this.numberOfPages = _this.pdf.numPages;
                _this.loaded = true;
                container.addEventListener('pagesinit', function () {
                    _this.pdfViewer.currentScaleValue = SimplePdfViewerComponent_1.PDF_VIEWER_DEFAULT_SCALE;
                    _this.zoomFullPage();
                    if (_this.startPage !== 1) {
                        _this.navigateToPage(_this.startPage);
                    }
                    _this.onLoadComplete.emit(pdfDocument);
                });
                container.addEventListener('pagechange', function () {
                    _this.currentPage = _this.pdfViewer._currentPageNumber;
                    _this.zoom = _this.pdfViewer._currentScale;
                });
            }, function (error) {
                _this.onError.emit(error);
            });
        }
    };
    /**
     * Returns the HTML container element of the component
     * @returns {HTMLElement} container
     */
    SimplePdfViewerComponent.prototype.getContainer = function () {
        return this.element.nativeElement.querySelector('div');
    };
    /* ***************************************************
     * RESIZING AND ZOOMING
     ***************************************************/
    /**
     * Returns the value of the viewport scale
     * @returns {number} scale of the PDF viewport
     */
    SimplePdfViewerComponent.prototype.getZoom = function () {
        return this.zoom;
    };
    /**
     * Increases the scale of the PDF viewport
     */
    SimplePdfViewerComponent.prototype.zoomIn = function () {
        if (this.isDocumentLoaded()) {
            this.zoom += SimplePdfViewerComponent_1.ZOOM_UNIT;
            this.setZoom(this.zoom);
        }
    };
    /**
     * Decreases the scale of the PDF viewport
     */
    SimplePdfViewerComponent.prototype.zoomOut = function () {
        if (this.isDocumentLoaded()) {
            this.zoom -= SimplePdfViewerComponent_1.ZOOM_UNIT;
            this.setZoom(this.zoom);
        }
    };
    /**
     * Sets the original viewport scale back to 1.0
     */
    SimplePdfViewerComponent.prototype.zoomReset = function () {
        if (this.isDocumentLoaded()) {
            this.zoom = 1.0;
            this.setZoom(this.zoom);
        }
    };
    /**
     * Sets the scale of the PDF viewport to fit in the actual screen
     */
    SimplePdfViewerComponent.prototype.zoomFullPage = function () {
        var _this = this;
        if (this.isDocumentLoaded()) {
            this.pdf.getPage(this.currentPage).then(function (page) {
                var scale = _this.getScale(page.getViewport(1, _this.rotation), ScalePriority.FULL);
                _this.setZoom(scale);
            });
        }
    };
    /**
     * Sets the scale of the PDF viewport to fit in the actual screen (width priority)
     */
    SimplePdfViewerComponent.prototype.zoomPageWidth = function () {
        var _this = this;
        if (this.isDocumentLoaded()) {
            this.pdf.getPage(this.currentPage).then(function (page) {
                var scale = _this.getScale(page.getViewport(1, _this.rotation), ScalePriority.WIDTH);
                _this.setZoom(scale);
            });
        }
    };
    /**
     * Sets the scale of the PDF viewport to fit in the actual screen (width priority)
     */
    SimplePdfViewerComponent.prototype.zoomPageHeight = function () {
        var _this = this;
        if (this.isDocumentLoaded()) {
            this.pdf.getPage(this.currentPage).then(function (page) {
                var scale = _this.getScale(page.getViewport(1, _this.rotation), ScalePriority.HEIGHT);
                _this.setZoom(scale);
            });
        }
    };
    /**
     * Get the proper scale of the actual viewport to fit
     * @param viewport actual viewport
     * @returns {number} the fit scale
     */
    SimplePdfViewerComponent.prototype.getScale = function (viewport, priority) {
        if (priority === void 0) { priority = ScalePriority.FULL; }
        var offsetHeight = this.getContainer().offsetHeight;
        var offsetWidth = this.getContainer().offsetWidth;
        if (offsetHeight === 0 || offsetWidth === 0) {
            return 1;
        }
        var heightRatio = (offsetHeight - SimplePdfViewerComponent_1.PAGE_RESIZE_BORDER_HEIGHT) / viewport.height;
        var widthRatio = (offsetWidth - SimplePdfViewerComponent_1.PAGE_RESIZE_BORDER_WIDTH) / viewport.width;
        var ratio = heightRatio < widthRatio ? heightRatio : widthRatio;
        if (priority !== ScalePriority.FULL) {
            ratio = priority === ScalePriority.WIDTH ? widthRatio : heightRatio;
        }
        var zoom = 1;
        return Math.floor(zoom * ratio / SimplePdfViewerComponent_1.CSS_UNITS * 100) / 100;
    };
    /**
     * Set the zoom of the document
     * @param scale The zoom value in double
     */
    SimplePdfViewerComponent.prototype.setZoom = function (scale) {
        if (this.isDocumentLoaded() && typeof scale === 'number') {
            var normalizedScale = this.normalizeScale(scale);
            this.pdfViewer._setScale(normalizedScale, false);
            this.zoom = normalizedScale;
        }
    };
    /**
     * Set the scale of the document
     * @param zoom The scale value in percent
     */
    SimplePdfViewerComponent.prototype.setZoomInPercent = function (zoom) {
        if (this.isDocumentLoaded() && typeof zoom === 'number') {
            this.setZoom(zoom / 100);
        }
    };
    /**
     * Normalize the scale to fit in the scale boundary
     * @param scale
     * @returns {number} the normalized scale value
     */
    SimplePdfViewerComponent.prototype.normalizeScale = function (scale) {
        var normalizedScale = scale;
        if (scale > SimplePdfViewerComponent_1.MAX_ZOOM) {
            normalizedScale = SimplePdfViewerComponent_1.MAX_ZOOM;
        }
        else if (scale < SimplePdfViewerComponent_1.MIN_ZOOM) {
            normalizedScale = SimplePdfViewerComponent_1.MIN_ZOOM;
        }
        return normalizedScale;
    };
    /* ***************************************************
     * SEARCHING
     ***************************************************/
    /**
     * Starts case sensitive/insensitive text search and navigate to the first match (from the actual page)
     * @param text searched text
     * @param caseSensitive set true to use case sensitive searching
     */
    SimplePdfViewerComponent.prototype.search = function (text, caseSensitive) {
        if (caseSensitive === void 0) { caseSensitive = false; }
        if (this.isDocumentLoaded()) {
            var searchText = text ? this.removeSpecialChars(text) : '';
            if (!searchText) {
                return searchText;
            }
            this.lastSearchText = text;
            this.searchPrevious = false;
            this.searchCaseSensitive = caseSensitive;
            this.pdfFindController.onUpdateResultsCount = this.onUpdateResultsCount.bind(this);
            this.pdfFindController.onUpdateState = this.onUpdateState.bind(this);
            this.pdfFindController.executeCommand(SimplePdfViewerComponent_1.PDF_FINDER_FIND_COMMAND, {
                caseSensitive: this.searchCaseSensitive,
                findPrevious: false,
                highlightAll: true,
                phraseSearch: true,
                query: searchText
            });
            return searchText;
        }
        return text;
    };
    /**
     * Removes special characters from the input string and also trim it
     * @param text Text should be normlaized
     * @returns {string} The normalized text
     */
    SimplePdfViewerComponent.prototype.removeSpecialChars = function (text) {
        return text ? text.replace(/[`~!#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '').trim() : '';
    };
    /**
     * Navigates to the next search match if there were multiple hits
     */
    SimplePdfViewerComponent.prototype.nextMatch = function () {
        this.stepMatch(false);
    };
    /**
     * Navigates to the previous search match if there were multiple hits
     */
    SimplePdfViewerComponent.prototype.previousMatch = function () {
        this.stepMatch(true);
    };
    /**
     * Navigates to the next or previous search match if there were multiple hits
     * @param findPrevious set true to the previous match
     */
    SimplePdfViewerComponent.prototype.stepMatch = function (findPrevious) {
        if (this.isDocumentLoaded() && this.getNumberOfMatches() > 1) {
            if (this.searchPrevious !== findPrevious) {
                this.searchPrevious = findPrevious;
                this.searchAgain();
            }
            else {
                this.pdfFindController.nextMatch();
                this.currentPage = this.pdfViewer._currentPageNumber;
            }
        }
    };
    /**
     * Search again with the updated configuration
     */
    SimplePdfViewerComponent.prototype.searchAgain = function () {
        if (this.isDocumentLoaded()) {
            this.pdfFindController.executeCommand(SimplePdfViewerComponent_1.PDF_FINDER_AGAIN_COMMAND, {
                caseSensitive: this.searchCaseSensitive,
                findPrevious: this.searchPrevious,
                highlightAll: true,
                phraseSearch: true,
                query: this.lastSearchText
            });
        }
    };
    /**
     * Returns the number of the search hits
     * @returns {number} the number of matched result
     */
    SimplePdfViewerComponent.prototype.getNumberOfMatches = function () {
        if (this.isDocumentLoaded()) {
            return this.pdfFindController.matchCount;
        }
        return 0;
    };
    /**
     * Returns whether there is a matched item
     * @returns {boolean} true if there was matched item
     */
    SimplePdfViewerComponent.prototype.hasMatches = function () {
        return this.getNumberOfMatches() > 0;
    };
    /**
     * Returns whether the search is in-progress
     * @returns {boolean} true if searching operation is in-progress
     */
    SimplePdfViewerComponent.prototype.isSearching = function () {
        return this.searching;
    };
    /**
     * Called if the search result count is updated. It triggers the onUpdateResultsCount
     * emitter.
     */
    SimplePdfViewerComponent.prototype.onUpdateResultsCount = function () {
        this.pdfFindController.onUpdateResultsCount = null;
        this.currentPage = this.pdfViewer._currentPageNumber;
    };
    /**
     * Called if the search state is updated. It triggers the onUpdateState
     * emitter.
     * @param state the state of the current search
     */
    SimplePdfViewerComponent.prototype.onUpdateState = function (state) {
        this.onSearchStateChange.emit(state);
        this.searching = state === SearchState.PENDING;
        if (!this.searching) {
            this.pdfFindController.onUpdateState = null;
        }
    };
    /* ***************************************************
     * NAVIGATION
     ***************************************************/
    /**
     * Returns the number of the actual page
     * @returns {number} the number of actual page
     */
    SimplePdfViewerComponent.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    /**
     * Returns the number of the pages
     * @returns {number} the length of the document
     */
    SimplePdfViewerComponent.prototype.getNumberOfPages = function () {
        return this.numberOfPages;
    };
    /**
     * Returns outline / table of content in tree structure
     * @returns {any[]|Array} the outline of the document
     */
    SimplePdfViewerComponent.prototype.getOutline = function () {
        return this.outline ? this.outline : [];
    };
    /**
     * Returns whether the outline is available
     * @returns {boolean} true if outline is available
     */
    SimplePdfViewerComponent.prototype.hasOutline = function () {
        return this.loaded && !!this.outline && !!this.outline.length;
    };
    /**
     * Navigates to the specified (outline) destination
     * @param destination the destination object of the outline item
     */
    SimplePdfViewerComponent.prototype.navigateToDestination = function (destination) {
        if (this.isDocumentLoaded()) {
            // TODO: input validation
            this.pdfLinkService.navigateTo(destination);
        }
    };
    /**
     * Navigates to the first page
     */
    SimplePdfViewerComponent.prototype.firstPage = function () {
        if (this.isDocumentLoaded()) {
            this.currentPage = 1;
            this.navigateToPage(this.currentPage);
        }
    };
    /**
     * Navigates to the last page
     */
    SimplePdfViewerComponent.prototype.lastPage = function () {
        if (this.isDocumentLoaded()) {
            this.currentPage = this.getNumberOfPages();
            this.navigateToPage(this.currentPage);
        }
    };
    /**
     * Navigates to the next page
     */
    SimplePdfViewerComponent.prototype.nextPage = function () {
        if (this.isDocumentLoaded()) {
            this.currentPage++;
            this.navigateToPage(this.currentPage);
        }
    };
    /**
     * Navigates to the previous page
     */
    SimplePdfViewerComponent.prototype.prevPage = function () {
        if (this.isDocumentLoaded()) {
            this.currentPage--;
            this.navigateToPage(this.currentPage);
        }
    };
    /**
     * Navigates to the specified page
     * @param page the number of the page
     */
    SimplePdfViewerComponent.prototype.navigateToPage = function (page) {
        if (this.isDocumentLoaded()) {
            if (page) {
                var pageInt = parseInt("" + page, 10);
                this.currentPage = pageInt ? pageInt : this.currentPage;
            }
            if (this.currentPage > this.numberOfPages) {
                this.currentPage = 1;
            }
            if (this.currentPage <= 0) {
                this.currentPage = this.numberOfPages;
            }
            this.pdfViewer.scrollPageIntoView({
                pageNumber: this.currentPage
            });
        }
    };
    /* ***************************************************
     * ROTATION
     ***************************************************/
    /**
     * Sets the rotation to the default 0 degree
     */
    SimplePdfViewerComponent.prototype.resetRotation = function () {
        this.rotate(0);
    };
    /**
     * Turns left the document with 90 degree (counterclockwise)
     */
    SimplePdfViewerComponent.prototype.turnLeft = function () {
        this.rotate(this.rotation - 90);
    };
    /**
     * Turns right the document with 90 degree (clockwise)
     */
    SimplePdfViewerComponent.prototype.turnRight = function () {
        this.rotate(this.rotation + 90);
    };
    /**
     * Returns the actual rotation value in degree
     */
    SimplePdfViewerComponent.prototype.getRotation = function () {
        return this.rotation;
    };
    /**
     * Rotate the document with the specified angle (can be negative)
     * @param angle rotation angle
     */
    SimplePdfViewerComponent.prototype.rotate = function (angle) {
        if (angle === void 0) { angle = 90; }
        if (this.isDocumentLoaded()) {
            this.rotation = parseInt("" + angle, 10);
            this.pdfViewer.pagesRotation = this.rotation;
        }
    };
    SimplePdfViewerComponent.CSS_UNITS = 96.0 / 72.0;
    SimplePdfViewerComponent.PAGE_RESIZE_BORDER_HEIGHT = 30;
    SimplePdfViewerComponent.PAGE_RESIZE_BORDER_WIDTH = 50;
    SimplePdfViewerComponent.ZOOM_UNIT = 0.1;
    SimplePdfViewerComponent.MAX_ZOOM = 5; // max. zoom 500%
    SimplePdfViewerComponent.MIN_ZOOM = 0.05; // min. zoom 5%
    SimplePdfViewerComponent.PDF_FINDER_FIND_COMMAND = 'find';
    SimplePdfViewerComponent.PDF_FINDER_AGAIN_COMMAND = 'again';
    SimplePdfViewerComponent.PDF_VIEWER_DEFAULT_SCALE = 'page-fit';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SimplePdfViewerComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], SimplePdfViewerComponent.prototype, "startPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SimplePdfViewerComponent.prototype, "disableTextLayer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])('onLoadComplete'),
        __metadata("design:type", Object)
    ], SimplePdfViewerComponent.prototype, "onLoadComplete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])('onError'),
        __metadata("design:type", Object)
    ], SimplePdfViewerComponent.prototype, "onError", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])('onProgress'),
        __metadata("design:type", Object)
    ], SimplePdfViewerComponent.prototype, "onProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])('onSearchStateChange'),
        __metadata("design:type", Object)
    ], SimplePdfViewerComponent.prototype, "onSearchStateChange", void 0);
    SimplePdfViewerComponent = SimplePdfViewerComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'simple-pdf-viewer',
            template: "<div class=\"pdfViewerContainer\" [hidden]=\"!isDocumentLoaded()\"><div class=\"pdfViewer\"></div></div>",
            styles: [__webpack_require__("../../../../../src/simple-pdf-viewer/simplePdfViewer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], SimplePdfViewerComponent);
    return SimplePdfViewerComponent;
    var SimplePdfViewerComponent_1;
}());



/***/ }),

/***/ "../../../../../src/simple-pdf-viewer/simplePdfViewer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplePdfViewerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simplePdfViewer_component__ = __webpack_require__("../../../../../src/simple-pdf-viewer/simplePdfViewer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Viktor Hajer on 02/08/2018.
 */


var SimplePdfViewerModule = /** @class */ (function () {
    function SimplePdfViewerModule() {
    }
    SimplePdfViewerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__simplePdfViewer_component__["a" /* SimplePdfViewerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__simplePdfViewer_component__["a" /* SimplePdfViewerComponent */]]
        })
    ], SimplePdfViewerModule);
    return SimplePdfViewerModule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map