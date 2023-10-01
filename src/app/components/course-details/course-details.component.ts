import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  constructor(private _courseService: CourseService){
    this._courseService.getCourseInfo().subscribe(res => this.course = res)
  }
  public course = [];
}
