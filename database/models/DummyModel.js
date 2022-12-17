const Sequelize = require('sequelize');
const db = require('../db');

const DummyModel = db.define("dummyModel", {
    name: {
        type: Sequelize.STRING
    }
});

module.exports = DummyModel;