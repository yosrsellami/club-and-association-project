import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresidentService } from '../president.service';
import { Secretaire } from '../secretaire';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'node:console';

@Component({
  selector: 'app-login',
  templateUrl: './login-s.component.html',
  styleUrls: ['./login-s.component.css']
})
export class LoginSComponent implements OnInit {

  loginForm!: FormGroup;

secretaire:Secretaire={
  id: 0, nom: "",
  email:"",
  motdepasse: "",
  nometablissement: ""
}
  constructor( private presidentservice: PresidentService,private router: Router,private fb:FormBuilder ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required,Validators.email],
      motdepasse:['',Validators.required],
    });

  }





  login1(){
   this.router.navigate(['/login']);
  }
}
