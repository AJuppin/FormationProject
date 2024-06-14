import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../entity/user';
import { UserType } from '../entity/user-type';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-type-form',
  templateUrl: './user-type-form.component.html',
  styleUrl: './user-type-form.component.css',
})
export class UserTypeFormComponent {
  id!: number;
  userTypeTemp!: UserType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService
  ) {
    this.userTypeTemp = new UserType();
  }

  onSubmit() {
    console.log(this.userTypeTemp);
    this.userService
      .saveUserType(this.userTypeTemp)
      .subscribe((result) => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/usertypes']);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.userService
        .geUserTypeById(this.id)
        .subscribe((response) => (this.userTypeTemp = response));
    }
  }
}
