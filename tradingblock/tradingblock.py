import xmlschema
from pprint import pprint


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
    
    def __eq__(self, trade):
        """ check if another trade is the same trade. """

        if isinstance(trade, self.__class__):
            stock = self.stock_id == self.stock_id 
            shares = self.available_shares == trade.available_shares
            name = self.company_name = trade.company_name
            owner = self.owner == trade.owner
            price = self.price == trade.price
            return  stock and shares and name and owner and price
        else:
            return False

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
        return xml

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

    def save_trades(self, path):
        """ XMLise and save file, checking if valid xml bethod hand"""
        with open(path, 'w') as f:
            f.write(self.xmlise())
    
    def add_trade(self, trade):
        """ check if a trade exists and add it."""
        for idx, t in enumerate(self.trades):
            if t == trade:
                self.trades[idx].available_shares += trade.available_shares
                return True
        self.trades.append(trade)
        return True

    def remove_trade(self, trade):
        """ remove trade from the block """
        for idx, t in enumerate(self.trades):
            if t == trade:
                del self.trades[idx]
                return True
        return False

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

def main():
    """ main """
    xp = XMLParser('./companyStockSchema/CompanyStock.xsd')
    trades = xp.parse_xml('./trades/trades.xml')
    trades.save_trades('./trades/test.xml')
    if xp.validate('./trades/test.xml'):
        print('XML Validated Successfully.')
    else:
        print('XML Failed Validation')



if __name__ == '__main__':
    main()