import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';

@Component({
  selector: 'app-redeem-points',
  templateUrl: './redeem-points.component.html',
  styleUrls: ['./redeem-points.component.css']
})
export class RedeemPointsComponent implements OnInit {
  LinksFlag:boolean=false;
  constructor() { 
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
  
  }

  ngOnInit() {
  }

}
