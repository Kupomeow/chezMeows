import { Category } from './category.model';
import { Stock } from './stock.model';

export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    img: string;
    categories: Category[];
}