import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ang22 } from './ang22';

describe('Ang22', () => {
  let component: Ang22;
  let fixture: ComponentFixture<Ang22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ang22],
    }).compileComponents();

    fixture = TestBed.createComponent(Ang22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
