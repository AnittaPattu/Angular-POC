
//if using interface ,in post.js there wont any function for this interface,
// because javacript doesnt have interface.

export interface Post
{
    userId :number;
    // marking ? is defined the property is optional
    id? : number;
    title : string;
    body:string;
}