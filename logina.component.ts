import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PresidentService } from '../president.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logina',
  templateUrl: './logina.component.html',
  styleUrl: './logina.component.css'
})
export class LoginAComponent {
  loginForm!: FormGroup;


  constructor( private presidentservice: PresidentService,private router: Router,private fb:FormBuilder ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required,Validators.email],
      motdepasse:['',Validators.required],
    });

  }
  submitForm(){
    
    this.router.navigate(['/integration']);
  }


  login(){
   this.router.navigate(['/logina']);
  }
}
