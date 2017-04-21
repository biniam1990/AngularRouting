import { Injectable } from '@angular/core';
import {Student} from './student'
import {studData} from './mock-studentData'
@Injectable()
export class DbService {

  constructor() { }

studentList :Student[]=studData;
  getData():Student[]{
     //  return new Promise((res,rej)=>res(this.studentList));
    return this.studentList;
  }

  getStudent(id:string):Student{
      // return this.getData().then(students=>students.find(student=>id==student.id));
      return this.getData().find(student=>id==student.id);
  }

}
