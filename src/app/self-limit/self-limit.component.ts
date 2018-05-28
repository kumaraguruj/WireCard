import { Component, OnInit } from '@angular/core';
import{TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-self-limit',
  templateUrl: './self-limit.component.html',
  styleUrls: ['./self-limit.component.css']
})
export class SelfLimitComponent implements OnInit {

  showHide: boolean;
  //private translate:TranslateService
  constructor(private translate:TranslateService) {
    this.showHide=false;
    translate.addLangs(["en","ar"]);
    translate.setDefaultLang("en");
    let browserLang=translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/)?browserLang:"en"   );
   // translate.use("ar" );
  }

  ngOnInit() {
  }
  changeShowStatus(){
    this.showHide = !this.showHide;
  }

  btn_Submit_Click()
  {
    alert('Record saved successfully.')
  }
  changeLanguage(lang)
  {

this.translate.use(lang);
  }
  
}
