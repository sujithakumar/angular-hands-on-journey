import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IfDirective } from './if-directive';

describe('IfDirective', () => {
  let component: IfDirective;
  let fixture: ComponentFixture<IfDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(IfDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
