import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsundertakencomponentComponent } from './projectsundertakencomponent.component';

describe('ProjectsundertakencomponentComponent', () => {
  let component: ProjectsundertakencomponentComponent;
  let fixture: ComponentFixture<ProjectsundertakencomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsundertakencomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsundertakencomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
