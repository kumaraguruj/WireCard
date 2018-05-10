import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  tab:string="CardSummary";
  constructor() { }

  ngOnInit() {
  }

  setTab(pagename: string) {
    this.tab = pagename;
  }

  isSelected(pagename: string) {
    return this.tab===pagename;
  }
}
