module.exports = {
  getTodos: () => fetch('/api/todos').then(resp => resp.json()), 
  getTodo: id => fetch(`/api/todo/${id}`).then(resp => resp.json()),
  addTodo: (title, body) => fetch('/api/todo', { 
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then(resp => resp.json()),
  updateTodo: (id, title, body) => fetch(`/api/todo/${id}`, { 
    method: 'PATCH',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then(resp => resp.json()),
  deleteTodo: id => fetch(`/api/todo/${id}`, { method: 'delete' }).then(resp => resp.json()),
}