System.register(['angular2/core', 'angular2/router', './home/components/home.component', './posts/components/posts.component', './posts/components/view.component', './posts/components/createPost.component', './jwt/home', './accounts/components/accounts.component', './accounts/AccountsService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, posts_component_1, view_component_1, createPost_component_1, home_1, accounts_component_1, AccountsService_1;
    var ClassifiedApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (createPost_component_1_1) {
                createPost_component_1 = createPost_component_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (accounts_component_1_1) {
                accounts_component_1 = accounts_component_1_1;
            },
            function (AccountsService_1_1) {
                AccountsService_1 = AccountsService_1_1;
            }],
        execute: function() {
            ClassifiedApp = (function () {
                function ClassifiedApp(_loginservice) {
                    this._loginservice = _loginservice;
                    this.signInUpActive = null;
                    this.logInStatus = false;
                    this.accountDropDownActive = false;
                }
                ClassifiedApp.prototype.signInModal = function () {
                    if (!this.logInStatus) {
                        this.signInUpActive = true;
                    }
                    return;
                };
                ClassifiedApp.prototype.signUpModal = function () {
                    if (!this.logInStatus) {
                        this.signInUpActive = false;
                    }
                    return;
                };
                ClassifiedApp.prototype.closeSignInUpModal = function (value) {
                    this.logInStatus = value;
                    this.signInUpActive = null;
                    this.upateLoginStatus(value);
                };
                ClassifiedApp.prototype.openAcountDropDown = function ($event) {
                    this.accountDropDownActive = !this.accountDropDownActive;
                };
                ClassifiedApp.prototype.logOut = function () {
                    localStorage.removeItem('classified_jwt');
                    this.signInUpActive = null;
                    this.logInStatus = false;
                    console.log('logout');
                    // this._loginservice.logOut()
                    // 	.subscribe(
                    // 	data => JSON.stringify(data),
                    // 	error => console.log(error),
                    // 	() => {
                    // 		this.signInUpActive = null;
                    // 		this.logInStatus = false;
                    // 		console.log('logout');
                    // 	}
                    // );
                    return;
                };
                ClassifiedApp.prototype.upateLoginStatus = function (value) {
                    this.logInStatus = value;
                };
                ClassifiedApp = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.html',
                        directives: [home_component_1.HomeComponent, accounts_component_1.AccountsComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [AccountsService_1.AccountsService]
                    }),
                    router_1.RouteConfig([
                        // { path: '/', name: 'root', redirectTo: ['Home']},
                        { path: '/users', name: 'UsersList', component: home_component_1.HomeComponent },
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/posts/:id', name: 'ViewPost', component: view_component_1.ViewPostComponent },
                        { path: '/posts/create', name: 'CreatePost', component: createPost_component_1.CreatePostComponent },
                        { path: '/jwt', name: 'Auth', component: home_1.AuthComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [AccountsService_1.AccountsService])
                ], ClassifiedApp);
                return ClassifiedApp;
            }());
            exports_1("ClassifiedApp", ClassifiedApp);
        }
    }
});

//# sourceMappingURL=app.js.map
