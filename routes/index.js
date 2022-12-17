const express = require('express');
const router = express.Router();

const taskRouter = require('./tasks');
const employeeRouter = require('./employees');

router.use('/employee', employeeRouter);
router.use('/task', taskRouter);

module.exports = router;