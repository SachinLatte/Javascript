let todoList = [];
function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  todoItem !== '' ? todoList.push(todoItem) : alert('Please give some input');  
  inputElement.value = '';
  inputElement.focus();
  console.log(todoList);
}