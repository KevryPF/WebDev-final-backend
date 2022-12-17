const express = require('express');
const router = express.Router();
const { Employee, Task} = require('../database/models')

const ash = require('express-async-handler');

//Route to retun all employees
router.get('/', ash(async(req, res) => {
    let employees = await Employee.findAll();
    res.status(200).json(employees);
}));

module.exports = router;