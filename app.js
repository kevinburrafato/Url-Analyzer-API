const express = require('express');
const app = express();

const httpRoute = require('./routes/HTTP');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/HTTP", httpRoute);

module.exports = app