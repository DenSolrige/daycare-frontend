import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Student } from '../models/student';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class StudentUtilServiceService {

  constructor(private http:HttpClient, private userInfo:UserInfoService) { }
  
  authString = String(localStorage.getItem(`userInfo`)).replace(/"/g, "");

  async getAllStudents():Promise<Student[]>{
    const headers = new HttpHeaders().set('auth', this.authString).set('Content-Type', 'application/json');
    console.log(headers.get('auth'));
    const observable = this.http.get<Student[]>("http://localhost:8080/students", {headers: headers});
    const savedStudents = await firstValueFrom(observable);
    return savedStudents;
  }

  async createStudent(student:Student):Promise<Student>{
    const headers = new HttpHeaders().set('auth', this.authString).set('Content-Type', 'application/json');
    const observable = this.http.post<Student>("http://localhost:8080/students", student, {headers: headers});
    const savedStudent = firstValueFrom(observable);
    return savedStudent;
  }

  async deleteStudent(id:number){
      const headers = new HttpHeaders().set('auth', this.authString).set('Content-Type', 'application/json');
      const observable = this.http.delete(`http://localhost:8080/students/${id}`, {headers: headers});
      const savedStudent = await firstValueFrom(observable);
  }
  
  async getStudentByName(name:string):Promise<Student[]>{
    const headers = new HttpHeaders().set('auth', this.authString).set('Content-Type', 'application/json');
    const observable = this.http.get<Student[]>(`http://localhost:8080/students?name=${name}`, {headers: headers});
    const savedStudents = await firstValueFrom(observable);
    return savedStudents;
  }

}