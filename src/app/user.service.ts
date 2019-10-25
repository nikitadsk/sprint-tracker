import { Injectable } from '@angular/core';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [
    { id: 1, name: 'Nikita Ershov', position: 'Developer', projectId: 1 },
    { id: 2, name: 'Ivan Timokhin', position: 'Developer', projectId: 2 },
  ];

  constructor() { }

  public getUsers(projectId: number): IUser[] {
    return this.users.filter(user => user.projectId === projectId);
  }

  public addUser(name: string, position: string, projectId: number): void {
    this.users.push({
      id: this.users ? this.users[this.users.length - 1].id + 1 : 1,
      name,
      position,
      projectId,
    });
  }
}
