import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { JobService } from '../job.service';
import { JobType } from '../job-type.enum';
import { DayColumnComponent } from '../day-column/day-column.component';

@Component({
  selector: 'app-add-job-card-dialog',
  templateUrl: './add-job-card-dialog.component.html',
  styleUrls: ['./add-job-card-dialog.component.css']
})

export class AddJobCardDialogComponent implements OnInit {

  @Input() parent: DayColumnComponent;

  ngOnInit() {
  }

  constructor(public dialogRef: MatDialogRef<AddJobCardDialogComponent>, private jobService: JobService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  addJob(jobName: string, jobDescription: string, time: number, isProblem: boolean): void {
    this.jobService.addJob(
      this.parent.day.dayId,
      this.parent.userId,
      jobName,
      jobDescription,
      isProblem ? JobType.Problem : JobType.Fulfill,
      time
    );
    this.parent.updateColumn();
    this.onNoClick();
  }

}
