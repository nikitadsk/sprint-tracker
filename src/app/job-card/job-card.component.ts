import { Component, OnInit, Input } from '@angular/core';
import { IJob } from '../ijob';
import { JobType } from '../job-type.enum';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: IJob;

  constructor() { }

  ngOnInit() {
  }

  getJobType() {
    return this.job.jobType === JobType.Fulfill ? 'Выполню' : 'Проблема';
  }

}
