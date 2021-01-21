import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() collegeDet : any;
}
