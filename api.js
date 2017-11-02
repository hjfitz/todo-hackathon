const express = require('express');
const shortid = require('shortid');

const api = express.Router();

const todos = [
  { 
    id: '696969',
    title: 'Placeholder',
    body: 'Create some Todos',
    completed: false,
  },
  {
    id: '420420',
    title: 'a compelted todo',
    body: 'a completed thing',
    completed: true,
  }
];

const getTodo = (req) => {
  const { id } = req.params;
  if (!id) return false;
  const todo = todos.filter(td => td.id === id)[0];
  if (!todo) return false;
  return todo;
}

api.get('/todos', (req, res) => {
  res.json(todos);
});

api.get('/todo/:id', (req, res) => {
  const todo = getTodo(req);
  if (todo) {
    res.json(todo);
  } else {
    res.json({ message: 'todo not found!', error: true });
  }
});

api.post('/todo', (req, res) => {
  const { title, body } = req.body;
  const id = shortid.generate();
  if (title && body) {
    const todo = { id, title, body, completed: false };
    todos.push(todo);
    res.json(todo);
  }
  if (!title) res.json({ message: 'missing title!', error: true });
  if (!body) res.json({ message: 'Missing body', error: true });
});

api.patch('/todo/:id', (req, res) => {
  const { title, body } = req.body;
  const todo = getTodo(req);
  if (todo) {
    todo.title = title || todo.title;
    todo.body = body || todo.body;
    res.json(todo);
  } else {
    res.json({ message: 'No todo found!', error: true });
  }
});

api.delete('/todo/:id', (req, res) => {
  const todo = getTodo(req);
  if (todo) {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    res.json({ message: 'successfully deleted' });
  } else {
    res.json({ message: 'no todo found', error: true })
  }
});

module.exports = api;