import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule, MatNativeDateModule } from '@angular/material';
import { MatListModule, MatDividerModule, MatDialogModule, MatInputModule, MatDatepickerModule } from '@angular/material';
import { MatSlideToggleModule }from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from './user.service';
import { UsersListComponent } from './users-list/users-list.component';
import { DaysTableComponent } from './days-table/days-table.component';
import { DayColumnComponent } from './day-column/day-column.component';
import { JobCardComponent } from './job-card/job-card.component';
import { AddJobCardDialogComponent } from './add-job-card-dialog/add-job-card-dialog.component';
import { DayService } from './day.service';
import { JobService } from './job.service';
import { ProjectService } from './project.service';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { ContentBlockComponent } from './content-block/content-block.component';
import { AddDayDialogComponent } from './add-day-dialog/add-day-dialog.component';

const dayRoutes: Routes = [
  { path: 'developers/:id', component: DaysTableComponent },
];

const appRoutes: Routes = [
  { path: 'projects/:projectId', component: ContentBlockComponent, children: dayRoutes },
  { path: '**', redirectTo: '' }
];

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
    AddUserDialogComponent,
    ContentBlockComponent,
    AddDayDialogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
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
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [UserService, DayService, JobService, ProjectService],
  bootstrap: [AppComponent],
  entryComponents: [AddJobCardDialogComponent, AddUserDialogComponent, AddDayDialogComponent],
})
export class AppModule { }
