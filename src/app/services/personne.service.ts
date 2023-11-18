import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne.model'; 

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }

  ajouterPersonne(personne: Personne): Observable<any> {
    // Ajoutez les en-têtes pour accepter le JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post<any>('http://localhost:7090/personnes/savePersonne', personne, httpOptions);
  }
}