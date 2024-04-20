const { queryAsync } = require('../config/connection');

function insertBillData(data, callback) {

    const sql = 'INSERT INTO billData (id, fbCC, fbCCBillable, fb, fbBillable, billOnCard, billOOP, nonBillOnCard, nonBillOOP, CCtotal, OOPtotal) VALUES (?)';
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
    insertBillData,
};