  import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

  @Directive({
      selector: '[changeBg]'
  })
  export class ChangeBgColorDirective {
  
      constructor(private el: ElementRef, private renderer: Renderer2) {

      }
  
      @HostBinding('style.border') border: string;

      @HostListener('mouseover') onMouseOver() {
        this.border = '2px solid green';
      } 
      @HostListener('click') onClick() {
          window.alert('Host Element Clicked');
      }
      @HostListener('mouseleave') onMouseLeave() {
        this.ChangeBgColor('red');
      } 
      ChangeBgColor(color: string) {
  
          this.renderer.setStyle(this.el.nativeElement, 'color', color);
      }
  }