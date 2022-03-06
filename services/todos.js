const Todo_model = require("../models/todo");

const createTodo = (todo, email) => {
  const newTodo = new Todo_model({ todo, email_: email, done: "0" });
  return newTodo;
};

const saveTodo = (todo) => {
    return todo.save()
}

module.exports = {
    createTodo,
    saveTodo
};
