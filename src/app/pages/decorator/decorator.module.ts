import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorComponent } from './decorator.component';
import { DecoratorRoutingModule } from './decorator-routing.module';



@NgModule({
  declarations: [DecoratorComponent],
  imports: [
    CommonModule,
    DecoratorRoutingModule
  ]
})
export class DecoratorModule { }
