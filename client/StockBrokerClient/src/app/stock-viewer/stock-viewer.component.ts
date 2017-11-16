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
  public query : string;
  public search() {
    this.stockQuery.requestStock(this.query, 'TIME_SERIES_DAILY').then((res) => {
      this.stock = JSON.stringify(res['data'], null, 2);
    });
    this.stockQuery.requestTrades(this.query.length != 0 ? {stockID: this.query} : {}).then((res) => {
      this. trades = JSON.stringify(res['data'], null, 2);
    })
  }

  ngOnInit() {
    
  }

}
