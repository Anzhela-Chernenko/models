import {Component,  OnInit} from '@angular/core';
import { ShowPostService } from './check-practice1.service';
import {Files} from './files';
import {PostDeleteService} from './post-delete.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-check-practice1',
  templateUrl: './check-practice1.component.html',
  styleUrls: ['./check-practice1.component.css'],
  providers: [ ShowPostService, PostDeleteService ]
})
export class CheckPractice1Component implements OnInit {
  public files: any [];

  constructor(private showPostService: ShowPostService, private PostDeleteService: PostDeleteService) { }

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost(){
    this.showPostService.getAllPost().subscribe(result => {
      this.files = result['data'];
    });
  }

  file: Files=new Files();
  receivedUser: Files;
  done: boolean = false;

  submit(file: Files) {
    this.PostDeleteService.postData(file)
      .subscribe(
        (data: Files) => this.getAllPost(),
        error => console.log(error)
      );
  }
  public activeItem: string;

  public onSelectItem(item: string): void {
    this.activeItem = item;
  }
}

