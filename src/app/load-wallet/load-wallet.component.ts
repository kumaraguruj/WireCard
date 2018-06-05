import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-wallet',
  templateUrl: './load-wallet.component.html',
  styleUrls: ['./load-wallet.component.css']
})
export class LoadWalletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  CardType:string;
  
  setradio(CardType){
  

    if(CardType=='CreditCard')
    {
      document.getElementById('creditCard').style.display = "block";
      document.getElementById('bankAccount').style.display = "none";
    }
    if(CardType=='BankAccount')
    {
      document.getElementById('bankAccount').style.display = "block";
      document.getElementById('creditCard').style.display = "none";
    }
 }

}
