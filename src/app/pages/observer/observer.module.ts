import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverComponent } from './observer.component';
import { ObserverRoutingModule } from './observer-routing.module';



@NgModule({
  declarations: [ObserverComponent],
  imports: [
    CommonModule,
    ObserverRoutingModule
  ]
})
export class ObserverModule { }
