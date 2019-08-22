import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../iuser';
import { MatDialog } from '@angular/material';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: IUser[];

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent);
  }
}
