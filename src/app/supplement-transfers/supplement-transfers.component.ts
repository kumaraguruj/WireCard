import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplement-transfers',
  templateUrl: './supplement-transfers.component.html',
  styleUrls: ['./supplement-transfers.component.css']
})
export class SupplementTransfersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  divFlag:boolean=false;

  Calculate()
  {
    this.divFlag=!this.divFlag;

  }

  toggle()
  {

    
  }
}
