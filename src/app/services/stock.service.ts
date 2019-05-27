import { Injectable } from '@angular/core';
import { Stock } from '../model/stock.model';
import { ItemService } from './item.service';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  // ID GENERATOR
  idCounter: number = 0;

  // STOCK CREATION
  stockManaPot: Stock = {id: ++this.idCounter, stock: 40, item: this.itemService.getOne(3)};
  stockThousandVerity: Stock = {id: ++this.idCounter, stock: 1, item: this.itemService.getOne(1)};
  stockMirrorShield: Stock = {id: ++this.idCounter, stock: 5, item: this.itemService.getOne(2)};

  stocks: Stock[] = [this.stockThousandVerity, this.stockMirrorShield, this.stockManaPot];

  constructor(public itemService: ItemService) { }

  getAll(): Stock[] {
    return this.stocks;
  }

  getOne(id: number): Stock {
    return this.stocks.filter((stock: Stock) => {
      return stock.id === id;
    }) [0];
  }

  save(stock: number, item: Item): void {
    const newStock: Stock = {id: this.idCounter++, stock: stock, item: item};
    this.stocks.push(newStock);
  }
}
