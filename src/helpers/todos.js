// Fetch todos from local storage
export function getTodosFromStorage() {
  return JSON.parse(localStorage.getItem("todos"));
}

// save todos to local storage
export function saveTodosToLocalStorage(todos) {
  const data = JSON.stringify(todos);
  localStorage.setItem("todos", data);
}

// get todo by id
export function getTodoById(id) {
  const todos = getTodosFromStorage();
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    throw new Error("Could not find todo for id " + id);
  }

  return todo;
}

// save new todo to local storage
export function addTodo(text) {
  let todos = getTodosFromStorage();

  const newTodo = {
    id: new Date().toISOString(),
    text,
  };

  if (todos) {
    todos.unshift(newTodo);
  } else {
    todos = [newTodo];
  }

  saveTodosToLocalStorage(todos);
}

// update todo data
export function updateTodo(id, newText) {
  const todos = getTodosFromStorage();
  const updatedTodo = todos.find((t) => t.id === id);
  updatedTodo.text = newText;
  saveTodosToLocalStorage(todos);
}

// delete todo from local storage
export function deleteTodo(id) {
  const todos = getTodosFromStorage();
  const updatedTodos = todos.filter((t) => t.id !== id);
  saveTodosToLocalStorage(updatedTodos);
}
