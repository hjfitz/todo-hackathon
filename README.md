# Create a Todo List!

Your tasks are to:
- [ ] Create a component that will list all todos
- [ ] Create your homepage that populates your todos
- [ ] Add, edit and delete todos with a form
- [ ] Style it with the included bootstrap packages!

Links
- [Bootstrap docs](https://getbootstrap.com/docs/4.0/content/reboot/)
- [Component docs](https://reactjs.org/docs/components-and-props.html)
- [Component lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

Getting set up
1. Install your dependencies with - `npm install`
2. Get your compiler to watch for changes - `npm watch`
3. Open another terminal and start the server - `npm start`


The API
This app comes with a builtin RESTFUL CRUD api. There are a number of endpoints. Hitting these has been made easier with a library written for you!

To get the library, import it in to your react component; at the top of the file, you can do:
 - `import api from '../ajax';` 
   - Use the methods like `api.getTodos()`
- `import { getTodos, getTodo } from '../ajax';`
  - Use the functions without the preceeding 'api.'

API Docs
- `getTodos()`
  - Gets all of the tdos
- `getTodo(id)`
  - Gets a todo by ID
- `addTodo(title, body)`
  - Creates a todo (and returns it with a random id)
  - Title and body are both required.
- `updateTodo(id, title, body)`
  - Updated a todo by a given ID. You can change the title, body state of completion
- `deleteTodo(id)`
  - Delete a todo by its id
