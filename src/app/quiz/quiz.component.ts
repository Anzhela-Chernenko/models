import {Component, OnInit} from '@angular/core';


import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  visibility: boolean = true;

  toggle() {
    this.visibility = !this.visibility;
  }

  constructor() { }

  ngOnInit() {}

  }
