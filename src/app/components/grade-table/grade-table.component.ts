import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { GradeUtilServiceService } from 'src/app/services/grade-util-service.service';

  @Component({
  selector: 'app-grade-table',
  templateUrl: './grade-table.component.html',
  styleUrls: ['./grade-table.component.css']
})
export class GradeTableComponent implements OnInit {

  constructor(private gradeService:GradeUtilServiceService) { }

  ngOnInit(): void {
    (async() => {
      this.grade = await this.gradeService.createGrade(grade);
    })
  }

}
