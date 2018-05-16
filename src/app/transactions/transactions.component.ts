import { Transaction } from './../Common/transactions';
import { DataService} from './../Common/data.service';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { InformationService} from '../Common/information.service'; 
=======
import { InformationService} from '../Common/information.service'; 
>>>>>>> 1ee799e4e8c0541adc56a2105d087f45620d3939
import { DatePipe } from '@angular/common';
import {DateformatPipe} from '../date-pipe/date-pipe.component'


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  showHide1:boolean;

  showHide: boolean;

  type:string ='';
  cardNo:string='';
  userId:string = InformationService.UserType ;
  
   // let dateFormatPipeFilter = new dateFormatPipe();
   // this.newDate = dateFormatPipeFilter.transform(this.currentDate);

<<<<<<< HEAD
=======

>>>>>>> 1ee799e4e8c0541adc56a2105d087f45620d3939
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 1ee799e4e8c0541adc56a2105d087f45620d3939
