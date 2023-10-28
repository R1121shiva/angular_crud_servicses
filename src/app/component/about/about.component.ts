import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  model: { firstName: string, lastName: string, email: string, websiteName: string } = { firstName: "", lastName: "", email: "", websiteName: "" }
 data : any = [];
 id:any;
 editableData : any;
  constructor(private router : ActivatedRoute , private dataService : DataService ,private route : Router){

  }
  ngOnInit(){
    this.id = this.router.snapshot.paramMap.get('id');
    if(this.id){
      this.editableData = this.dataService.editData(this.id)
      if(this.editableData){
        this.model = {
          firstName: this.editableData.firstName,
          lastName: this.editableData.lastName,
          email: this.editableData.email,
          websiteName: this.editableData.websiteName
        };
      }
    }
  }
  addData(){
    if(this.id){
      this.dataService.updateData(this.id,this.model)
      this.id = "";
      this.route.navigate(["/list"]);
    }else{
      this.dataService.addUserData(this.model)
    }
    this.route.navigate(["/list"]);
    this.model = {
      firstName: "",
      lastName: "",
      email: "",
      websiteName: ""
    };
  }
}
