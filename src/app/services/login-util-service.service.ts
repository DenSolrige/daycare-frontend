import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUtilServiceService {

  constructor(private http:HttpClient) { }

  async login(json:string):Promise<string | null>{
    const observable = this.http.post<string>("http://localhost:8080/login", json, {observe: 'response'});
    const savedJson = firstValueFrom(observable);

    if((await savedJson).status == 400 || (await savedJson).status == 404){
      alert("Username or password is incorrect.");
      return null;
    }
    return (await savedJson).body;
  }
}
