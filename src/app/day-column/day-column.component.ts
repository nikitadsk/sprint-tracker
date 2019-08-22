import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddJobCardDialogComponent } from '../add-job-card-dialog/add-job-card-dialog.component';
import { IDay } from '../iday';
import { IJob } from '../ijob';
import { DayService } from '../day.service';

@Component({
  selector: 'app-day-column',
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.css']
})
export class DayColumnComponent implements OnInit, OnChanges {

  @Input() day: IDay;
  @Input() id: number;

  public userJobs: IJob[];

  constructor(public dialog: MatDialog, private dayService: DayService) {

  }

  updateColumn() {
    this.userJobs = this.dayService.getJobsByUserId(this.id, this.day.date);
  }

  ngOnInit(): void {
    this.updateColumn();
  }

  ngOnChanges(): void {
    this.updateColumn();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddJobCardDialogComponent);
    dialogRef.componentInstance.parent = this;
  }

  getDate() {
    return `${this.day.date.getDate()}.${this.day.date.getMonth()}.${this.day.date.getFullYear()}`;
  }
}
