import { Component } from '@angular/core';
import { PostService } from './posts.service';

import { HttpModule  } from '@angular/http';
import { OnInit } from '@angular/core';
 //import { Post } from './posts';
 import { PostComponent } from './post.component';

// @Component({
//   selector: 'my-app',
//   template: `
//   <div *ngIf="isLoading">
//   // <i class="fa fa-spinner fa-spin fa-3x"></i>
// <ul>
// <li *ngFor="#post of posts">
// {{post}}
//   </li>
// </ul>
//   </div>
//   `,
//   providers: [PostService]
// })

@Component({
  selector:'my-app',
  template:`<h1>Below are the datas </h1><postData></postData>`,

 // directives:[PostComponent]
})

export class AppComponent{ 
 
// isLoading=true; 

//   constructor (private postService: PostService)
//   {
// //this.postService.createPost(userId:1,title:"test data",body:"b")
// //._subscribe

//   }
//   ngOnInit()
//   {
// this.postService.getPosts()
//posts is any type , if need to access the first data in the list of json objects , 
//to access the the array need to use the type annotation(obsrervable need to use in post.service)
//if we use promise instead of oberservable need to use then replace of subsribe

// .subscribe(posts=>{
//  //   this.posts=posts;
//   this.isLoading=false;
// console.log(posts[0].body, posts[0].id,posts[0].title,posts[0].userId)});

  //}
  
 }
