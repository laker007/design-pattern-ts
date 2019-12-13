import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingletonComponent } from './singleton.component';
import { SingletonRoutingModule } from './singleton-routing.module';



@NgModule({
  declarations: [SingletonComponent],
  imports: [
    CommonModule,
    SingletonRoutingModule
  ]
})
export class SingletonModule { }
