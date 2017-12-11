
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { StockQueryService } from '../services/stock-query.service';
import { Observable, Subscription } from 'rxjs';
import * as d3 from 'd3';
@Component({
  selector: 'app-stock-viewer',
  templateUrl: './stock-viewer.component.html',
  styleUrls: ['./stock-viewer.component.scss']
})
export class StockViewerComponent implements OnInit {

  constructor(private stockQuery : StockQueryService, private el: ElementRef) { }

  public stock : any = [];
  public trades : any = [];
  public stockCodes : Array<{code : string, company : string, sector : string}> = []
  public selectedTrade : any;
    
  private tradeSubscription : Subscription;
  private stockSubscription : Subscription;
  private stockCodeSubscription : Subscription;
  private stockPurchaseSubscription: Subscription;
  private companyDetailsSubscription: Subscription;

  public companyInfo : any;

  public searching : boolean = true;
  public searchFocused : boolean = false;
    
  public dates : string[] = [];
  public open : string[] = [];
  public high : string[] = [];
  public low : string[] = [];
  public close : string[] = [];
  public volume : string[] = []; 

  public query : string = '';
  
  private child : ElementRef;
  
  @ViewChild('chart') chart: ElementRef;
  
  @Input() dataset: Array<{close: number, date: any}> = [{close: 0, date:'1995-02-05'}];

  chartWidth: number = 200;
  chartHeight: number = 200;

    public selectTrade (trade : any) {
        console.log(trade);
        this.selectedTrade = trade;
        this.requestCompanyInfo();
    }
    
    public fillQuery(query : string) {
        console.log(query);
        this.query = query;
        this.search();
    }
    
    public searchFocus() {
        this.searchFocused = !this.searchFocused;
    }    
    
    public requestStockCodes() : void {
        if (this.stockCodeSubscription) {
            this.stockCodeSubscription.unsubscribe();
            this.stockCodes = [];
        }
        if(this.query != '') {      
            this.stockCodeSubscription = this.stockQuery.requestStockCodes({stockID : this.query}).subscribe((res) => {
                this.stockCodes = res.sort((a,b) => a.code - b.code);
            });

        }
    }

    public buildStockDataset() : void {
        
        var cumulative = [];
        this.dataset = this.close.map((v,idx,) => {
            return {close: parseFloat(v), date: this.dates[idx]}
        });
    }

    public requestCompanyInfo() {
        if (this.companyDetailsSubscription) {
            this.companyDetailsSubscription.unsubscribe();
        }
        this.companyDetailsSubscription = this.stockQuery.requestCompanyInformation(this.selectedTrade.companyName).subscribe((res) => {
            if(res.length == 0) {
                this.companyInfo = undefined;
                return;
            }
            this.companyInfo = res[0];
        });
    }

    public buyTrade() : void {
        let stockID = this.selectedTrade.stockID;
        let company = this.selectedTrade.companyName;
        let owner = this.selectedTrade.owner;
        let amount = this.selectedTrade.availableShares;
        let value = this.selectedTrade.price.value;
        let currency = this.selectedTrade.price.currency;
        if(this.stockPurchaseSubscription) {
            this.stockPurchaseSubscription.unsubscribe();
        }

        this.stockPurchaseSubscription = this.stockQuery.requestStockPurchase(owner, stockID, company, currency, value, amount).subscribe((res) => {
            console.log(res);
            this.search();
            this.selectedTrade = undefined;
            alert('Stock Bought!')
        });
    }

    
    public search() : void {

        if(this.stockSubscription) {
            this.stockSubscription.unsubscribe();
        }
        if(this.query.length > 0) {
            this.stockSubscription = this.stockQuery.requestStock(this.query, 'TIME_SERIES_DAILY').subscribe((res) => {
                let data = res['data'];
                let data_keys = Object.keys(data);
                let values = data[data_keys[1]];
                let stock_data = this.processStockData(values)
                this.stock = JSON.stringify(res['data'], null, 2);

                this.buildStockDataset();
                this.buildChart();
            });
        }
        
        if(this.tradeSubscription) {
            this.tradeSubscription.unsubscribe();
        }
        this.searching = true;
        this.tradeSubscription = this.stockQuery.requestTrades(this.query.length != 0 ? {stockID: this.query} : {}).subscribe((res) => {
            this. trades = res['data'].trades;
            this.searching = false;
        })
    }

    public buildChart(){
        if (!this.dataset) {
            return;
        }
        console.log('Building D3 Chart.')

        var svg = d3.select(this.chart.nativeElement)

        var chartHeight = 600;
        var chartWidth = 600;

        var margin = {top: 20, right: 20, bottom: 50, left: 50};
        var width = chartWidth - margin.left - margin.right;
        var height = chartHeight - margin.top - margin.bottom;

        svg.selectAll('*').remove();
        svg.attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")");
        
        var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        var x = d3.scaleTime()
            .rangeRound([0, width]);

        var y = d3.scaleLinear()
            .rangeRound([height, 0]);
        var parseTime = d3.timeParse('%Y-%m-%d');
        
        var line = d3.line()
            .x((d) => { return x(parseTime(d.date)); })
            .y((d) => { return y(d.close); });

        x.domain(d3.extent(this.dataset, (d) => { return parseTime(d.date)}));
        y.domain([d3.min(this.dataset, (d) => { return d.close; }), d3.max(this.dataset, (d) => { return d.close; })]);
        
        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .select(".domain")

        g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Price ($)");

        g.append("path")
            .datum(this.dataset)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);
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
        this.stockSubscription = this.stockQuery.requestStock('amg', 'TIME_SERIES_DAILY').subscribe();
        this.tradeSubscription = this.stockQuery.requestTrades({stockID: ''}).subscribe((res) => {
            this. trades = res['data'].trades;

        });
        this.buildChart();
    }
}
