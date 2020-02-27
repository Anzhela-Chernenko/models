import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Files} from './files';

@Injectable()
export class PostDeleteService {

  constructor(private http: HttpClient) { }

  postData(file: Files) {

    const body = {file: file.fileUrl};
    return this.http.post('http://localhost:3000/api/post/removeFile', body);
  }
}
