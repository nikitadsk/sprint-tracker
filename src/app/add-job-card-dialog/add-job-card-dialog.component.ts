import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DayService } from '../day.service';
import { JobType } from '../job-type.enum';
import { DayColumnComponent } from '../day-column/day-column.component';

@Component({
  selector: 'app-add-job-card-dialog',
  templateUrl: './add-job-card-dialog.component.html',
  styleUrls: ['./add-job-card-dialog.component.css']
})

export class AddJobCardDialogComponent implements OnInit {

  @Input() parent: DayColumnComponent;

  public isError = false;

  ngOnInit() {
  }

  constructor(public dialogRef: MatDialogRef<AddJobCardDialogComponent>, private dayService: DayService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  addJob(jobName: string, jobDescription: string, time: number, isProblem: boolean): void {
    if (jobName && jobDescription && time) {
      this.dayService.addJob(
        this.parent.day.date,
        this.parent.id,
        jobName,
        jobDescription,
        isProblem ? JobType.Problem : JobType.Fulfill,
        time
      );
      this.parent.updateColumn();
      this.onNoClick();
    } else {
      this.isError = true;
    }
  }

}
