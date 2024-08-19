import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from './demande';
import { DemandeA } from './demande-a';
import { Reseau } from './reseau';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

 private baseurl = "http://localhost:8083/demandec/add";
 private baseurl1 = "http://localhost:8083/demandea/add";
 private baseurl2="http://localhost:8083/reseau/add";
 private baseurl3="http://localhost:8083/demandea/delete"
 private baseurl4="http://localhost:8083/demandec/delete"
 private baseurl5="http://localhost:8083/club/add"

  constructor(private http: HttpClient) { }
  public getAlldemande(): Observable<Demande[]>
    {
      return this.http.get<Demande[]>("http://localhost:8083/demandec/demandes_");
    }
    public getAlldemandeA(): Observable<DemandeA[]>
    {
       return this.http.get<DemandeA[]>("http://localhost:8083/demandea/demandes_");
    }
    createdemande(demande: Demande): Observable<Demande> {
      return this.http.post<Demande>(this.baseurl, demande);
    }
    createdemandeA(demande: DemandeA): Observable<DemandeA> {
      return this.http.post<DemandeA>(this.baseurl1, demande);
    }
    validerdemande(demande:DemandeA):Observable<any> {
      return this.http.post<DemandeA>(this.baseurl2, demande);
    }

  supprimerDemande(id: number): Observable<any> {
    const url = `${this.baseurl3}/${id}`;
    return this.http.delete(url);
  }
  public getAllreseau(): Observable<Reseau[]>
  {
     return this.http.get<Reseau[]>("http://localhost:8083/reseau/reseau_");
  }
  validerclub(demande:Demande):Observable<any> {
    return this.http.post<Demande>(this.baseurl5, demande);
  }
  supprimerclub(id:Number): Observable<any> {
    const url = `${this.baseurl4}/${id}`;
    return this.http.delete(url);
  }

}
