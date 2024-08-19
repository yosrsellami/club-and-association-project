import { PresidentService } from './../president.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrl: './login-c.component.css'
})
export class LoginCComponent {
  loginForm!: FormGroup;


  constructor( private presidentservice: PresidentService,private router: Router,private fb:FormBuilder ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required,Validators.email],
      motdepasse:['',Validators.required],
    });

  }
  submitForm(){
    this.router.navigate(['/creation']);
  }


  login1(){
   this.router.navigate(['/login']);
  }
}
