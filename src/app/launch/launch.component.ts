import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {InformationService } from '../Common/information.service';
import{TranslateService} from 'ng2-translate';
@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  tab:string="CardSummary";
  LinksFlag:boolean=false;
  constructor(private _router:Router,private translate:TranslateService) { 
   this.LinksFlag=InformationService.UserType==='CreditUser'?false:true;
   translate.addLangs(["en","ar"]);
    translate.setDefaultLang("en");
    let browserLang=translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/)?browserLang:"en"   );
  }

  ngOnInit() {
  }

 

  setTab(pagename: string) {
   
    this._router.navigate([pagename]);
    this.tab = pagename;
  }

  test()
  {
    alert("ok");
  }
  changeLanguage(lang)
  {

this.translate.use(lang);
  }
}
