import { Component, OnInit } from '@angular/core';
import { AmChartsService,AmChart } from "@amcharts/amcharts3-angular";
@Component({
  selector: 'app-expenses-by-categroy-top',
  templateUrl: './expenses-by-categroy-top.component.html',
  styleUrls: ['./expenses-by-categroy-top.component.css']
})
export class ExpensesByCategroyTopComponent implements OnInit {
  private chart: AmChart;
  private legend:AmChart;
  constructor(private  AmCharts:AmChartsService) { }
  ngAfterViewInit() {
    
    this.chart = this.AmCharts.makeChart( "chartdivPie", {
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
        "titleField": "",
        "outlineAlpha": 0.4,
        "depth3D": 15,
        "graphs": [{
          
          
          "fillColorsField": "color",
          "fillAlphas": 1,
          "lineAlpha": 0.1,
          "type": "pie",
          "valueField": "expenditure"
      }],
      } );

  }
  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.chart) 
      this.AmCharts.destroyChart(this.chart);
    }
}
