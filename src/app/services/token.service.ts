import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: string = "";

  constructor() { }

  getToken(): string {
    return this.token;
  }

  setToken(val: string) {
    this.token = val;
  }
}
