import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reusable } from './reusable';

describe('Reusable', () => {
  let component: Reusable;
  let fixture: ComponentFixture<Reusable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reusable],
    }).compileComponents();

    fixture = TestBed.createComponent(Reusable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
