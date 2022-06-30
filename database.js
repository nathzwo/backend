const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./src/views/keys');

const pool = mysql.createPool(database);
pool.getConnection((err, connection) => {
   if (err) {
      if (err.code === 'portocol_connection_lost') {
         console.error('database connection was close');
      }
      if (err.code === 'en_con_count_error') {
         console.error('database has to many connections')
      }
      if (err.code === 'ecomnrefuser') {
         console.error('database connection was refuser ')
      }
   }
   if (connection) connection.release();
   console.log('Database conectada');
   return;
})
//promisify poll query
pool.query = promisify(pool.query);

module.exports = pool;

