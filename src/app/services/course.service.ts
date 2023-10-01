import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private _http: HttpClient) {}
  private _url = '../../assets/data/courseData.json';
  getCourseInfo(): Observable<any> {
    return this._http.get<any>(this._url);
  }
}
