import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {

  public isError = false;

  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>, private userService: UserService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  addUser(userName: string, userPosition: string): void {
    if (userName && userPosition) {
      this.userService.addUser(userName, userPosition);
      this.onNoClick();
    } else {
      this.isError = true;
    }
  }

  ngOnInit() {
  }

}
