import { Injectable } from '@angular/core';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [
    { name: 'Nikita Ershov', position: 'Developer' },
    { name: 'Ivan Timokhin', position: 'Developer' },
  ];

  constructor() { }

  public getUsers(): IUser[] {
    return this.users;
  }
}
