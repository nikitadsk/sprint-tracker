import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-job-card-dialog',
  templateUrl: './add-job-card-dialog.component.html',
  styleUrls: ['./add-job-card-dialog.component.css']
})
export class AddJobCardDialogComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public dialogRef: MatDialogRef<AddJobCardDialogComponent>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
