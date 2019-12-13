import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdapterComponent } from './adapter.component';
import { AdatperRoutingModule } from './adapter-routing.module';



@NgModule({
  declarations: [AdapterComponent],
  imports: [
    CommonModule,
    AdatperRoutingModule
  ]
})
export class AdapterModule { }
