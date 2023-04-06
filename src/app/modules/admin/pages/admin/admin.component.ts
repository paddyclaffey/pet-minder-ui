import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() {
    console.log('admin')
  }

  ngOnInit() {
  }

}
