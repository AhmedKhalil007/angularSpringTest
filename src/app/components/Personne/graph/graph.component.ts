import { Component, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility';
import HC_exporting from 'highcharts/modules/exporting';
import { PersonneService } from 'src/app/services/personne.service';

// Activate the accessibility module
accessibility(Highcharts);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  dataFetched: boolean = false;

  constructor(private personneService: PersonneService) {}
  

  fetchDataAndRenderChart(): void {
    this.personneService.getAgeDistribution().subscribe((data: AgeDistributionEntry[]) => {
      console.log(data); // Log data to the console
      if (data && data.length > 0) {
        this.chartOptions = {
          chart: {
            type: 'column',
          },
          title: {
            text: 'Distribution des âges',
          },
          xAxis: {
            categories: data.map((entry) => entry.age.toString()), // Convert age to string for categories
          },
          yAxis: {
            title: {
              text: 'Nombre de personnes',
            },
          },
          series: [
            {
              type: 'column',
              name: 'Nombre de personnes',
              data: data.map((entry) => entry.count),
            },
          ],
          exporting: {
            enabled: true,
          },
        };
        console.log('Chart options:', this.chartOptions);
        this.dataFetched = true;
      } else {
        console.warn('Aucune donnée à afficher dans le graphique.');
      }
    });
  }
}
interface AgeDistributionEntry {
  age: number;
  count: number;
  ageRange: string;
  personCount: number;
}