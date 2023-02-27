const Todo = require('../models/Todo')

exports.getTodos = async (req,res)=>{
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
        
    } catch (err) {
        res.status(404).json(err)
    }
}