const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors()); // thêm cors middleware

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'users',
});

connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối: ' + err.stack);
    return;
  }

  console.log('Kết nối thành công với id ' + connection.threadId);
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM nguoidung', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server đang chạy trên cổng 3000');
});
