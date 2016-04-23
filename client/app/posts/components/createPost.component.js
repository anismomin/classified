System.register(['angular2/core', 'angular2/http', 'angular2/common', 'angular2/router', '../../shared/components/control-messages.component', '../../shared/services/validationService', '../../posts/postService'], function(exports_1, context_1) {
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
    var core_1, http_1, common_1, router_1, control_messages_component_1, validationService_1, postService_1;
    var CreatePostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (control_messages_component_1_1) {
                control_messages_component_1 = control_messages_component_1_1;
            },
            function (validationService_1_1) {
                validationService_1 = validationService_1_1;
            },
            function (postService_1_1) {
                postService_1 = postService_1_1;
            }],
        execute: function() {
            CreatePostComponent = (function () {
                function CreatePostComponent(fb, _http, _postService, _router) {
                    this.fb = fb;
                    this._http = _http;
                    this._postService = _postService;
                    this._router = _router;
                    this.postFormProcess = false;
                    this.postForm = this.fb.group({
                        'title': ['dumytitile', common_1.Validators.compose([common_1.Validators.required])],
                        'price': ['20', common_1.Validators.compose([common_1.Validators.required])],
                        'category': ['mobile', common_1.Validators.compose([common_1.Validators.required])],
                        'description': ['Checkout this description', common_1.Validators.compose([common_1.Validators.required])],
                        'name': ['mynmae', common_1.Validators.compose([common_1.Validators.required])],
                        'phone': ['03343853136', common_1.Validators.compose([common_1.Validators.required])],
                        'images': [''],
                        'state': ['sindh', common_1.Validators.compose([common_1.Validators.required])],
                        'city': ['karachi', common_1.Validators.compose([common_1.Validators.required])]
                    });
                }
                CreatePostComponent.prototype.createPost = function (postForm) {
                    var _this = this;
                    this.upload(function (images) {
                        var postData = {
                            title: postForm.title,
                            price: postForm.price,
                            category: postForm.category,
                            description: postForm.description,
                            name: postForm.name,
                            phone: postForm.phone,
                            images: images,
                            state: postForm.state,
                            city: postForm.city
                        };
                        _this.postFormProcess = true;
                        //JSON.stringify(postData)
                        _this._postService.createPost(postData)
                            .subscribe(function (data) { return _this.postingResponse = JSON.stringify(data); }, function (error) { return console.log(error); }, function () {
                            _this.postFormProcess = false;
                            console.log(_this.postingResponse);
                            _this._router.navigate(['Posts']);
                        });
                    });
                };
                CreatePostComponent.prototype.upload = function (cb) {
                    this.makeFileRequest("http://localhost:3000/post/upload", [], this.filesToUpload)
                        .then(function (result) {
                        var img = [];
                        Object.keys(result).forEach(function (key) {
                            var res = result[key].path.split("client");
                            img.push({ path: res[1] });
                            //console.debug("Input File name: " + result[key].name + " type:" + result[key].size + " size:" + result[key].size);
                        });
                        cb(img);
                    }, function (error) {
                        console.debug(error);
                    });
                };
                CreatePostComponent.prototype.fileChangeEvent = function (fileInput) {
                    this.filesToUpload = fileInput.target.files;
                };
                CreatePostComponent.prototype.makeFileRequest = function (url, params, files) {
                    return new Promise(function (resolve, reject) {
                        var formData = new FormData();
                        var xhr = new XMLHttpRequest();
                        for (var i = 0; i < files.length; i++) {
                            formData.append("uploads", files[i], files[i].name);
                        }
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    resolve(JSON.parse(xhr.response));
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.open("POST", url, true);
                        xhr.send(formData);
                    });
                };
                CreatePostComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts/templates/create.html',
                        directives: [common_1.FORM_DIRECTIVES, control_messages_component_1.ControlMessages],
                        providers: [postService_1.PostService, validationService_1.ValidationService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, postService_1.PostService, router_1.Router])
                ], CreatePostComponent);
                return CreatePostComponent;
            }());
            exports_1("CreatePostComponent", CreatePostComponent);
        }
    }
});

//# sourceMappingURL=createPost.component.js.map
