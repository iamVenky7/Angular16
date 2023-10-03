import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private _http: HttpClient) {}
  private _url = '../../assets/data/courseData.json';
  getCourseInfo(): Observable<any> {
    return this._http.get<any>(this._url).pipe(catchError(this.IncomingError));
  }

  IncomingError(err: HttpErrorResponse){
    return throwError(err.message)
  }
}
