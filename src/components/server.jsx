const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
var bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ggrades'
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.get('/data', (req, res) => {
  const query = 'SELECT `id`,`yos`,`name` FROM rt_units';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send(results);
  });
});
app.post('/insert-data', (req, res) => {
  const formData = req.body;
  console.log(req.body);
  const query = `INSERT INTO rt_submissions (unit, surname, name, email, title, content) VALUES ('${formData.unit}', '${formData.surname}', '${formData.name}', '${formData.email}', '${formData.title}', '${formData.content}')`;
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send(results);
  });
});
app.listen(3001, () => console.log('Server running on port 3001'));