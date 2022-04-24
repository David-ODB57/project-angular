import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { Connexion } from '../interfaces/connexion';
// import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrlApi: string = 'https://reseau.jdedev.fr/api/user/connect';
  options: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  isLogged = new BehaviorSubject<boolean>(false);

  
  constructor(private http: HttpClient, private router: Router) { }
  

        
  get isLoggedIn() {
    return this.isLogged.asObservable();
  }
  
  logout() {
    this.isLogged.next(false);
    this.router.navigate(['/login']);
  }
}
