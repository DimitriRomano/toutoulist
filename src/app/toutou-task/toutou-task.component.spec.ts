import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutouTaskComponent } from './toutou-task.component';

describe('ToutouTaskComponent', () => {
  let component: ToutouTaskComponent;
  let fixture: ComponentFixture<ToutouTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutouTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutouTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
