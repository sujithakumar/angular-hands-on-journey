import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchDirective } from './switch-directive';

describe('SwitchDirective', () => {
  let component: SwitchDirective;
  let fixture: ComponentFixture<SwitchDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
