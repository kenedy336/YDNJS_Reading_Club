function nameIterator(names){
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false } :
      { done: true }
    }
  }
}

const namesArr = ['Jack', 'Jill', 'John'];

const names = nameIterator(namesArr);

console.log(names.next());

console.log(names.next());

console.log(names.next());

console.log(names.next());

function* sayName(){
  yield 'Jack';
  yield 'Dima';
  yield 'Vlad';
}

const d = sayName();

console.log(d.next());
console.log(d.next());
console.log(d.next());
console.log(d.next());

function* creareIds(){
  let index = 0;

  while(true) {
    yield index++;
  }
}

const gen = creareIds();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());