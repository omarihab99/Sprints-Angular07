import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersCardComponent } from './users-card/users-card.component';
const routes = [
  {
    path: '',
    component: UsersCardComponent
  },
  {
    path: 'todos',
    loadChildren : () => import('./table/todos.module').then(m => m.TodosModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
