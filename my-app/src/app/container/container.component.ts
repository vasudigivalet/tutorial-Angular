import { Component } from "@angular/core";

@Component({
  selector: 'app-container',
  template: `<div>Hello vasu</div>
  <div class="container">hello bhia</div>`,
  styles: [".container{color:red}","div{margin:10px;padding:5px}"],

})
export class ContainerComponent {

}
