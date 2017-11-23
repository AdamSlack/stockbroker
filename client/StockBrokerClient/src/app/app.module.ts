import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { MainPageComponent } from './main-page/main-page.component';
import {StockQueryService} from './services/stock-query.service';
import { StockViewerComponent } from './stock-viewer/stock-viewer.component';
import { TradeViewerComponent } from './trade-viewer/trade-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MainPageComponent,
    StockViewerComponent,
    TradeViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StockQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
