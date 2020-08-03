import Vuex from 'vuex';

const shortid = require('shortid');

export default Vuex.createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      let newTodo = {
        id: shortid.generate(),
        title: todo,
        description: '',
        done: false,
        editing: false,
      };
      state.todos.unshift(newTodo);
    },
    updateTodos(state, todos) {
      state.todos = todos;
    },
    markAsDone(state, id) {
      let markingTodoIndex = state.todos.findIndex(todo => todo.id === id);
      state.todos[markingTodoIndex].done = true;
    },
    markAsUndone(state, id) {
      let unmarkingTodoIndex = state.todos.findIndex(todo => todo.id === id);
      state.todos[unmarkingTodoIndex].done = false;
    },
    markAllDone(state) {
      state.todos.forEach(todo => {
        todo.done = true;
      });
    },
    markAllUndone(state) {
      state.todos.forEach(todo => {
        todo.done = false;
      });
    },
    editTodo(state, id) {
      let editingTodoIndex = state.todos.findIndex(todo => todo.id === id);
      state.todos[editingTodoIndex].editing = true;
    },
    doneEditing(state, editedTodo) {
      let doneEditingTodoIndex = state.todos.findIndex(todo => todo.id === editedTodo.id);
      if (state.todos[doneEditingTodoIndex].title || state.todos[doneEditingTodoIndex].description) {
        state.todos[doneEditingTodoIndex] = editedTodo;
        state.todos[doneEditingTodoIndex].editing = false;
      } else {
        state.todos.splice(doneEditingTodoIndex, 1);
      }

    },
    deleteTodo(state, id) {
      let deletingTodoIndex = state.todos.findIndex(todo => todo.id === id);
      state.todos.splice(deletingTodoIndex, 1);
    },
  },
  actions: {
  },
  modules: {
  }
});
