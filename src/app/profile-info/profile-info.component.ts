import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  LinksFlag:boolean=false;
  constructor() {
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
  
   }

  ngOnInit() {
  }


 
  
}
