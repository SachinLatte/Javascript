let todoList = ['Buy Milk','Go To College'];
displayItems();
function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  todoItem !== '' ? todoList.push(todoItem) : alert('Please give some input');  
  inputElement.value = '';
  inputElement.focus();
  console.log(todoList);
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  let newHTML = '';
  for(let i =0; i < todoList.length; i++){
    newHTML += `
    <div>
    <span>${todoList[i]}</span>
    <button>Delete</button>
    </div>
    `;
  }
  containerElement.innerHTML = newHTML;
}