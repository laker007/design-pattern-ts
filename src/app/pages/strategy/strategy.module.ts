import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyComponent } from './strategy.component';
import { StrategyRoutingModule } from './strategy-routing.module';



@NgModule({
  declarations: [StrategyComponent],
  imports: [
    CommonModule,
    StrategyRoutingModule
  ]
})
export class StrategyModule { }
