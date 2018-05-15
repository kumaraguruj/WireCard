
import { Component, OnInit } from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";


// import AmCharts from '../../../typings/globals/AmCharts';

@Component({
  selector: 'app-monthly-reports',
  templateUrl: './monthly-reports.component.html',
  styleUrls: ['./monthly-reports.component.css']
 
})
export class MonthlyReportsComponent implements OnInit {
  private chart: AmChart;
  constructor(private  AmCharts:AmChartsService) {
    
    
  }
  ngAfterViewInit() {
     this.chart = this.AmCharts.makeChart("chartdiv", {
      "theme": "light",
      "type": "serial",
    "startDuration": 2,
      "dataProvider": [{
          "month": "Jan",
          "visits":  4025,
          "color": "#FF0F00"
      }, {
          "month": "Feb",
          "visits": 2025,
          "color": "#FF6600"
      }, {
          "month": "Mar",
          "visits": 2000,
          "color": "#FF9E01"
      }, {
          "month": "Apr",
          "visits": 5000,
          "color": "#FCD202"
      }, {
          "month": "May",
          "visits": 3500,
          "color": "#F8FF01"
      }
       ],
      "valueAxes": [{
          "position": "left",
          "title": "Monthly Average Balance"
      }],
      "graphs": [{
          "balloonText": "[[category]]: <b>[[value]]</b>",
          "fillColorsField": "color",
          "fillAlphas": 1,
          "lineAlpha": 0.1,
          "type": "column",
          "valueField": "visits"
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
