import { Component } from "@angular/core";

@Component({
  selector: 'app-ng-for-comp',
  templateUrl: './ng-for-comp.component.html',
  styleUrls: ['./ng-for-comp.component.css']
})
export class NgForCompComponent {
  colors=[
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]
}
