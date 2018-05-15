import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router} from '@angular/router';
import { InformationService} from '../Common/information.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="Alice";
  password:string="admin1";
  errormessage:string;

  constructor( private _router:Router) { }

  ngOnInit() {
  }

  VerifyUser():void
  {
    // if(this.username==='admin' && this.password==='admin')
    if((this.username==='Alice' && this.password==='admin1') ||(this.username==='Bob' && this.password==='admin2') ||(this.username==='Charles' && this.password==='admin3') ||(this.username==='Dalton' && this.password==='admin4'))
{
        InformationService.whichdiv=this.username;

          this._router.navigate(['/Home/Summary']);
}
else
{
  if(this.username.length>0 && this.password.length>0)
  this.errormessage="Invalid Username/Password.";
  else
  this.errormessage="Enter valid Username/Password.";
  

}

  }

}

