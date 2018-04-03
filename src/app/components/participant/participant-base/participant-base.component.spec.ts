import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantBaseComponent } from './participant-base.component';

describe('ParticipantBaseComponent', () => {
  let component: ParticipantBaseComponent;
  let fixture: ComponentFixture<ParticipantBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
