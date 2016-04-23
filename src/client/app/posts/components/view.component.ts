import {Component} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {PostService} from '../../posts/postService'
import {Post} from '../../posts/Post';


@Component({
    templateUrl: 'app/post/components/view.html',
    providers: [PostService]
})
export class ViewPostComponent {

	id: string;
	post : Post = new Post();

	constructor(public postService: PostService, private routeParams: RouteParams) {
		this.getpostById();
	}

	getpostById() {

		this.id = this.routeParams.get("id");

		this.postService.getpostById(this.id)
			.subscribe(
				data => this.post = data,
				error => console.log(error),
				() => {
					console.log(this.post);
				}
			);
	}
}
