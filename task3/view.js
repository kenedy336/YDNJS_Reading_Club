class View {
  constructor({ bookList, clearTasks, filter },{ title, author, isbn, cover, submit } ) {
    this.clearTasks = $(clearTasks);    
    this.bookList = $(bookList);
    this.filter = $(filter);
    this.submit = $(submit);

    this.input = {
      author: $(author),
      title: $(title),
      cover: $(cover),
      isbn: $(isbn)
    };

  }
  renderRecord({ record, index }) {
    appendRecord(this.bookList, record, index);
  }
  renderRecordsList(list) {
    const fragment = document.createDocumentFragment();
    list.forEach((record, index) => appendRecord(fragment, record, index));
    this.removeAllRecords();
    this.bookList.appendChild(fragment);
  }
  removeRecord(index) {
    const element = $(`tr[data-book-index="${index}"]`, this.bookList)
    this.bookList.removeChild(element);
  }
  removeAllRecords() {
    this.bookList.innerHTML = "";
  }
  getNewRecordData() {
    const input = this.input;
    const data = {
      title: input.title.value,
      author: input.author.value,
      isbn: input.author.value,
      cover: this.getNewRecordCover()
    };
    return data;
  }
  getNewRecordCover(){
    if(this.input.cover.files.length){
      const coverImage = this.input.cover.files[0];
      return window.URL.createObjectURL(coverImage)
    }
  }
  clearInputData(){
    const input = this.input
    Object.keys(input).forEach(key => input[key].value ="")
  }
}

function appendRecord(list, recordData, index) {
  const record = createRecordFromTemplate(recordData, index);
  if (typeof list.insertAdjacentHTML != "undefined") {
    list.insertAdjacentHTML("beforeend", record);
  } else {
    let temp = document.createElement('tbody');
    temp.innerHTML = record;
    list.appendChild(temp.firstChild);
  }
}

function createRecordFromTemplate({ title, author, isbn, cover }, index) {
  const img = `<img src="${cover}">`;
  const deleteButton = `<a href="#" data-book-index="${index}" class="delete">X</a>`;
  const record = `<td>${title}</td>
                    <td>${author}</td>
                    <td>${isbn}</td>
                    <td>${img}</td>
                    <td>${deleteButton}</td>`;
  const tableRow = `<tr data-book-index="${index}">${record}</tr>`;
  return tableRow;
}

function getNodes(str){
  return new DOMParser().parseFromString(str, 'text/html').body.childNodes;
} 

function $(selector, el) {
  const root = el ? el : document;
  return root.querySelector(selector);
}
