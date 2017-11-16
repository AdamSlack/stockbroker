import xmlschema
from pprint import pprint
import copy
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse
import json

class Trade:
    """ Trade """

    def __init__(self, company_name, stock_id, available_shares, price, owner):
        """ Constructor """
        self.company_name = company_name
        self.stock_id = stock_id
        self.available_shares = available_shares
        self.price = price
        self.owner = owner

    def xmlise(self):
        """ convert class into xml for writing to file """ 
        xml = '<trade>'
        xml += '<companyName>' + self.company_name + '</companyName>'
        xml += '<stockID>' + self.stock_id + '</stockID>'
        xml += '<availableShares>' + str(self.available_shares) + '</availableShares>'
        xml += self.price.xmlise()
        xml += '<owner>' + self.owner + '</owner>'
        xml += '</trade>'
        return xml
    
    def jsonise(self):
        """ convert class into json """
        string = '{' + ''
        string += '"companyName": "' + self.company_name + '",'
        string += '"stockID": "' + self.company_name + '",'
        string += '"availableShares": "' + str(self.available_shares) + '",'
        string += '"owner": "' + self.owner + '",'
        string += '"price": ' + self.price.jsonise() + ''
        string += '}'
        return string

    def __eq__(self, trade):
        """ check if another trade is the same trade. """

        if isinstance(trade, self.__class__):
            stock = self.stock_id == self.stock_id 
            shares = self.available_shares == trade.available_shares
            name = self.company_name == trade.company_name
            owner = self.owner == trade.owner
            price = self.price == trade.price
            return  stock and shares and name and owner and price
        else:
            return False

    def same_owner_stock_price(self, trade):
        """ check if stock is the same on everything but available shares. """
        if isinstance(trade, self.__class__):
            stock = self.stock_id == trade.stock_id 
            name = self.company_name == trade.company_name
            owner = self.owner == trade.owner
            price = self.price == trade.price
            return  stock and name and owner and price
        else:
            return False
    
    def __str__(self):
        """ print to string """

        string = 'stock ID: ' + self.stock_id 
        string += ' company name: ' + self.company_name
        string += ' available shares: ' + str(self.available_shares)
        string += ' owner: ' + self.owner
        return string



class Price:
    """ Price """

    def __init__(self, value, currency):
        """ Constructor """
        self.value = value
        self.currency = currency

    def xmlise(self):
        """ convert class into xml for writing to file """
        xml = '<price>'
        xml += '<currency>' + str(self.currency) +'</currency>'
        xml += '<value>' + str(self.value) + '</value>'
        xml += '</price>'
        return xml+ ','
    
    def jsonise(self):
        """ convert class into json string """
        string = '{ '
        string += '"currency": "' + str(self.currency) + '",'
        string += '"value": "' + str(self.value) + '"'
        string += '}'
        return string

    def __eq__(self, price):
        if isinstance(price, self.__class__):
            return self.value == price.value and self.currency == price.currency
        else:
            return False



class Trades:
    """ Trades """

    def __init__(self, trades):
        """ Constructor """
        self.trades = trades

    def xmlise(self):
        """ convert class into xml for writing to file. """
        xml = '<?xml version="1.0"?> <cs:trades xmlns:cs="CompanyStock">'
        for trade in self.trades:
            xml += trade.xmlise()
        xml += '</cs:trades>'
        return xml

    def jsonise(self, trades):
        """ convert class into json """
        if trades == None:
            trades = self.trades

        string = '{"trades" : [ '
        for trade in trades:
            string += trade.jsonise()
            string += ','
        string = string.rstrip(',')
        string += ']}'
        return string

    def save_trades(self, path):
        """ XMLise and save file, checking if valid xml bethod hand"""
        with open(path, 'w') as f:
            f.write(self.xmlise())
    
    def add_trade(self, trade):
        """ check if a trade exists and add it."""
        for idx, t in enumerate(self.trades):
            if t.same_owner_stock_price(trade):
                self.trades[idx].available_shares += trade.available_shares
                return True
        self.trades.append(copy.deepcopy(trade))
        return True

    def remove_trade(self, trade):
        """ remove trade from the block """
        for idx, t in enumerate(self.trades):
            if t == trade:
                del self.trades[idx]
                return True

            if t.same_owner_stock_price(trade) and t.available_shares <= trade.available_shares:
                self.trades[idx].available_shares -= trade.available_shares
                print(self.trades[idx].available_shares)
                if t.available_shares == 0:
                    del self.trades[idx]
                return True

        return False

    def find_trades(self, stock_id):
        """ returns all stock matching on stock id """
        return [t for t in self.trades if t.stock_id.lower() == stock_id.lower()]

