const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://princekumar7406:7XLfae5SHXJFhhFz@cluster0.50m1krn.mongodb.net/todos",
  );

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}