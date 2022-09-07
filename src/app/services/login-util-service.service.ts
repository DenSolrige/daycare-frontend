import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUtilServiceService {

  constructor(private http:HttpClient) { }

  async login(json:string):Promise<string | null>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const observable = this.http.post<string>("http://localhost:8080/login", json, {observe: 'response', headers: headers});
    const savedJson = firstValueFrom(observable);

    if((await savedJson).status == 400 || (await savedJson).status == 404){
      alert("Username or password is incorrect.");
      return null;
    }
    return (await savedJson).body;
  }
}
