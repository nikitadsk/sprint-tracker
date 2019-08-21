import { Injectable } from '@angular/core';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [
    { id: 1, name: 'Nikita Ershov', position: 'Developer' },
    { id: 2, name: 'Ivan Timokhin', position: 'Developer' },
  ];

  constructor() { }

  public getUsers(): IUser[] {
    return this.users;
  }
}
