import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
	@Input() product: Product;

	constructor() {
		// Init product for type safety
		this.product = {
			id: 0,
			name: '',
			price: 0,
			url: '',
			description: '',
			amount: 1,
		};
	}

	ngOnInit(): void {}
}
