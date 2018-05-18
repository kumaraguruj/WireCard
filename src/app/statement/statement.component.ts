import { Transaction } from './../Common/transactions';
import { DataService} from './../Common/data.service';
import { Component, OnInit } from '@angular/core';
import { InformationService} from '../Common/information.service'; 
import { DatePipe } from '@angular/common';
import {DateformatPipe,MonthformatPipe} from '../date-pipe/date-pipe.component'
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})

export class StatementComponent implements OnInit {

  LinksFlag:boolean;
 
  type:string ='';
  cardNo:string='';
  userId:string = InformationService.UserType ;
   Trans: Transaction[];
  fDate : any;
  fromDate : any;
  tDate:any;
  toDate:any
 statementDate :any
  constructor(
    private dataService:DataService
  ) {
    this.loadAllData();
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
   }

  ngOnInit() {
  }
  searchbymonth():void{
   
   let monthformatPipeFilter = new MonthformatPipe();
   this.fromDate = monthformatPipeFilter.transform(this.fDate);
   
   this.Trans = this.dataService.getStatementData(this.userId,this.fromDate)
   
   this.btnChanged();
   } 

    loadAllData():void{

      this.Trans = this.dataService.getAllData(this.userId )
    }
download(){

  alert("Functionality not implemented yet.");
}
  btnChanged()
  {
    var x = document.getElementById('dv_Main');
    if (x.style.display = "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


  }
  
}

export class Pagination {
  constructor(
    private dataService:DataService
  ) {
    this.loadAllData();
  }
  userId:string = InformationService.UserType ;
  Trans: Transaction[];
   loadAllData():void{

    this.Trans = this.dataService.getAllData(this.userId )
  }
    p: number = 1;
    collection: any[] = this.Trans;
}