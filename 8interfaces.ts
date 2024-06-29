 //INTERFACES 
 interface Author {
     name: string;
     age: number;
 }

 const author: Author = {
     name: 'Sam',
     age: 30
 }

 interface Post {
     title: string;
     body: string;
     author: Author;
 }

 const newPost: Post = {
     title: 'Hello',
     body: 'World',
     author: author
 }


 //USING INTERFACES AS ARGUMENT TYPES
 const createPost = (post: Post) => {
     console.log(`This post ${post.title} was published by ${post.author.name}`);
 }

//  createPost({
//      title: 'Hello',
//      body: 'World',
//      author: {
//          name: 'Sam',
//          age: 30
//      }
//  }) // This is same as the above declared newPost


 createPost(newPost); // 


 // INTERFACES WITH ARRAYS
 let posts: Post[] = [];

//  posts.push(newPost);