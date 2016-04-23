System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/operator/delay', 'rxjs/add/operator/retry', 'rxjs/add/operator/timeout'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AccountsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {}],
        execute: function() {
            AccountsService = (function () {
                function AccountsService(http) {
                    this.http = http;
                }
                AccountsService.prototype.login = function (loginCreds) {
                    var login = "username=" + loginCreds.username + "&password=" + loginCreds.password;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post('/login', login, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); })
                        .delay(3000);
                };
                /*login(loginCreds) {
            
                    let login = "username=" + loginCreds.username + "&password=" + loginCreds.password;
            
                    var headers = new Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
            
                    return this.http.post('/login', login, {
                        headers: headers,
                        timeout: 1000
                    })
                    .retry(2)
                    .timeout(1000, new Error('checking for error.'))
                    
                    .map(res => res.json())
                    .delay(2000)
                    .subscribe(
                      (data) => resolve(data.json()),
                      (err) => reject(err)
                    );;
            
                }*/
                AccountsService.prototype.register = function (regCreds) {
                    var register = "username=" + regCreds.username + "&email=" + regCreds.email + "&password=" + regCreds.password;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post('/register', register, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); })
                        .delay(3000);
                };
                AccountsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AccountsService);
                return AccountsService;
            }());
            exports_1("AccountsService", AccountsService);
        }
    }
});

//# sourceMappingURL=AccountsService.js.map
