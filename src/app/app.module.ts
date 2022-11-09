import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({ // decorator
  declarations: [ // To hold components and pipes  for specific modules
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    TransactionComponent
  ],
  imports: [ //for 3rd party libraries
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], // contain services
  bootstrap: [AppComponent] //to identify root component
})
export class AppModule { } // available for other modules
