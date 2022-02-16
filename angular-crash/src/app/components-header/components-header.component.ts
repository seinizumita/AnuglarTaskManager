import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-header',
  templateUrl: './components-header.component.html',
  styleUrls: ['./components-header.component.css']
})
export class ComponentsHeaderComponent implements OnInit {
  title:string = "Task Tracker Management System";

  constructor() { }

  ngOnInit(): void {
  }

}
