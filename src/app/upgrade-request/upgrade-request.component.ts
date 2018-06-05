import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';

@Component({
  selector: 'app-upgrade-request',
  templateUrl: './upgrade-request.component.html',
  styleUrls: ['./upgrade-request.component.css']
})
export class UpgradeRequestComponent implements OnInit {
  LinksFlag:boolean=false;
  constructor() { 
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
  
  }
  applynow():void{
    alert("Request for upgrade submitted successfully");
  }
  ngOnInit() {
  }

}
