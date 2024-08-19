import { Member } from './../member';
import { Component } from '@angular/core';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  members!:Member;
  email = '';
  motdepasse = '';
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router ,private fb: FormBuilder) {}

  onSubmit(): void {
    this.authService.login(this.email, this.motdepasse).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/home']);
      },
      error => {
     this.errorMessage = "email ou motdepasse invalide";
   } );
  }
}
