import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor(private renderer:Renderer2) {
  }
  @ViewChild('hello', { static: true }) divHello: ElementRef;
  @ViewChildren('hello') viewch: QueryList<any>;

  @HostListener('mouseover') onMouseOver() {
      this.setStyle();
      console.log(this.viewch);
  }
  setStyle() {
      this.viewch.forEach(vch=>{
          this.renderer.setProperty(vch.nativeElement,'innerHTML',"Hello Angular viewchildren")
      })
      this.renderer.setProperty(this.divHello.nativeElement,'innerHTML',"Hello Angular viewchild")
  }    
}
