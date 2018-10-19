import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborsOComponent } from './labors.component';

describe('LaborsOComponent', () => {
  let component: LaborsOComponent;
  let fixture: ComponentFixture<LaborsOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborsOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborsOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
