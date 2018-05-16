import { Component, OnInit } from '@angular/core';
import { InformationService } from '../Common/information.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  LinksFlag:boolean=false;

  constructor() {
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
    
   }

  ngOnInit() {
  }

}