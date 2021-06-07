import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContactMessage } from "./contact.model";
import { SERVER_LOCATION } from 'src/global';


@Injectable({
    providedIn: 'root'
  })
  export class ContactService{
  
    // on se connecte à l'api
    private SERVER_URL = SERVER_LOCATION + 'api.php';
    
    // tslint:disable-next-line:variable-name
    private httpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    });
  
    constructor(private httpClient : HttpClient) { }
   
    create(messages: ContactMessage): Observable<HttpResponse<ContactMessage>> {
      return this.httpClient.post<ContactMessage>(this.SERVER_URL, messages, {headers: this.httpHeaders, observe: 'response'});
    }
    
  }