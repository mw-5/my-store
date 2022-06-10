import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
	@Input() product: Product;
	@Output() amountUpdated: EventEmitter<number> = new EventEmitter();

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

	/**
	 * @description Fire event to inform
	 * that amount of product has changed.
	 * @param {number} newAmount - The selected amount
	 */
	onChangeAmount(newAmount: number): void {
		// Limit input to valid entry
		if (newAmount < 0) {
			newAmount = 0;
		} else if (newAmount > 10) {
			newAmount = 10;
		}

		// Set new amount of product again
		// in case input was invalid
		this.product.amount = newAmount;

		this.amountUpdated.emit(newAmount);
	}
}
