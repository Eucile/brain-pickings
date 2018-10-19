import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoComponent } from './also.component';

describe('AlsoComponent', () => {
  let component: AlsoComponent;
  let fixture: ComponentFixture<AlsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
