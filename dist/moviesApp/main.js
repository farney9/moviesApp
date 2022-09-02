"use strict";
(self["webpackChunkmoviesApp"] = self["webpackChunkmoviesApp"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 7598);
/* harmony import */ var _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/movie/movie.component */ 5334);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/search/search.component */ 5289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'movie/:id',
        component: _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_1__.MovieComponent
    },
    {
        path: 'search/:texto',
        component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 7655);



class AppComponent {
    constructor() {
        this.title = 'moviesApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container", "my-3", "mx-lg-2"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ 9258);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ 9525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);



// Components




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule] }); })();


/***/ }),

/***/ 3030:
/*!***********************************************************************!*\
  !*** ./src/app/components/cast-slideshow/cast-slideshow.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CastSlideshowComponent": () => (/* binding */ CastSlideshowComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 8587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/poster.pipe */ 7630);




function CastSlideshowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "poster");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, actor_r1.profile_path), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", actor_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", actor_r1.name, " ");
} }
class CastSlideshowComponent {
    constructor() { }
    ngAfterViewInit() {
        this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.swiper-container', {
            slidesPerView: 5.3,
            freeMode: true,
            spaceBetween: 15,
            // Navigation arrows
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // },
        });
    }
    ngOnInit() {
        // console.log(this.cast);
    }
}
CastSlideshowComponent.ɵfac = function CastSlideshowComponent_Factory(t) { return new (t || CastSlideshowComponent)(); };
CastSlideshowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CastSlideshowComponent, selectors: [["app-cast-slideshow"]], inputs: { cast: "cast" }, decls: 3, vars: 1, consts: [[1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide text-white text-center", 4, "ngFor", "ngForOf"], [1, "swiper-slide", "text-white", "text-center"], [1, "img-thumbnail", 3, "src", "alt"]], template: function CastSlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CastSlideshowComponent_div_2_Template, 4, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cast);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_0__.PosterPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXN0LXNsaWRlc2hvdy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9258:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 7655);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideshow/slideshow.component */ 3165);
/* harmony import */ var _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./peliculas-poster-grid/peliculas-poster-grid.component */ 4517);
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-starrating */ 8197);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/pipes.module */ 1041);
/* harmony import */ var _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cast-slideshow/cast-slideshow.component */ 3030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);









class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        ng_starrating__WEBPACK_IMPORTED_MODULE_8__.RatingModule,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent,
        _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_1__.SlideshowComponent, _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_2__.PeliculasPosterGridComponent, _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_4__.CastSlideshowComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        ng_starrating__WEBPACK_IMPORTED_MODULE_8__.RatingModule,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent,
        _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_1__.SlideshowComponent,
        _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_2__.PeliculasPosterGridComponent,
        _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_4__.CastSlideshowComponent] }); })();


/***/ }),

/***/ 7655:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    buscarPelicula(texto) {
        texto = texto.trim();
        if (texto.length === 0) {
            return;
        }
        this.router.navigate(['/search', texto]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 37, vars: 0, consts: [[1, "navbar", "sticky-top", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], [1, "mr-1", "text-success"], [1, "fas", "fa-film", "fa-2x"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/home", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "/home", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item"], ["href", "#", "id", "navbarDropdownMenuGenero", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuGenero", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item", "active"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "placeholder", "Search your movie", "aria-label", "Search", 1, "form-control", "mr-sm-2", "hvr-grow", 3, "keyup.enter"], ["txtBuscar", ""], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", "rounded-pill", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MoviesApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10)(13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Pel\u00EDculas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12)(16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "En cartelera hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pr\u00F3ximamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mejor valoradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10)(23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " G\u00E9neros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16)(26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Adult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Aventura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18)(33, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.buscarPelicula(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.buscarPelicula(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 4517:
/*!*************************************************************************************!*\
  !*** ./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeliculasPosterGridComponent": () => (/* binding */ PeliculasPosterGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/peliculas.service */ 5403);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-starrating */ 8197);
/* harmony import */ var _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/poster.pipe */ 7630);






function PeliculasPosterGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PeliculasPosterGridComponent_div_1_Template_img_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const movie_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onMovieClick(movie_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "poster");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4)(4, "div", 0)(5, "div", 5)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0)(9, "div", 5)(10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 0)(14, "div", 7)(15, "star-rating", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rate", function PeliculasPosterGridComponent_div_1_Template_star_rating_rate_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onRate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, movie_r1.poster_path), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 7, movie_r1.release_date, "yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", movie_r1.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 10, movie_r1.vote_average, "1.1-2"));
} }
class PeliculasPosterGridComponent {
    constructor(peliculasService, router) {
        this.peliculasService = peliculasService;
        this.router = router;
    }
    ngOnInit() {
        // console.log(this.movies);
    }
    onRate($event) {
        alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
    }
    onMovieClick(movie) {
        this.router.navigate(['/movie', movie.id]);
        // console.log(movie);
    }
}
PeliculasPosterGridComponent.ɵfac = function PeliculasPosterGridComponent_Factory(t) { return new (t || PeliculasPosterGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_0__.PeliculasService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
PeliculasPosterGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PeliculasPosterGridComponent, selectors: [["app-peliculas-poster-grid"]], inputs: { movies: "movies" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-3 my-3", 4, "ngFor", "ngForOf"], [1, "col-md-3", "my-3"], ["role", "button", 1, "img-fluid", "hvr-grow", "rounded", 3, "src", "click"], [1, "mt-3"], [1, "col"], [1, "badge", "badge-pill", "badge-success"], [1, "col-10", "text-white"], ["totalstars", "10", "checkedcolor", "gold", "uncheckedcolor", "gray", "size", "16px", "readonly", "false", 3, "value", "rate"], [1, "col-2", "text-white"]], template: function PeliculasPosterGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PeliculasPosterGridComponent_div_1_Template, 19, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_starrating__WEBPACK_IMPORTED_MODULE_5__.StarRatingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_1__.PosterPipe], styles: ["h3[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbGljdWxhcy1wb3N0ZXItZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJwZWxpY3VsYXMtcG9zdGVyLWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 3165:
/*!*************************************************************!*\
  !*** ./src/app/components/slideshow/slideshow.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideshowComponent": () => (/* binding */ SlideshowComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ 8587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = function (a1) { return { "background-size": "cover", "background-image": a1 }; };
function SlideshowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "url(https://image.tmdb.org/t/p/w500" + movie_r1.backdrop_path + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 3, movie_r1.overview, 0, 180), "...");
} }
class SlideshowComponent {
    constructor() { }
    ngAfterViewInit() {
        this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
            // Optional parameters
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true,
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    ngOnInit() {
        // console.log(this.movies);
    }
    onSlideNext() {
        this.mySwiper.slideNext();
    }
    onSlidePrev() {
        this.mySwiper.slidePrev();
    }
}
SlideshowComponent.ɵfac = function SlideshowComponent_Factory(t) { return new (t || SlideshowComponent)(); };
SlideshowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideshowComponent, selectors: [["app-slideshow"]], inputs: { movies: "movies" }, decls: 7, vars: 1, consts: [[1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-button-prev", 3, "click"], [1, "swiper-button-next", 3, "click"], [1, "swiper-scrollbar"], [1, "swiper-slide", 3, "ngStyle"], [1, "movie-description"]], template: function SlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideshowComponent_div_2_Template, 7, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideshowComponent_Template_div_click_4_listener() { return ctx.onSlidePrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideshowComponent_Template_div_click_5_listener() { return ctx.onSlideNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe], styles: [".swiper-container[_ngcontent-%COMP%] {\r\n  height: 330px;\r\n  width: 100%;\r\n  }\r\n  .movie-description[_ngcontent-%COMP%]{\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    bottom: 0;\r\n    position: absolute;\r\n    padding: 5px 30px;\r\n    width: 100%;\r\n  }\r\n  .swiper-slide[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n  .swiper-pagination[_ngcontent-%COMP%]{\r\n  color:white;\r\n  background-color: white;\r\n  display: block;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlc2hvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWDtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTs7SUFFZixpQ0FBaUM7SUFJakMsYUFBYTtJQUliLHVCQUF1QjtJQUl2QixtQkFBbUI7RUFDckI7RUFFRjtFQUNFLFlBQVk7QUFDZDtFQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixjQUFjOztBQUVoQiIsImZpbGUiOiJzbGlkZXNob3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDMzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubW92aWUtZGVzY3JpcHRpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAvKiBDZW50ZXIgc2xpZGUgdGV4dCB2ZXJ0aWNhbGx5ICovXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ 3291:
/*!***************************************!*\
  !*** ./src/app/interfaces/credits.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4492:
/*!*************************************!*\
  !*** ./src/app/interfaces/genre.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7598:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/peliculas.service */ 5403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/slideshow/slideshow.component */ 3165);
/* harmony import */ var _components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/peliculas-poster-grid/peliculas-poster-grid.component */ 4517);





function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-slideshow", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("movies", ctx_r0.moviesSlideshow);
} }
function HomeComponent_app_peliculas_poster_grid_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-peliculas-poster-grid", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("movies", ctx_r1.movies);
} }
class HomeComponent {
    constructor(peliculasService) {
        this.peliculasService = peliculasService;
        this.moviesSlideshow = [];
        this.movies = [];
    }
    onScroll() {
        const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
        const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
        if (pos > max) {
            //TODO llamar al  servicio
            if (this.peliculasService.isLoadig) {
                return;
            }
            this.peliculasService.getCartelera().subscribe(movies => {
                this.movies.push(...movies);
            });
        }
        // console.log('llamar servicio');
    }
    ngOnInit() {
        this.peliculasService.getCartelera()
            .subscribe(movies => {
            // console.log(resp.results);
            this.movies = movies;
            this.moviesSlideshow = movies;
        });
    }
    ngOnDestroy() {
        this.peliculasService.resetCarteleraPage();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_0__.PeliculasService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 2, consts: [["class", "row", 4, "ngIf"], [1, "mt-3", "animate__animated", "animate__slideInRight"], [3, "movies", 4, "ngIf"], [1, "row"], [1, "col-12"], [3, "movies"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cartelera");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "En cartelera hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HomeComponent_app_peliculas_poster_grid_5_Template, 1, 1, "app-peliculas-poster-grid", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.movies.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.movies.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_1__.SlideshowComponent, _components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_2__.PeliculasPosterGridComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5334:
/*!************************************************!*\
  !*** ./src/app/pages/movie/movie.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieComponent": () => (/* binding */ MovieComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var src_app_interfaces_credits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/credits */ 3291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/peliculas.service */ 5403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/cast-slideshow/cast-slideshow.component */ 3030);
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-starrating */ 8197);
/* harmony import */ var _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/poster.pipe */ 7630);









function MovieComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "poster");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5)(5, "div", 2)(6, "div", 6)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "h3", 7)(11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 2)(15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "star-rating", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10)(18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Voto promedio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 12)(24, "div", 6)(25, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 2)(28, "div", 14)(29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Frase c\u00E9lebre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Polularidad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 2)(39, "div", 6)(40, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MovieComponent_div_0_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onReturn()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " Regresar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 9, ctx_r0.pelicula.poster_path), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r0.pelicula.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.pelicula.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 11, ctx_r0.pelicula.release_date, "yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r0.pelicula.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](22, 14, ctx_r0.pelicula.vote_average, "1.1-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.pelicula.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.pelicula.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](37, 17, ctx_r0.pelicula.popularity, ".0-0"), " / 10");
} }
function MovieComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-cast-slideshow", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cast", ctx_r1.cast);
} }
class MovieComponent {
    constructor(activatedRoute, peliculasService, location, router) {
        this.activatedRoute = activatedRoute;
        this.peliculasService = peliculasService;
        this.location = location;
        this.router = router;
        this.cast = [];
    }
    ngOnInit() {
        // const id =  this.activatedRoute.snapshot.params.id;
        // otra forma de extraer el id es através de la des estructuración
        const { id } = this.activatedRoute.snapshot.params;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.peliculasService.getMovieDetails(id),
            this.peliculasService.getCredits(id)
        ]).subscribe(([movie, cast]) => {
            // console.log(movie, cast);
            if (!movie) {
                this.router.navigateByUrl('/home');
                return;
            }
            // console.log(movie);
            this.pelicula = movie;
            this.cast = cast;
        });
        // this.peliculasService.getMovieDetails(id).subscribe(movie => {
        // if (!movie) {
        //   this.router.navigateByUrl('/home');
        //   return;
        // }
        // // console.log(movie);
        // this.pelicula = movie;
        // });
        // this.peliculasService.getCredits(id).subscribe( cast => {
        //   this.cast = cast;
        //   console.log(cast);
        // });
    }
    onReturn() {
        this.location.back();
    }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_1__.PeliculasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
MovieComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], decls: 2, vars: 2, consts: [["class", "row", 4, "ngIf"], ["class", "row my-5", 4, "ngIf"], [1, "row"], [1, "col-md-4"], [1, "img-thumbnail", 3, "src", "alt"], [1, "col-md-8"], [1, "col"], [1, "float-right"], [1, "badge", "badge-pill", "badge-success"], ["totalstars", "10", "checkedcolor", "gold", "uncheckedcolor", "gray", "size", "16px", "readonly", "false", 3, "value"], [1, "col", "text-white"], [1, "badge", "badge-pill", "badge-primary"], [1, "row", "mt-2"], [1, "text-justify"], [1, "col-12"], [1, "btn", "btn-outline-light-green", "rounded-pill", "my-sm-0", 3, "click"], [1, "row", "my-5"], [3, "cast"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MovieComponent_div_0_Template, 42, 20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MovieComponent_div_1_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pelicula);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cast.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_2__.CastSlideshowComponent, ng_starrating__WEBPACK_IMPORTED_MODULE_8__.StarRatingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_3__.PosterPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9525:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 7598);
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie/movie.component */ 5334);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ 5289);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/components.module */ 9258);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/pipes.module */ 1041);
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-starrating */ 8197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__.PipesModule,
        ng_starrating__WEBPACK_IMPORTED_MODULE_7__.RatingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        _movie_movie_component__WEBPACK_IMPORTED_MODULE_1__.MovieComponent,
        _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__.PipesModule,
        ng_starrating__WEBPACK_IMPORTED_MODULE_7__.RatingModule] }); })();


