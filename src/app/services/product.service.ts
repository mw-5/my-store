import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	constructor(private http: HttpClient) {}

	/**
	 * @description Get the products from the backend.
	 * @returns {Observable<Product[]>} - The stream of fetched products
	 */
	getProducts(): Observable<Product[]> {
		// Fetch data
		const observable = this.http.get<Product[]>('../../assets/data.json');

		// Set amount to 1
		return observable.pipe<Product[]>(
			map((products) =>
				products.map((product) => {
					product.amount = 1;
					return product;
				})
			)
		);
	}
}
