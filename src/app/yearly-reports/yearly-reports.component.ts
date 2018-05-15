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
            "category": "Grossory & Shopping",
            "expenditure": 500.90
        }, {
            "category": "Resturants",
            "expenditure": 301.90
        }, {
            "category": "Fuel",
            "expenditure": 200.10
        }, {
            "category": "E-Commerce",
            "expenditure": 165.10
        }, {
            "category": "Transfer to Others' Account",
            "expenditure": 1200
        }, {
            "category": "Miscellanous",
            "expenditure": 132
        }],
        "valueField": "expenditure",
        "titleField": "category",
        "outlineAlpha": 0.4,
        "depth3D": 15,
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "angle": 30,
        "export": {
          "enabled": true
        }
      } );
  }
  ngOnInit() {

  }
  ngOnDestroy() {
    if (this.chart) 
      this.AmCharts.destroyChart(this.chart);
    }
}
