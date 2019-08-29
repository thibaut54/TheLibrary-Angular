import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../book-service.service';

@Component({
  selector: 'app-book-get',
  templateUrl: './book-get.component.html',
  styleUrls: ['./book-get.component.css']
})
export class BookGetComponent implements OnInit {

  constructor(private bookService: BookServiceService) { }

  ngOnInit() {
    this.bookService.get();
  }

}
