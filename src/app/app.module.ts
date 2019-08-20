import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { MatListModule, MatDividerModule, MatDialogModule, MatInputModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from './user.service';
import { UsersListComponent } from './users-list/users-list.component';
import { DaysTableComponent } from './days-table/days-table.component';
import { DayColumnComponent } from './day-column/day-column.component';
import { JobCardComponent } from './job-card/job-card.component';
import { AddJobCardDialogComponent } from './add-job-card-dialog/add-job-card-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserCardComponent,
    UsersListComponent,
    DaysTableComponent,
    DayColumnComponent,
    JobCardComponent,
    AddJobCardDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [AddJobCardDialogComponent],
})
export class AppModule { }
