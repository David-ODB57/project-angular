import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
baseUrlApi: string = 'https://reseau.jdedev.fr/api/article';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage.getItem('token')}`
    })
  }
  constructor(private http: HttpClient) { }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.baseUrlApi, this.options).pipe(
  //     // Tap est comme un console.log pour observable
  //     tap((userList) => console.log(userList)),
  //     catchError(error => this.handleError(error, []))
  //   );
  // }
}
