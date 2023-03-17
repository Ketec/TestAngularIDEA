import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html'
})
export class WrapperComponent {
  @Input() value: boolean;
}
