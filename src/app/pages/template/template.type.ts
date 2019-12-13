export abstract class CaffeineBeverage {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  abstract brew(): void;

  abstract addCondiments(): void;

  boilWater() {
    console.log('CaffeineBeverage boilWater');
  }

  pourInCup() {
    console.log('CaffeineBeverage pourInCup');
  }
}

export class Tea extends CaffeineBeverage {
  brew() {
    console.log('Tea brew');
  }

  addCondiments() {
    console.log('Tea addCondiments');
  }
}
