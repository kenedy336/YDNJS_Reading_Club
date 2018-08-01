// ES6 Sybmols
const sym = Symbol('sym');

// ES6 Array and Object disctruction

const person = {
  name: 'Dima Trohleb',
  age: '21',
  city: 'Kiev',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
}

const { name, age, city, gender, sayHello } = person;

// console.log(name, age, city, gender);
// sayHello();


// MAPS = key-value pairs - can use ANY type as key or value
const map1 = new Map();
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// ES6 Sets - store unique values of any type

const set1 = new Set();

// add value to set
set1.add(100);
set1.add('hello');
set1.add({name: 'John'});
set1.add(true);
console.log(set1);
console.log(set1.size);
console.log(set1.has(100));
set1.delete(100);

for(let i of set1){
  console.log(i)
}
set1.forEach((value) => {
  console.log(value);
})
const setArr = Array.from(set1);
console.log(setArr);
