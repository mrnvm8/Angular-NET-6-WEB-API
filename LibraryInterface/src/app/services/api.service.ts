import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  readonly WebApiUrl = 'https://localhost:7182/api';

  //get all available data from data source
  GetLibraryBooks(): Observable<any[]> {
    return this.http.get<any>(this.WebApiUrl + '/Book');
  }

  //create a new data
  PostLibraryBook(data: any): Observable<any[]> {
    return this.http.post<any>(this.WebApiUrl + '/Book', data);
  }

  //Edit available data by it's Id, for flexibility make id to be number/string
  PutLibraryBook(id: number|string, data: any){
    return this.http.put(this.WebApiUrl + `/Book/${id}`, data);
  }

  //delete available data by it's Id, for flexibility make id to be number/string
  DeleteLibraryBook(id: number|string){
    return this.http.delete(this.WebApiUrl + `/Book/${id}`, {responseType: 'text'});
  }
}
