const express = require('express');
const router = express.Router();
const { Employee, Task} = require('../database/models')

const ash = require('express-async-handler');

//Route to retun all employees
router.get('/', ash(async(req, res) => {
    let employees = await Employee.findAll();
    res.status(200).json(employees);
}));

router.get('/:id', ash(async(req, res) => {
    let employee = await Employee.findByPk(req.params.id, {include: [Task]});
    res.status(200).json(employee);
}));

module.exports = router;