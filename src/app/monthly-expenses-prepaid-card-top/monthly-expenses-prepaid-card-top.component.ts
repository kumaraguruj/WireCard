import { Component, OnInit } from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";
import {InformationService } from '../Common/information.service';
@Component({
  selector: 'app-monthly-expenses-prepaid-card-top',
  templateUrl: './monthly-expenses-prepaid-card-top.component.html',
  styleUrls: ['./monthly-expenses-prepaid-card-top.component.css']
})
export class MonthlyExpensesPrepaidCardTopComponent implements OnInit {
  private chart: AmChart;
  constructor(private  AmCharts:AmChartsService) 
  { 
    //this.LinksFlag=InformationService.UserType==='CreditUser'?false:true; 
  }

  ngAfterViewInit() {
    
    this.chart = this.AmCharts.makeChart("chartdivClusteredBar", {
      "type": "serial",
         "theme": "none",
      "categoryField": "month",
      "rotate": true,
      "startDuration": 1,
      "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
      },
      "trendLines": [],
      "graphs": [
        {
          "balloonText": "Expenses In USD:[[value]]",
          "fillAlphas": 0.9,
          "id": "AmGraph-1",
          "lineAlpha": 0.5,
          "title": "Income",
          "type": "column",
          "valueField": "ExpensesInUSD"
        },
        {
          "balloonText": "Expenses In SGD:[[value]]",
          "fillAlphas": 0.9,
          "id": "AmGraph-2",
          "lineAlpha": 0.5,
          "title": "Expenses",
          "type": "column",
          "valueField": "ExpensesInSGD"
        },
        {
          "balloonText": "Expenses In BHD:[[value]]",
          "fillAlphas": 0.9,
          "id": "AmGraph-3",
          "lineAlpha": 0.5,
          "title": "Expenses",
          "type": "column",
          "valueField": "ExpensesInBHD"
        }
      ],
      "guides": [],
      "valueAxes": [
        {
          "id": "ValueAxis-1",
          "position": "top",
          "axisAlpha": 0
        }
      ],
      "allLabels": [],
      "balloon": {},
      "titles": [],
      "dataProvider": [
        {
            "month": "Feb",
            "ExpensesInUSD": 300.2,
            "ExpensesInSGD": 205.8,
            "ExpensesInBHD": 150.8,
        },
        {
            "month": "Mar",
            "ExpensesInUSD": 360.2,
            "ExpensesInSGD": 260.8,
            "ExpensesInBHD": 200.8,
        },
        {
            "month": "Apr",
            "ExpensesInUSD": 405.2,
            "ExpensesInSGD": 308.8,
            "ExpensesInBHD": 400.8,
        }
        
    ],
        // "export": {
        //   "enabled": true
        //  }
    
    });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.chart) 
      this.AmCharts.destroyChart(this.chart);
    }
}
