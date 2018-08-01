class Book{
    constructor( { title, author, isbn, cover } ){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.cover = cover;
    }
}

class Model{
    constructor(){
        this.books = [];
    }
    add(book){
        this.books.push(new Book(book))
    }
    remove(index){
        this.books.splice(index,1)
    }
    clear(){
        this.books.length = 0;
    }
};

class View {
    constructor({ bookList }){
    }
    init(){
        this.bookList = $(bookList);
    }
    renderRecord(record, index){
        const recordTemplateString = templateBookRecord(record, index);
        this.bookList.appendChild(recordTemplateString)
    }
    removeRecord(index){
        const element =this.bookList.childNodes[index];
        this.bookList.removeChild(element);
    }
    removeAllReccords(){
        this.bookList.innerHtml =""
    }
}

function templateBookRecord( { title, author, isbn  } ){
    const img = `<img src="${imgSrc}">`;
    const deleteButton = `<a href="#" class="delete">X</a>`;
    const record = `<td>${title}</td>
                    <td>${author}</td>
                    <td>${isbn}</td>
                    <td>${img}</td>
                    <td>${deleteButton}</td>`;
                    
    const rowRecord = `<tr data-book-index="${index}">${record}</tr>`;
    
};


function $(selector){
    return document.querySelector(selector)
}