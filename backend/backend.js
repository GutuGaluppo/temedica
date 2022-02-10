const express = require('express');
const cors = require('cors');
const app = express();
const drugsAPI = require('./data/dataset.json');

app.use(cors());

app.get('/api/drugs', (req, res) => {
	res.json(drugsAPI);
})

module.exports = app;