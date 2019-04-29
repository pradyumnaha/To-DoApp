import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  credentials;
  authSuccess = false;
  loginClicked = false;
  enteredPassword: string = "";
  enteredEmail: string = "";

  constructor(private router: Router, private route:ActivatedRoute, private loginService: LoginService, private dataService: DataService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'Email': new FormControl(null, [Validators.required,Validators.email]),
      'Password': new FormControl(null, [Validators.required])
    });
    //document.getElementById("authValidationMsg").style.display = "none";
  }

  onLogin(){
    this.loginClicked = true;     

    this.credentials = this.loginService.getCredentials();
    for(let i=0; i<this.credentials.length; i++){
      if(this.credentials[i].email == this.enteredEmail && this.credentials[i].password == this.enteredPassword){
        const queryParams = {
          userName: this.credentials[i].userName
        }
        this.dataService.sendUserName(this.credentials[i].userName);
        // this.dataService.getUserName().subscribe(name => {
        //   console.log(`Name val is ${name}`);
        // });
        this.authSuccess = true;
        this.dataService.setLoggedIn(true);
        this.router.navigate(['/to-do-list'], {queryParams});
      }
    }
    // if(!this.authSuccess){
    //   alert("Authentication failed: Please check email and password");
    // }
    // console.log(this.credentials);
    // if(this.credentials.includes({email: "pradyu@gmail.com", password: "password1"})){
    //   this.router.navigate(['/to-do-list']);
    // }

  
  }

}
