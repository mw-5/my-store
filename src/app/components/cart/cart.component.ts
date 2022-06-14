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
	orderTotal = 0;
	isEmpty = true;

	constructor(private cartService: CartService) {}

	ngOnInit(): void {
		this.cart = this.cartService.getProducts();
		this.orderTotal = this.cartService.getCartTotal();
		this.setCartState();
	}

	/**
	 * @description Handle new amount of product.
	 * @param {Product} product - The product to be updated
	 * @param {number} newAmount - The new amount
	 */
	onAmountUpdated(product: Product, newAmount: number): void {
		// Find position of product in cart
		const index = this.cart.findIndex(
			(p) => p.id == product.id && p.amount == product.amount
		);
		if (index != -1) {
			if (newAmount == 0) {
				// Remove product from cart
				this.cart.splice(index, 1);
				alert('Product removed from cart.');
			} else {
				// Update amount in cart
				this.cart[index].amount = newAmount;
			}

			this.cartService.updateCartCount();
			this.orderTotal = this.cartService.getCartTotal();
			this.setCartState();
		}
	}

	/**
	 * @description Check whether cart is empty
	 * and set state accordingly.
	 */
	setCartState(): void {
		if (this.cart.length > 0) {
			this.isEmpty = false;
		} else {
			this.isEmpty = true;
		}
	}
}
