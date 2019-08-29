import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookGetComponent} from './book-get/book-get.component';


const routes: Routes = [{
  path: 'books',
  component: BookGetComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
