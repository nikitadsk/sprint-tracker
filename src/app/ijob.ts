import { JobType } from './job-type.enum';

export interface IJob {
  dayId: number;
  userId: number;
  jobId: number;
  jobName: string;
  description: string;
  jobType: JobType;
  time: number;
}
