import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne.model'; 

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }

  ajouterPersonne(personne: Personne): Observable<any> {
    return this.http.post<any>('http://localhost:7090/personnes/savePersonne', personne);
  }
  
}