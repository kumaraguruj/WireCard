import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="";
  password:string="";

  constructor( private _router:Router) { }

  ngOnInit() {
  }

  VerifyUser():void
  {
    if(this.username==='admin' && this.password==='admin')
{

  this._router.navigate(['Home']);
}
else
{
alert('invalid username/password');

}

  }

}

