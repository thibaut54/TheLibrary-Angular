import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookGetComponent } from './book-get/book-get.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {NgxSoapModule} from 'ngx-soap';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    NgxSoapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
