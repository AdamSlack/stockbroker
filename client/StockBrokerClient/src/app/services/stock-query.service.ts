import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class StockQueryService {
  
  constructor(private http: HttpClient) { }

  public ROOT : string = 'http://localhost:8080';

  public requestStockPurchase(stockOwner : string, stockID : string, company:string, currency : string, price : number, amount : number){
    let url = this.ROOT + '/tradingblock/trades';
    console.log(url);
    let body = {
      owner : stockOwner,
      stockID : stockID,
      companyName : company,
      currency : currency,
      price : price,
      amountAvailable : amount
    }
    let headers = new HttpHeaders()
    headers.append('Content-Type' , 'application/json');

    console.log(JSON.stringify(body,null,2));
    return this.http.post(url, body, {headers: headers});
  }

  public requestStock(stockID: string, granularity: string) : Observable<any> {
    // example... 'http://localhost:8080/stockbroker?stockID=AMG&granularity=TIME_SERIES_DAILY'
    let url =  this.ROOT + '/stockbroker/stockdata/' + granularity + '/' + stockID;
    console.log(url);

    return this.http.get(url);
  }

  public requestCompanyInformation(companyName : string) : Observable<Array<any>>{
    let url = this.ROOT + '/semantic/' + companyName;
    console.log('url');

    return this.http.get<Array<any>>(url);
  }

  public requestTrades(options :{stockID?: string}) : Observable<any> {
    let url = this.ROOT + '/tradingblock/trades';
    if(options.stockID) {
      url += '/' + options.stockID;
    }
    return this.http.get(url);    
  }

  public requestStockSale(stockOwner : string, stockID : string, currency : string, price : number, amount : number) : Observable<any> {
    let url = this.ROOT + '/tradingblock/trades/' + stockID;
    let body = {
      owner : stockOwner,
      stockID : stockID,
      currency : currency,
      price : price,
      amount : amount
    }
    let headers = new HttpHeaders()
    headers.append('Content-Type' , 'application/json');

    console.log(JSON.stringify(body,null,2));
    return this.http.post(url, body, {headers: headers});
  }

    public requestStockCodes(options:{stockID? : string }) : Observable<any> {
        let url = this.ROOT + '/stockbroker/stockcodes/';
        if (options.stockID) {
            url += options.stockID;
        }
        return this.http.get(url);
    }
}


