import { Component } from "@angular/core";

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
title='title data binding'
content='data binding'
display=true
onClick(){
  this.display=false;
}
}
