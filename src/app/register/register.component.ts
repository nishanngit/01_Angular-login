import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""; //properties
  acno="";
  pswd="";


  // Register Model
  registerForm = this.fb.group({ // model
    uname:[''], // array
    acno:[''], // array
    pswd:[''] // array
  })
  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }//dependancy injection

  ngOnInit(): void {
  }

  register(){
   // alert("Register button clicked");
   console.log(this.registerForm);
   
    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;
    const result = this.ds.register(acno,uname,pswd);
    if(result){
        alert("successfully registered");
      }else{
        alert("something went wrong");
      }

  }
}
