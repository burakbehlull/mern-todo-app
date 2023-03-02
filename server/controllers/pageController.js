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

exports.createTodo = async(req,res)=>{
    await Todo.create(req.body);
    res.redirect('http://localhost:3000') //REACT LOCALHOST LİNK
}

exports.deleteTodo = async(req,res)=>{
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