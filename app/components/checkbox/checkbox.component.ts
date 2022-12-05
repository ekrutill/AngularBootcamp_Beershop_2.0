import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() name: string = '';
  @Input() type: string = 'button';
  @Output() changeCheckbox = new EventEmitter<void>()


  constructor() { }

  ngOnInit(): void {
  }

  submitFiltering(): void {
    this.changeCheckbox.emit()
    
  }

}
