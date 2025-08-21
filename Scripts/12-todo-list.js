const todoList = [];
renderTodoList();

function renderTodoList(params) {
    
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index) {
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; // same as above , saves lines
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>            
           <button onclick="
             todoList.splice(${index},1);
             renderTodoList();
           " class="delete-button">Delete</button>
        
        `; // this technique is called as generating the html using javascript
        todoListHTML += html;
    });

    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputEle = document.querySelector('.js-name-input');
    const dateInputEle = document.querySelector('.js-due-date-input');
    const name = inputEle.value;
    const dueDate = dateInputEle.value;
    todoList.push({//name : name,
        //dueDate : dueDate
        name,
        dueDate // shorthand syntax
    });
    //console.log(todoList);

    inputEle.value = ''; //empties the input element
    renderTodoList();
}