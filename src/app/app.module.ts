import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { MatListModule, MatDividerModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from './user.service';
import { UsersListComponent } from './users-list/users-list.component';
import { DaysTableComponent } from './days-table/days-table.component';
import { DayColumnComponent } from './day-column/day-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserCardComponent,
    UsersListComponent,
    DaysTableComponent,
    DayColumnComponent,
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
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }