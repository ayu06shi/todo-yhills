const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodo");
const addBtn = document.getElementById("addBtn");

// [-------] Add

// task1
// task2
// task3
// task4

function addTodo() {
    // get the input value
    const newTodoText = newTodoInput.value;
    if(!newTodoText) {
        prompt("Please fill this field");
    }
    else{
        const checkbox = document.createElement('input')
        const todoText = document.createElement('span');
        const deleteBtn = document.createElement('button')

        checkbox.type = 'checkbox';
        // create a list item

        const listItem = document.createElement('li');

        todoText.textContent = newTodoText;
        deleteBtn.textContent = 'Delete'

        listItem.appendChild(checkbox);
        listItem.appendChild(todoText);
        listItem.appendChild(deleteBtn)
        // add to unordered list

        todoList.appendChild(listItem);
        
        newTodoInput.value = '';

        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(listItem);
        })

        checkbox.addEventListener('change', function() {
            if(checkbox.checked){
                // add a class
                listItem.classList.add('completed');
            }else{
                // remove class
                listItem.classList.remove('completed')
            }
        })
    }
    }
    

addBtn.addEventListener('click', addTodo)