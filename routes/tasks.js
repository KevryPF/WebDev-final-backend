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
    await Task.update(req.body, {
        where: {id: req.params.id}
    });
    let task = await Task.findByPk(req.params.id);
    res.status(201).json(task);
}));

//Route to add a new task
router.post('/', function(req, res, next) {
    Task.create(req.body)
    .then(createdTask => res.status(200).json(createdTask))
    .catch(err => next(err));
});

//Route to delete a task
router.delete('/:id', function(req, res, next) {
    Task.destroy({
        where: { id: req.params.id }
    })
        .then(() => res.status(200).json("Deleted a Task"))
        .catch(err => next(err));
});

module.exports = router;