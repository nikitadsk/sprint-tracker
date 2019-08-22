import { Injectable } from '@angular/core';
import { IUser } from './iuser';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [
    { id: 1, name: 'Nikita Ershov', position: 'Developer' },
    { id: 2, name: 'Ivan Timokhin', position: 'Developer' },
  ];

  constructor() { }

  public getUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  public addUser(name: string, position: string): void {
    this.users.push({
      id: this.users ? this.users[this.users.length - 1].id + 1 : 1,
      name,
      position
    });
  }
}
