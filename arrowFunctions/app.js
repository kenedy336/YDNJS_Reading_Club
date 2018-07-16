// const sayHello = function(){
//   console.log('Hello');
// }
// const sayHello = () => console.log('Hello');
// const sayHello = () => 'Hello';
// console.log(sayHello());

const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const data = {
  name: "Dima",
  username: "kyouma",
  email: "asdd@dadd.ru"
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

    // http.put('https://jsonplaceholder.typicode.com/users/1', data)
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/1', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));