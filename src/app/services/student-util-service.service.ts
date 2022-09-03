import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentUtilServiceService {

  constructor(private http:HttpClient) { }

  async getAllStudents():Promise<Student[]>{
    const observable = this.http.get<Student[]>("http://localhost:8080/students");
    const savedStudents = await firstValueFrom(observable);
    return savedStudents;
  }

  async createStudent(student:Student):Promise<Student>{
    const observable = this.http.post<Student>("http://localhost:8080/students", student);
    const savedStudent = firstValueFrom(observable);
    return savedStudent;
  }

  async deleteStudent(id:number){
    const observable = this.http.delete(`http://localhost:8080/students/${id}`);
    const savedStudent = await firstValueFrom(observable);
  }

  async getStudentByName(name:string):Promise<Student[]>{
    const observable = this.http.get<Student[]>(`http://localhost:8080/students?name=${name}`);
    const savedStudents = await firstValueFrom(observable);
    return savedStudents;
  }

}