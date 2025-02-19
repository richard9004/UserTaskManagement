import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUserTasks(userId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/todos?userId=${userId}`);
  }
}
