import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Courses, Images, Reviews, Student, Users} from './db.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  getReviews(): Observable<Reviews> {
    return this.http.get<Reviews>(this.apiURL + '/reviews');
  }
  getUsers(): Observable<Users> {
    return this.http.get<Users>(this.apiURL + '/users');
  }
  newReview(newRev): Observable<Reviews> {
    return this.http.post<Reviews>(this.apiURL + '/reviews', JSON.stringify(newRev), this.httpOptions);
  }
  newUser(newUser): Observable<Users> {
    return this.http.post<Users>(this.apiURL + '/users', JSON.stringify(newUser), this.httpOptions);
  }
  // tslint:disable-next-line:typedef
  deleteUser(id) {
    return this.http.delete<Users>(this.apiURL + '/users/' + id);
  }
  // tslint:disable-next-line:typedef
  deleteReview(id) {
    return this.http.delete<Reviews>(this.apiURL + '/reviews/' + id);
  }
  getCourses(): Observable<Courses> {
    return this.http.get<Courses>(this.apiURL + '/courses');
  }
  newCourse(newCourse): Observable<Courses> {
    return this.http.post<Courses>(this.apiURL + '/courses', JSON.stringify(newCourse), this.httpOptions);
  }
  // tslint:disable-next-line:typedef
  deleteCourse(id) {
    return this.http.delete<Courses>(this.apiURL + '/courses/' + id);
  }
  updateCourse(id, course): Observable<Courses> {
    return this.http.put<Courses>(this.apiURL + '/courses/' + id, JSON.stringify(course), this.httpOptions);
  }
  newRecord(newrec): Observable<Student> {
    return this.http.post<Student>(this.apiURL + '/select', JSON.stringify(newrec), this.httpOptions);
  }

  getCourse(id): Observable<Courses> {
    return this.http.get<Courses>(this.apiURL + '/courses/' + id);
  }
  getImage(): Observable<Images> {
    return this.http.get<Images>(this.apiURL + '/images');
  }



}
