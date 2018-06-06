import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LinksFlag:boolean=false;
  constructor(private _router:Router) { 
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
  }

  ngOnInit() {
  }


  ClickEvent():void
  {
this._router.navigate(['accounts']);

  }

}
