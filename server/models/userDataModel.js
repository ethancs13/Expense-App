const { queryAsync } = require('../config/connection');

function getAllUserData(callback) {
    pool.query('SELECT * FROM userData', (error, results) => {
        if (error) throw error;
        callback(results);
    });
}

function insertData(data, callback) {

    console.log('userData:', data);

    const sql = 'INSERT INTO userData (fn, ln, email, cellphone, cellBillable, landline, landlineBillable, longdist, longdistBillable, broadband, broadbandBillable, entertainment, entertainmentBillable, parking, parkingBillable, tolls, tollsBillable, mileage, mileageBillable, fbCC, fbCCBillable, fb, fbBillable, fbCCNonBillable, fbNonBillable, comments, doc_name, doc_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
        ...data
    ];

    queryAsync(sql, values)
        .then(results => {
            callback(null, results);  // Pass results to the callback
        })
        .catch(error => {
            console.error('Error executing query:', error);
            callback(error, null);  // Pass error to the callback
            throw error;
        });
}

module.exports = {
    getAllUserData,
    insertData
};
