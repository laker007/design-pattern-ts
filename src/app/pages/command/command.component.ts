import { Component, OnInit } from '@angular/core';
import { SimpleRemoteControl, Light, LightOnCommand } from './command.type';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.less']
})
export class CommandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const remote = new SimpleRemoteControl();
    const light = new Light();
    const lightOn = new LightOnCommand(light);

    remote.setCommand(lightOn);
    remote.buttonWasPressed();
  }

}
