import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  Store } from '@ngrx/store';
import { State } from '../state/app.state';

import { AuthService } from './auth.service';
import { getMaskUser } from './UserState/user.reducer';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';

  maskUserName: boolean;

  constructor(private store:Store<State>, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.store.select(getMaskUser).subscribe(
      maskUserName => {
           this.maskUserName = maskUserName;
        
    });



  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(): void {
    this.store.dispatch(
      {
        type: '[Users] mask user'
      }
    )
    

    // this.maskUserName = !this.maskUserName;
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    }
  }
}
