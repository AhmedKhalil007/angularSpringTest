import { Component } from '@angular/core';
import { PersonneService } from 'src/app/services/personne.service'; 
import { NgForm } from '@angular/forms';
import { Personne } from 'src/app/models/personne.model'; 
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class updatePersonneComponent {
  message: string = '';

  personne: Personne = {
    idPersonne:0,
    nomPersonne: '',
    prenomPersonne: '',
    agePersonne: 0,
    datePersonne: '' // Laissez la date en tant que chaîne
  };

  constructor(private personneService: PersonneService) { }
  
  updatePersonne(): void {
    this.personneService.updatePersonne(this.personne).subscribe(
      (response: string) => {
        console.log('Personne modifié avec succès !', response);
        this.message = response;  // Stockez le message dans la propriété du composant
        // Traitez la réponse si nécessaire
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la mise à jour de la personne :', error);
        this.message = 'Erreur lors de la mise à jour de la personne :'

        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Message:', error.error);
        }
        // Traitez l'erreur si nécessaire
      }
    );
  }
}