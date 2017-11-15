import { Component, OnInit } from '@angular/core';

import {StockQueryService} from '../services/stock-query.service';

@Component({
  selector: 'app-stock-viewer',
  templateUrl: './stock-viewer.component.html',
  styleUrls: ['./stock-viewer.component.css']
})
export class StockViewerComponent implements OnInit {

  constructor(private stockQuery : StockQueryService) { }

  public stock : any = 'STOCK BE HERE';

  ngOnInit() {
    this.stockQuery.requestStock('AMG', 'TIME_SERIES_DAILY').then((res) => {
      console.log(res);
      this.stock = JSON.stringify(res);
    });
  }

}
