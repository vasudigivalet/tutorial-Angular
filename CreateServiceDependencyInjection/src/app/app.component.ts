import { Component } from "@angular/core";
import { UserService } from "./Service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  title = 'CreateServiceDependencyInjection';
  users:{name:string,status:string}[]=[];
  constructor(private userService:UserService){}
  ngOninit(){
this.users=this.userService.user
  }
}
