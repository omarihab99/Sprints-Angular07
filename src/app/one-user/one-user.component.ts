import { Component, Input } from '@angular/core';
import { User } from '../user';
import { Task } from '../task';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { HttpResponse } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.scss']
})
export class OneUserComponent {
  @Input() users!: User[];
  invalid: string = '';
  disabled = true;
  chosenUser!: string;
  constructor(private router: Router, private tasksService: TasksService, private sharedDataService: SharedDataService) { }
  checkPassword(password: any) {
    const tasks: Task[] = [];
    try {
      this.tasksService.getTasks(this.chosenUser, password).subscribe(
        (todos: Task[]) => {
          todos.forEach((todo: any) => {
            tasks.push(todo);
          });
          this.sharedDataService.setData(tasks, this.users.find(user => user.username === this.chosenUser)?.username!, password, this.users.find(user => user.username === this.chosenUser)?.id!);
          this.router.navigate(['todos']);
        },
        (err: any) => {
          console.log(err);
          this.invalid = 'ng-invalid ng-dirty';
        }
      );
    } catch (error) {

    }
  }
  enterPassword(userName: string) {
    this.disabled = false;
    this.chosenUser = userName;
  }

}
