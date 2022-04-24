import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Register } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  urlApi: string = 'https://reseau.jdedev.fr/api/user';
  options: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

   register(newUser: Register): Observable<Register | undefined> {
     return this.http.post<Register>(this.urlApi, newUser, this.options).pipe(
       tap(val => console.table(val)),
       catchError((error) => {
         console.error(error)
        return of(undefined);
      })
    );
   }
}
