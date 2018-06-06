import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';

@Component({
  selector: 'app-redeem-points',
  templateUrl: './redeem-points.component.html',
  styleUrls: ['./redeem-points.component.css']
})
export class RedeemPointsComponent implements OnInit {
  LinksFlag:boolean=false;
  constructor() { 
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
  
  }
view()
{
alert("Shopping functionality not yet implemented");

}
confirmCash(){
  alert("Cash transfered sucessfully");
  document.getElementById('CashRedimption').style.display = "none";
}
confirmPointsPay()
{
  alert("Order placed sucessfully");
  document.getElementById('PointsPlusPay').style.display = "none";
}
CardType:string;
  
setradioPaytoType(CardType){

  if(CardType=='CreditCard')
  {
    document.getElementById('PaytoCreditCard').style.display = "block";
    document.getElementById('PaytoBankAccount').style.display = "none";
  }
  if(CardType=='BankAccount')
  {
    document.getElementById('PaytoBankAccount').style.display = "block";
    document.getElementById('PaytoCreditCard').style.display = "none";
  }
}

RedeemType:string;
setradio(RedeemType)
{
  if(RedeemType=='PointsOnly')
  {
    document.getElementById('PointsPlusPay').style.display = "none";
    document.getElementById('CashRedimption').style.display = "none";
  }
  if(RedeemType=='PointsplusPay')
  {
    document.getElementById('PointsPlusPay').style.display = "block";
    document.getElementById('CashRedimption').style.display = "none";
  }
  if(RedeemType=='Cash')
  {
    document.getElementById('PointsPlusPay').style.display = "none";
    document.getElementById('CashRedimption').style.display = "block";
  }
  
}
  ngOnInit() {
  }

}
