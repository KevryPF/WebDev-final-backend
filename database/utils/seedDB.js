const { DummyModel } = require("../models");

const seedDB = async () => {
    const dummyTest = await DummyModel.create({
        name: "John Doe"
    });

};

module.exports = seedDB;