import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CategoryModel } from '../../models/category.model';
import { SandboxService } from '../../services/sandbox.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  chart: any;
  labels: any;
  data: any;
  options: any;
  colors: any;
  datasets: any;
  categories: CategoryModel[];

  constructor(private sb: SandboxService) { }

  ngOnInit() {
    const chartData = this.sb.getChartData();
    this.initChart(chartData.labels, chartData.data);

    this.categories = this.sb.getCategories();
  }

  initChart(labels, data) {
    Chart.plugins.register(ChartDataLabels);
    this.datasets = [
      {
        data,
        backgroundColor: [
          '#FE645A',
          '#2A327D',
          '#FFB039',
          '#00C689',
        ],
        borderColor: [
          '#FE645A',
          '#2A327D',
          '#FFB039',
          '#00C689',
        ],
        hoverBackgroundColor: [
          '#FE645A',
          '#2A327D',
          '#FFB039',
          '#00C689',
        ],
        datalabels: {
          color: '#fff',
          font: {
            size: 16
          }
        }
      }
    ];
    this.labels = labels;
    this.data = data;
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          formatter: function(value, context) {
            const data = context.chart.data.datasets[0].data.reduce((d, acc) => d + acc);
            return `${Math.round((value/data) * 100)}%`;
          }
        }
      }
    };
    this.colors = [
      '#FE645A',
      '#2A327D',
      '#FFB039',
      '#00C689',
    ];
  }
}
