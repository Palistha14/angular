import { Component, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.css']
})
export class DemocomponentComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

    @HostBinding('style.color') color : string; 

    @HostListener('mouseover') onMouseOver() {
      this.color = 'green';
    } 
    @HostListener('click') onClick() {
        window.alert('Host Element Clicked');
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.color = 'red';
      // this.ChangeBgColor('red');
    }
    ChangeBgColor(color: string) {
  
      this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
