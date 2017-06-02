import { Http } from '@angular/http';

import  'rxjs/add/operator/map';
import  'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

import { Post } from './posts';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService{

    private _url = "https://jsonplaceholder.typicode.com/posts";
     constructor (private http:Http)
     {

     }
    getPosts(): Observable<Post[]>
    {

     return this.http.get(this._url)
         .map(res =>res.json())
    }
//promise
// getPosts(): Promise<Post[]>
//     {

//      return this.http.get(this._url)
//          .map(res =>res.json())
//          .toPromise()
//     }
    createPost(post:Post)
    {
        return this.http.post(this._url,JSON.stringify(post))
        .map(res=>res.json());
    }
}