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

  ngOnInit(): void {
    (async () => {
    })();   
    
  }

  getGradeByStudentId(id:number) {
    
  }

  deleteGrade(id:number) {
    const confirm = window.confirm("Are you sure you want to delete this grade?\nPress OK to delete.")
    if(confirm) {
      this.gradeService.deleteGradeById(id);
      window.location.reload();
    }
  }
 
}
