const { Employee, Task } = require("../models");

const seedDB = async () => {
    const dummyEmployee = await Employee.create({
        firstname: "John",
        lastname: "Doe",
        department: "Finance"
    });

    const dummyTask = await Task.create({
        description: "Organize",
        prioritylevel: "LOW",
        completionstatus: false
    });

    await dummyTask.setEmployee(dummyEmployee);

};

module.exports = seedDB;