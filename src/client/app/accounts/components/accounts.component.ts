import {Component, EventEmitter} from 'angular2/core'
import {Http, Headers, HTTP_PROVIDERS}  from 'angular2/http'
import {ControlGroup, FormBuilder, Validators, FORM_DIRECTIVES} from 'angular2/common'

import {AccountsService} from '../AccountsService'
import {ControlMessages} from '../../shared/components/control-messages.component'
import {ValidationService} from '../../shared/services/validationService'

@Component({
	selector: 'signin-up',
    templateUrl: 'app/accounts/templates/accounts.html',
    inputs : ['signInUpModal'],
    outputs: ['closeSignInUp', 'loginStatusEvent'],
    providers: [AccountsService],
    directives: [FORM_DIRECTIVES, ControlMessages]
})
export class AccountsComponent {

	signInUpModal : any;
	closeSignInUp : EventEmitter<any> = new EventEmitter();
	loginStatusEvent: EventEmitter<any>  = new EventEmitter();
	
	logInStatus : boolean = false;
	loginForm: ControlGroup;
	registerForm: ControlGroup;
	
	loginResponse : string;
	registerResponse: string;
	postResponse: string;

	loginFormProcess: boolean = false;
	registerFormProcess: boolean = false;

	constructor(private _http: Http, private _accountsService: AccountsService, private fb: FormBuilder) {
		this.fb = fb;
		this.buildLoginForm();
		this.buildRegisterForm();	
	}

	buildLoginForm() :void {
		
		this.loginForm = this.fb.group({
			'loginUsername': ['', Validators.compose([Validators.required, ValidationService.startsWithNumber])],
			'loginPassword': ['', Validators.compose([Validators.required, ValidationService.passwordValidator])]
		});
		this.registerFormProcess = false;
	}	

	submitLoginData() {
		console.log(JSON.stringify(this.loginForm.value))
    }

	buildRegisterForm(): void {
		this.registerForm = this.fb.group({
			'registerUsername': ['', Validators.compose([Validators.required, ValidationService.startsWithNumber]), ValidationService.usernameTaken],
			'registerEmail': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
			'registerPassword': ['', Validators.compose([Validators.required, ValidationService.passwordValidator])],
		});

		this.registerFormProcess = false;
	}

	submitRegisterData() {
		console.log(JSON.stringify(this.registerForm.value))
    }

	//Close Sign in Tab
	closeSignInUpModal($event, value) {
		if ($event.target.classList.contains('cd-user-modal') || $event.target.classList.contains('cd-close-modal')) {
			//this.signInUpModal = null;	
			this.closeSignInUp.emit(value);
            this.buildLoginForm();
		    this.buildRegisterForm();
			return;
		}
	}

	//Sign In Tabs
	showSignIn() {
		this.signInUpModal = true;
		return;
	}		
 	//Sign In Tabs
	showSignUp(){		
		this.signInUpModal = false;
		return;
	}

	// Make Login Http Request
	login(loginData) {
			
		if (this.loginForm.dirty && this.loginForm.valid) {
			let logincreds = {
				username: loginData.loginUsername,
				password: loginData.loginPassword
			};

			this.loginFormProcess = true;

			this._accountsService.login(logincreds)
				.subscribe(
				data => this.loginResponse = JSON.stringify(data),
				error => this.logError(error),
				() => {
					this.logInStatus = true;
					this.signInUpModal = null;
					this.loginStatusEvent.emit(true);
					this.loginFormProcess = false;
              //       this.buildLoginForm();
		            // this.buildRegisterForm();
					console.log(this.loginResponse);
				}
				);
		}
	}

	// Make Register Http Request
	register(registerData) {
		
		if (this.registerForm.dirty && this.registerForm.valid) {
			let creds = {
				username: registerData.registerUsername,
				email: registerData.registerEmail,
				password: registerData.registerPassword
			};
			this.registerFormProcess = true;

			this._accountsService.register(creds)
				.subscribe(
				data => this.registerResponse = JSON.stringify(data),
				error => this.logError(error),
				() => {
					this.logInStatus = true;
					this.signInUpModal = null;
					this.loginStatusEvent.emit(true);
					this.registerFormProcess = false;
					 // this.buildLoginForm();
					 // this.buildRegisterForm();
					console.log(this.registerResponse);
				}
				);
		}
	}

	logError(error) {
		console.log(error);
	}

}