const todoService = require('../services/todos');


const addTodo = async (req,res)=>{
    const {todo}=req.body;
    const {email_}=req.user.email;

    if(todo==""){
        res.redirect('/')
    }

    const newTodo = todoService.createTodo(todo, email_)
    
    try {
        await todoService.saveTodo(newTodo);
        console.log("done")
        res.redirect('/')
    } catch(e) {
        console.log(e)
    }
    
   
}

module.exports = {
    addTodo
};