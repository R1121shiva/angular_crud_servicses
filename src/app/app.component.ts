import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){
  localStorage.setItem("isloggedin","false")

  }
  title = 'anular-pactice';
  userName ="i am super admin for you(parent to child)";
}
