import { Component } from '@angular/core';
import {LocalizeRouterService} from 'localize-router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private localize: LocalizeRouterService, private router: Router) {
    console.log(this.router.config);
  }

  changeLanguage(lang: string) {
    this.localize.changeLanguage(lang);
  }
}
