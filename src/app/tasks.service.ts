import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + 'users');
  }
  getTasks(username: string, password: string): Observable<Task[]> {
    const headers = new HttpHeaders({
      Autherization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.get<Task[]>(this.apiUrl + 'tasks', { headers });
  }
  createTask(task: Task, username: string, password: string): Observable<Task> {
    const headers = new HttpHeaders({
      Autherization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.post<Task>(this.apiUrl + 'tasks', task, { headers });
  }
  deleteTask(task: Task, username: string, password: string): Observable<Task> {
    const headers = new HttpHeaders({
      Autherization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.delete<Task>(this.apiUrl + '/' + 'tasks/:' + task.id, { headers });
  }
  updateTask(task: Task, username: string, password: string): Observable<Task> {
    const headers = new HttpHeaders({
      Autherization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.put<Task>(this.apiUrl + '/' + 'tasks/:' + task.id, task, { headers });
  }
}
