import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//login name display
user="";

//deposit properties
  acno = "";
  pswd = "";
  amount = "";

//withdraw properties
  acno1 = "";
  pswd1 = "";
  amount1 = "";



  constructor(private ds:DataService) { 
    this.user = this.ds.currentUser;
  }

  ngOnInit(): void {
  }

    deposit(){
      //alert("Clicked deposit");
      var acno = this.acno;
      var pswd = this.pswd;
      var amount = this.amount;
      const result = this.ds.deposit(acno,pswd,amount);
      if(result){
        alert(`${amount} is credited... balance ${result}`);
      }
    }
    withdraw(){
     // alert("Clicked deposit");
     var acno = this.acno1;
     var pswd = this.pswd1;
     var amount = this.amount1;
     const result = this.ds.withdraw(acno,pswd,amount);
     if(result){
       alert(`${amount} is debited... balance ${result}`);
     }
    }
}
