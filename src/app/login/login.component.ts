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

  username:string="admin1";
  password:string="admin1";

  constructor( private _router:Router) { }

  ngOnInit() {
  }

  VerifyUser():void
  {
    // if(this.username==='admin' && this.password==='admin')
    if((this.username==='admin1' && this.password==='admin1') ||(this.username==='admin2' && this.password==='admin2') ||(this.username==='admin3' && this.password==='admin3') ||(this.username==='admin4' && this.password==='admin4'))
{
        InformationService.whichdiv=this.username;

          this._router.navigate(['/Home/Summary']);
}
else
{
alert('invalid username/password');

}

  }

}

