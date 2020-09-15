import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
	
	cognitoUser : any;
	
	constructor() { }
	
	register(email, password) {
		const attributeList = [];
		
		return Observable.create(observer => {
			
			if (email != "test" || password != "test") {
				console.log("signUp error");
				observer.error("Bad Credential");
			} else {
				this.cognitoUser = {"name" : "test"};
				console.log("signUp success", this.cognitoUser);
				observer.next(this.cognitoUser);
				observer.complete();
			}
		});
	}
	
	signIn(email, password) { }
	
	isLoggedIn() { }
	
	confirmAuthCode(code) { 
		return Observable.create(observer => {
			
			if (code != "test") {
				console.log("bad code");
				observer.error("Bad validation code");
			} else {
				console.log("confirmAuthCode() success");
				observer.next("Cconfirmation code ok");
				observer.complete();
			}
		});
	}
	
	getAuthenticateUser() { }
	
	logout() { }
}
