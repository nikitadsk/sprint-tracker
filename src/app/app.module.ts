import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { DayService } from './day.service';

const appRoutes: Routes = [
  { path: 'developers/:id', component: DaysTableComponent },
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
  ],
  providers: [UserService, DayService],
  bootstrap: [AppComponent],
  entryComponents: [AddJobCardDialogComponent],
})
export class AppModule { }
