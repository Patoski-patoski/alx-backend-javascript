const express = require('express');
const router = require('./routes/index');

const PORT = 1245;
const app = express();

app.use('/', router);
app.listen(PORT);
module.exports = app;
