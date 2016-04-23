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
    var PostService;
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
            PostService = (function () {
                function PostService(http) {
                    this.http = http;
                    //private webUrl = 'http://deploy123.herokuapp.com';
                    this.webUrl = 'http://localhost:3000';
                }
                PostService.prototype.createPost = function (postData) {
                    var Creds = JSON.stringify(postData);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this.webUrl + '/post/create', Creds, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); })
                        .delay(3000);
                };
                PostService.prototype.getPosts = function () {
                    return this.http.get(this.webUrl + '/post')
                        .map(function (res) { return res.json(); })
                        .delay(1500);
                };
                PostService.prototype.getpostById = function (id) {
                    return this.http.get(this.webUrl + '/post/' + id)
                        .map(function (res) { return res.json(); })
                        .delay(1500);
                };
                PostService.prototype.deletePost = function (id) {
                    return this.http.delete(this.webUrl + '/post/' + id)
                        .map(function (res) { return res.json(); })
                        .delay(1500);
                };
                PostService.prototype.editPost = function (id) {
                    return this.http.delete(this.webUrl + '/post/' + id)
                        .map(function (res) { return res.json(); })
                        .delay(1500);
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
