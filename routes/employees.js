const express = require('express');
const router = express.Router();
const { Employee, Task} = require('../database/models')

const ash = require('express-async-handler');

//Route to return all employees
router.get('/', ash(async(req, res) => {
    let employees = await Employee.findAll();
    res.status(200).json(employees);
}));

//Route to return employee by ID
router.get('/:id', ash(async(req, res) => {
    let employee = await Employee.findByPk(req.params.id, {include: [Task]});
    res.status(200).json(employee);
}));

//Route to edit an Employee 
router.put('/:id', ash (async(req, res) => {
    await employee.update(req.body, {
        where: {id: req.params.id}
    });
    let employee = await Employee.findByPk(req.params.id, {include: [Task]});
    res.status(201).json(employee);
}));

//Route to add a new employee
router.post('/', ash(async(req, res) => {
    let newEmployee = await Employee.create(req.body);
    res.status(200).json(newEmployee);
}));

//Route to delete a employee based on their ID
router.delete('/:id', ash(async(req, res) => {
    await Employee.destroy({
        where: { id: req.params.id }
    });
    res.status(200).json("Employee deleted");
}));

module.exports = router;