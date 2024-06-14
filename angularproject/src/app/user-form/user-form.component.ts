import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../entity/user';
import { UserType } from '../entity/user-type';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnInit {
  user: User;
  id!: number;
  userTypes!: UserType[];
  idpass!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService
  ) {
    this.user = new User();
  }

  onSubmit() {
    let usert: UserType = new UserType();
    this.userService.geUserTypeById(this.idpass).subscribe((response) => {
      usert = response;
      this.user.userType = usert;

      this.userService
        .save(this.user)
        .subscribe((result) => this.gotoUserList());
    });
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit() {
    this.userService.findAllUserType().subscribe((data) => {
      this.userTypes = data;
    });

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.userService
        .getById(this.id)
        .subscribe((response) => (this.user = response));
    }
  }
}
