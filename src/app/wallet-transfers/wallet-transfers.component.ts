import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-transfers',
  templateUrl: './wallet-transfers.component.html',
  styleUrls: ['./wallet-transfers.component.css']
})
export class WalletTransfersComponent implements OnInit {

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
