import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() childdata?: string
  title: string = "vijay dinanath Chauhan";
  dateToday?: string;
  studentData: any[] = [
    { id: 1, name: "shiva", gender: 'male', area: "musakhedi" },
    { id: 1, name: "monika", gender: 'female', area: "musakhedi" },
    { id: 1, name: "gulshan", gender: 'male', area: "navlkha" },
    { id: 1, name: "ambalika", gender: 'female', area: "musakhedi" },
    { id: 1, name: "shiva", gender: 'male', area: "vijaynaager" }

  ]
  ngOnInit(): void {
    this.dateToday = new Date().toDateString();

  }
}
