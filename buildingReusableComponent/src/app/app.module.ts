import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavComponent } from './fav/fav.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    FavComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
