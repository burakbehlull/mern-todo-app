const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: String,
    description: String,
    dateCreated: {
		type: Date,
		default: Date.now,
	  }
})

const Todo = mongoose.Model('Todo', TodoSchema)
module.exports = Todo