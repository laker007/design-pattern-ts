export interface Command {
  execute: () => void;
  undo: () => void;
}

export interface NoCommand extends Command {
}

export class Light {
  on() { }
  off() { }
}

export class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.on();
    console.log('LightOnCommand execute');
  }

  undo() {
    this.light.off();
  }

}

export class SimpleRemoteControl {
  slot: Command;
  constructor() { }
  setCommand(command: Command) {
    this.slot = command;
  }
  buttonWasPressed() {
    this.slot.execute();
    console.log('SimpleRemoteControl buttonWasPressed');
  }
}

export class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;

  constructor() {
    this.onCommands = new Array(7);
    this.offCommands = new Array(7);

    const noCommand: NoCommand[] = new Array(7);
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand[i];
      this.offCommands[i] = noCommand[i];
    }
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    onCommand[slot] = onCommand;
    offCommand[slot] = offCommand;
  }

  onButtonWasPressed(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPressed(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  undoButtonWasPressed() {
    this.undoCommand.undo();
  }
}
