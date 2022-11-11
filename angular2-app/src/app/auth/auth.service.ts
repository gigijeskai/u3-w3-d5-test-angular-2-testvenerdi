import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterAuth } from './register-auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(obj: RegisterAuth) {
    return this.http.post('http://localhost:3000/users', obj);
  }
}
