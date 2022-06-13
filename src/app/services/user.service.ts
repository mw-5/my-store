import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	user: User;

	constructor() {
		// Init user for type safety
		this.user = {
			firstName: '',
			lastName: '',
			address: '',
			creditCardNumber: '',
		};
	}

	/**
	 * @description Get the user.
	 * @returns - The user
	 */
	getUser(): User {
		return this.user;
	}

	/**
	 * @description Remove cached user data.
	 */
	resetUser(): void {
		this.user.firstName = '';
		this.user.lastName = '';
		this.user.address = '';
		this.user.creditCardNumber = '';
	}
}
