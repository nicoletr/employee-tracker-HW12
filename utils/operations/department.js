const sequelize = require('./config/connection');

// Create dept
async function createDepartment(newName) {
    const connection = await connect();
    const query = '';
    const result = await connection.execute(query);

    return result;
}

// Read dept
async function readDepartments() {
    const connection = await connect();
    await query('SELECT * FROM department', function (err, results) {
        console.log(results);
    });

    const result = await connection.execute(query);

    return result;
}

// Update dept
function updateDepartment(id, newName) {
    // logic
}

// Delete dept
function deleteDepartment(id){
    // logic
}


module.exports = {
    createDepartment,
    readDepartments,
    updateDepartment,
    deleteDepartment
}