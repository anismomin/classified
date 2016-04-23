System.register(['angular2/core', 'angular2/router', '../../posts/postService', '../../posts/Post'], function(exports_1, context_1) {
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
    var core_1, router_1, postService_1, Post_1;
    var ViewPostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (postService_1_1) {
                postService_1 = postService_1_1;
            },
            function (Post_1_1) {
                Post_1 = Post_1_1;
            }],
        execute: function() {
            ViewPostComponent = (function () {
                function ViewPostComponent(postService, routeParams) {
                    this.postService = postService;
                    this.routeParams = routeParams;
                    this.post = new Post_1.Post();
                    this.getpostById();
                }
                ViewPostComponent.prototype.getpostById = function () {
                    var _this = this;
                    this.id = this.routeParams.get("id");
                    this.postService.getpostById(this.id)
                        .subscribe(function (data) { return _this.post = data; }, function (error) { return console.log(error); }, function () {
                        console.log(_this.post);
                    });
                };
                ViewPostComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/post/components/view.html',
                        providers: [postService_1.PostService]
                    }), 
                    __metadata('design:paramtypes', [postService_1.PostService, router_1.RouteParams])
                ], ViewPostComponent);
                return ViewPostComponent;
            }());
            exports_1("ViewPostComponent", ViewPostComponent);
        }
    }
});

//# sourceMappingURL=view.component.js.map
