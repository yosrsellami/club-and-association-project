import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8083/authentication/loginmembre';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, motdepasse: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        motdepasse,
      },
      httpOptions
    );
  }


}
