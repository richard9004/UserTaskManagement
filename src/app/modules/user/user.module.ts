import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserTaskFilterPipe } from './user-task-filter.pipe';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    
  ]
})
export class UserModule { }
