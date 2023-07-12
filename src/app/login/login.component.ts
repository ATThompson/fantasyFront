import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../security.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  redirectUrl:string;

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
  }

  login() {
    this.securityService.login();
  }

  loginState() {
    this.securityService.loginStateless().subscribe(data =>{
       this.redirectUrl = data.redirectUrl
      });
    console.log(this.redirectUrl)
    let uri = this.redirectUrl.match(/.*redirect_uri=/gm)[0]+"https://localhost:4200/callback"
    console.log(uri)
    this.securityService.fetchTokenStateless(uri).subscribe(console.log);
    //window.open(uri);
  }
}
