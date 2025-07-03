import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  NgApexchartsModule,
} from 'ng-apexcharts';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  labels: string[];
};

@Component({
  selector: 'app-bandwidth-usage',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    NgApexchartsModule,
  ],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class BandwidthUsageComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  
  // Card data
  title = 'Total Number of PO';
  titlePI = 'Total Number of PI';
  titleCustomer = 'Customers';
  pocount = 47;
  picount = 40;
  customersCount = 32;

  // Chart options - make this public
  public columnChartOptions: Partial<ChartOptions>;

  constructor() {
    // Initialize chart options
    this.columnChartOptions = {
      series: [
        {
          name: 'A',
          data: [400, 120, 140, 130, 200, 150, 140, 130, 300, 120, 140, 150],
        },
        {
          name: 'B',
          data: [200, 188, 242, 300, 200, 400, 230, 300, 200, 400, 180, 300],
        },
        {
          name: 'C',
          data: [100, 200, 400, 600, 100, 200, 400, 370, 240, 200, 280, 330],
        },
      ],
      chart: {
        fontFamily: 'DM Sans,sans-serif',
        foreColor: '#a1aab2',
        height: 300,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '40%',
          barHeight: '40%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 3,
      },
      stroke: {
        curve: 'straight',
        width: '0',
      },
      colors: ['#398bf7', '#06d79c', '#ffb22b'],
      legend: {
        show: true,
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: 'rgba(0,0,0,0.1)',
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }
}