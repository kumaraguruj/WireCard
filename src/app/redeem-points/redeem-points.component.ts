import { Component, OnInit,ElementRef, Inject } from '@angular/core';
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
    slideValue: number;
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
  ngOnInit() {

    jQuery(this.elementRef.nativeElement).find("#amount1").slider({
      range: false,
      orientation: "vertical",
      min: 0,
      max: 200000,
      value: 200000,
      slide: function( event, ui) {
        this.slideValue = ui.value; //doesn't seem to work
        jQuery(this.elementRef.nativeElement)( "#amount1").val( ui.value ); 
      }
    });
  }

}
