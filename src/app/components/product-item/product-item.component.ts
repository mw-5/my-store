import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
	@Input() product: Product;
	selectableAmounts: number[] = [];
	maxAmount = 10;

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

	ngOnInit(): void {
		// Build array for selectable amounts
		for (let i = 1; i <= this.maxAmount; i++) {
			this.selectableAmounts.push(i);
		}
	}
}
