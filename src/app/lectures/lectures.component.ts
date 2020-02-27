import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lectures',
  styleUrls: ['./lectures.component.css'],
  templateUrl: './lectures.component.html'
})
export class LecturesComponent implements OnInit {
  visibility: boolean = true;
  visibility1: boolean = true;
  toggle() {
    this.visibility = !this.visibility;
  }
  toggle1() {
    this.visibility1 = !this.visibility1;
  }



  constructor() { }

  ngOnInit() {
  }

}







