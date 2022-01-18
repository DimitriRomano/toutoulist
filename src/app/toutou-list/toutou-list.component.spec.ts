import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutouListComponent } from './toutou-list.component';

describe('ToutouListComponent', () => {
  let component: ToutouListComponent;
  let fixture: ComponentFixture<ToutouListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutouListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutouListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
