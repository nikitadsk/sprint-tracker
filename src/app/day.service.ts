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
          userId: 1,
          jobName: 'Карточка разработчика',
          description: 'Требуется сделать карточку разработчика с такими полями, как Имя и Должность',
          jobType: JobType.Fulfill,
          time: 4,
        },
        {
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
    const index = this.getDayIdByDate(date);
    if (index !== -1) {
      this.days[index].jobs.push({
        userId,
        jobName,
        description,
        jobType,
        time,
      });
    }
  }

  public getJobsByUserId(id: number, date: Date): IJob[] | null {
    const index = this.getDayIdByDate(date);
    let result = null;
    if (index !== -1) {
      result = this.days[index].jobs.filter(job => job.userId === id);
    }
    return result;
  }

  public getDayIdByDate(date: Date): number {
    let id = -1;
    this.days.forEach((day, index) => {
      if (day.date.toString() === date.toString()) {
        id = index;
      }
    });
    return id;
  }

}
