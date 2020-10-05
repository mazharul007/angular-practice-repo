import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { InstructorComponent } from './instructor.component';
import { AdminComponent } from './admin/admin.component';
import { CourseService } from './courses.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    InstructorComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
