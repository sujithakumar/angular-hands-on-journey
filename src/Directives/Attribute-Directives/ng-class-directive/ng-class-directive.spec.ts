import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgClassDirective } from './ng-class-directive';

describe('NgClassDirective', () => {
  let component: NgClassDirective;
  let fixture: ComponentFixture<NgClassDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(NgClassDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
