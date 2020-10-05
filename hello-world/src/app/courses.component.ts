import { Component } from "@angular/core";
import { CourseService } from './courses.service';

@Component({
    selector:"courses",
    template:`
    <h2>Courses Component</h2>
    <h3>List of courses</h3>
    <ul>
        <li *ngFor="let course of courses">
            {{ course}}
        </li>
    </ul>
    
    `
})
export class CoursesComponent{

    courses;

    constructor(service:CourseService){

        this.courses = service.getCourseList();
    }
}