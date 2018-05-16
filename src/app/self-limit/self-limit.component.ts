import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-limit',
  templateUrl: './self-limit.component.html',
  styleUrls: ['./self-limit.component.css']
})
export class SelfLimitComponent implements OnInit {

  showHide: boolean;
  constructor() {this.showHide=false; }

  ngOnInit() {
  }
  changeShowStatus(){
    this.showHide = !this.showHide;
  }

  btn_Submit_Click()
  {
    alert('Record saved successfully.')
  }
  
}
