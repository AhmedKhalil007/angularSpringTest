import { Component } from '@angular/core';
import { PersonneService } from 'src/app/services/personne.service'; 
import { NgForm } from '@angular/forms';
import { Personne } from 'src/app/models/personne.model'; 
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ApiResponse } from 'src/app/api/api-response.model';


@Component({
  selector: 'app-ajouter-personne',
  templateUrl: './ajouter-personne.component.html',
  styleUrls: ['./ajouter-personne.component.css']
})
export class AjouterPersonneComponent {
  message: string = '';


  personne: Personne = {
    nomPersonne: '',
    prenomPersonne: '',
    agePersonne: 0,
    datePersonne: '' // Laissez la date en tant que chaîne
  };
  datePipe: any;

  constructor( private personneService: PersonneService) { }
  

  ajouterPersonne(): void {
   

    this.personneService.ajouterPersonne(this.personne).subscribe(
      (response: ApiResponse) => {
        console.log('Personne ajoutée avec succès !', response.message);
        this.message = response.message;  // Stockez le message dans la propriété du composant
        // Traitez la réponse si nécessaire
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de l\'ajout de la personne :', error);
        this.message = 'Erreur lors de l\'ajout de la personne';

        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Message:', error.error);
        }
        // Traitez l'erreur si nécessaire
      }
    );
  }
}