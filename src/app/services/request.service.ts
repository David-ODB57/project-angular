import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap} from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrlApi: string = 'https://reseau.jdedev.fr/api/user';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage.getItem('token')}`
    })
  }

  constructor(private http: HttpClient) { }

  onInit() {

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrlApi, this.options).pipe(
      // Tap est comme un console.log pour observable
      tap((userList) => console.log(userList)),
      catchError(error => this.handleError(error, []))
    );
  }

  getOneUser(userId: number): Observable<User | undefined> {
    return this.http.get<User>(`${this.baseUrlApi}/${userId}`, this.options).pipe(
      tap(response => this.log(response)),
      catchError(error => this.handleError(error, undefined))
    )
  }

  updateUser(user: User): Observable<User | undefined> {
    console.log(localStorage.getItem('token'))
    console.log(this.options)
    return this.http.put<User>(`${this.baseUrlApi}/${user.id}`, user, this.options).pipe(
      tap(response => this.log(response)),
      catchError(error => this.handleError(error, undefined))
    )
  }

  private log(response: User[] | User | undefined) {
    console.table(response)
  }

  private handleError(error: Error, value: any) {
    // evite de faire planter l'app en retournant un tableau de users vide ou undefined
    // on ne connait pas le type de l'erreur retournée
    console.error(error);
    return of(value);
  }
}
