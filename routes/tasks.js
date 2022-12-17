const express = require('express');
const router = express.Router();
const { Employee, Task} = require('../database/models')

const ash = require('express-async-handler');

//Route to return all tasks
router.get('/', ash(async(req, res) => {
    let tasks = await Task.findAll();
    res.status(200).json(tasks);
}));

//Route to return single task by ID
router.get('/:id', ash(async(req, res) => {
    let task = await Task.findByPk(req.params.id, {include: [Employee]});
    res.status(200).json(task);
}));

//Route to edit a task
router.put('/:id', ash(async(req, res) => {
    await task.update(req.body, {
        where: {id: req.params.id}
    });
    let task = await Task.findByPk(req.params.id, {include: [Employee]});
    res.status(201).json(task);
}));



module.exports = router;