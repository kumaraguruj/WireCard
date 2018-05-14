import { Component } from '@angular/core';
import{ InformationService} from '../app/Common/information.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _InformationService:InformationService)
  {
    
  }
}
