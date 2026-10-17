import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForDirective } from './for-directive';

describe('ForDirective', () => {
  let component: ForDirective;
  let fixture: ComponentFixture<ForDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(ForDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
