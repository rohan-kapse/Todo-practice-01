// defining zod schema here
const { application } = require("express");
const zod = require("zod");

//zod schema as we have object in return
const createTodo = zod.object({
    title:zod.string(),
    description: zod.string()
});

const updateTodo = zod.object({
     id: zod.string()
});



module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
};