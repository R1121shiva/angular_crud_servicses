import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  data : any;
constructor(private router : Router , private dataService : DataService){

}

ngOnInit(){
 this.data =  this.dataService.getAllData()
}

handleEdit(id:any){
  this.router.navigate([`/about/${id}`])
}

handleDelete(id:any){
  this.dataService.deleteData(id)
}

}
