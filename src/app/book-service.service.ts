import { Injectable } from '@angular/core';
import {Client, ISoapMethodResponse, NgxSoapService} from 'ngx-soap';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  bookTitle = 'Book1';
  loading: boolean;
  showDiagnostic: boolean;
  message: string;
  xmlResponse: string;
  jsonResponse: string;
  resultLabel: string;
  client: Client;

  constructor(private soap: NgxSoapService) {

    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    headers.append('Access-Control-Allow-Headers', 'Accept, X-Requested-With');
    headers.append('Access-Control-Allow-Credentials', 'true');

    // this.soap.createClient('http://localhost:8080/thelibrary/ws/thelibrary?wsdl')
    // this.soap.createClient('assets/thelibrary.wsdl')
    this.soap.createClient(
      'http://localhost:8080/thelibrary/ws/thelibrary?wsdl',
      {headers: headers})
      .then(client => {
        console.log('Client', client);
        this.client = client;
      })
      .catch(err => console.log('Error', err));

    // this.get();
  }

  get(): void {
    this.loading = true;
    const body = {
      bookTitle: this.bookTitle
    };

    if (this.client) {
      this.client.call('getBook', body).subscribe(res => {
        this.xmlResponse = res.responseBody;
        this.message = res.result.AddResult;
        this.loading = false;
        console.log(this.xmlResponse);
        console.log(this.message);
        console.log(this.xmlResponse);
      }, err => console.log(err));
    }

    // OR:
    // (this.client as any).Add(body).subscribe(
    //   (res: ISoapMethodResponse) => {
    //     console.log('method response', res);
    //     this.xmlResponse = res.xml;
    //     this.message = res.result.AddResult;
    //     this.loading = false;
    //   },
    //   err => console.log(err)
    // );
  }
}
