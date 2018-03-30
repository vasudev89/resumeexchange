import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumecomponentsComponent } from './resumecomponents.component';

describe('ResumecomponentsComponent', () => {
  let component: ResumecomponentsComponent;
  let fixture: ComponentFixture<ResumecomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumecomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumecomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
