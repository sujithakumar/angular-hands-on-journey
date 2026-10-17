import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgStyleDirective } from './ng-style-directive';

describe('NgStyleDirective', () => {
  let component: NgStyleDirective;
  let fixture: ComponentFixture<NgStyleDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyleDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(NgStyleDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
