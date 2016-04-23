import {Component, EventEmitter} from 'angular2/core'
import {Http, Headers, HTTP_PROVIDERS}  from 'angular2/http'
import {ControlGroup, FormBuilder, Validators, FORM_DIRECTIVES} from 'angular2/common'

import { Router } from 'angular2/router'

import {ControlMessages} from '../../shared/components/control-messages.component'
import {ValidationService} from '../../shared/services/validationService'
import {PostService} from '../../posts/postService'

@Component({
    templateUrl: 'app/posts/templates/create.html',
    directives: [FORM_DIRECTIVES, ControlMessages],
    providers: [PostService, ValidationService]
})
export class CreatePostComponent {
	
	postForm: ControlGroup;
	postingResponse: string;
	postFormProcess = false;
	filesToUpload : any;
	

	constructor(private fb: FormBuilder, private _http: Http, private _postService: PostService, private _router :Router) {
		
		this.postForm = this.fb.group({
			'title': ['dumytitile', Validators.compose([Validators.required])],
			'price': ['20', Validators.compose([Validators.required])],
			'category': ['mobile', Validators.compose([Validators.required])],
			'description': ['Checkout this description', Validators.compose([Validators.required])],
			'name': ['mynmae', Validators.compose([Validators.required])],
			'phone': ['03343853136', Validators.compose([Validators.required])],
			'images': [''],
			'state': ['sindh', Validators.compose([Validators.required])],
			'city': ['karachi', Validators.compose([Validators.required])]
		});
	}

	createPost(postForm) {

		this.upload((images) => {
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
			
			this.postFormProcess = true;
			//JSON.stringify(postData)
			this._postService.createPost(postData)
				.subscribe(
				data => this.postingResponse = JSON.stringify(data),
				error => console.log(error),
				() => {
					this.postFormProcess = false;
					console.log(this.postingResponse);
					this._router.navigate(['Posts']);
				}
				);
		});

	}

    upload(cb) {
        this.makeFileRequest("http://localhost:3000/post/upload", [], this.filesToUpload)
        .then((result) => {
			var img = [];
			Object.keys(result).forEach((key) => {	
				var res = result[key].path.split("client");		
				img.push({ path: res[1] });
				//console.debug("Input File name: " + result[key].name + " type:" + result[key].size + " size:" + result[key].size);
			});
			cb(img);
        }, (error) => {
            console.debug(error);
        });
    }

	fileChangeEvent(fileInput: any) {
        this.filesToUpload = fileInput.target.files;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {

        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads", files[i], files[i].name);
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
}
