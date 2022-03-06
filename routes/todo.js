const router = require("express").Router();
const Todo_model = require("../models/todo");
const todosCtrl = require("../controllers/todos");
const {ADD_TODO, DELETE_TODO} = require('../constants/routes/path');

router
  .post(ADD_TODO, todosCtrl.addTodo)

  .get(`${DELETE_TODO}/:_id`, (req, res) => {
    const { _id } = req.params;
    Todo_model.deleteOne({ _id })
      .then(() => {
        console.log("deleted");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  .get("/update/todo/:_id", (req, res) => {
    const { _id } = req.params;
    const info = Todo_model.find();
    console.log(info);
    Todo_model.updateOne({ _id }, { done: "1" })
      .then(() => {
        console.log("deleted");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
