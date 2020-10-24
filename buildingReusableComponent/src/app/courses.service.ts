import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses(){
    return ["PHP","Python","JS","Swift"];
  }
  constructor() { }
}
