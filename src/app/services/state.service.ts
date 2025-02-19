import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  private tasksSubject = new BehaviorSubject<{ [userId: number]: Task[] }>([]);
  tasks$ = this.tasksSubject.asObservable();

  // Function to update or add new tasks
  setTaskData(userId: number, tasksData: Task[]) {
    const tasks = this.tasksSubject.getValue();
    tasks[userId] = tasksData;
    this.tasksSubject.next(tasks);
  }

  // Function to get tasks based on provided user id
  getTaskData(userId: number): Task[] {
    const tasks = this.tasksSubject.getValue();
    if (tasks[userId]) {
      return tasks[userId]
    } else {
      return [];
    }

  }


}
