import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent {
  public course = [];

  // constructor(private _courseService : CourseService){
  //   this.course = _courseService.getCourseInfo()
  //   this for raw data  returning from service
  // }
 
   constructor(private _courseService:CourseService){
    this._courseService.getCourseInfo().subscribe(res => this.course = res)
   }

}
