import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({ // decorator
  declarations: [ // To hold components and pipes  for specific modules
    AppComponent,
    LoginComponent
  ],
  imports: [ //for 3rd party libraries
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // contain services
  bootstrap: [AppComponent] //to identify root component
})
export class AppModule { } // available for other modules
