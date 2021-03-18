import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList, Renderer2 } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterContentInit {

  constructor(private renderer: Renderer2) { }

  @ContentChild("header") cardContentHeader: ElementRef;
  @ContentChildren("hello") tabList: QueryList<any>;
  
  ngAfterContentInit() {
    this.renderer.setStyle(this.cardContentHeader.nativeElement,"font-size","10px");
    setTimeout(()=> {
      this.tabList.forEach(ch=>{
        console.log(ch.nativeElement);
        this.renderer.setStyle(ch.nativeElement,"font-size","20px");
      });
    })
    // this.tabList.forEach(ch=>{
    //   console.log(ch.nativeElement);
    //   this.renderer.setStyle(ch.nativeElement,"font-size","20px");
    // });
  }
}
