import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardianUsername:string = '';
  guardianPassword:string = '';

  async validateLogin(){
    // const credentials:Credentials = {guardianUsername:this.guardianUsername,guardianPassword:this.guardianPassword}
    // const userToken:Token = await this.loginService.validateLogin(credentials)
    // if(userToken == null or if the status code is 404){tell them the login was invalid}
    // if(userToken.isTeacher){this.router.navigateByUrl("gradepage")}
    // if(userToken.isGuardian){this.router.navigateByUrl("studentpage")}
    // just for now, for testing
    alert(`Hey you attempted to login as ${this.guardianUsername} ${this.guardianPassword}`)
  }

}
