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
