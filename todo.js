"use strict";
const todoItems = [];

const id = 0;

function getId() {
  id++;
  return id;
}
function addTodo(todos, newTodo) {
  const todo = {
    text: newTodo.text,
    checked: false,
    id: getId(),
  };
  return [...todos, todo];
}
function deleteTodo(todos, id) {
  return todos.filter((item) => item.id !== id);
}

function changeStatus(todos, itemId, checked) {
   return todos.map((todo) => todo.id === itemId ? {...todo, checked} : todo);
};

function changeTodoTitle(itemid, text) {
    todo[itemid].status = checked;
    const index = todoItems.findIndex((item) => item.id === Number(key));
    if (index === -1) {
        throw new Error('Id not found');
    }
    todos[index].text = text;
};
}
