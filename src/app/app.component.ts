import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'alicia-website';
  sections = [];

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.get('sections').pipe(take(1)).subscribe((value) => {
      this.sections = Object.entries(value).map((val, i) => { return { 'id': val[0], 'link': val[1]['link'], 'order': i + 2 } });
      this.sections.forEach((section) => {
        document.getElementById(section.id).classList.add('order-' + section.order);
      })
    });
  }

}
