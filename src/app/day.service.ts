import { Injectable } from '@angular/core';
import { IDay } from './iday';
import { IJob } from './ijob';
import { JobType } from './job-type.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  private days: IDay[] = [
    {
      date: new Date(2019, 8, 19),
      jobs: [
        {
          jobId: 1,
          userId: 1,
          jobName: 'Карточка разработчика',
          description: 'Требуется сделать карточку разработчика с такими полями, как Имя и Должность',
          jobType: JobType.Fulfill,
          time: 4,
        },
        {
          jobId: 2,
          userId: 1,
          jobName: 'Высота полей',
          description: 'Требуется исправить высоту полей',
          jobType: JobType.Problem,
          time: 1,
        },
      ],
    },
    {
      date: new Date(2019, 8, 20),
      jobs: [
        {
          jobId: 1,
          userId: 2,
          jobName: 'Создание компонентов',
          description: 'Требуется создать следующие компоненты: Таблица дней, карточка дня, карточка работы',
          jobType: JobType.Fulfill,
          time: 8,
        },
      ],
    },
    {
      date: new Date(2019, 8, 21),
      jobs: [
        {
          jobId: 1,
          userId: 1,
          jobName: 'Динамическое изменение информации',
          description: 'Требуется сделать так, чтобы информация в компонентах изменялась в зависимости от данных',
          jobType: JobType.Fulfill,
          time: 4,
        },
      ],
    },
    {
      date: new Date(2019, 8, 22),
      jobs: [],
    },
    {
      date: new Date(2019, 8, 23),
      jobs: [],
    },
  ];

  constructor() {
  }

  public getDays(): Observable<IDay[]> {
    return of(this.days);
  }

  public addJob(date: Date, userId: number, jobName: string, description: string, jobType: JobType, time: number): void {
    const index = this.getDayIndexByDate(date);
    if (index !== -1) {
      this.days[index].jobs.push({
        jobId: this.days[index].jobs ? this.days[index].jobs[this.days[index].jobs.length - 1].jobId + 1 : 1,
        userId,
        jobName,
        description,
        jobType,
        time,
      });
    }
  }

  public editJobInfo(date: Date, jobId: number, newJobName: string, newJobDescription: string, newTime: number) {
    const dayIndex = this.getDayIndexByDate(date);
    const jobIndex = this.getJobIndexByJobId(dayIndex, jobId);

    this.days[dayIndex].jobs[jobIndex].jobName = newJobName;
    this.days[dayIndex].jobs[jobIndex].description = newJobDescription;
    this.days[dayIndex].jobs[jobIndex].time = newTime;

  }

  public deleteJob(date: Date, jobId: number): void {
    const dayIndex = this.getDayIndexByDate(date);
    const jobIndex = this.getJobIndexByJobId(dayIndex, jobId);

    this.days[dayIndex].jobs.splice(jobIndex, 1);
  }

  public getJobsByUserId(id: number, date: Date): IJob[] | null {
    const index = this.getDayIndexByDate(date);
    let result = null;
    if (index !== -1) {
      result = this.days[index].jobs.filter(job => job.userId === id);
    }
    return result;
  }

  private getDayIndexByDate(date: Date): number {
    let id = -1;
    this.days.forEach((day, index) => {
      if (day.date.toString() === date.toString()) {
        id = index;
      }
    });
    return id;
  }

  private getJobIndexByJobId(dayIndex: number, jobId: number) {

    let index = -1;

    this.days[dayIndex].jobs.forEach((job, jobIndex) => {
      if (job.jobId === jobId) {
        index = jobIndex;
      }
    });

    return index;
  }

}
