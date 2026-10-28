import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifecycleHooks } from './lifecycle-hooks';

describe('LifecycleHooks', () => {
  let component: LifecycleHooks;
  let fixture: ComponentFixture<LifecycleHooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleHooks],
    }).compileComponents();

    fixture = TestBed.createComponent(LifecycleHooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
