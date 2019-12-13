// 设计鸭子超类，各种鸭子继承此超类

export abstract class Duck {
  quack() {
    console.log('Duck quack');
  }
  swim() {
    console.log('Duck swim');
  }
  // 每个鸭子的外观不同，在子类中实现
  abstract display(): void;
}

export class MallardDuck extends Duck {
  display() {
    console.log('MallardDuck display');
  }
}


// 现在需要在鸭子中增加 fly() 方法，在超类中增加不好，因为不是所有鸭子都会飞，比如：小黄鸭玩具
// 如果在每个鸭子中实现 fly() 那么会出现很多重复的代码，出现维护问题。

// 设计原则： 找出应用中可能需要变化之处，把他们独立出来，不要和那些不需要变化的代码混在一起

// 这样 fly 和 Duck 类完全分开，fly 的任何实现和 Duck 时无关的
export interface FlyBehavior {
  fly: () => void;
}

// 设计原则： 针对接口变成，而不是针对实现编程
export class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('FlyWithWings');
  }
}

export class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('FlyNoWay');
  }
}

export abstract class DuckFinal {
  flyBehavior: FlyBehavior;

  performFly() {
    this.flyBehavior.fly();
  }

  swim() {
    console.log('Duck swim');
  }

  // 动态设定行为
  setFlyBehavior(fly: FlyBehavior) {
    this.flyBehavior = fly;
  }

  abstract display(): void;
}

export class MallardDuckFinal extends DuckFinal {
  display() {
    console.log('MallardDuckFinal display');
  }

  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
  }
}

// 同样 Quack 的行为可以从 Duck 类中抽离出来
export interface QuackBehavior {
  quack: () => void;
}

export class Quack implements QuackBehavior {
  quack() {
    console.log('Quack');
  }
}

// 策略模式： 定义了算法族，分别封装起来，让他们之间可以互相替换，
// 此模式让算法的变化独立于使用算法的客户
