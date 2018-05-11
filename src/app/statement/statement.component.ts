import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  constructor() { }

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
