import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { BasicComponent } from './components/basic/basic.component';
import { CareerobjectiveComponent } from './components/careerobjective/careerobjective.component';
import { AcademicsComponent } from './components/academics/academics.component';
import { ProjectsundertakenComponent } from './components/projectsundertaken/projectsundertaken.component';
import { CareerComponent } from './components/career/career.component';
import { ProjectsundertakencomponentComponent } from './components/projectsundertakencomponent/projectsundertakencomponent.component';
import { ResumecomponentsComponent } from './components/resumecomponents/resumecomponents.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExtracurricularComponent } from './components/extracurricular/extracurricular.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { AwardsandrecognitionComponent } from './components/awardsandrecognition/awardsandrecognition.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BasicComponent,
    CareerobjectiveComponent,
    AcademicsComponent,
    ProjectsundertakenComponent,
    CareerComponent,
    ProjectsundertakencomponentComponent,
    ResumecomponentsComponent,
    SkillsComponent,
    ExtracurricularComponent,
    HobbiesComponent,
    AwardsandrecognitionComponent
  ],
  imports: [
    BrowserModule
    , FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
