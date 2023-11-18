import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne.model'; 

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }

  ajouterPersonne(personne: Personne): Observable<string> {
    // Ajoutez les en-têtes pour accepter le JSON
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      responseType: 'text' as 'json' // Indiquez que vous attendez une réponse de type texte
    };

    return this.http.post<string>('http://localhost:7090/personnes/savePersonne', personne, httpOptions);
  }
}