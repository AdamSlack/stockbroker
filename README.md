# Stockbroker System
A Stockbroker system developed for the completion of NTU Computer Science module: Service Oriented Architecture and Cloud Computing Coursework

## Components
The system consists of numerous services consumed into a single API and server. A client is implemented utilising the services made available by the api.

### Trading Block
The trading block is a Python service developed to provide a means of tracking what stocks are up for trade. It utilises an XML Schema and an XML database to track the details of what stocks are for sale.

A Server and RESTful API is built in Python to make the buying and selling of stocks available to other systems.

### Stockbroker
The Stockbroker is a Node.js service that primarily consumes other services to provide a complete system capable of allowing users to view realtime stock prices, as well as buy and sell stocks.

It consumes the [AlphaVantage](https://www.alphavantage.co/) realtime stock service to allow users of the stockbroker system to take up-to-date statistics into account when buying/selling stocks on the trading block.

The stockbroker system consumes the Python implemented Trading Block service to provide users the ability to buy and sell stocks.

The stockbroker provides clients access to the service through a REST API.

### Stockbroker Client
The client for the system is implemented as an Angular 4/5 web app. It serves as an example of some of the things that can be done using the Stockbroker Service.

## How To:

### Requirements
In order to utilise this system you will need `Python 3.x` and `Node.js 8.x`

Trading Block additional Python libraries:

- xmlschema

Stockbroker additional Node.js libraries:
- express
- cors
- body-parser

The Stockbroker client requires the Angular Command Line Interface (Angular CLI). It can be installed though the node package manager npm by entering `npm install -g --save @angular/cli` into the command line.

### Running the system.

To run each element of the system, from the directory of each element enter the following into the command line:

Trading Block: `python tradingblock.py`

Stockbroker: `node server.js`

Client App: `ng serve`


