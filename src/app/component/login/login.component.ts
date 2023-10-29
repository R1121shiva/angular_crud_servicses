import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(){

}
ngOnInit(){

}

login(userName:any,password:any){
if(userName==="admin" && password==="123"){
  localStorage.setItem("isloggedin","true")
}else{
  localStorage.setItem("isloggedin","false")
}
}
}
