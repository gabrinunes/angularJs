import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { BackandService } from 'angular2bknd-sdk';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



    ngOnInit() {
    }

    email: string = '';
    firstName: string = '';
    lastName: string = '';
    Password: string = '';
    confirmPassword: string = '';

    constructor(private backandService: BackandService) {


    }

    public signUp() {
        if (this.Password != this.confirmPassword) {
            alert('Passwords should match');
            return;
        }
        this.backandService.signup(this.email, this.Password, this.confirmPassword, this.firstName, this.lastName);

        alert('Sign up succeeded');
        this.email = this.Password = this.confirmPassword = this.firstName = this.lastName = '';
    }

        //public socialSignin(provider) {
        //var $obs = this.backandService.socialSignin(provider);
        //$obs.subscribe(                
        //data => {
        //   console.log('Sign up succeeded with:' + provider);           
        // },
        //err => {
        //    this.backandService.logError(err)
        //  },
        //    () => console.log('Finish Auth'));
        //}

        // public socialSignup(provider) {
        //  var $obs = this.backandService.socialSignup(provider);
        //   $obs.subscribe(                
        // data => {
        // console.log('Sign up succeeded with:' + provider);           
        //  },
        // err => {
        //     this.backandService.logError(err)
        // },
        // () => console.log('Finish Auth'));
        //}

        // public inAppSocial(provider) {
        //   var $obs = this.backandService.inAppSocial(provider);
        //   $obs.subscribe(                
        //       data => {
        //           console.log('Sign up succeeded with:' + provider);           
        //       },
        //       err => {
        //           this.backandService.logError(err)
        //       },
        //       () => console.log('Finish Auth'));
        // }
    }
