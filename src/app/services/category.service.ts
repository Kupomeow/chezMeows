import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // ID GENERATOR
  idCounter: number = 1;

  // CATEGORY CREATION
  pot: Category = {id: this.idCounter++, name: "Pot"};
  sword: Category = {id: this.idCounter++, name: "Sword"};
  shield: Category = {id: this.idCounter++, name: "Shield"};
  armor: Category = {id: this.idCounter++, name: "Armor"};
  food: Category = {id: this.idCounter++, name: "Food"};
  buff: Category = {id: this.idCounter++, name: "Buff"};

  categories: Category[] = [this.pot, this.sword, this.shield, this.armor, this.food, this.buff];

  constructor() { }

  getAll(): Category[] {
    return this.categories;
  }

  getOne(id: number): Category {
    return this.categories.filter((category: Category) => {
      return category.id === id;
    }) [0];
  }

  // save(name: string): Category {
  //   const category: Category = {id: this.idCounter, name: name} as Category;
  //   this.categories.push(category);
  //   return category;
  // }
}
