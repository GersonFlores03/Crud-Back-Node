const { Router } = require("express")
const Todo = require("../models/todo.models")

const router = Router();

router.get("/api/v1/todos", async (req, res) => {
    try {
        const todos = await Todo.findAll({
            attributes: ["id", "title", "description" , "status"]
        });
        res.json(todos)

    } catch (error) {
        res.status(400).json(error)
    }
});

router.post("/api/v1/todos", async (req, res) => {
    try {
        const newTodo = req.body
        await Todo.create(newTodo)
        res.status(201).send()
    } catch (error) {
        res.status(400).json(error)
    }
});


router.put("/api/v1/todos/:id" , async (req , res) =>{
    try {
       const {id} = req.params
       const data = req.data
       await Todo.update(data , {
        where: {id}
       })
       res.status(204).send()
    } catch (error) {
      res.status(400).json(error)
    } 
});



router.delete("/api/v1/todos/:id" , async (req , res) =>{
    try {
    const {id} = req.params;
    await Todo.destroy({
        where: {id},
    });
    res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }

});



module.exports = router;