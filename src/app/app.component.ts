import { Component } from '@angular/core';

import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private localStorageService: LocalStorageService,
  ) {
    this.localStorageService.setDefault();
  }
}
