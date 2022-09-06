import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/models/grade';
import { GradeUtilServiceService } from 'src/app/services/grade-util-service.service';
import { StudentIdDataService } from 'src/app/services/student-id-data.service';

@Component({
  selector: 'app-grade-table',
  templateUrl: './grade-table.component.html',
  styleUrls: ['./grade-table.component.css']
})
export class GradeTableComponent implements OnInit {

  constructor(private gradeService:GradeUtilServiceService, private studentIdData:StudentIdDataService) { }
  grades:Grade[] = [];
  studentId:number = this.studentIdData.studentId;
  note:string="";
  behavior:string = "";
  newId = 0;

  ngOnInit(): void {
     {
      this.getGradeByStudentId();
    };   
    
  }
  async createGrade() {
    const grade:Grade = {gradeId:0, studentId:this.studentId, note:this.note, timeReported:Math.round(Date.now() / 1000)
    , behavior:this.behavior};
    const newGrade:Grade = await this.gradeService.createGrade(grade);
    this.newId = newGrade.gradeId;
  }

  getGradeByStudentId() {
    if(this.studentId != 0) {
      (async () => {
        this.grades = await this.gradeService.getGradesByStudentId(this.studentId);
      })
    }
    
  }

  deleteGrade(id:number) {
    const confirm = window.confirm("Are you sure you want to delete this grade?\nPress OK to delete.")
    if(confirm) {
      this.gradeService.deleteGradeById(id);
      window.location.reload();
    }
  }
 
}
