import { Injectable } from '@angular/core';
import { Task } from './task';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  todos: Task[] = [];
  loggedInUser: string | undefined;
  password: string | undefined;
  user_id : number | undefined;
  constructor() {}
  setData(data: Task[], username: string, password: string, user_id: number){
    this.todos = data;
    this.loggedInUser = username;
    this.password = password;
    this.user_id = user_id;
  }
  getData(){
    return {todos: this.todos, username : this.loggedInUser, password:this.password, user_id: this.user_id}
  }
}
