import {Injectable} from 'angular2/core'
import { Http, Headers, Response } from 'angular2/http';

//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';

@Injectable()
export class AccountsService {

	public postResponse;

	constructor(public http: Http) { }


	login(loginCreds) {
		
		let login = "username=" + loginCreds.username + "&password=" + loginCreds.password;
		
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		return this.http.post('http://localhost:3000/user/login', login, {
			headers: headers
		})
		.map(res => res.json())
		.delay(3000);

	}
	/*login(loginCreds) {

		let login = "username=" + loginCreds.username + "&password=" + loginCreds.password;

		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		return this.http.post('http://localhost:3000/user/login', login, {
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

	register(regCreds) {

		let register = "username=" + regCreds.username + "&email=" + regCreds.email + "&password=" + regCreds.password;
		
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		return this.http.post('http://localhost:3000/user/register', register, {
			headers: headers
		})
		.map(res => res.json())
		.delay(3000);

	}

	logOut() {
		return this.http.get('http://localhost:3000/user/logout')
			.map(res => res.json());
	}

}