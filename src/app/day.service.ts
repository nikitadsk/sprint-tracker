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
    },
    {
      dayId: 2,
      date: new Date(2019, 8, 20),
    },
    {
      dayId: 3,
      date: new Date(2019, 8, 21),
    },
    {
      dayId: 4,
      date: new Date(2019, 8, 22),
    },
    {
      dayId: 5,
      date: new Date(2019, 8, 23),
    },
  ];

  constructor() {
  }

  public getDays(): Observable<IDay[]> {
    return of(this.days);
  }

}
