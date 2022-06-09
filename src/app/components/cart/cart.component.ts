import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
	cart: Product[] = [];

	constructor(private cartService: CartService) {}

	ngOnInit(): void {
		this.cart = this.cartService.getProducts();
	}
}
