import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: [
    './summary.component.css',
    './styles/summaryProducts-section.css',
    './styles/summaryInfo-section.css'
  ]
})
export class SummaryComponent {

  @Output() order = new EventEmitter();

  onOrder(){
    this.order.emit();
  }
}
