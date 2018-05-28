import { Component } from '@angular/core';
import{ InformationService} from '../app/Common/information.service'
import{TranslateService} from 'ng2-translate'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _InformationService:InformationService,private translate:TranslateService)
  {
    translate.addLangs(["en","ar",]);
    translate.setDefaultLang("en");
    let browserLang=translate.getBrowserLang();
     translate.use(browserLang.match(/en|ar/)?browserLang:"en"   );
    //translate.use("ar" );
  }

  changeLanguage(lang)
  {

this.translate.use(lang);
  }
}
