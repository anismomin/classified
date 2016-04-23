System.register(['angular2/core', 'angular2/router', '../../posts/PostService'], function(exports_1, context_1) {
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
    var core_1, router_1, PostService_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (PostService_1_1) {
                PostService_1 = PostService_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(postService) {
                    this.postService = postService;
                    this.getPosts();
                }
                PostsComponent.prototype.getPosts = function () {
                    var _this = this;
                    this.postService.getPosts()
                        .subscribe(function (data) { return _this.posts = data; }, function (error) { return console.log(error); }, function () {
                        console.log(_this.posts);
                    });
                };
                PostsComponent.prototype.deletePost = function (id) {
                    this.postService.deletePost(id)
                        .subscribe(function (data) {
                        console.log('Post Delete');
                    }, function (error) { return console.log(error); }, function () {
                        console.log('Delete Complete');
                    });
                };
                PostsComponent.prototype.showPost = function (id) {
                    this.postService.getpostById(id)
                        .subscribe(function (data) {
                        console.log('Post Delete');
                    }, function (error) { return console.log(error); }, function () {
                        console.log('Delete Complete');
                    });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts/templates/posts.html',
                        directives: [router_1.RouterLink],
                        providers: [PostService_1.PostService],
                        styles: ["\n\t\t.postActions {clear:both; backgroud-color:#fff; padding:10px;}\n    "]
                    }), 
                    __metadata('design:paramtypes', [PostService_1.PostService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});

//# sourceMappingURL=posts.component.js.map
