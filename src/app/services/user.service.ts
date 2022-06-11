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
			creditCardNumber: 0,
		};
	}
}
