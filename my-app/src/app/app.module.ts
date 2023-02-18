import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContainerComponent } from "./container/container.component";
import { setBackgroundDirective } from "./customDirective/setbackground.directive";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { NavComponent } from "./nav/nav.component";
import { NgForCompComponent } from "./ng-for-comp/ng-for-comp.component";
import { SelectorsComponent } from "./selectors/selectors.component";
import { HoverDirective } from './customDirective/hover.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,


  ],
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    SelectorsComponent,
    DataBindingComponent,
    EventBindingComponent,
    NgForCompComponent,
    setBackgroundDirective,
    HoverDirective
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
