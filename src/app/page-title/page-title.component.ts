import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  title = "RESUME"
  btn = "EDIT RESUME"
  constructor() { }

  ngOnInit() {
  }

  isbtnClick = false

  onClick() {
    this.isbtnClick = !this.isbtnClick
    this.btn = "SAVE RESUME"
  }
}
