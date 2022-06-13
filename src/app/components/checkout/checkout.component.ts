import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
	user: User;

	constructor(
		private userService: UserService,
		private cart: CartService,
		private router: Router
	) {
		// Init user for type safety
		this.user = {
			firstName: '',
			lastName: '',
			address: '',
			creditCardNumber: '',
		};
	}

	ngOnInit(): void {
		this.user = this.userService.getUser();
	}

	/**
	 * @description Submit the checkout form and cart.
	 */
	onSubmit(): void {
		// Add logic here to send cart and user data to your backend

		this.router.navigate(['/confirmation']);
	}
}
