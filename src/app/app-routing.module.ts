import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterPersonneComponent } from './components/Personne/ajouter-personne/ajouter-personne.component';
import { updatePersonneComponent } from './components/Personne/update-personne/update-personne.component';
import { DeletePersonneComponent } from './components/Personne/delete-personne/delete-personne.component';
import { ListePersonnesComponent } from './components/Personne/liste-personnes/liste-personnes.component';

const routes: Routes = [
  {path : "ajouterPersonne" , component :AjouterPersonneComponent},
  {path : "updatePersonne" , component : updatePersonneComponent },
  {path : "deletePersonne" , component : DeletePersonneComponent },
  {path : "listePersonne" , component : ListePersonnesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
