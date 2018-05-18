import { Component, OnInit } from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";

 

@Component({
  selector: 'app-yearly-reports',
  templateUrl: './yearly-reports.component.html',
  styleUrls: ['./yearly-reports.component.css']
})
export class YearlyReportsComponent implements OnInit {

  private chart: AmChart;

  constructor(private  AmCharts:AmChartsService) { }
  ngAfterViewInit() {
    
    this.chart = this.AmCharts.makeChart( "chartdiv", {
        "type": "pie",
        "theme": "none",
        "dataProvider": [{
            "category": "Shopping",
            "expenditure": 9500
        }, {
            "category": "Resturants",
            "expenditure": 9000
        }, {
            "category": "Fuel",
            "expenditure": 2500
        }, {
            "category": "E-Commerce",
            "expenditure": 7000
        }, {
            "category": "Transfer Money",
            "expenditure": 9800
        }, {
            "category": "Miscellanous",
            "expenditure": 4500
        }],
        "valueField": "expenditure",
        "titleField": "category",
        "outlineAlpha": 0.4,
        "depth3D": 15,
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "angle": 30,
        // "export": {
        //   "enabled": true
        // }
      } );
  }
  ngOnInit() {

  }
  ngOnDestroy() {
    if (this.chart) 
      this.AmCharts.destroyChart(this.chart);
    }
}
