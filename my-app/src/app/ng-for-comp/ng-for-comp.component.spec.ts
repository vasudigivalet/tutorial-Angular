import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForCompComponent } from './ng-for-comp.component';

describe('NgForCompComponent', () => {
  let component: NgForCompComponent;
  let fixture: ComponentFixture<NgForCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
