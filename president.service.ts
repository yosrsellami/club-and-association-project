import { Secretaire } from './secretaire';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Presidentc } from './presidentc';
import { Observable } from 'rxjs';
import { PresidentA } from './presidenta';

@Injectable({
  providedIn: 'root'
})
export class PresidentService {
  apiurl="http://localhost:8083/PresidentC/add"
  loginurl="http://localhost:8083/PresidentC/login"
  apiurl1="http://localhost:8083/PresidentA/add"
  loginurl1="http://localhost:8083/PresidentA/login"
  apiurl2="http://localhost:8083/secretaire/add"
  loginurl2="http://localhost:8083/secretaire/login"

  constructor(private http:HttpClient) { }
  createpresidentc(presidentc: Presidentc): Observable<Presidentc> {
    return this.http.post<Presidentc>(this.apiurl, presidentc);
  }
  login(loginRequest:any): Observable<any> {
    return this.http.post(this.loginurl +'login', loginRequest)
}
createpresidenta(presidenta: PresidentA): Observable<PresidentA> {
  return this.http.post<PresidentA>(this.apiurl1, presidenta);
}
loginA(loginRequest:any): Observable<any> {
  return this.http.post(this.loginurl1 +'login', loginRequest)
}
createsecretaire(secretaire: Secretaire): Observable<Secretaire> {
  return this.http.post<Secretaire>(this.apiurl2, secretaire);
}

loginS(secretaire:Secretaire): Observable<any> {
  return this.http.post("http://localhost:8083/secretaire/login",secretaire);
}
}
