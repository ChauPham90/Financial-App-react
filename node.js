const mysql = require('mysql2');
const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser');

//Configuring express server
app.use(bodyparser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'transaction',
});
db.connect(err => {
    if (err) throw err;
    console.log('mysql connected');
});

app.use(express.json())
app.use(cors())
var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM transaction_list;';
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
        console.log(" hi")
    });
});

app.post('/', (req, res) => {
    var postData = [req.body.name, req.body.price];
    var query = db.query('INSERT INTO transaction.transaction_list (name,price) VALUES (?,?); ', postData, (err, rows, fields) => {
        if (err) throw err
        res.end(JSON.stringify(rows));
        console.log(req.body)
        console.groupCollapsed('posted!')
    })
    console.log(query.sql)

});
app.delete('/:id', (req, res) => {
    db.query('DELETE FROM transaction.transaction_list WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('transaction deleted successfully.');
        else
            console.log(err);
    })
});
const port = process.env.PORT || 5000
app.on("error", error => {
    throw new Error(`[Server]::ERROR:${error.message}`);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


