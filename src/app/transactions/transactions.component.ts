import { Transaction } from './../Common/transactions';
import { DataService} from './../Common/data.service';
import { Component, OnInit } from '@angular/core';
import { InformationService} from '../Common/information.service'; 
import { DatePipe } from '@angular/common';
import {DateformatPipe} from '../date-pipe/date-pipe.component'


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  LinksFlag:boolean=false;

  showHide1:boolean;

  showHide: boolean;

  type:string ='';
  cardNo:string='';
  userId:string = InformationService.UserType ;
  
   // let dateFormatPipeFilter = new dateFormatPipe();
   // this.newDate = dateFormatPipeFilter.transform(this.currentDate);

  Trans: Transaction[];
  fDate : any;
  fromDate : any;
  tDate:any;
  toDate:any;
  constructor(
    private dataService:DataService
  
  )
 {this.showHide=false,this.showHide1=false
  //this.loadAllData();

  this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
}; 

    ngOnInit() {
  }
  search():void{
   // this.fDate = new Date().getTime();
   
  let dateFormatPipeFilter = new DateformatPipe();
  this.fromDate = dateFormatPipeFilter.transform(this.fDate);
  this.toDate = dateFormatPipeFilter.transform(this.tDate);
  console.log("Current" + this.fDate);
  console.log("New" + this.fromDate);
    this.Trans = this.dataService.getData(this.type,this.cardNo,this.userId,this.fromDate,this.toDate )
    if(this.Trans.length>0)
    this.showHide = true;
    else
    this.showHide = !this.showHide;
  }

  loadAllData():void{

    this.Trans = this.dataService.getAllData(this.userId )
  }
}
