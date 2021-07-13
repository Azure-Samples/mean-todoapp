import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type',      'application/json');
  
  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  // Add
  addTodo(data: Todo): Observable<any> {
    let API_URL = `/Todo`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all tasks
  getTodos() {
    return this.httpClient.get(`/Todo`);
  }

  // Get task by id
  getTodoById(id:any): Observable<any> {
    let API_URL = `/Todo/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  
  // Update
  updateTodo(id:any, data:any): Observable<any> {
    let API_URL = `/Todo/${id}`;
    return this.httpClient.patch(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete
  deleteTodo(id:any): Observable<any> {
    let API_URL = `/Todo/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
  
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}