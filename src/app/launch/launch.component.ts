import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  tab:string="CardSummary";
  LinksFlag:boolean=false;
  constructor(private _router:Router) { 
   this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
  }

  ngOnInit() {
  }

 

  setTab(pagename: string) {
   
    this._router.navigate([pagename]);
    this.tab = pagename;
  }


 
}
