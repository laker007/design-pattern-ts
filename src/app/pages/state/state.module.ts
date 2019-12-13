import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state.component';
import { StateRoutingModule } from './state-routing.module';



@NgModule({
  declarations: [StateComponent],
  imports: [
    CommonModule,
    StateRoutingModule
  ]
})
export class StateModule { }
