const { queryAsync } = require('../config/connection');

function insertFood(data, callback) {

    const sql = 'INSERT INTO food (entry_id, billData_id, date, amount, restaurant, persons, title, reason, billable, PoRCC) VALUES (?)';
    const values = [...data];

    queryAsync(sql, values)
        .then(results => {
            callback(null, results);
        })
        .catch(error => {
            console.error('Error executing query:', error);
            callback(error, null);
            throw error;
        });
}

module.exports = {
    insertFood,
};