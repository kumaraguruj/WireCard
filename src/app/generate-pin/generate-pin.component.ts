import { Component, OnInit } from '@angular/core';
import { InformationService } from '../Common/information.service';

@Component({
  selector: 'app-generate-pin',
  templateUrl: './generate-pin.component.html',
  styleUrls: ['./generate-pin.component.css']
})
export class GeneratePinComponent implements OnInit {

  LinksFlag:boolean;

  constructor() {
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
   }

  ngOnInit() {
  }
 
  private selectedLink: string="Yes";        
  
  setradio(e: string): void   
  {  
  
   this.selectedLink = e;  
         
  }  
  
    isSelected(OldPin: string): boolean   
  {  
 
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
 }  
  
        return (this.selectedLink === OldPin); // if current radio button is selected, return true, else return false  
    }  

    OldPinGenerated()
    {
       
     alert('Pin has been generated and sent to your registerd mobile number and Email')
    
    }
}

