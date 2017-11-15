'use-strict';

const express = require('express');
var request = require('request');
const APIKEY = "EN5TVUAQ24R3A67K";


var stockBroker = express();

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
            results.body = JSON.parse(body);
        }
        res.send(JSON.stringify(results, null, 2));        
    });
    

});

stockBroker.listen(8080);
console.log('Running on: localhost:8080')