import { Injectable } from '@angular/core';
import { IDay } from './iday';
import { JobType } from './job-type.enum';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  private days: IDay[] = [
    {
      dayId: 1,
      date: new Date(2019, 8, 19),
      projectId: 1,
    },
    {
      dayId: 2,
      date: new Date(2019, 8, 20),
      projectId: 1,
    },
    {
      dayId: 3,
      date: new Date(2019, 8, 21),
      projectId: 2,
    },
    {
      dayId: 4,
      date: new Date(2019, 8, 22),
      projectId: 1,
    },
    {
      dayId: 5,
      date: new Date(2019, 8, 23),
      projectId: 1,
    },
  ];

  constructor() {
  }

  public getDays(projectId): IDay[] {
    return this.days.filter(day => day.projectId === projectId).sort();
  }

  public addDay(day: number, month: number, year: number, projectId: number): void {
    this.days.push({
      dayId: this.days[this.days.length - 1].dayId + 1,
      date: new Date(year, month, day),
      projectId
    });
  }

}
