import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Task } from './task';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + 'users');
  }
  getTasks(username: string, password: string): Observable<Task[]> {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.get<Task[]>(this.apiUrl + 'todos', { headers });
  }
  createTask(task: Task, username: string, password: string): Observable<Task> {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.post<Task>(this.apiUrl + 'todos', task, { headers });
  }
  deleteTask(task: Task, username: string, password: string): Observable<Task> {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(username + ':' + password)
    });
    const params = new HttpParams().set('id', task.id);
    return this.http.delete<Task>(this.apiUrl +  'todos', { headers, params });
  }
  updateTask(task: Task, username: string, password: string): Observable<Task> {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(username + ':' + password)
    });
    const params = new HttpParams().set('id', task.id);
    return this.http.patch<Task>(this.apiUrl + 'todos', task, { headers,params });
  }
}
