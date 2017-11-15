'use-strict';

const express = require('express');
const request = require('request');
const cors = require('cors');

const APIKEY = "EN5TVUAQ24R3A67K";


var stockBroker = express();
stockBroker.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
stockBroker.get('/', (req, res) => {
    res.send('Hello World');
});

stockBroker.get('/stockbroker', (req, res) => {
    stockID = req.query.stockID;
    granularity = req.query.granularity;
    url = "https://www.alphavantage.co/query?function=" + granularity + "&symbol="+ stockID +"&apikey="+ APIKEY +"&datatype=json";
    
    console.log(stockID);
    console.log(granularity);
    console.log(url);

    results = {
        'stockID': stockID,
        'granularity': granularity,
        'url' : url,
        'data' : '',
        'err' : ''

    }

    request(url, (error, response, body) => {
        if (error) {
            results.err = error;
        }
        if (response && response.statusCode) {
            console.log(response.statusCode);
            console.log(body);
            results.data = JSON.parse(body);
        }
        res.send(JSON.stringify(results, null, 2));        
    });
    

});

stockBroker.listen(8080);
console.log('Running on: localhost:8080')