import { Component, OnInit } from '@angular/core';
import {DbService} from '../db.service'
import {Student} from '../student'
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[DbService]
})
export class ProfileComponent implements OnInit {
  student:Student;
  constructor(private studService:DbService, private profRoute:ActivatedRoute) {
    //this.student=studService.studentList[0];
      
    console.log(this.student);
   }

  ngOnInit() {
    this.profRoute.params.subscribe(params=>this.student=this.studService.getStudent(params['id']));
    //  this.profRoute.params.switchMap(params=>this.studService.getStudent(params['id'])).
    // subscribe(student=>this.student=student);
    // console.log(this.student);
  }

}
