import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterPersonneComponent } from './components/Personne/ajouter-personne/ajouter-personne.component';
import { HttpClientModule } from '@angular/common/http';
import { updatePersonneComponent } from './components/Personne/update-personne/update-personne.component';
import { DeletePersonneComponent } from './components/Personne/delete-personne/delete-personne.component';
import { ListePersonnesComponent } from './components/Personne/liste-personnes/liste-personnes.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GraphComponent } from './components/Personne/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterPersonneComponent,
    updatePersonneComponent,
    DeletePersonneComponent,
    ListePersonnesComponent,
    GraphComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
