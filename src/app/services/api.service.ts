import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCareers(text: string) {
    return this.http.get('http://localhost:3000/search', {
      params: {text}
    }).pipe(
      catchError(err => of([]))
    );
  }
  
  getCareerBySlug(slug: string) {
    return this.http.get(`http://localhost:3000/profile/${slug}`).pipe(
      catchError(err => of([]))
    );
  }

}
