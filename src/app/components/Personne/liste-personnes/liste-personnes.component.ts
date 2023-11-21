import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/personne.model';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.css']
})
export class ListePersonnesComponent implements OnInit {
  personnes: Personne[] = [];

  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.loadPersonnes();
  }

  loadPersonnes(): void {
    this.personneService.listePersonne().subscribe(
      (data: Personne[]) => {
        this.personnes = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des personnes :', error);
        // Gérez l'erreur si nécessaire
      }
    );
  }
}
