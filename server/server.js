'use-strict';

const express = require('express');

const APIKEY = "EN5TVUAQ24R3A67K";


var stockBroker = express();

stockBroker.get('/', (req, res) => {
    res.send('Hello World');
});

stockBroker.get('/stockbroker', (req, res) => {
    stockID = req.query.stockID;
    granularity = req.query.granularity;

    console.log(req.query.stockID);
    console.log(req.query.granularity);
    
    response = {
        'stockID': stockID,
        'granularity': granularity,
        'url' : "https://www.alphavantage.co/query?function=" + granularity + "&symbol="+ companyID +"&apikey="+ APIKEY +"&datatype=json"
        
    }

    res.send(JSON.stringify(response, null, 2));
});

stockBroker.listen(8080);