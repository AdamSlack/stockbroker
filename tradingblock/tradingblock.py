import xmlschema
from pprint import pprint

xs = xmlschema.XMLSchema('./companyStockSchema/CompanyStock.xsd')

print(xs.is_valid('./trades/trades.xml'))

class Trade():

    __init__(companyName, stockID, availableShares, price, owner):
        """ Constructor """
        this.companyName = companyName
        this.stockID = stockID
        this.availableShares = availableShares
        this.price = price
        this.owner = owner

class Price():

    __init__(value, currency):
        """ Constructor """
        this.value = value
        this.currecnt = currency

class Trades():

    __init__(trades):
        """ Constructor """
        this.trades = trades

    