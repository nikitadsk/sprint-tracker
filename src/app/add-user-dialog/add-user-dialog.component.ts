import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {

  @Input() parent: UsersListComponent;

  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>, private userService: UserService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  addUser(userName: string, userPosition: string): void {
    this.userService.addUser(userName, userPosition, this.parent.projectId);
    this.parent.updateUsersList();
    this.onNoClick();
  }

  ngOnInit() {
  }

}
