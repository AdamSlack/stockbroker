var soap = require('soap');

var url = 'http://localhost:8082/CurrencyConverter?wsdl';
var args = { from: 'USD', to: 'GBP', amount: 100.00 };

soap.createClient(url, function(err, client) {
    //var description = client.describe();
    //console.log(util.inspect(description));
    client.convertCurrency(args, function(err, result) {
        console.log(result);
    });
});