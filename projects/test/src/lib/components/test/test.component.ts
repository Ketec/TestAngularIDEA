import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-test',
  templateUrl: './test.component.html'
})
export class TestComponent {
  @Input() test: boolean;
}
