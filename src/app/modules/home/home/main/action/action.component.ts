import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() title: string;
  @Input() action: string;
  @Input() link: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goTo(): void {
    console.log(this)
    this.router.navigate([this.link]);
  }

}
