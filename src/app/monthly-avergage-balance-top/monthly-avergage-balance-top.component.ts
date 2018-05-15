import { Component, OnInit } from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-monthly-avergage-balance-top',
  templateUrl: './monthly-avergage-balance-top.component.html',
  styleUrls: ['./monthly-avergage-balance-top.component.css']
})
export class MonthlyAvergageBalanceTopComponent implements OnInit {
  private chart: AmChart;
  constructor(private  AmCharts:AmChartsService) { }

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("chartdivBar", {
     "theme": "light",
     "type": "serial",
   "startDuration": 2,
     "dataProvider": [{
         "month": "Jan",
         "balance":  4025,
         "color": "#FF0F00"
     }, {
         "month": "Feb",
         "balance": 2025,
         "color": "#FF6600"
     }, {
         "month": "Mar",
         "balance": 2000,
         "color": "#FF9E01"
     }, {
         "month": "Apr",
         "balance": 5000,
         "color": "#FCD202"
     }, {
         "month": "May",
         "balance": 3500,
         "color": "#F8FF01"
     }
      ],
     "valueAxes": [{
         "position": "left",
         "title": ""
     }],
     "graphs": [{
         "balloonText": "[[category]]: <b>[[value]]</b>",
         "fillColorsField": "color",
         "fillAlphas": 1,
         "lineAlpha": 0.1,
         "type": "column",
         "valueField": "balance"
     }],
     "depth3D": 20,
   "angle": 30,
     "chartCursor": {
         "categoryBalloonEnabled": false,
         "cursorAlpha": 0,
         "zoomable": false
     },
     "categoryField": "month",
     "categoryAxis": {
         "gridPosition": "start",
         "labelRotation": 90
     },
   //   "export": {
   //     "enabled": true
   //    }
 
 });
 }
  ngOnInit() {
  }
ngOnDestroy() {
    if (this.chart) 
      this.AmCharts.destroyChart(this.chart);
    }
}
