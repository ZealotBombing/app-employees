import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCharComponent } from './employees-char.component';

describe('EmployeesCharComponent', () => {
  let component: EmployeesCharComponent;
  let fixture: ComponentFixture<EmployeesCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesCharComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
