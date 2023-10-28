import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any = []
  constructor() { }

  addUserData(data:any){
    this.data.push(data)
  }

  getAllData(){
    return this.data
  }

  editData(id:any){
    let object = this.data[id];
    return object;
  }

  updateData(id:any,data:any){
    this.data.splice(id,1,data)
  }

  deleteData(id:any){
    this.data.splice(id,1)
  }

}
