const req = require('request');

const testAPI = (url) => {
    req(url, (error, response, body) => {
        console.log('URL: ' + url)

        if(error) {
            console.log(error);
        }
        if (response && response.statusCode) {
            console.log('Status Code: ' + response.statusCode);
            console.log('Results: ' + (JSON.parse(body) ? 'Something' : 'Nothing'))
        }
        else{
            console.log(response);
        }
    });
}

var url = 'http://localhost:8080/stockbroker?stockID=AMG&granularity=TIME_SERIES_DAILY';
testAPI(url);
url = 'http://localhost:8080/stockbroker?stockID=MSFT&granularity=TIME_SERIES_DAILY';
testAPI(url);