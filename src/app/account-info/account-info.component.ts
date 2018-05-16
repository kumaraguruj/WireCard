import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';
import { Router} from '@angular/router';




@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {



  divFlag1:boolean=InformationService.whichdiv==='Alice'?true:false;
  divFlag2:boolean=InformationService.whichdiv==='Bob'?true:false;
  // divFlag3:boolean=InformationService.whichdiv==='Charles'?true:false;
  // divFlag4:boolean=InformationService.whichdiv==='Dalton'?true:false;


  constructor(private _route:Router) { 
   
  
 }

  ngOnInit() {
  
  }
  signout()
  {
    this._route.navigate(['/login']);
  }
  
  

}
