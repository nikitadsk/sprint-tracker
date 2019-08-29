import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddJobCardDialogComponent } from '../add-job-card-dialog/add-job-card-dialog.component';
import { IDay } from '../iday';
import { IJob } from '../ijob';
import { JobService } from '../job.service';

@Component({
  selector: 'app-day-column',
  templateUrl: './day-column.component.html',
  styleUrls: ['./day-column.component.css']
})
export class DayColumnComponent implements OnInit, OnChanges {

  @Input() day: IDay;
  @Input() userId: number;

  public jobs: IJob[];

  constructor(public dialog: MatDialog, private jobService: JobService) {

  }

  ngOnChanges() {
    this.updateColumn();
  }

  ngOnInit() {
    this.updateColumn();
  }

  updateColumn() {
    this.jobs = this.jobService.getJobs(this.day.dayId, this.userId);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddJobCardDialogComponent);
    dialogRef.componentInstance.parent = this;
  }

  getDate() {
    return `${this.day.date.getDate()}.${this.day.date.getMonth()}.${this.day.date.getFullYear()}`;
  }
}
