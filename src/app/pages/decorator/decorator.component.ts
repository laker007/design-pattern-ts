import { Component, OnInit } from '@angular/core';
import { BeverageFinal, Espresso, Mocha } from './decorator.type';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.less']
})
export class DecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let beverage: BeverageFinal = new Espresso();
    console.log(beverage.getDescription() + ` ${beverage.cost()}`);

    beverage = new Mocha(beverage);
    console.log(beverage.getDescription() + ` ${beverage.cost()}`);

    beverage = new Mocha(beverage);
    console.log(beverage.getDescription() + ` ${beverage.cost()}`);
  }

}
