import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  tab:string="CardSummary";
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  setTab(pagename: string) {
   
    this._router.navigate([pagename]);
    this.tab = pagename;
  }

  isSelected(pagename: string) {

    this._router.navigate(['listCards']);
    return this.tab===pagename;
  }
}
