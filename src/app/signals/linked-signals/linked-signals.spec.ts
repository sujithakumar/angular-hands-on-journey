import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkedSignals } from './linked-signals';

describe('LinkedSignals', () => {
  let component: LinkedSignals;
  let fixture: ComponentFixture<LinkedSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkedSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
