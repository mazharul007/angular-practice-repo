import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { InstructorComponent } from './instructor.component';
import { AdminComponent } from './admin/admin.component';
import { CourseService } from './courses.service';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { BootstrapInstallationTestComponent } from './bootstrap-installation-test/bootstrap-installation-test.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { FormsModule } from '@angular/forms';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RoutingComponent } from './routing/routing.component';
import { ListService } from './list.service';

import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    InstructorComponent,
    AdminComponent,
    PropertyBindingComponent,
    BootstrapInstallationTestComponent,
    TwoWayBindComponent,
    CustomPipePipe,
    ContactFormComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [CourseService,ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
