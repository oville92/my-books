import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthorizationService } from './../service/authorization.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	emailVerificationMessage: boolean = false;

	constructor(private auth: AuthorizationService, private _router: Router) { }

	onSubmit(form: NgForm) {
		
		const email = form.value.email;
		const password = form.value.password;
		
		console.log("IN onSubmit");
		
		this.auth.signIn(email, password).subscribe(
			(data) => {
				console.log("onSubmit ok");
				this._router.navigateByUrl('/');
			},
			(err) => {
				console.log("onSubmit nok");
				this.emailVerificationMessage = true;
			}
		);
	}

	ngOnInit(): void {
	}

}
