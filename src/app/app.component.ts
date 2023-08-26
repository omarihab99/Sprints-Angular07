import { Component } from '@angular/core';
import { User } from './user';
import { TasksService } from './tasks.service';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  loggedInUser : User | undefined;
  password! : string;
  users: User[] = [];
  selectedUser!: string;
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {
  }
  
  
  // login(){
  //   this.tasksService.getTasks(this.selectedUser, this.password).subscribe(
  //     {
  //       next: tasks => {
  //         this.tasks = tasks;
  //         this.loggedInUser = this.users.find(user => user.username === this.selectedUser);
  //       },
  //       error: err => alert('Invalid credentials. Please try again')
  //     }
  //   );
  // }
  logout(){
    this.loggedInUser = undefined;
    this.tasks = [];
    this.selectedUser = '';
    this.password = '';
  }
  addTask(task:string){
    if(task.trim().length === 0 )return;
    const newTask : Task = {
      id: this.generateId(),
      user_id: this.loggedInUser?.id!,
      task: task,
      completed: false
    }
    this.tasksService.createTask(newTask, this.loggedInUser?.username!, this.password!).subscribe(
      {
        next: task => {
          this.tasks.push(task);
        },
        error: () => alert('Invalid credentials. Please try again')
      }
    )
  }
  generateId() : number{
    return Math.floor(Math.random() * 1000000);
  }
  updateTask(task: Task){
    this.tasksService.updateTask(task, this.loggedInUser?.username!, this.password!).subscribe();
  }
  deleteTask(task: Task){
    this.tasksService.deleteTask(task, this.loggedInUser?.username!, this.password!).subscribe(()=>{
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }

}
