import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterPersonneComponent } from './components/ajouter-personne/ajouter-personne.component';

const routes: Routes = [
  {path : "ajouterPersonne" , component :AjouterPersonneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
