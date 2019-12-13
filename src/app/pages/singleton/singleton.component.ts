import { Component, OnInit } from '@angular/core';
import { Singleton } from './singleton.type';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.less']
})
export class SingletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const singleton = Singleton.getInstance();
    console.log(singleton);
    singleton.init();
  }

}
