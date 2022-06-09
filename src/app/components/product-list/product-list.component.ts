import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
	products: Product[] = [];

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		// Fetch products from service
		this.productService.getProducts().subscribe((data) => {
			this.products = data;
		});
	}

	/**
	 * @description Handle amountUpdated event by setting
	 * the current amount of the product to the new amount.
	 * @param {Product} product - The product to be updated
	 * @param {number} newAmount - The new amount of the product
	 */
	updateAmount(product: Product, newAmount: number): void {
		product.amount = newAmount;
		alert(`${product.name} new amount: ${product.amount}`);
	}
}
