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
  list.insertAdjacentHTML("beforeend", recordTemplateString);
}

function createRecordFromTemplate({ title, author, isbn, imgSrc }, index) {
  const img = `<img src="${imgSrc}">`;
  const deleteButton = `<a href="#" class="delete">X</a>`;
  const record = `<td>${title}</td>
                    <td>${author}</td>
                    <td>${isbn}</td>
                    <td>${img}</td>
                    <td>${deleteButton}</td>`;
  const tableRow = `<tr data-book-index="${index}">${record}</tr>`;
  return tableRow;
}

function $(selector) {
  return document.querySelector(selector);
}
