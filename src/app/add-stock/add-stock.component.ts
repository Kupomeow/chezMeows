import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryService } from '../services/category.service';
import { ItemService } from '../services/item.service';
import { StockService } from '../services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  nameForm = '';
  priceForm = 0;
  descriptionForm = '';
  imgForm = '';
  quantityForm = 0;
  categoryForm: Category;

  categories: Category[];

  constructor(public categoryService: CategoryService, public itemService: ItemService, public stockService: StockService, public router: Router) { }

  ngOnInit() {
    this.categories = this.categoryService.getAll();
  }

  saveNewItem(): void {
    this.stockService.save(this.quantityForm, this.itemService.saveWithoutImg(this.nameForm, this.descriptionForm, this.priceForm, this.imgForm, [this.categoryForm]));

    // console.log(this.quantityForm, this.itemService.saveWithoutImg(this.nameForm, this.descriptionForm, this.priceForm, [this.categoryForm]));
    // console.log(this.stockService.save(this.quantityForm, this.itemService.saveWithoutImg(this.nameForm, this.descriptionForm, this.priceForm, [this.categoryForm])));
    console.log(this.stockService.getAll());
    this.router.navigate(['home']);
  }

}
