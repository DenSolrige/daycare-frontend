import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentUtilServiceService } from 'src/app/services/student-util-service.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  constructor(private studentService:StudentUtilServiceService) { }

  students:Student[] = [];

  ngOnInit(): void {
    (async () =>{
      this.students = await this.studentService.getAllStudents();
    })();
  }

}
