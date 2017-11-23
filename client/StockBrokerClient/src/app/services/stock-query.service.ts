import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class StockQueryService {

  constructor(private http: HttpClient) { }

  public ROOT : string = 'http://localhost:8080';

  public requestStock(stockID: string, granularity: string) {
    // example... 'http://localhost:8080/stockbroker?stockID=AMG&granularity=TIME_SERIES_DAILY'
    let url =  this.ROOT + '/stockbroker/' + granularity + '/' + stockID;
    console.log('url');

    return this.http.get(url);
  }

  public requestTrades(options :{stockID?: string}) : Observable<any> {
    let url = this.ROOT + '/tradingblock/trades';
    if(options.stockID) {
      url += '/' + options.stockID;
    }
    return this.http.get(url);    
  }

}
