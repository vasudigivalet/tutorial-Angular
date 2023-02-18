import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector:'[setBackground]'
})
export class setBackgroundDirective{
  // private element:ElementRef;
constructor(private element:ElementRef){
this.element=element
  // element.nativeElement.style.backgroundColor ="red"
}
ngOnInit(){
  this.element.nativeElement.style.backgroundColor ="red"
}
}
