import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysTableComponent } from './days-table.component';

describe('DaysTableComponent', () => {
  let component: DaysTableComponent;
  let fixture: ComponentFixture<DaysTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
