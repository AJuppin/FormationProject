import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './entity/user';
import { UserType } from './entity/user-type';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private usersUrl: string;
  private userTypeUrl: string;

  constructor(private http: HttpClient) {
    (this.usersUrl = 'http://localhost:8080/users'),
      (this.userTypeUrl = 'http://localhost:8080/userType');
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public getById(id: number) {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  public geUserTypeById(id: number) {
    return this.http.get<UserType>(`${this.userTypeUrl}/${id}`);
  }

  public deleteUserById(id: number) {
    return this.http.delete<User>(`${this.usersUrl}/${id}`);
  }

  public findAllUserType(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.userTypeUrl);
  }

  public deleteUserTypeById(id: number) {
    return this.http.delete<UserType>(`${this.userTypeUrl}/${id}`);
  }

  public saveUserType(userType: UserType) {
    return this.http.post<UserType>(this.userTypeUrl, userType);
  }
}
