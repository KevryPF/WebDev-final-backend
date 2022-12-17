const express = require('express');
const router = express.Router();
const { Employee, Task} = require('../database/models')

const ash = require('express-async-handler');

//Route to retun all tasks
router.get('/', ash(async(req, res) => {
    let tasks = await Task.findAll();
    res.status(200).json(tasks);
}));

module.exports = router;