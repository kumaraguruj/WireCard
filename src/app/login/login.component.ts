import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='admin';
  password:string="admin";

  constructor( private _router:Router) { }

  ngOnInit() {
  }

  VerifyUser():void
  {
    if(this.username==='admin' && this.password==='admin')
{

  this._router.navigate(['CardSummary']);
}
else
{
alert('invalid username/password');

}

  }

}

