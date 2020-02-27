import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  url = 'http://localhost:3000';
  path = 'http://localhost:3000/uploads/';

  tokenTimer: any;

  isAdmin = new Subject();
  authenticated = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) { }

  changeAdmin(data: any) {
    this.isAdmin.next(data);
  }

  createUser(email: string, password: string) {
    const authData = {email, password};
    return this.http.post(this.url + '/api/user/signup', authData);
  }

  loginUser(email: string, password: string) {
    const authData = {email, password};
    return this.http.post<{token: string, expiresIn: any, admin: any}>( this.url + '/api/user/login', authData);

  }

  setTimer(duration: any) {
    this.tokenTimer = setTimeout(() => {this.onLogout() }, duration * 1000);
  }



  saveuserData(token: string, expiration: Date, admin: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expiration.toString());
    localStorage.setItem('admin', admin);
  }

  onLogout() {
    this.authenticated.next(false);
    clearTimeout(this.tokenTimer);
    this.changeAdmin(0);
    localStorage.removeAll();
    this.router.navigate(['']);
  }

  getuserData() {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');
    const admin = localStorage.getItem('admin');
    if (!token || !expiration) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expiration),
      admin
    };
  }


}
