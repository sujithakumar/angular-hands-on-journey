import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoPage } from './no-page';

describe('NoPage', () => {
  let component: NoPage;
  let fixture: ComponentFixture<NoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
