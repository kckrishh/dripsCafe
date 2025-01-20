import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WokringHoursComponent } from './wokring-hours.component';

describe('WokringHoursComponent', () => {
  let component: WokringHoursComponent;
  let fixture: ComponentFixture<WokringHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WokringHoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WokringHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
