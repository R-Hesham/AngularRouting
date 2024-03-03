import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ProductList } from '../models/product-list';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] | undefined;
  constructor() {
    this.products = ProductList;
  }

  getAll(): IProduct[] | undefined {
    return this.products;
  }

  getById(id: number): IProduct | undefined {
    return this.products?.find((p) => p.id == id);
  }

  counter: number = 20;
  add(item: IProduct) {
    var product = { ...item };
    product.id = ++this.counter;

    this.products?.push(product);
  }
}
