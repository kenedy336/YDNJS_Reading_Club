const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, res){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, res){
  // if(err){
  //   console.log(err);
  // } else {
  //   console.log(res);
  // }
// });

// const data = {
//   title: 'New Post',
//   body: 'This is a new post'
// };

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// http.post('https://jsonplaceholder.typicode.com/posts/5', data, function(err, res){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, res){
  if(err){
    console.log(err);
  } else {
    console.log(res);
  }
});



























// const posts = [
//   {title: 'Post one', body: 'This is post one'},
//   {title: 'Post two', body: 'This is post two'}
// ];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push().post;
//   }, 2000)
// }

// function getPost() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000)
// }

// createPost({title: 'Post three', body: 'This is post three'},);
// getPost();

// function createPost(post, callback) {
//   setTimeout(function() {
//     posts.push(post);
//     callback();
//   }, 2000)
// }

// function getPost() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000)
// }

// createPost({title: 'Post three', body: 'This is post three'}, getPost);