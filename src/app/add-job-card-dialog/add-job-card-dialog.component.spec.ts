import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobCardDialogComponent } from './add-job-card-dialog.component';

describe('AddJobCardDialogComponent', () => {
  let component: AddJobCardDialogComponent;
  let fixture: ComponentFixture<AddJobCardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobCardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
