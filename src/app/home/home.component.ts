import { Component, OnInit } from '@angular/core';
import Colleges from "../../content/colleges.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public allColleges: any[] = Colleges.colleges;
}
