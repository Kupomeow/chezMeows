import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';
import { CategoryService } from './category.service';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // ID GENERATE
  idCounter: number = 1;

  //ITEM CREATION
  thousandTrue: Item = {
    id: this.idCounter++, name: "Epée des milles vérités", description: "Une épée légendaire stocker dans une clef USB d'un giga.",
    price: 1000, img: "/assets/img/thousandSword.jpg", categories: [this.categoryService.getOne(2)],
  };
  mirrorShield: Item = {
    id: this.idCounter++, name: "Bouclier Mirroir", description: "Bouclier mirror du légendaire link, permet de renvoyer moultes sorts.",
    price: 500, img: "/assets/img/mirrorShield.png", categories: [this.categoryService.getOne(3), this.categoryService.getOne(4)]
  };

  manaPot: Item = {
    id: this.idCounter++, name: "Potion de mana", description: "Permet de récupérer modérément de la mana.",
    price: 50, img: "/assets/img/pots.jpg", categories: [this.categoryService.getOne(1), this.categoryService.getOne(6)]
  };

  items: Item[] = [this.thousandTrue, this.mirrorShield, this.manaPot];

  constructor(public categoryService: CategoryService) { }

  getAll(): Item[] {
    return this.items;
  }

  getOne(id: number): Item {
    return this.items.filter((item: Item) => {
      return item.id === id;
    })[0];
  }

  saveWithoutImg(name: string, description: string, price: number, img: string, categories: Category[]): Item {
    const item: Item = { id: this.idCounter++, name: name, description: description, price: price, img: img, categories: categories } as Item;
    this.items.push(item);
    return item;
  }
}
