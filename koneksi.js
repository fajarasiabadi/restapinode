let mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restapi'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('koneksi terhubung');
});

module.exports = conn;

