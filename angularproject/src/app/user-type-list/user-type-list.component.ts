import { Component } from '@angular/core';
import { UserType } from '../entity/user-type';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-type-list',
  templateUrl: './user-type-list.component.html',
  styleUrl: './user-type-list.component.css',
})
export class UserTypeListComponent {
  userTypes: UserType[] = [];
  userType!: UserType;

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userService.findAllUserType().subscribe((data) => {
      this.userTypes = data;
    });
  }

  afficherUserTypeForm(id: number) {
    this.router.navigateByUrl(`addusertype/${id}`);
  }

  deleteUserTypeById(id: number) {
    this.userService
      .deleteUserTypeById(id)
      .subscribe((response) => this.ngOnInit());
  }
}
