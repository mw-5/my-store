import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /**
   * @description Represents the shopping cart.
   */
  cart: Product[] = [];

  constructor() { }
}
