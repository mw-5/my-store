import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
	@Input() product: Product;
	selectableAmounts: number[] = [];
	maxAmount = 10;
	@Output() amountUpdated: EventEmitter<number> = new EventEmitter();

	constructor(private cart: CartService) {
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

	ngOnInit(): void {
		// Build array for selectable amounts
		for (let i = 1; i <= this.maxAmount; i++) {
			this.selectableAmounts.push(i);
		}
	}

	/**
	 * @description Fire event to inform
	 * that amount of product has changed.
	 * @param {number} newAmount - The selected amount
	 */
	onChangeAmount(newAmount: number): void {
		this.amountUpdated.emit(newAmount);
	}

	/**
	 * @description Add product to shopping cart.
	 */
	addToCart(): void {
		this.cart.addProduct(this.product);
		alert('Added to cart.');
	}
}
