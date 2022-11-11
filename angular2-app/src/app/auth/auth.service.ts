import { Injectable } from '@angular/core';
import { RegisterAuth } from './register-auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  signup(obj: RegisterAuth) {
    console.log(obj);
  }
}
