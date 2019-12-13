import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandComponent } from './command.component';
import { CommandRoutingModule } from './command-routing.module';



@NgModule({
  declarations: [CommandComponent],
  imports: [
    CommonModule,
    CommandRoutingModule
  ]
})
export class CommandModule { }
