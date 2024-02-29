// here to create mongodb schema for project
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://rohankapse04:QkpH9dwMJBrWA5Q4@cluster0.qiy5ldt.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = { todo }