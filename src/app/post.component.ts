import {Component,Input } from '@angular/core';
import {PostService} from './posts.service';

import {HttpModule} from '@angular/http';

import {Post} from './posts';

import { OnInit } from '@angular/core';
@Component({
    selector:'postData',
    template:`
    <div>
    <ul class="items">
        <li *ngFor="let post of datatoDisplay">
            <span>{{post.id}}</span>
              <span>{{post.userId}}</span>
                <span>{{post.title}}</span>
                  <span>{{post.body}}</span>
        </li>
    </ul>
</div>
   
    `, 
    providers:[PostService]
})
export class PostComponent implements OnInit
{
    // private posts:Post[] = [];
     private datatoDisplay:any;
constructor ( private postService : PostService)
{

}
ngOnInit()
{
debugger;
this.postService.getPosts().
subscribe(posts=>{
    //console.log(posts[0].body, posts[0].id,posts[0].title,posts[0].userId)
    this.datatoDisplay=posts;
    });


}
//  @Input()
//    data=posts[];
}