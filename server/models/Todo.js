const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    dateCreated: {
		type: Date,
		default: Date.now,
	  }
})

const Todo = mongoose.Model('Todo', TodoSchema)
module.exports = Todo