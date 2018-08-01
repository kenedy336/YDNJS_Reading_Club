// ТЗ
// Должна быть возможность добавлять книги со всеми указаными полями (название, автор, серийный номер, обложка)
// Должна быть валидация полей на заполненность и так же алерт сверху на формой под хеадером, о том, что нужно заполнить все полями
// Так же алерт должен на успешное добавление или удаление книги
// Должен быть реализован фильтр по книжкам
// Возможность удалить все книжки сразу и по отдельности
// По-желанию: Реализовать работу получения,удаления и добавления книг с LocalStorage-а

const list = document.querySelector('#book-list');
const book = document.querySelector('#book');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const image = document.querySelector('#image');
const image1 = document.querySelector('#image1');
const alertItem = document.querySelector('#alert');
const filter = document.querySelector('#filter');
const filterBy = document.querySelector('#filter-by');
const select = document.querySelector('#select');

let imageItem;

filter.addEventListener('keyup', (e) => {
  let selectByVal;
  (select.value == 'Title') ? 
      (selectByVal = 0) : 
      (select.value == 'Author' ?
          (selectByVal = 1) : (selectByVal = 2));
  console.log(list.children[0].children[selectByVal]);
  if(list.children[0]){
    let listItems = document.getElementsByClassName('book-item');
    for(let i = 0; i < listItems.length; i++){
      if(((list.children[i].children[selectByVal].textContent.indexOf(filter.value))+1) || filter.value == ''){
        list.children[i].style.display = 'table-row';
      } else {
        list.children[i].style.display = 'none';
      }
    }
  }
});

list.addEventListener('click', (e) => {  
  if(e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
})

document.querySelector('.clear-tasks').addEventListener('click', (e) => {
  list.innerHTML = '';
})

document.querySelector('#addTask').addEventListener('click', (e) => {
    e.preventDefault();
    let fullField = false;

    if(book.value && author.value && isbn.value && image.value){
      fullField = true;
    }
    if(titleValidation(book.value) &&
       authorValidation(author.value) &&
       IsbnValidation(isbn.value) && 
       fullField)
    {
      alertFunc('alert alert-success', 'Book was successfuly added!');
      addTaskFunc(book.value, author.value, isbn.value, imageItem);
    } else {
      if(fullField)
        alertFunc('alert alert-danger', 'Enter a correct data!');
      else
        alertFunc('alert alert-danger', 'Please, enter all fields!');
    }
    clearForm();
});

function wronInput(elem){
  elem.style = 'border-radius: 5px; background: #ff7789; border-bottom: 1px solid #fa474b';
}

function alertFunc(alertClass, alertText){
  alertItem.style.display = 'block';
      alertItem.classList = alertClass;
      alertItem.innerHTML = alertText;
      setTimeout(() => {
        alertItem.style.display = 'none';
      }, 3000);
}

function readURL(input){
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      imageItem = `<img src="${e.target.result}">`
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function addTaskFunc(title, author, isbn, cover){
  const trItem = document.createElement("tr");
  trItem.className = 'book-item';
  trItem.innerHTML = `<td>${title}</td>
  <td>${author}</td>
  <td>${isbn}</td>
  <td>${cover}</td>
  <td><a href="#" class="delete">X</a><a></a></td>`;
  list.appendChild(trItem);
}

function clearForm(){
  book.value = '';
  author.value = '';
  isbn.value = '';
  image.value = '';
  imageItem = '';
  image1.value = '';
}