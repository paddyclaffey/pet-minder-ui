import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  @Input() public animal: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
