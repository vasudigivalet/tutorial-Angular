import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) {

   }
@HostListener('mouseenter') onmouseover(){
  this.renderer.setStyle(this.element.nativeElement,'color','red')
  this.renderer.setStyle(this.element.nativeElement,'background','green')
}
@HostListener('mouseleave') onmouseout(){
  this.renderer.setStyle(this.element.nativeElement,'color','green')
  this.renderer.setStyle(this.element.nativeElement,'background','red')
}
}
