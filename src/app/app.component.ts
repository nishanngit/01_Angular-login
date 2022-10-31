import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //specifies the simple css selector, ee name anu index.html (main loading index.html file lekku) lekk vilichittullathu. U need to call this component selector to your index page to disply details in browser. 
  templateUrl: './app.component.html', //the HTML template that defines our view
  styleUrls: ['./app.component.css']//The css styles or style sheets , that this component needs
})
export class AppComponent {
  title = 'bankApp';
}
