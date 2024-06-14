import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../entity/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  //variables
  users: User[] = [];
  user!: User;
  originalUsers: User[] = [];

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userService.findAll().subscribe((data) => {
      this.users = data;
      this.originalUsers = data;
    });
  }

  afficherFormationParticipant(id: number) {
    this.router.navigateByUrl(`adduser/${id}`);
  }

  deleteUserById(id: number) {
    this.userService
      .deleteUserById(id)
      .subscribe((response) => this.ngOnInit());
  }

  sortByName() {
    this.users.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
}
