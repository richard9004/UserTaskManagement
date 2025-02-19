import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserTasksComponent } from './user-tasks/user-tasks.component';


const routes: Routes = [
  { path: '', component: UserListingComponent },
  { path:':userId/tasks', component: UserTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
