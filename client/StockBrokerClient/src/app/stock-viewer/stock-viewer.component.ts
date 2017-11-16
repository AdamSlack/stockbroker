import { Component, OnInit } from '@angular/core';

import {StockQueryService} from '../services/stock-query.service';

@Component({
  selector: 'app-stock-viewer',
  templateUrl: './stock-viewer.component.html',
  styleUrls: ['./stock-viewer.component.scss']
})
export class StockViewerComponent implements OnInit {

  constructor(private stockQuery : StockQueryService) { }

  public stock : any = 'STOCK BE HERE';
  public trades : any = 'TRADES BE HERE';


  public dates : string[] = [];
  public open : string[] = [];
  public high : string[] = [];
  public low : string[] = [];
  public close : string[] = [];
  public volume : string[] = []; 

  public query : string;
  public search() {
    this.stockQuery.requestStock(this.query, 'TIME_SERIES_DAILY').then((res) => {
      let data = res['data'];
      let data_keys = Object.keys(data);
      let values = data[data_keys[1]];
      let stock_data = this.processStockData(values)
      this.stock = JSON.stringify(res['data'], null, 2);
    });
    this.stockQuery.requestTrades(this.query.length != 0 ? {stockID: this.query} : {}).then((res) => {
      this. trades = JSON.stringify(res['data'], null, 2);
    })
  }

  public processStockData(values : any) {
    this.dates = Object.keys(values);
    this.open = this.dates.map((date) => values[date]['1. open']);
    this.high = this.dates.map((date) => values[date]['2. high']);
    this.low = this.dates.map((date) => values[date]['3. low']);
    this.close = this.dates.map((date) => values[date]['4. close']);
    this.volume = this.dates.map((date) => values[date]['5. volume']);
  }

  ngOnInit() {
    
  }

}
