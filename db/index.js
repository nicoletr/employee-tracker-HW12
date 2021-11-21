const connection = require("./connection");


class DB {

    constructor (connection) {
        this.connection = connection;
    }

    viewDepartments () {
        console.log("test");
        return this.connection.promise().query("SELECT * FROM departments");
    }

    createEmployee (employee) {
        console.log("test");
        return this.connection.promise().query("SELECT * FROM departments");
    }

}

module.exports = new DB(connection);