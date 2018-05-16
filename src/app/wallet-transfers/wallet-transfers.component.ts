import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-transfers',
  templateUrl: './wallet-transfers.component.html',
  styleUrls: ['./wallet-transfers.component.css']
})
export class WalletTransfersComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  clickMethod() {
    if(confirm("Amount transferred")) {
      window.location.reload();
    }
  }
  CancelMethod(){
    this._router.navigate(['Home/Summary']);
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
