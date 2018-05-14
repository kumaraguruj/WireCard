import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplementary-limit',
  templateUrl: './supplementary-limit.component.html',
  styleUrls: ['./supplementary-limit.component.css']
})
export class SupplementaryLimitComponent implements OnInit {
  showHide: boolean;
  constructor() {this.showHide=false; }

  ngOnInit() {
  }
  changeShowStatus(){
    this.showHide = !this.showHide;
  }
}
