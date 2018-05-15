import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  showHide1:boolean;

  showHide: boolean;
  constructor() {this.showHide=false,this.showHide1=false; }

    ngOnInit() {
  }

}
