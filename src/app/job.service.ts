import { Injectable } from '@angular/core';
import { IJob } from './ijob';
import { JobType } from './job-type.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobs: IJob[] = [
    {
      dayId: 1,
      userId: 1,
      jobId: 1,
      jobName: 'Создать компонент списка человек',
      description: 'Требуется создать компонент списка человек с полями "Имя" и "Должность"',
      jobType: JobType.Fulfill,
      time: 2,
    },
    {
      dayId: 1,
      userId: 2,
      jobId: 2,
      jobName: 'Создать компонент таблицы дней',
      description: 'Требуется создать компонент таблицы дней, в котором будут располагаться карточки дней',
      jobType: JobType.Fulfill,
      time: 2,
    },
    {
      dayId: 3,
      userId: 1,
      jobId: 3,
      jobName: 'Получение необходимой информации и сервиса',
      description: 'Не получается получить информацию из сервиса по неизвестным причинам',
      jobType: JobType.Problem,
      time: 2,
    },
  ];

  constructor() { }

  public getJobs(dayId: number, userId: number): IJob[] {
    return this.jobs.filter((job) => job.dayId === dayId && job.userId === userId);
  }

  public addJob(dayId: number, userId: number, jobName: string, description: string, jobType: JobType, time: number): void {
    this.jobs.push(
      {
        dayId,
        userId,
        jobId: this.jobs ? this.jobs[this.jobs.length - 1].jobId + 1 : 1,
        jobName,
        description,
        jobType,
        time,
      }
    );
  }

  public editJob(jobId: number, newJobName: string, newJobDescription: string, newTime: number): void {
    this.jobs[jobId - 1] = {
      dayId: this.jobs[jobId - 1].dayId,
      userId: this.jobs[jobId - 1].userId,
      jobId: this.jobs[jobId - 1].jobId,
      jobName: newJobName,
      description: newJobDescription,
      jobType: this.jobs[jobId - 1].jobType,
      time: newTime,
    };
  }

  public deleteJob(jobId: number): void {
    this.jobs.splice(jobId - 1, 1);
  }
}
