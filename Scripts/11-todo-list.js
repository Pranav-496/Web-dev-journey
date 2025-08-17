const todoList = ['make', 'dinner'];
renderTodoList();

function renderTodoList(params) {



    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`; // this technique is called as generating the html using javascript
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputEle = document.querySelector('.js-name-input');
    const name = inputEle.value;
    todoList.push(name);
    console.log(todoList);

    inputEle.value = ''; //empties the input element
    renderTodoList();
}