let tasks = [];
const input = document.getElementById("task");
const ul = document.querySelector('.collection');

function drowList(isNotEmpty) {
    if (!isNotEmpty)
        ul.innerHTML = '';
    else {
        let li = document.createElement('li');
        for (let i = 0; i < tasks.length; i++) {
            li.innerHTML = tasks[i];
            li.className = "collection-item";
            ul.appendChild(li);
        }
    }
}

function addNewItem(){
    let newItem = input.value;
    input.value = '';
    tasks.push(newItem)
}

document.querySelector("#addTask").addEventListener('click', (e) => {
    addNewItem();
    drowList(tasks.length);
    e.preventDefault();
})

document.querySelector(".clear-tasks").addEventListener('click', (e) => {
    tasks = [];
    drowList(tasks.length);
    e.preventDefault();
})