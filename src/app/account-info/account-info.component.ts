import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';


@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {


  divFlag1:boolean=InformationService.whichdiv==='admin1'?true:false;
  divFlag2:boolean=InformationService.whichdiv==='admin2'?true:false;
  divFlag3:boolean=InformationService.whichdiv==='admin3'?true:false;
  divFlag4:boolean=InformationService.whichdiv==='admin4'?true:false;
  constructor() { 


  }

  ngOnInit() {
  }

  
  

}
