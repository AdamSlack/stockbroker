import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { MainPageComponent } from './main-page/main-page.component';
import {StockQueryService} from './services/stock-query.service';
import { StockViewerComponent } from './stock-viewer/stock-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MainPageComponent,
    StockViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
