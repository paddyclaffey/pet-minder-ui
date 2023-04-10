import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  type: string;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = this._route.snapshot.params.type;
  }

}
