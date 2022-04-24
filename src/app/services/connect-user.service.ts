import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { Connexion } from '../interfaces/connexion';

@Injectable({
  providedIn: 'root'
})
export class ConnectUserService {
  baseUrlApi: string = 'https://reseau.jdedev.fr/api/user/connect';
  options: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(user: Connexion) {
    return this.http.post<Connexion>(this.baseUrlApi, user, this.options).pipe(
      tap(response => {
        console.table(response);
      }),
      catchError((error) => {
        console.error(error)
        return of("");
      })
    );
  }

  logout() {
    this.router.navigate(['/']);
  }
}
