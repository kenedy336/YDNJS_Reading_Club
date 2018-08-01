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
  notify(event, payload) {
    this.listeners
      .filter(listener => listener.event == event)
      .forEach(listener => listener.handler(payload));
  }
  attach({ event, handler }) {
    this.listeners.push({ event, handler });
  }
}

class View {
  constructor({ bookList }, { title, author, isbn, cover, submit }) {
    this.bookList = $(bookList);
    this.input = {
      title: $(title),
      author: $(author),
      isbn: $(isbn),
      cover: $(cover)
    };
    this.submit = $(submit);
  }
  renderRecord({ record, index }) {
    appendRecord(this.bookList, record, index);
  }

  renderRecordsList(list) {
    const fragment = document.createDocumentFragment();
    list.forEach((record, index) => appendRecord(fragment, record, index));
    this.removeAllReccords();
    this.bookList.appendChild(fragment);
  }
  removeRecord(index) {
    const element = this.bookList.childNodes[index];
    this.bookList.removeChild(element);
  }
  removeAllReccords() {
    this.bookList.innerHtml = "";
  }
  getNewRecordData() {
    const input = this.input;
    const data = {
      title: input.title.value,
      author: input.author.value,
      isbn: input.author.value
    };
    return data;
  }
}

function appendRecord(list, record, index) {
  const recordTemplateString = createRecordFromTemplate(record, index);
  list.appendChild(recordTemplateString);
}

function createRecordFromTemplate({ title, author, isbn, imgSrc = "" }, index) {
  const rowFragment = document.createDocumentFragment();
  const img = `<img src="${imgSrc}">`;
  const deleteButton = `<a href="#" class="delete">X</a>`;
  const record = `<td>${title}</td>
                    <td>${author}</td>
                    <td>${isbn}</td>
                    <td>${img}</td>
                    <td>${deleteButton}</td>`;
  rowFragment.innerHtml = `<tr data-book-index="${index}">${record}</tr>`;
  return rowFragment;
}

function $(selector) {
  return document.querySelector(selector);
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.attachViewListeners();
    this.coverattachlListenersToModel();
  }
  attachViewListeners() {
    this.view.submit.addEventListener("click", event => {
      event.preventDefault();
      const record = this.view.getNewRecordData();
      this.model.add(new Book(record));
    });
  }
  coverattachlListenersToModel() {
    const eventsMap = [
      { event: "ADD", handler: this.view.renderRecord.bind(this.view) },
      { event: "REMOVE", handler: this.view.removeRecord.bind(this.view) },
      { event: "CLEAR", handler: this.view.removeAllReccords.bind(this.view) }
    ];

    eventsMap.forEach(listener => this.model.attach(listener));
  }
}

let model = new Model();
let view = new View(
  { bookList: "#book-list" },
  {
    title: "#book",
    author: "#author",
    isbn: "#isbn",
    cover: "#cover",
    submit: ".submit"
  }
);
let controller = new Controller(model, view);
