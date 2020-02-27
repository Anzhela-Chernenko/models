import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdminService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  sendFile(fullName: string, fileUrl: string) {
    const fileData = {fullName, fileUrl};
    return this.http.post( 'http://localhost:3000/api/admin/send-file', fileData);
  }

  sendScore(fullName: string, rating: string) {
    const fileData = {fullName, rating};
    return this.http.post( this.url + '/api/admin/send-score', fileData);
  }

  getUsers() {
    return this.http.get(this.url + '/api/admin/users');
  }

  deleteUser(email: string) {
    const data = {email};
    return this.http.post(this.url + '/api/admin/delete-user', data);
  }

  makeAdmin(email: string) {
    const userData = {email};
    return this.http.post(this.url + '/api/admin/admin-user', userData);
  }

  getStudent() {
    return this.http.get(this.url + '/api/admin/score');
  }

  deleteStudent(fullName: string, rating: string) {
    const data = {fullName, rating};
    return this.http.post(this.url + '/api/admin/delete-student', data);
  }




}
