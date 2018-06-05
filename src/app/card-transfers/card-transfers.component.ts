import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';

@Component({
  selector: 'app-card-transfers',
  templateUrl: './card-transfers.component.html',
  styleUrls: ['./card-transfers.component.css']
})
export class CardTransfersComponent implements OnInit {

  LinksFlag:boolean=false;
  constructor() {
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;

   }

  ngOnInit() {
  }

}
