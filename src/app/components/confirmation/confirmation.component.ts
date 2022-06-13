import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation.component.html',
	styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
	username = '';
	orderTotal = 0;

	constructor(
		private cart: CartService,
		private userService: UserService,
		private router: Router
	) {}

	ngOnInit(): void {
		// Set properties
		const user = this.userService.getUser();
		this.username = `${user.firstName} ${user.lastName}`;
		this.orderTotal = this.cart.getCartTotal();

		// Reset services
		this.cart.resetCart();
		this.userService.resetUser();
	}

	/**
	 * @description Go to product list.
	 */
	goToProductList(): void {
		this.router.navigate(['/']);
	}
}
