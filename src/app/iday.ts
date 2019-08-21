import { IJob } from './ijob';

export interface IDay {
  date: Date;
  jobs: IJob[];
}
