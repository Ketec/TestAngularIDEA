import { Component } from '@angular/core';

@Component({
  selector: 'test-sub-comp',
  templateUrl: './sub-comp.component.html',
  styles: [':host { padding: 16px; display: block; }']
})
export class SubCompComponent {}
