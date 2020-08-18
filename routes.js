const express = require('express');
const routes = express.Router();
const fetch_all = require('./fetch_all');

rss_json = {};

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});

routes.get('/rss.json', async (req, res) => {
    console.log('Nova requisição;')
    if (Object.keys(rss_json).length === 0) {
        rss_json = await fetch_all();
        res.json(rss_json);
    } else {
        res.json(rss_json);
        rss_json = await fetch_all();
    }
    
});

module.exports = routes;