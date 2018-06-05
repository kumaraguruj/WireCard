import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balancer-transfer',
  templateUrl: './balancer-transfer.component.html',
  styleUrls: ['./balancer-transfer.component.css']
})
export class BalancerTransferComponent implements OnInit {

  constructor() { }

  clickMethod()
  {
    alert("Balance transfer is initiated successfully");
  }
  ngOnInit() {
  }

}
