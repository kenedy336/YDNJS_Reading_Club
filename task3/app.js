let books = [];
let title = document.querySelector("#book");
let author = document.querySelector("#author");
let isbnCode = document.querySelector("#isbn");
let file = document.querySelector("#file");

isbnCode.addEventListener('blur', (e) => {
    let newBook = {
        title: title.value,
        author: author.value,
        isbnCode: isbnCode.value
    }
    books.push(newBook)
    //drowList(tasks.length);
    e.preventDefault();
})

file.addEventListener('change', (e) => {
    var image = new Image();
    console.log(image)
    document.querySelector("#test").setAttribute("src", file.files[0].name);

})