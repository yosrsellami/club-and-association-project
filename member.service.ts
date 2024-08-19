import { Club } from './club';
// member.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  checkDuplicate(nom: any, email: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8083/membre_club/add';
  private apiurl1="http://localhost:8083/club/nom"
  private loginurl="http://localhost:8083/membre_club/login";
  private baseurl="http://localhost:8083/club/clubs_"
  private baseurl4="http://localhost:8083/membre_club/update"
  private baseurl3="http://localhost:8083/membre_club/membres_"
  private apiurl="http://localhost:8083/club/clubs"
  private nomUrL="http://localhost:8083/membre_club/nom"
  private baseurl5="http://localhost:8083/membre_club/delete"
  private baseurl6="http://localhost:8083/club/genre"
   params = new HttpParams().set('id', '3');


  constructor(private http: HttpClient) { }

  createMember(membre: Member): Observable<any> {
    return this.http.post(this.apiUrl , membre);
  }
  public getAllmembers(): Observable<Member[]>
    {
      return this.http.get<Member[]>("http://localhost:8083/membre_club/members_");
    }
  public getAllclubs(): Observable<Club[]>
    {
      return this.http.get<Club[]>("http://localhost:8083/club/clubs_");
    }

  public addProduit(club: Club): Observable<object> {
    return this.http.post<Club[]>(`${this.baseurl}`, club);
  }
  login(email: String, motdepasse: String): Observable<any> {
    return this.http.post<any>(this.loginurl, { email, motdepasse }).pipe(
      map(response => {

        return response;
      })
    );
  }

getMember(id: Number): Observable<Member> {
  return this.http.get<Member>(`${this.baseurl3}/${id}`);
}
updateMember(id: Number, member: Member): Observable<Member> {
  return this.http.put<Member>(`${this.baseurl4}/${id}`, member);
}

supprimermembre(id: number): Observable<any> {
  const url = `${this.baseurl5},{ params }`;
  return this.http.delete(url).pipe(
    catchError(error => {
      console.error('Error deleting member:', error);
      return throwError(error);
    })
  );
}

getClubsByEtablissement(nomduetablissement: string): Observable<Club[]> {
  return this.http.get<Club[]>(`${this.apiurl1}/${nomduetablissement}`);
}
getUser(nom: string): Observable<Member> {
  return this.http.get<Member>(`${this.nomUrL}/${nom}`);
}
getClubsByGenre(genre: string): Observable<Club[]> {
  return this.http.get<Club[]>(`${this.baseurl6}/${genre}`);
}
}
