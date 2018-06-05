import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  LinksFlag:boolean=false;
  constructor() { 

    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
  
  }
  havequestions(){

    alert("Functionality not implemented yet.");
  }
  ngOnInit() {
  }
  CardType:string;

  onChange(){
    
    if(this.CardType=='card1')
    {
      document.getElementById('card1Reward').style.display = "block";
      document.getElementById('card2Reward').style.display = "none";
    }
    if(this.CardType=='card2')
    {
      document.getElementById('card2Reward').style.display = "block";
      document.getElementById('card1Reward').style.display = "none";
    }
 }
  
}
