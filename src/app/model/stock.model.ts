import { Item } from './item.model';

export interface Stock {
    id: number;
    stock: number;
    item: Item;
}