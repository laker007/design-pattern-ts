import { Component, OnInit } from '@angular/core';
import { NYPizzaStore } from './factory.type';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.less']
})
export class FactoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let nyPizzaStore = new NYPizzaStore();

    nyPizzaStore.orderPizza('cheese');
  }

}
