import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsundertakenComponent } from './projectsundertaken.component';

describe('ProjectsundertakenComponent', () => {
  let component: ProjectsundertakenComponent;
  let fixture: ComponentFixture<ProjectsundertakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsundertakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsundertakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
