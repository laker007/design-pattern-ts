import { Component, OnInit } from '@angular/core';
import { MallardDuck, MallardDuckFinal, FlyWithWings, FlyNoWay } from './duck.type';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.less']
})
export class StrategyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const mallardDuck = new MallardDuck();
    // mallardDuck.display();
    // mallardDuck.swim();

    const mallardDuckFinal = new MallardDuckFinal();
    mallardDuckFinal.performFly();

    mallardDuckFinal.setFlyBehavior(new FlyNoWay());
    mallardDuckFinal.performFly();

  }

}
