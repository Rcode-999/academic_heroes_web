import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicsMasteryComponent } from './mathematics-mastery.component';

describe('MathematicsMasteryComponent', () => {
  let component: MathematicsMasteryComponent;
  let fixture: ComponentFixture<MathematicsMasteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MathematicsMasteryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathematicsMasteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
