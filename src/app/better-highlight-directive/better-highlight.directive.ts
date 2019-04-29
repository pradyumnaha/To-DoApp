import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
   
  }

  @HostListener('mouseenter')mouseover(eventData: Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#82aad6');
  }

  @HostListener('mouseleave')mouseleave(eventData: Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#b8daff');
  }
}
