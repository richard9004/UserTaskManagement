import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserTaskFilterPipe } from '../user-task-filter.pipe';
import { Task } from '../../../models/task.model';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-user-tasks',
  imports: [CommonModule, FormsModule, UserTaskFilterPipe, RouterModule],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  standalone: true

})
export class UserTasksComponent {

  constructor(private service: UserService, private route: ActivatedRoute, private stateService: StateService) { }

  tasks: Task[] = [];
  userId: number = 0;
  filterText: string = 'all';

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.checkUserExists(this.userId);
    });

  }

  //Checks if the user's tasks are already stored in the state.
  //If tasks are found, they are loaded into the component.
  //Otherwise, it fetches tasks from the API.
  checkUserExists(userId: number) {

    // Retrieve tasks for the user from the state
    const savedTasks = this.stateService.getTaskData(userId);

    // If tasks exist in the store, use them; otherwise, fetch from the API
    if (savedTasks.length > 0) {
      this.tasks = savedTasks;
    } else {
      this.getUserTasks(userId);
    }
  }

  //Fetches tasks for a user from the API and stores them in the state.
  getUserTasks(userId: number) {
    const userData = this.service.getUserTasks(userId);
    userData.subscribe((response: Task[]) => {
      this.stateService.setTaskData(userId, response);
      this.tasks = response;
    });
  }

  //Handles the checkbox change event to update the completion status of a task.
  //Updates the state with the modified tasks.
  handleChange(event: any, taskId: number) {
    let indexToUpdate = this.tasks.findIndex((task: any) => task.id === taskId);
    this.tasks[indexToUpdate].completed = event.target.checked;
    this.stateService.setTaskData(this.userId, this.tasks);
  }
}
