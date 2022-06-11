import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
	user: User;

	constructor(private userService: UserService) {
		// Init user for type safety
		this.user = {
			firstName: '',
			lastName: '',
			address: '',
			creditCardNumber: 0,
		};
	}

	ngOnInit(): void {
		this.user = this.userService.getUser();
	}

	/**
	 * @description Submit the checkout form and cart.
	 */
	onSubmit(): void {
		// TODO: implement this method
	}
}
