import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http: HttpClient) { }
  private _url = "/assets/list.json";
  getEmployees(): Observable<IList[]>{
    return this.http.get<IList[]>(this._url);
  }
 
}
