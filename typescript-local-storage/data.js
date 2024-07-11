export let todos = readTodos();
export function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const item = localStorage.getItem('todos-storage');
  if (item) return JSON.parse(item);
  return [];
}
