import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-send-file-from-student',
  templateUrl: './send-file-from-student.component.html',
  styleUrls: ['./send-file-from-student.component.css']
})
export class SendFileFromStudentComponent implements OnInit {

  selectedFile: File = null;
  fd = new FormData();

  constructor(private http: HttpClient, private adminservice: AdminService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    const now = new Date();
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post(  'http://localhost:3000/api/admin/save-file', this.fd).subscribe(res => console.log(res));

  }

  onCreate(form: NgForm) {
    const filename = this.selectedFile.name;
    this.adminservice.sendFile(form.value.fullName,  filename).subscribe(res => console.log(res));
    form.resetForm();
  }

}
