import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-table',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  
})
export class TodosComponent  {
  visible = false;
  todos : Task[] = [];
  loggedInUser : string | undefined;
  password : string | undefined;
  user_id : number | undefined;
  todo: string = '';
  completed: boolean = false;
  constructor(private sharedDataService: SharedDataService, private tasksService: TasksService) {
    this.todos = this.sharedDataService.getData().todos;
    this.loggedInUser = this.sharedDataService.getData().username;
    this.password = this.sharedDataService.getData().password;
    this.user_id = this.sharedDataService.getData().user_id;
  }
  updateTask(event: any, item: Task){
    // const newValue = event.checked;
    // item.completed = newValue;
    this.tasksService.updateTask(item, this.loggedInUser!, this.password!).subscribe(
      {
        next: task => {
          this.todos = this.todos.map(t => t.id === item.id ? task : t);
        },
        error: () => alert('Invalid credentials. Please try again')
      }
    );
  }
  openAddTodoDialog(){
    this.visible = true;
  }
  addTodo(){
    const newTodo : Task = {
      id: 0,
      user_id: this.user_id!,
      task: this.todo,
      completed: this.completed,
    };
    this.tasksService.createTask(newTodo, this.loggedInUser!, this.password!).subscribe(
      {
        next: task => {
          this.todos.push(task);
        },
        error: () => alert('Invalid credentials. Please try again')
      }
    )
  }
}
