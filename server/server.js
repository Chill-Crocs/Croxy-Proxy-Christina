const express = require('express');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(express.json());

app.use(express.static(PUBLIC_DIR));

module.exports = app;