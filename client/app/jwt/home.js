System.register(["angular2/core", "@angular2-material/button", "angular2/http", "rxjs/operator/map"], function(exports_1, context_1) {
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
    var core_1, button_1, http_1;
    var AuthComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AuthComponent = (function () {
                function AuthComponent(http) {
                    this.http = http;
                    this.user = {
                        password: "angualr2express",
                        username: "john"
                    };
                }
                AuthComponent.prototype.signup = function () {
                    var _this = this;
                    this.http.post("/login/signup", JSON.stringify({ password: this.user.password, username: this.user.username }), new http_1.RequestOptions({
                        headers: new http_1.Headers({ "Content-Type": "application/json" })
                    }))
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        _this.response = res;
                    }, function (error) {
                        console.log(error.json());
                    });
                };
                AuthComponent.prototype.call = function () {
                    var _this = this;
                    delete this.error;
                    delete this.data;
                    this.http.get("/api", new http_1.RequestOptions({
                        headers: new http_1.Headers({ "Auth": localStorage.getItem("jwt"), "Content-Type": "application/json" })
                    }))
                        .map(function (data) { return data.json(); })
                        .subscribe(function (data) {
                        _this.data = data;
                    }, function (error) {
                        _this.error = error.json();
                    });
                };
                AuthComponent.prototype.login = function () {
                    var _this = this;
                    this.http.post("/login", JSON.stringify({ password: this.user.password }), new http_1.RequestOptions({
                        headers: new http_1.Headers({ "Content-Type": "application/json" })
                    }))
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        delete _this.error;
                        _this.data = {
                            text: "You can call protected api now",
                            title: "Login succesfull"
                        };
                        localStorage.setItem("jwt", res.jwt);
                    }, function (error) {
                        console.log(error);
                    });
                };
                AuthComponent.prototype.remove = function () {
                    this.error = { message: "JWT removed" };
                    delete this.data;
                    localStorage.removeItem("jwt");
                };
                AuthComponent = __decorate([
                    core_1.Component({
                        templateUrl: "/app/jwt/home.html",
                        directives: [button_1.MdButton]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthComponent);
                return AuthComponent;
            }());
            exports_1("AuthComponent", AuthComponent);
        }
    }
});

//# sourceMappingURL=home.js.map
