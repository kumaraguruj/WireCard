import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-card',
  templateUrl: './block-card.component.html',
  styleUrls: ['./block-card.component.css']
})
export class BlockCardComponent implements OnInit {

  constructor(private _router:Router) { }

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
    this.buttonDisabled = true
    
  }

  refresh(): void {
    //this._router.navigate(['/SelfService']);
    window.location.reload();
}

  ngOnInit() {
  }

}
