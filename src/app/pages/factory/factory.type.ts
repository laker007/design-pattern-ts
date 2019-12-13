export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: Array<any> = [];

  prepare() {
    console.log('Prepare ' + this.name);
    for (let i = 0; i < this.toppings.length; i++) {
      console.log(` ${this.toppings[i]} add`);
    }
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  bake() {
    console.log('Pizza bake');
  }
}

export class CheesePizza extends Pizza {
  name = 'Cheese Pizza';
  bake() { }
}

export class GreekPizza extends Pizza {
  bake() { }
}

// 简单工厂，仅仅将类的创建移除
export class SimplePizzaFactory {
  createPizza(type: string) {
    let pizza: Pizza;
    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else {
      pizza = new GreekPizza();
    }
    return pizza;
  }
}

export abstract class PizzaStore {
  orderPizza(type: string) {
    let pizza: Pizza;
    pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    console.log('PizzaStore orderPizza finish');
    return pizza;
  }

  protected abstract createPizza(type: string): Pizza;
}

export class NYPizzaStore extends PizzaStore {
  createPizza(type: string) {
    if (type === 'cheese') {
      return new NYStyleCheesePizza();
    } else if (type === 'greek') {
      return new GreekPizza();
    } else {
      return null;
    }
  }
}

export class NYStyleCheesePizza extends Pizza {
  name = 'NY Style and Cheese Pizza';
  dough = 'Thin Crust Dough';
  sauce = 'Marinara Sauce';

  constructor() {
    super();
    this.toppings.push(['Grated', 'Reggiano']);
  }
}

export interface PizzaIngredientFactory {
  createDough: () => string;
  createSauce: () => void;
  createCheese: () => void;
  createVeggies: () => void;
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createCheese() {
    console.log('NYPizzaIngredientFactory createCheese');
  }

  createDough() {
    console.log('NYPizzaIngredientFactory createDough');
    return 'NYPizzaIngredientFactory createDough';
  }

  createSauce() {
    console.log('NYPizzaIngredientFactory createSauce');
  }

  createVeggies() {
    console.log('NYPizzaIngredientFactory createVeggies');
  }
}

export class CheesePizzaFinal extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log('CheesePizzaFinal prepare');
    this.dough = this.ingredientFactory.createDough();
  }
}
