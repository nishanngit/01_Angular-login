import { Component, OnInit } from '@angular/core';

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
  constructor() { } // first execution

  ngOnInit(): void {// life cycle hooks - initial process  // second execution
  }


 userDetails:any={  //object of objects  ..... database details......
  1000:{acno:1000,username:'Gopik',password:1000,balance:10000},
  1001:{acno:1001,username:'Soja',password:1001,balance:10000},
  1002:{acno:1002,username:'Abhijith',password:1002,balance:10000},
 }

 // Here you can add user defined functions 
 //userdefined function() // 4th execution

acnoChange(event:any){
  //console.log(event);
  console.log(event.target.value); //1000
  this.acno=event.target.value;
}
pswdChange(event:any){
  //console.log(event);
  console.log(event.target.value);
  this.pswd=event.target.value;
}
 login(){
    //alert('Login Clicked . . . ');
    var acno = this.acno;//1000
    var pswd = this.pswd;//1000
    var userDetails = this.userDetails;
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert("login Successfull")
      }else{
        alert("incorrect password")
      }

    }else{
      alert("user does not exist")
    }
}

}
