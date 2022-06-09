import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-product-item-detail',
	templateUrl: './product-item-detail.component.html',
	styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
	product: Product;
	selectableAmounts: number[] = [];

	constructor(
		private productService: ProductService,
		private route: ActivatedRoute
	) {
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
		this.loadProduct();
		this.InitAmounts(10);
	}

	/**
	 * @description Load product based on id in url.
	 */
	private loadProduct(): void {
		let id: number;
		// Extract product id from url
		this.route.params.subscribe((params) => (id = params['id']));

		// Get products from service
		this.productService.getProducts().subscribe((products) => {
			// Set product with matching id
			const product = products.find((p) => p.id == id);
			if (product !== undefined) {
				this.product = product;
			}
		});
	}

	/**
	 * @description Init array for selectable amounts.
	 * @param {number} maxAmount - The maximum amount
	 * selectable
	 */
	private InitAmounts(maxAmount: number): void {
		for (let i = 1; i <= maxAmount; i++) {
			this.selectableAmounts.push(i);
		}
	}
}
