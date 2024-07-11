/* exported todos */
export interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

export let todos: Todo[] = readTodos();

export function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[] {
  const item = localStorage.getItem('todos-storage');
  if (item) return JSON.parse(item) as Todo[];
  return [];
}
