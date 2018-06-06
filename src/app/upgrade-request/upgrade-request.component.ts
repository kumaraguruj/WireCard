import { Component, OnInit,ElementRef, Inject } from '@angular/core';
import {InformationService } from '../Common/information.service';
declare var jQuery:any;
@Component({
  selector: 'app-upgrade-request',
  templateUrl: './upgrade-request.component.html',
  styleUrls: ['./upgrade-request.component.css']
})
export class UpgradeRequestComponent implements OnInit {
  elementRef: ElementRef;
    slideValue: number;

  LinksFlag:boolean=false;
  constructor(@Inject(ElementRef) elementRef: ElementRef) { 
    this.elementRef = elementRef;
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
  
  }
  applynow():void{
    alert("Request for upgrade submitted successfully");
  }
  ngOnInit() {

    jQuery(this.elementRef.nativeElement).find("#amount").slider({
      range: false,
      orientation: "vertical",
      min: 0,
      max: 200000,
      value: 200000,
      slide: function( event, ui ) {
        this.slideValue = ui.value; //doesn't seem to work
        jQuery(this.elementRef.nativeElement)( "#amount" ).val( ui.value ); 
      }
    });
  }

}
