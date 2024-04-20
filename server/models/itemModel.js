const { queryAsync } = require('../config/connection');

function insertItem(data, callback) {
    // Adjust the SQL query accordingly
    const sql = 'INSERT INTO items (entry_id, fn, ln, email, item, date, subTotal, cityTax, taxPercent, total, source, shippedFrom, shippedTo, billable) VALUES (?)';
    const values = [...data]; // Adjust this array based on your data structure
    console.log("values:: ", values)
    queryAsync(sql, values)
        .then(results => {
            console.log(results)
            callback(null, results);
        })
        .catch(error => {
            console.error('Error executing query:', error);
            callback(error, null);
            throw error;
        });
}

module.exports = {
    insertItem,
};