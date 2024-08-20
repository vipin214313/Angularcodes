import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private url='http://jsonplaceholder.typicode.com/';


  constructor( private httpClient:HttpClient) { }
  getpost(){
    return this.httpClient.get(this.url)
  } 
}
