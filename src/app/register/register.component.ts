import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthorizationService } from './../service/authorization.service'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
	confirmCode: boolean = false;
	codeWasConfirmed: boolean = false;
	error:string = "";
		
	constructor(private auth: AuthorizationService,	private _router: Router) {	}
	
	register(form: NgForm) {
		const email = form.value.email;
		const password = form.value.password;
		
		this.auth.register(email, password).subscribe(
			(data) => {
				this.confirmCode = true;
			}, 
			(err) => {
				this.error = "Registration Error has Occurred";
			}
		);
	}
	
	validateAuthCode(form: NgForm) {
		const code = form.value.code;
		
		this.auth.confirmAuthCode(code).subscribe(
			(data) => {
				this.codeWasConfirmed = true;
				this.confirmCode = false;
			}, 
			(err) => {
				console.log(err);
				this.error = "Confirm Authorization Error has Occurred";
			}
		);
	}
	
	ngOnInit(): void {
		
	}

}
