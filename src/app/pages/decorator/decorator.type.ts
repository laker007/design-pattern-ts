// 饮料抽象类
export abstract class Beverage {
  description: string;
  getDescription() {
    return this.description;
  }

  abstract cost(): void;
}

// 具体的饮料
export class HouseBlend extends Beverage {
  cost() { }
}

// 如果按照上述设计去做，那么只要有一个不一样的饮料都需要设计一个类去实现 cost
// 比如：牛奶咖啡，牛奶奶茶，牛奶+奶泡+咖啡，只要有一个调料不一样，就需要新建一个类去实现



// 如果按照下面这种方式去做，每新增一种配料就需要修改基类，这样维护的成本会很高
// 随着配料越来越多，基类会逐渐庞大。
export abstract class BeverageWithOther {
  milk;
  mocha;
  whip;

  description;
  getDescription() { }

  hasMilk() { }

  cost() {
    if (this.milk) {
      // add milk
    }
    if (this.mocha) {
      // add mocha
    }
  }
}

export class HouseBlendWithOther extends BeverageWithOther {
  cost() {
    super.cost();
    // add other things
  }
}
// 这样的设计如果新开发的饮料没有 milk，会错误继承 hasMilk() 方法，
// 每新增一种配料都需要修改超类，并且修改基类中的 cost 方法，维护的成本非常高。
// 如果需要双倍的 milk，在现有的实现中是只能在子类中完成的。

export abstract class BeverageFinal {
  description: string = 'Unknow Beverage';

  getDescription() {
    return this.description;
  }

  abstract cost(): number;
}

// 必须让 Condiment Decorator 能够取代 Beverage,所以将 Condiment Decorate 拓展自 Beverage 类
export abstract class CondimentDecorator extends BeverageFinal {
  abstract getDescription(): string;
}

// 浓缩咖啡
export class Espresso extends BeverageFinal {
  constructor() {
    super();
    this.description = 'Espresso';
  }

  cost() {
    return 1.99;
  }
}

// 混合咖啡
export class HouseBlendFinal extends BeverageFinal {
  constructor() {
    super();
    this.description  = 'HouseBlendFinal';
  }
  cost() {
    return 0.89;
  }
}

export class Mocha extends CondimentDecorator {
  beverage: BeverageFinal;

  constructor(beverage: BeverageFinal) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost() {
    return 0.2 + this.beverage.cost();
  }
}
