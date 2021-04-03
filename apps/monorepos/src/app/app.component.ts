import { Observable } from 'rxjs';
import { TechnologyService } from './technology.service';
import { Component } from '@angular/core';

@Component({
  selector: 'monorepos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'monorepos';

  technology$: Observable<any[]>;

  constructor(public technologyService: TechnologyService) {
    this.technology$ = this.technologyService.getTechnologies();
  }
}
