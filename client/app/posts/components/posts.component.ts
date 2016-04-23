import {Component, EventEmitter} from 'angular2/core'
import {Http, Headers, HTTP_PROVIDERS}  from 'angular2/http'
import {RouterLink}  from 'angular2/router'
import {PostService} from '../../posts/PostService'

import {Post} from '../../posts/Post';

@Component({
    templateUrl: 'app/posts/templates/posts.html',
    directives: [RouterLink],
    providers: [PostService],
    styles: [`
		.postActions {clear:both; backgroud-color:#fff; padding:10px;}
    `]
})
export class PostsComponent {

	posts: Post[];

	constructor(public postService: PostService) {
		this.getPosts();
		
	}

	private getPosts(){
		this.postService.getPosts()
			.subscribe(
			data => this.posts = data,
			error => console.log(error),
			() => {
				console.log(this.posts);
			}
			);
	}


	private deletePost(id){
		
		this.postService.deletePost(id)
			.subscribe(
				data => {
					console.log('Post Delete');
				},
				error => console.log(error),
				() => {
					console.log('Delete Complete');
				}
			);
	}

	private showPost(id) {

		this.postService.getpostById(id)
			.subscribe(
			data => {
				console.log('Post Delete');
			},
			error => console.log(error),
			() => {
				console.log('Delete Complete');
			}
			);
	}
	
}