/***/ }),

/***/ 5289:
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/peliculas.service */ 5403);
/* harmony import */ var _components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/peliculas-poster-grid/peliculas-poster-grid.component */ 4517);




class SearchComponent {
    constructor(activatedRoute, peliculasService) {
        this.activatedRoute = activatedRoute;
        this.peliculasService = peliculasService;
        this.busqueda = "";
        this.movies = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            // console.log(params.texto);
            this.busqueda = params.texto;
            this.peliculasService.searchMovies(params.texto).subscribe(movies => {
                this.movies = movies;
                // console.log(movies);
            });
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_peliculas_service__WEBPACK_IMPORTED_MODULE_0__.PeliculasService)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 8, vars: 2, consts: [[1, "text-capitalize"], [1, "row"], [1, "col"], [3, "movies"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Resultados para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-peliculas-poster-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.busqueda);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("movies", ctx.movies);
    } }, dependencies: [_components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_1__.PeliculasPosterGridComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1041:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _poster_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poster.pipe */ 7630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_poster_pipe__WEBPACK_IMPORTED_MODULE_0__.PosterPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_poster_pipe__WEBPACK_IMPORTED_MODULE_0__.PosterPipe] }); })();


/***/ }),

/***/ 7630:
/*!**************************************!*\
  !*** ./src/app/pipes/poster.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosterPipe": () => (/* binding */ PosterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PosterPipe {
    transform(poster) {
        if (poster) {
            return `https://image.tmdb.org/t/p/w440_and_h660_face${poster}`;
        }
        else {
            return './assets/no-image.jpg';
        }
    }
}
PosterPipe.ɵfac = function PosterPipe_Factory(t) { return new (t || PosterPipe)(); };
PosterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "poster", type: PosterPipe, pure: true });


/***/ }),

/***/ 5403:
/*!***********************************************!*\
  !*** ./src/app/services/peliculas.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeliculasService": () => (/* binding */ PeliculasService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _interfaces_genre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/genre */ 4492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);





class PeliculasService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.carteleraPage = 1;
        this.isLoadig = false;
    }
    get params() {
        return {
            api_key: '7dcfbc663d7e47cd64905f6ecd456b2d',
            language: 'es-ES',
            page: this.carteleraPage.toString()
        };
    }
    resetCarteleraPage() {
        this.carteleraPage = 1;
    }
    getCartelera() {
        if (this.isLoadig) {
            // cargando peliculas
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
        }
        this.isLoadig = true;
        return this.http.get(`${this.baseUrl}/movie/now_playing`, { params: this.params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp.results), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this.carteleraPage += 1;
            this.isLoadig = false;
        }));
    }
    searchMovies(texto) {
        const params = { ...this.params, page: '1', query: texto };
        //https://api.themoviedb.org/3/search/movie
        return this.http.get(`${this.baseUrl}/search/movie`, {
            params
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resp => resp.results));
    }
    getMovieDetails(id) {
        return this.http.get(`${this.baseUrl}/movie/${id}`, {
            params: this.params
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null)));
    }
    getCredits(id) {
        // https://api.themoviedb.org/3/movie/347158/credits?api_key=7dcfbc663d7e47cd64905f6ecd456b2d&language=es-ES
        return this.http.get(`${this.baseUrl}/movie/${id}/credits`, {
            params: this.params
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resp => resp.cast), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([])));
    }
    getGenre() {
        // https://api.themoviedb.org/3/genre/movie/list?api_key=7dcfbc663d7e47cd64905f6ecd456b2d&language=es-ES
        return this.http.get(`${this.baseUrl}/genre/movie/list`, {
            params: this.params
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([])));
    }
}
PeliculasService.ɵfac = function PeliculasService_Factory(t) { return new (t || PeliculasService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
PeliculasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PeliculasService, factory: PeliculasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map