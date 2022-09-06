import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, observable } from 'rxjs';
import { Grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeUtilServiceService {

  constructor(private http:HttpClient) { }

  async createGrade(grade:Grade):Promise<Grade>{
    const observable = this.http.post<Grade>("http://localhost:8080/grades", grade);
    const savedGrade = firstValueFrom(observable);
    return savedGrade;
  }

  async getGradesByStudentId(id:number):Promise<Grade[]>{
    const observable = this.http.get<Grade[]>(`http://localhost:8080/students/${id}/grades`);
    const grades = firstValueFrom(observable);
    return grades;
  }

  async deleteGradeById(id:number){
    const observable = this.http.delete<Grade>(`http://localhost:8080/grades/${id}`)
    const grade = await firstValueFrom(observable);
  }
}
