import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterploationComponent } from './interploation.component';

describe('InterploationComponent', () => {
  let component: InterploationComponent;
  let fixture: ComponentFixture<InterploationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterploationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterploationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
