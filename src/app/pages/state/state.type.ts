export interface State {
  insertQuarter: () => void;
  ejectQuarter: () => void;
  turnCrank: () => void;
  dispense: () => void;
}

export class GumballMachine {
  soldOutState: State;
  noQuarterState: State;
  hasQuarterState: State;
  soldState: State;

  state: State = this.soldOutState;
  count = 0;

  constructor(numberGumballs: number) {
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  setState(state: State) {
    this.state = state;
  }

  getHasQuarterState() {
    return this.hasQuarterState;
  }

  getNoQuarterState() {
    return this.noQuarterState;
  }

  getSoldState() {
    return this.soldOutState;
  }
}


export class NoQuarterState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('You inserted a quarter');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter() {
    console.log('Your haven\'t inserted a quarter');
  }

  turnCrank() {
    console.log('You turned,but there\'s no quater');
  }

  dispense() {
    console.log('You need to pay first');
  }
}

export class HasQuarterState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('You can\'t insert another quarter');
  }

  ejectQuarter() {
    console.log('Quarter returned');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank() {
    console.log('You turned ...');
    this.gumballMachine.setState(this.gumballMachine.getSoldState());
  }

  dispense() {
    console.log('No gumball dispensed');
  }
}
