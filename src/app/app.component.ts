import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event} from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {Client, NgxSoapService} from 'ngx-soap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TheLibrary-Front';

  constructor(private loadingBar: SlimLoadingBarService,
              private router: Router) {

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });

  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }

}
