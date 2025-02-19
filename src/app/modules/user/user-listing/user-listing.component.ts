import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-listing',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-listing.component.html',
  styleUrl: './user-listing.component.css',
})
export class UserListingComponent {

  constructor(private service: UserService) { }

  users: User[] = [];

  countUsers: number = 0;

  ngOnInit(): void {
    this.getUsers();
  }
  
  // Function to fetch user data from API.
  getUsers() {
    this.service.getUsers().subscribe((response: User[]) => {
      console.log(response);
      this.users = response;
      this.countUsers = this.users.length;
    });
  }


}
