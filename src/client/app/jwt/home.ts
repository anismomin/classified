import { Component} from "angular2/core";
import { MdButton } from "@angular2-material/button";
import { Http, Headers, RequestOptions } from "angular2/http";
import "rxjs/operator/map";

@Component({
	templateUrl: `/app/jwt/home.html`,
	directives: [MdButton]
})
export class AuthComponent {
	response: any;
	data: any;
	error: any;
	user: any = {
		password: "angualr2express",
		username: "john"
	};
	constructor(public http: Http) {}
	signup() {

		this.http.post("/login/signup", JSON.stringify({ password: this.user.password, username: this.user.username }), new RequestOptions({
			headers: new Headers({"Content-Type": "application/json"})
		}))
			.map((res: any) => res.json())
			.subscribe(
				(res: any) => {
					this.response = res;
				},
				(error: any) => {
					console.log(error.json());
				}
			);
	}
	call() {

		delete this.error;
		delete this.data;

		this.http.get("/api", new RequestOptions({
			headers: new Headers({"Auth": localStorage.getItem("jwt"), "Content-Type": "application/json"})
		}))
			.map((data: any) => data.json())
			.subscribe(
				data => {
					this.data = data;
				},
				error => {
					this.error = error.json();
				}
			);
	}
	login() {
		this.http.post("/login", JSON.stringify({ password: this.user.password }), new RequestOptions({
			headers: new Headers({"Content-Type": "application/json"})
		}))
			.map((res: any) => res.json())
			.subscribe(
				(res: any) => {
					delete this.error;
					this.data = {
						text: "You can call protected api now",
						title: "Login succesfull"
					};
					localStorage.setItem("jwt", res.jwt);
				},
				(error: any) => {
					console.log(error);
				}
			);
	}
	remove() {
		this.error = { message: "JWT removed" };
		delete this.data;
		localStorage.removeItem("jwt");
	}
}
