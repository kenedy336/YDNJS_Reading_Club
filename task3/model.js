class Book {
  constructor({ title, author, isbn, cover = "" }) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
  }
}

class Model {
  constructor() {
    this.books = [];
    this.listeners = [];
  }
  add(book) {
    const bookIndex = this.books.length;
    this.books.push(new Book(book));
    this.notify("ADD", { record: book, index: bookIndex });
  }
  remove(index) {
    this.books.splice(index, 1);
    this.notify("REMOVE", index);
  }
  clear() {
    this.books.length = 0;
    this.notify("CLEAR");
  }
  findBy(query){
    const list = this.books.filter( book =>  Object.keys(book).some( key => book[key] == query))
    const result =  list.length ? list : this.books;
    this.notify("FIND", result);
  }

  notify(event, payload) {
    this.listeners
      .filter(listener => listener.event == event)
      .forEach(listener => listener.handler(payload));
  }
  attach({ event, handler }) {
    this.listeners.push({ event, handler });
  }
}
