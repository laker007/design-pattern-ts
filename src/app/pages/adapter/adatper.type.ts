
export interface Duck {
  fly: () => void;
  quack: () => void;
}

export class MallardDuck implements Duck {
  quack() {
    console.log('MallardDuck quack');
  }

  fly() {
    console.log('MallardDuck fly');
  }
}

export interface Turkey {
  gobble: () => void;
  fly: () => void;
}

export class WildTurkey implements Turkey {
  gobble() {
    console.log('WildTurkey gobble');
  }

  fly() {
    console.log('WildTurkey fly');
  }
}

export class TurkeyAdapter implements Duck {
  turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  fly() {
    this.turkey.fly();
   }
  quack() {
    this.turkey.gobble();
   }
}
