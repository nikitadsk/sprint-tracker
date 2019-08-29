import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../iuser';
import { MatDialog } from '@angular/material';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { pluck } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() projectId: number;

  public users: IUser[];

  constructor(public dialog: MatDialog, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .pipe(pluck('projectId'))
      .subscribe(projectId => {
        this.users = this.userService.getUsers(Number(projectId))
      });
  }

  updateUsersList() {
    this.users = this.userService.getUsers(Number(this.projectId))
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent);
    dialogRef.componentInstance.parent = this;
  }
}