class XMLParser:
    """ XMLParser """

    def __init__(self, schema_path):
        """ Constructor """
        self.xs = xmlschema.XMLSchema(schema_path)

    def parse_xml(self, path):
        """ Parse and Validate an xml file into relevant classes """
        if self.xs.is_valid(path):
            print('Valid XML File')
            xml = self.xs.to_dict(path)
            trades = []
            for t in xml['trade']:
                p = t['price']
                price = Price(value=p['value'], currency=p['currency'])
                trade = Trade(
                    stock_id = t['stockID'],
                    company_name = t['companyName'],
                    owner = t['owner'],
                    available_shares = t['availableShares'],
                    price = price
                )
                trades.append(trade)
            return Trades(trades)
        else:
            print('invalid XML file')

    def validate(self, path):
        return self.xs.is_valid(path)


def validate_test_xml(xp, path):
    if xp.validate(path):
        print('XML Validated Successfully.')
    else:
        print('XML Failed Validation')


class TradingBlock(BaseHTTPRequestHandler):

    def __init__(self, request, client_address, server):
        self.xsd = './companyStockSchema/CompanyStock.xsd'
        self.xml = './trades/trades.xml'
        self.xp = XMLParser(self.xsd)
        self.trades = self.xp.parse_xml(self.xml)
        super().__init__(request, client_address, server)
    
    def add_trade(self, trade):
        self.trades.add_trade(trade)
        self.trades.save_trades(self.xml)

    def remove_trade(self, trade):
        self.trades.remove_trade(trade)
        self.trades.save_trades(self.xml)

    def find_trades(self, stock_id):
        res = self.trades.find_trades(stock_id)

    def process_GET(self, url):
        """ parse an incoming url """

        components = url.lower().strip('/').split('/')
        comp_len = len(components)
        if comp_len == 0 or comp_len > 2:
            self.send_response(400)
            return 'INVALID URL RECIEVED'
        
        if components[0] != 'trades':
            self.send_response(400)
            return 'INVALID URL RECIEVED'    

        if comp_len == 1 :
            json_obj = json.loads(self.trades.jsonise(trades = None))
            self.send_response(200)
            return  json.dumps(json_obj, indent=2)
        
        self.send_response(200)
        json_obj = json.loads(self.trades.jsonise(self.trades.find_trades(components[1])))
        return  json.dumps(json_obj, indent=2)


    def process_POST():
        """ processess URL from POST Request """


    def do_GET(self):
        

        url = urlparse(self.path)
        output = self.process_GET(url.geturl())

        self.send_header('content-type','application/json')
        self.end_headers()
        
        self.wfile.write(bytes(output + '\n', "utf8"))
        return

    def do_POST(self):
        self.send_response(200)

        self.send_header('Content-type','text/html')
        self.end_headers()

        url = urlparse(self.path)
        print('POST URL:' + url.geturl())

        self.wfile.write(bytes('POST REQUEST RECV' + '\n', "utf8"))
        return

def main():
    """ main """
    server = HTTPServer(('localhost', 8081), TradingBlock)
    print('Starting server at http://localhost:8081')
    server.serve_forever()


if __name__ == '__main__':
    main()