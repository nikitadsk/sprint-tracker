import { Component, OnInit } from '@angular/core';
import { DayService } from '../day.service';
import { IDay } from '../iday';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDayDialogComponent } from '../add-day-dialog/add-day-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-days-table',
  templateUrl: './days-table.component.html',
  styleUrls: ['./days-table.component.css']
})
export class DaysTableComponent implements OnInit {

  public days: IDay[];
  public userId: number;
  public projectId: number;

  constructor(private dayService: DayService, private activateRoute: ActivatedRoute, public dialog: MatDialog) {
    this.activateRoute.params.subscribe(params => {
      this.userId = Number(params.id);
    });
    this.activateRoute.parent.params.subscribe(params => this.projectId = Number(params.projectId));
  }

  ngOnInit() {
    this.updateDays();
  }

  updateDays() {
    this.days = this.dayService.getDays(this.projectId);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDayDialogComponent);
    dialogRef.componentInstance.parent = this;
  }
}
