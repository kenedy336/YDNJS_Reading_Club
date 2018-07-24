let books = [];
let tbody = document.querySelector("tbody#book-list");
let title = document.querySelector("#book");
let author = document.querySelector("#author");
let isbnCode = document.querySelector("#isbn");
let file = document.querySelector("#file");
let clearButton = document.querySelector("a.clear-tasks");
let filter = document.querySelector("#filter");
let deleteButton = document.querySelector(".material-icons");

file.addEventListener('change', (e) => {
    let newBook = {
        title: title.value,
        author: author.value,
        isbnCode: isbnCode.value,
        filePath: `images/${file.files[0].name}`,
        id: Date.now()
    }
    for (var key in newBook) {
        if (newBook[key] == '') {
            alert('Ви не заповнили одне з полів книги')
            clearInputs();
            return;
        }
    }
    books.push(newBook)
    addToList(newBook);
    clearInputs();
})

filter.addEventListener('keyup', (e) => {   
    let hideItem = false;
    trS = tbody.getElementsByTagName('tr');
    for (i = 0; i < trS.length; i++) {
        tdS = trS[i].getElementsByTagName("td");
        for (let y = 0; y < tdS.length; y++) {
            if (tdS[y].innerHTML.indexOf(filter.value) > -1) {
                hideItem = false;
                break;
            } else {
                hideItem = true;
            }
        }
        trS[i].style.display = hideItem ? "none" : "table-row";
    }
})

clearButton.addEventListener('click', (e) => {
    books = [];
    tbody.innerHTML = '';
    e.stopPropagation();
})

function deleteItem(e) {
    let elementToRemove = e.parentElement.parentElement;
    let idOfItemToRemove = elementToRemove.querySelector("td.unique").innerHTML;
    books = books.filter((value) => {
        return value.id != idOfItemToRemove;
    })
    elementToRemove.parentElement.removeChild(elementToRemove);    
}

function clearInputs() {
    title.value = '';
    author.value = '';
    isbnCode.value = '';
    file.value = '';
}

function addToList(newBook) {
    let tr = document.createElement('tr');
    for (let key in newBook) {
        if (key == "filePath") {
            tr.innerHTML += `<td><img src="${newBook[key]}"/><i class="material-icons" onclick="deleteItem(this)">remove_circle</i></td>`
            continue;
        }
        if (key == "id") {
            tr.innerHTML += `<td style="display:none" class="unique">${newBook[key]}</td>`
            continue;
        }
        tr.innerHTML += `<td>${newBook[key]}</td>`
    }
    tbody.appendChild(tr);
}
