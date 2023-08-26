import { NgModule } from '@angular/core';
import { TableRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { SpeedDialModule } from 'primeng/speeddial';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: 
  [TodosComponent],

  imports: [
    TableModule,
    TableRoutingModule,
    CheckboxModule,
    SpeedDialModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule
  ]
})
export class TodosModule { }
