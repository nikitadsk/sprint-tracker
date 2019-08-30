import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DayService } from '../day.service';
import { DaysTableComponent } from '../days-table/days-table.component';

@Component({
  selector: 'app-add-day-dialog',
  templateUrl: './add-day-dialog.component.html',
  styleUrls: ['./add-day-dialog.component.css']
})

export class AddDayDialogComponent implements OnInit {

  @Input() parent: DaysTableComponent;

  constructor(public dialogRef: MatDialogRef<AddDayDialogComponent>, private dayService: DayService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addDay(date): void {
    const [ month, day, year ] = date.split('/');
    this.dayService.addDay(day, month, year, this.parent.projectId);
    this.parent.updateDays();

    this.onNoClick();
  }

}
