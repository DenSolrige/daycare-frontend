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
  grade!: Grade;
  ngOnInit(): void {
    (async () => {
    this.grade = await this.gradeService.createGrade(this.grade);
    })();   
    
  }

}
