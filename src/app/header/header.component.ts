import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from './../service/authorization.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(public _auth: AuthorizationService, private _router: Router) { }

	doLogout() {
		this._auth.logout();
		this._router.navigateByUrl('/login');
	}

	ngOnInit(): void {
	}

}
