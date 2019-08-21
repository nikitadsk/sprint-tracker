import { Component, OnInit } from '@angular/core';
import { DayService } from '../day.service';
import { IDay } from '../iday';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-days-table',
  templateUrl: './days-table.component.html',
  styleUrls: ['./days-table.component.css']
})
export class DaysTableComponent implements OnInit {

  public days: IDay[];
  public id: number;

  constructor(private dayService: DayService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => this.id = Number(params.id));
  }

  ngOnInit() {
    this.dayService.getDays().subscribe(days => this.days = days);
  }
}
