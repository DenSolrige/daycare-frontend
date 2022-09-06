import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/models/grade';
import { GradeUtilServiceService } from 'src/app/services/grade-util-service.service';

@Component({
  selector: 'app-grade-table',
  templateUrl: './grade-table.component.html',
  styleUrls: ['./grade-table.component.css']
})
export class GradeTableComponent implements OnInit {

  constructor(private gradeService:GradeUtilServiceService) { }
  grades:Grade[] = [];
  studentId:number = 0;
  note:string="";
  timeReported:number = 0;
  behavior:string = "";
  newId = 0;

  ngOnInit(): void {
    (async () => {
    })();   
    
  }
  createGrade() {
    const grade:Grade = {gradeId:0, studentId:0, this.note}
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
