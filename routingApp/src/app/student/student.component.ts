import { Component, OnInit } from '@angular/core';
import {DbService} from '../db.service'
import {Student} from '../student'

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[DbService]
})
export class StudentComponent implements OnInit {
   students:Student[];
   selected:boolean;
  constructor(private studService:DbService) {
 //   this.studService.getData().then(students=>this.students=students);
 this.students= this.studService.getData();
 this.selected=true;
  }

  onSelected(){
    this.selected=false;
  }
  ngOnInit() {
  }

  ngOnDestroy(){
    this.selected=true;
  }

}
