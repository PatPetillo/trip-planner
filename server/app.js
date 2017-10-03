const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = require('./models').db

const app = express();

app.use(morgan);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "..", "public")))

app.use(function(req, res, next){
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    console.error(err);
    res.send('Something went wrong: ' + err.message);
});

const port = 3000;
app.listen(port, () => {
    console.log('The server is listening on port', port);
    db.sync()
    .then( () => {
        console.log('Synched the database')
    })
    .catch( (err) => {
        console.error('Error caught', err, err.stack);
    })
});
