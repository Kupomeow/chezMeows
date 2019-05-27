import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../model/stock.model';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  @Input() stock: Stock;
  @Input() categories: Category[];
  constructor() { }

  ngOnInit() {}

}
