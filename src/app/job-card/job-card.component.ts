import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IJob } from '../ijob';
import { JobType } from '../job-type.enum';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: IJob;

  @Output() updateColumn = new EventEmitter<void>();

  public isEdited = false;

  constructor(private jobService: JobService) { }

  ngOnInit() {
  }

  getJobType(): string {
    return this.job.jobType === JobType.Fulfill ? 'Выполню' : 'Проблема';
  }

  editJobCard(newJobName: string, newJobDescription: string, newTime: number): void {
    if (this.isEdited) {
      this.jobService.editJob(this.job.jobId, newJobName, newJobDescription, Number(newTime));
    }
    this.isEdited = !this.isEdited;
  }

  deleteJobCard(): void {
    this.jobService.deleteJob(this.job.jobId);
    this.updateColumn.emit();
  }

}
