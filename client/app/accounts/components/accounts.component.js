System.register(['angular2/core', 'angular2/http', 'angular2/common', '../AccountsService', '../../shared/components/control-messages.component', '../../shared/services/validationService'], function(exports_1, context_1) {
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
    var core_1, http_1, common_1, AccountsService_1, control_messages_component_1, validationService_1;
    var AccountsComponent;
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
            function (AccountsService_1_1) {
                AccountsService_1 = AccountsService_1_1;
            },
            function (control_messages_component_1_1) {
                control_messages_component_1 = control_messages_component_1_1;
            },
            function (validationService_1_1) {
                validationService_1 = validationService_1_1;
            }],
        execute: function() {
            AccountsComponent = (function () {
                function AccountsComponent(_http, _accountsService, fb) {
                    this._http = _http;
                    this._accountsService = _accountsService;
                    this.fb = fb;
                    this.closeSignInUp = new core_1.EventEmitter();
                    this.loginStatusEvent = new core_1.EventEmitter();
                    this.logInStatus = false;
                    this.loginFormProcess = false;
                    this.registerFormProcess = false;
                    this.fb = fb;
                    this.buildLoginForm();
                    this.buildRegisterForm();
                }
                AccountsComponent.prototype.buildLoginForm = function () {
                    this.loginForm = this.fb.group({
                        'loginUsername': ['', common_1.Validators.compose([common_1.Validators.required, validationService_1.ValidationService.startsWithNumber])],
                        'loginPassword': ['', common_1.Validators.compose([common_1.Validators.required, validationService_1.ValidationService.passwordValidator])]
                    });
                    this.registerFormProcess = false;
                };
                AccountsComponent.prototype.submitLoginData = function () {
                    console.log(JSON.stringify(this.loginForm.value));
                };
                AccountsComponent.prototype.buildRegisterForm = function () {
                    this.registerForm = this.fb.group({
                        'registerUsername': ['', common_1.Validators.compose([common_1.Validators.required, validationService_1.ValidationService.startsWithNumber]), validationService_1.ValidationService.usernameTaken],
                        'registerEmail': ['', common_1.Validators.compose([common_1.Validators.required, validationService_1.ValidationService.emailValidator])],
                        'registerPassword': ['', common_1.Validators.compose([common_1.Validators.required, validationService_1.ValidationService.passwordValidator])],
                    });
                    this.registerFormProcess = false;
                };
                AccountsComponent.prototype.submitRegisterData = function () {
                    console.log(JSON.stringify(this.registerForm.value));
                };
                //Close Sign in Tab
                AccountsComponent.prototype.closeSignInUpModal = function ($event, value) {
                    if ($event.target.classList.contains('cd-user-modal') || $event.target.classList.contains('cd-close-modal')) {
                        //this.signInUpModal = null;	
                        this.closeSignInUp.emit(value);
                        this.buildLoginForm();
                        this.buildRegisterForm();
                        return;
                    }
                };
                //Sign In Tabs
                AccountsComponent.prototype.showSignIn = function () {
                    this.signInUpModal = true;
                    return;
                };
                //Sign In Tabs
                AccountsComponent.prototype.showSignUp = function () {
                    this.signInUpModal = false;
                    return;
                };
                // Make Login Http Request
                AccountsComponent.prototype.login = function (loginData) {
                    var _this = this;
                    if (this.loginForm.dirty && this.loginForm.valid) {
                        var logincreds = {
                            username: loginData.loginUsername,
                            password: loginData.loginPassword
                        };
                        this.loginFormProcess = true;
                        this._accountsService.login(logincreds)
                            .subscribe(function (data) { return _this.loginResponse = JSON.stringify(data); }, function (error) { return _this.logError(error); }, function () {
                            _this.logInStatus = true;
                            _this.signInUpModal = null;
                            _this.loginStatusEvent.emit(true);
                            _this.loginFormProcess = false;
                            //       this.buildLoginForm();
                            // this.buildRegisterForm();
                            // 
                            localStorage.setItem('classified_jwt', JSON.parse(_this.loginResponse).token);
                            console.log(_this.loginResponse);
                        });
                    }
                };
                // Make Register Http Request
                AccountsComponent.prototype.register = function (registerData) {
                    var _this = this;
                    if (this.registerForm.dirty && this.registerForm.valid) {
                        var creds = {
                            username: registerData.registerUsername,
                            email: registerData.registerEmail,
                            password: registerData.registerPassword
                        };
                        this.registerFormProcess = true;
                        this._accountsService.register(creds)
                            .subscribe(function (data) { return _this.registerResponse = JSON.stringify(data); }, function (error) { return _this.logError(error); }, function () {
                            _this.logInStatus = true;
                            _this.signInUpModal = null;
                            _this.loginStatusEvent.emit(true);
                            _this.registerFormProcess = false;
                            // this.buildLoginForm();
                            // this.buildRegisterForm();
                            console.log(_this.registerResponse);
                        });
                    }
                };
                AccountsComponent.prototype.logError = function (error) {
                    console.log(error);
                };
                AccountsComponent = __decorate([
                    core_1.Component({
                        selector: 'signin-up',
                        templateUrl: 'app/accounts/templates/accounts.html',
                        inputs: ['signInUpModal'],
                        outputs: ['closeSignInUp', 'loginStatusEvent'],
                        providers: [AccountsService_1.AccountsService],
                        directives: [common_1.FORM_DIRECTIVES, control_messages_component_1.ControlMessages]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, AccountsService_1.AccountsService, common_1.FormBuilder])
                ], AccountsComponent);
                return AccountsComponent;
            }());
            exports_1("AccountsComponent", AccountsComponent);
        }
    }
});

//# sourceMappingURL=accounts.component.js.map
