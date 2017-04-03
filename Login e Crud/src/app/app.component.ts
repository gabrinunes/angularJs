import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BackandService} from 'angular2bknd-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

	constructor(private router: Router, private backandService:BackandService){
		this.backandService.setAppName('projeto48');
        this.backandService.setSignUpToken('145fe44d-8baa-4731-8dbc-20c4c18a3174');
        this.backandService.setAnonymousToken('9ca66b10-cd50-40c3-a8fa-dafc5b47e913');
	}

	public navigate(url) {
		this.router.navigate([url]);
	}
}
