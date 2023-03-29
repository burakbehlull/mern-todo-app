const Todo = require('../models/Todo')

exports.getTodos = async (req,res)=>{
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
        
    } catch (err) {
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
}

exports.createTodo = async(req,res, next)=>{
    await Todo.create(req.body);
    res.status(200).redirect('http://localhost:3000')
}

exports.deleteTodo = async(req,res, next)=>{
    try{
        await Todo.findOneAndRemove(req.body); //BASLIĞA GÖRE SİL DEDİK
        res.status(200).redirect('http://localhost:3000')
    } catch(err){
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
}

exports.editTodo = async(req,res,next)=>{
    try{
        const todo = await Todo.findOne(req.body);
        todo.title = req.body.editTitle;
        todo.save();
        console.log(todo)
		res.status(200).redirect('http://localhost:3000')
    } catch(err){
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
}
