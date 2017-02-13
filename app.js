const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const apiv1 = require('./routes/apiv1');

const port = process.env.PORT || 3000;
const db = process.env.MONGOLAB_URL || 'mongodb://localhost:27017/image-search';

const app = express();
mongoose.connect(db);


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', apiv1);

app.use(function (req, res) {
    res.status(404).json({
        status: 'Invalid path.'
    });
});

app.listen(port, function () {
    console.log('Server running ...');
});