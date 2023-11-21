import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Personne } from 'src/app/models/personne.model';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-delete-personne',
  templateUrl: './delete-personne.component.html',
  styleUrls: ['./delete-personne.component.css']
})
export class DeletePersonneComponent {
  message: string = '';
  idpersonne: number | undefined;

  personne: Personne = {
    // Laissez la date en tant que chaîne 
    idPersonne: 0,
    nomPersonne: '',
    prenomPersonne: '',
    agePersonne: 0,
    datePersonne: ''
  };

  constructor(private personneService: PersonneService) { }
  
  deletePersonne(): void {
    if (this.personne.idPersonne !== undefined) {
      this.personneService.deletePersonne(this.personne.idPersonne).subscribe(
        (response: string) => {
          console.log('Personne supprimée avec succès !', response);
          this.message = response;  // Stockez le message dans la propriété du composant
          // Traitez la réponse si nécessaire
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la suppression de la personne :', error);
          this.message = 'Erreur lors de la suppression de la personne';
  
          if (error instanceof HttpErrorResponse) {
            console.error('Status:', error.status);
            console.error('Message:', error.error);
          }
          // Traitez l'erreur si nécessaire
        }
      );
    } else {
      console.error('ID de personne non défini. Impossible de supprimer.');
    }
  }
}
