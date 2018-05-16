import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';

@Component({
  selector: 'app-self-service',
  templateUrl: './self-service.component.html',
  styleUrls: ['./self-service.component.css']
})
export class SelfServiceComponent implements OnInit {

  LinksFlag:boolean=false;
  constructor() {

    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
   }

  ngOnInit() {
  }

}
