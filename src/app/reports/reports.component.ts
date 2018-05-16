import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  LinksFlag:boolean=false;
  constructor() {
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;

   }

  ngOnInit() {
  }

}
