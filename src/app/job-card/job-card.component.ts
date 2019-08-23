import { Component, OnInit, Input } from '@angular/core';
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

  public isEdited = false;

  constructor(private dayService: DayService) { }

  ngOnInit() {
  }

  getJobType() {
    return this.job.jobType === JobType.Fulfill ? 'Выполню' : 'Проблема';
  }

  editJobCard(newJobName: string, newJobDescription: string, newTime: number) {
    if (this.isEdited) {
      this.dayService.editJobInfo(this.date, this.job.jobId, newJobName, newJobDescription, Number(newTime));
    }
    this.isEdited = !this.isEdited;
  }

}
