import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[testUniqueId]'
})
export class UniqueIdDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setAttribute(this.el.nativeElement, 'id', Math.random().toString());
  }
}
