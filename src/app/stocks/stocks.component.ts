import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock.model';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks: Stock[];

  constructor(public stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getAll();
  }

}
