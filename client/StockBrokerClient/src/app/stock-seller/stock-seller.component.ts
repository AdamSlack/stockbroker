import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-seller',
  templateUrl: './stock-seller.component.html',
  styleUrls: ['./stock-seller.component.scss']
})
export class StockSellerComponent implements OnInit {

  public stockID : string;
  public stockCurrency : string;
  public stockPrice : number;
  public stockCount : number;

  constructor() { }

  ngOnInit() {
  }

}
