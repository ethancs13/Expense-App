const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'por_db'
});

// Wrap the pool.query function in a promise for asynchronous handling
const queryAsync = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        console.log(results)
        resolve(results);
      }
    });
  });
};

// Example usage
async function exampleUsage() {
  try {
    const result = await queryAsync('SELECT * FROM your_table');
    console.log(result);
  } catch (error) {
    console.error('Error executing query:', error);
  }
}

// Close the pool when your application exits
process.on('exit', () => {
  pool.end();
});

// Export the queryAsync function for use in other files
module.exports = { queryAsync };