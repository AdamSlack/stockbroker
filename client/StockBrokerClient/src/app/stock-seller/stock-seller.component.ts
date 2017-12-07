import { Component, OnInit } from '@angular/core';
import { StockQueryService } from '../services/stock-query.service';

@Component({
  selector: 'app-stock-seller',
  templateUrl: './stock-seller.component.html',
  styleUrls: ['./stock-seller.component.scss']
})

export class StockSellerComponent implements OnInit {

  public owner : string = 'default' // this needs to be infered by who is signed in...
  public stockID : string;
  public stockCurrency : string;
  public stockPrice : number;
  public stockCount : number;

  constructor(private tradingBlock : StockQueryService) {
    this.tradingBlock.requestStockSale(this.owner, this.stockID, this.stockCurrency, this.stockPrice, this.stockCount).subscribe((res) => {
      
    });
  }


  ngOnInit() {
  }

}
