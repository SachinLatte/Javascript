let todoList = [
                {
                  items:'Buy Milk', 
                  dueDate: '20/01/2026'
                },
                {
                  items:'Buy Fruits', 
                  dueDate: '20/01/2026'
                }
              ];
displayItems();
function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoItem !== '' ? todoList.push({items : todoItem, dueDate: todoDate}) : alert('Please give some input');  
  inputElement.value = '';
  dateElement.value = '';
  inputElement.focus();
  console.log(todoList);
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  let newHTML = '';
  for(let i =0; i < todoList.length; i++){
    let {items, dueDate} = todoList[i];
    newHTML += `
    <span>${items}</span>
    <span>${dueDate}</span>
    <button onclick="todoList.splice(${i}, 1); displayItems()">Delete</button>
    `;
  }
  containerElement.innerHTML = newHTML;
}

console.log(todoList);
