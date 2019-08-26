import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IJob } from '../ijob';
import { JobType } from '../job-type.enum';
import { DayService } from '../day.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: IJob;
  @Input() date: Date;

  @Output() updateInfo = new EventEmitter<void>();

  public isEdited = false;

  constructor(private dayService: DayService) { }

  ngOnInit() {
  }

  getJobType(): string {
    return this.job.jobType === JobType.Fulfill ? 'Выполню' : 'Проблема';
  }

  editJobCard(newJobName: string, newJobDescription: string, newTime: number): void {
    if (this.isEdited) {
      this.dayService.editJobInfo(this.date, this.job.jobId, newJobName, newJobDescription, Number(newTime));
    }
    this.isEdited = !this.isEdited;
  }

  deleteJobCard(): void {
    this.dayService.deleteJob(this.date, this.job.jobId);
    this.updateInfo.emit();
  }

}
