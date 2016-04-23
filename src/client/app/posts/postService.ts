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
export class PostService {

	public postResponse;
	
	constructor(public http: Http) { }

	createPost(postData) {

		let Creds = JSON.stringify(postData);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('/post/create', Creds, {
			headers: headers
		})
		.map(res => res.json())
		.delay(3000);
	}

	getPosts() {
		return this.http.get( '/post')
			.map(res => res.json())
			.delay(1500);
	}

	getpostById(id) {
		return this.http.get('/post/'+id)
			.map(res => res.json())
			.delay(1500);
	}

	deletePost(id) {
		return this.http.delete('/post/' + id)
			.map(res => res.json())
			.delay(1500);
	}
	
	editPost(id) {
		return this.http.delete('/post/' + id)
			.map(res => res.json())
			.delay(1500);
	}

}
