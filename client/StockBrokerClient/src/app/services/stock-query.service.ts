import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StockQueryService {

  constructor(private http: HttpClient) { }

  public requestStock(stockID: string, granularity: string) {
    // example... 'http://localhost:8080/stockbroker?stockID=AMG&granularity=TIME_SERIES_DAILY'
    let url =  'http://localhost:8080/stockbroker?stockID=' + stockID + '&granularity=' + granularity
    console.log('url');

    return this.http.get(url).toPromise().then((res) => {return res});
  }

}
