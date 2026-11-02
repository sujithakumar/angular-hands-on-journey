import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildB } from './child-b';

describe('ChildB', () => {
  let component: ChildB;
  let fixture: ComponentFixture<ChildB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildB],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
