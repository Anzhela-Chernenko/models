import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-practice-first',
  templateUrl: './send-practice-first.component.html',
  styleUrls: ['./send-practice-first.component.css']
})
export class SendPracticeFirstComponent implements OnInit {
  visibility: boolean = true;
  toggle() {
    this.visibility = !this.visibility;
  }
  constructor() { }

  ngOnInit() {
  }

}
