const btnAdd = document.querySelector(".btn").addEventListener("click", btnClickAdd);
const list = document.querySelector(".collection");
const inputText = document.querySelector("#task");
const clearBtn = document.querySelector('.clear-tasks').addEventListener("click", btnClear);

document.querySelector('.collection').addEventListener("click", deleteItem);


function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}

function btnClear(e){
  e.preventDefault();
  list.innerHTML = "";
}

function btnClickAdd(e) {
  e.preventDefault();
  if(inputText.value === "") return 0;
  let elemMod = elementModule();
  let newEl = elemMod.createElement("li");
  elemMod.addAttribute(newEl, "class", "collection-item");
  elemMod.addAttribute(newEl, "id", (list.childElementCount));
  elemMod.addContent(newEl, inputText.value, (list.childElementCount));
  list.appendChild(newEl);
  inputText.value = "";
}




function elementModule() {
 
  function createElements(element) {
    return document.createElement(element);
  }

  function addAttributes(element, attr, val) {
    return element.setAttribute(attr, val);
  }

  function addContents(element, text, id) {
    return element.innerHTML = `${text}<a href="#"
    onclick="deleteItem(${id})"
    class="delete-item secondary-content">
    <i class="fa fa-remove"></i></a>`;
  }
  
  publicAPI = {
    createElement: createElements,
    addAttribute: addAttributes,
    addContent: addContents
  }

  return publicAPI;
}