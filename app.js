const express = require('express');
const path = require('path');
const apiv1 = require('./routes/apiv1');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;
const db = process.env.MONGOLAB_URL || 'mongodb://localhost:27017/image-search';

mongoose.connect(db);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', apiv1);
app.listen(port, function () {
    console.log('Server running ...');
});