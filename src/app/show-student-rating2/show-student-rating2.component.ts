import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {MatPaginator, MatTable, MatTableDataSource} from '@angular/material';
import {AdminService} from '../admin.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-show-student-rating2',
  templateUrl: './show-student-rating2.component.html',
  styleUrls: ['./show-student-rating2.component.css']
})
export class ShowStudentRating2Component implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  displayedColumns = ['fullName', 'rating', 'edit'];
  dataSource = new MatTableDataSource();
  users: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('table') table: MatTable<any>;

  constructor(private adminservice: AdminService) { }



  ngOnInit() {
    this.adminservice.getStudent().pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      const ELEMENT_DATA = [];
      this.users = res;
      this.users.forEach(user => {
        const fullName = user.fullName;
        const rating = user.rating;
        ELEMENT_DATA.push({fullName, rating});
      });
      this.dataSource.data = ELEMENT_DATA;
      this.dataSource.paginator = this.paginator;
      console.log(ELEMENT_DATA);
    });
  }

  onDelete(element: any) {
    this.adminservice.deleteStudent(element.fullName, element.rating).pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      const ELEMENT_DATA = [];
      this.users = res;
      this.users.forEach(user => {
        const fullName = user.fullName;
        const rating = user.rating;
        ELEMENT_DATA.push({fullName, rating});
      });
      this.dataSource.data = ELEMENT_DATA;
      this.dataSource.paginator = this.paginator;
    });
  }

  onAdmin(element: any) {
    this.adminservice.makeAdmin(element.fullName).pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      const ELEMENT_DATA = [];
      this.users = res;
      this.users.forEach(user => {
        const fullName = user.fullName;
        const rating = user.rating;
        ELEMENT_DATA.push({fullName, rating});
      });
      this.dataSource.data = ELEMENT_DATA;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }




}
