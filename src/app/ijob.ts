import { JobType } from './job-type.enum';

export interface IJob {
  userId: number;
  jobName: string;
  description: string;
  jobType: JobType;
  time: number;
}
