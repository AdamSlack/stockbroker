'use-strict';

// IMPORTS
const express = require('express');
const request = require('request');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const sparql = require('sparql');
const util = require('util');
const fs = require('fs');

//const jwt = require('jsonwebtoken');
const config = require('./config');

// CONSTANTS
const stockBroker = express();
const APIKEY = "EN5TVUAQ24R3A67K";
const ALPHAVANTAGE = 'https://www.alphavantage.co'
const TRADINGBLOCK = 'http://localhost:8081'

const STOCKCODES = fs.readFileSync('../data/S&P500.csv','utf-8').split('\n')
      .map((line) => {
        let parts = line.split(',');
        return {
            'code' : parts[0],
            'company' : parts[1],
            'sector' : parts[2]
        }
});


stockBroker.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Accept', 'application/json');
    next();
  });
stockBroker.get('/', (req, res) => {
    res.send('Hello World');
});

stockBroker.get('/companydetails/:stockID', (req, res) => {
    var stockID = req.param.stockID;
    console.log(stockID);
});

stockBroker.post('/tradingblock/trades/:stockID' , (req, res) => {
    var stockID = req.params.stockID;
    var url = TRADINGBLOCK + '/trades' + '/stockID';
    var body = req.body;
    console.log(body);
    
    headers = {
        'Content-Length': Buffer.byteLength(JSON.stringify(body)),
        'Content-Type' : 'application/json'        
    }

    var results = {};
    request.post({url, body : JSON.stringify(body), headers : headers}, (error, response, body) => {
        if(error) {
            console.log('ERROR: ' + error);
            results.err = error;
        }
        if (response && response.statusCode) {
            console.log(response.statusCode);
            console.log(response.headers['content-type']);
            results.data = body;
            console.log(util.inspect(results));
        }
        res.send(JSON.stringify(results, null, 2));
    });
});

stockBroker.get('/tradingblock/trades/:stockID?', (req, res) => {
    var stockID = req.params.stockID;
    var url = TRADINGBLOCK + '/trades';
    var results = {}

    if (stockID) {
        url += '/' + stockID
    }

    console.log(stockID + ' trades requested');
    console.log('URL: ' + url);

    request(url, (error, response, body) => {
        if (error) {
            console.log(error);
            results.err = error;
        }
        if (response && response.statusCode) {
            console.log(response.statusCode);
            console.log(response.headers['content-type']);
            results.data = JSON.parse(body);
        }
        res.send(JSON.stringify(results, null, 2));        
    });
});

stockBroker.get('/stockbroker/stockdata/:granularity/:stockID', (req, res) => {
    var stockID = req.params.stockID;
    var granularity = req.params.granularity;
    var url = ALPHAVANTAGE + '/query?function=' + granularity + '&symbol='+ stockID +'&apikey='+ APIKEY + '&datatype=json';
    
    var results = {
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
            results.data = JSON.parse(body);
        }
        res.send(JSON.stringify(results, null, 2));        
    });

});

stockBroker.get('/stockbroker/stockcodes/:stockID?', (req, res) => {
    console.log('Request for possible Stock Codes')
    var stockID = req.params.stockID;
    if(!stockID) {
        stockID = '';
    }
    console.log(STOCKCODES[0]);
    matches = STOCKCODES.filter((deets) => deets.code.toLowerCase().startsWith(stockID.toLowerCase()));
    res.send(JSON.stringify(matches, null,2));
});

stockBroker.listen(8080);
console.log('Running on: localhost:8080')
