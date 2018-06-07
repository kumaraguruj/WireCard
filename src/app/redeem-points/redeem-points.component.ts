import { Component, OnInit,ElementRef, Inject} from '@angular/core';
import {InformationService } from '../Common/information.service';

declare var jQuery:any;

@Component({
  selector: 'app-redeem-points',
  templateUrl: './redeem-points.component.html',
  styleUrls: ['./redeem-points.component.css']
})
export class RedeemPointsComponent implements OnInit {
  LinksFlag:boolean=false;
  elementRef: ElementRef;
  slideValue1: number=0;

  constructor(@Inject(ElementRef) elementRef: ElementRef) { 
    this.elementRef = elementRef;
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

CardType1:string;

  onChange(){
    
    if(this.CardType1=='card1')
    {
      document.getElementById('PointsAvailable').textContent="966";
      document.getElementById('card550').style.display = "none";
      document.getElementById('card550-1').style.display = "none";
      document.getElementById('card518').style.display = "block";
      document.getElementById('card518-1').style.display = "block";

    }
    if(this.CardType1=='card2')
    {
      document.getElementById('PointsAvailable').textContent="3933";
      document.getElementById('card550').style.display = "block";
      document.getElementById('card550-1').style.display = "block";
      document.getElementById('card518').style.display = "none";
      document.getElementById('card518-1').style.display = "none";
    }
 }
  ngOnInit() {

    
  }

}
