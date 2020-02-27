import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-student-rating',
  templateUrl: './student-rating.component.html',
  styleUrls: ['./student-rating.component.css']
})
export class StudentRatingComponent implements OnInit {


  constructor(private http: HttpClient, private adminservice: AdminService) { }

  ngOnInit() {
  }

  onCreate(form: NgForm) {

    this.adminservice.sendScore(form.value.fullName, form.value.rating).subscribe(res => console.log(res));
    form.resetForm();
  }

}
