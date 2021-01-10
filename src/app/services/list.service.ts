import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/List';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listsUrl:string = 'https://jsonplaceholder.typicode.com/todos';
    listLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

  // Get Todos
  getLists():Observable<List[]> {
    return this.http.get<List[]>(`${this.listsUrl}${this.listLimit}`);
  }

  // Delete List
  deleteList(list: List):Observable<List> {
    const url = `${this.listsUrl}/${list.id}`;
    return this.http.delete<List>(url, httpOptions)
  }

  // Add List
  addList(list: List):Observable<List> {
    return this.http.post<List>(this.listsUrl, list, httpOptions);
  }

  // Toggle Completed
   toggleCompleted(list: List):Observable<any> {
     const url = `${this.listsUrl}/${list.id}`;
    return this.http.put(url, list, httpOptions);
   }

}
