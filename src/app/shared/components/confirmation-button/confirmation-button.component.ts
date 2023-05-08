import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pm-confirmation-button',
  templateUrl: './confirmation-button.component.html',
  styleUrls: ['./confirmation-button.component.scss']
})
export class ConfirmationButtonComponent implements OnInit {

  @Input() displayText: string;
  @Output() confirmationAction = new EventEmitter<void>();

  public confirmState: boolean;

  constructor() {
    this.confirmState = false;
  }

  ngOnInit(): void {
  }

  onClick() {
    if (!this.confirmState) {
      this.confirmState = true;
    } else {
      this.confirmationAction.emit();
      this.confirmState = false;
    }
  }

}
