import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {// 3rd execution

  aim = 'Your perfect banking partner';
  accounts = "Enter Your Account Number Here";
  acno = '';
  pswd = '';
  constructor(private router:Router, private ds:DataService) {} // first execution

  ngOnInit(): void {// life cycle hooks - initial process  // second execution
  }


 // Here you can add user defined functions 
 //userdefined function() // 4th execution

 acnoChange(event:any){
  //console.log(event)
  console.log(event.target.value);
  this.acno = event.target.value;
  }
  pswdChange(event:any){
    //console.log(event)
    console.log(event.target.value);
    this.pswd = event.target.value;
    }

    login(){
      //   alert('Login Clicked . . . ');
    var acno = this.acno; //1000
    var pswd = this.pswd; //1000
    
   const result = this.ds.login(acno,pswd);

   if(result){
    alert('login successfull -');
    this.router.navigateByUrl('dashboard');
   }
     }



/*  login(){
  //   alert('Login Clicked . . . ');
var acno = this.acno;
var pswd = this.pswd;

var userDetails = this.userDetails;

if(acno in userDetails){
  if(pswd==userDetails[acno]['password']){
   alert("login successfull");
    
  }else{
    alert("Incorrect Password")
  }

}else{
  alert("user does not exist");
}
} */

}
