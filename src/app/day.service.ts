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
      projectId: 1,
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

  public getDays(): Observable<IDay[]> {
    return of(this.days);
  }

}
