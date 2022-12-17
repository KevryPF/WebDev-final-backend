const express = require('express');
const router = express.Router();

const dummyRouter = require('./dummy');
router.use('/dummy', dummyRouter);

const ash = require('express-async-handler');

module.exports = router;