import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InformationService} from '../Common/information.service';

@Component({
  selector: 'app-block-card',
  templateUrl: './block-card.component.html',
  styleUrls: ['./block-card.component.css']
})
export class BlockCardComponent implements OnInit {

  LinksFlag:boolean=false;

  constructor(private _router:Router) { 
    this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;

  }

  clickMethod(name: string) {
    if(confirm("Your card will be blocked")) {
      {
        alert("Your card has been blocked")

        window.location.reload();
      }
    }
  }

  buttonDisabled: boolean;

  onChange(event){
    this.buttonDisabled = true;
    
  }

  refresh(): void {
    //this._router.navigate(['/SelfService']);
    window.location.reload();
}


  

  ngOnInit() {
  }

}
