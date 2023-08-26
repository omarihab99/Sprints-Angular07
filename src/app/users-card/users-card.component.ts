import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { User } from '../user';
import { Accordion } from 'primeng/accordion';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss']
})
export class UsersCardComponent implements OnInit {
  users: User[] = [];
  multiple : boolean = true;
  activeIndex : number = 1;
  constructor(public tasksService: TasksService) {}
  
  ngOnInit() {
    this.tasksService.getUsers().subscribe(users => {
      this.users = users;
      this.activeIndex = 0;
      this.multiple = false;
    });
  }
 
}
