import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StockQueryService {

  constructor(private http: HttpClient) { }

  public ROOT : string = 'http://localhost:8080';

  public requestStock(stockID: string, granularity: string) {
    // example... 'http://localhost:8080/stockbroker?stockID=AMG&granularity=TIME_SERIES_DAILY'
    let url =  this.ROOT + '/stockbroker/' + granularity + '/' + stockID;
    console.log('url');

    return this.http.get(url).toPromise().then((res) => {return res});
  }

  public requestTrades(options :{stockID?: string}) {
    let url = this.ROOT + '/tradingblock/trades';
    if(options.stockID) {
      url += '/' + options.stockID;
    }
    return this.http.get(url).toPromise().then((res) => {return res});    
  }

}
