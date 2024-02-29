const express = require("express");
const port = 3000;
const cors = require("cors");
const app = express();
const { createTodo,updateTodo } = require("./types");

const { todo } = require("./db");

app.use(express.json());
app.use(cors());


app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs.",
        })
        return;
    }
    //put it in db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Your todo is created!"
    })
});

app.get("/todos", async(req,res)=>{
    // const todo = await todo.find({});
    res.json({
        todos: []
    })
});

// to mark to do as done/or to update the data put is used,
app.put("/complete", async (req,res)=>{
     const updatePayload = req.body;
     const parsedPayload = updateTodo.safeParse(updatePayload);
     if(!parsedPayload.success){
        res.status(411).json({
            msg: "You entered the wrong inputs.",
        })
        return;
     }

    await todo.update({
        _id: req.body.id
     },{
         completed: true
     })
     res.json({
        msg: "Your Todo marked as completed."
     })
})




app.listen(port);