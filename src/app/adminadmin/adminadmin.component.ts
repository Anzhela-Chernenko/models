import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-adminadmin',
  templateUrl: './adminadmin.component.html',
  styleUrls: ['./adminadmin.component.css']
})
export class AdminadminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onlogin(form: NgForm) {
    console.log(form.value.email);
  }

}
