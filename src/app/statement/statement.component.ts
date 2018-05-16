import { Component, OnInit } from '@angular/core';
import { InformationService } from '../Common/information.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})



export class StatementComponent implements OnInit {

  LinksFlag:boolean;
  constructor() { 
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
  }

  ngOnInit() {
  }
  

  btnChanged()
  {
    var x = document.getElementById('dv_Main');
    if (x.style.display = "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


  }
}
