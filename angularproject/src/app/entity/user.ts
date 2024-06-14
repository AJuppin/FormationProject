import { UserType } from './user-type';

export class User {
  id!: number;
  name!: string;
  email!: string;
  userType!: UserType;

  constructor(id?: number, name?: string, email?: string, userType?: UserType) {
    if (id) this.id = id;
    if (name) this.name = name;
    if (email) this.email = email;
    if (userType) this.userType = userType;
  }
}
