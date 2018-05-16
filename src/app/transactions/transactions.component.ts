import { Component, OnInit } from '@angular/core';
import { InformationService } from '../Common/information.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  showHide1:boolean;

  showHide: boolean;

  LinksFlag: boolean;

  constructor() {
    this.showHide=false,this.showHide1=false;
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
   
   }

    ngOnInit() {
  }

}
