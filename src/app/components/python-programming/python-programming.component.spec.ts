import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonProgrammingComponent } from './python-programming.component';

describe('PythonProgrammingComponent', () => {
  let component: PythonProgrammingComponent;
  let fixture: ComponentFixture<PythonProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PythonProgrammingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
