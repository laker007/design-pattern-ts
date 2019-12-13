export class Singleton {
  private static uniqueInstance: Singleton;

  private constructor() { }

  static getInstance() {
    console.log('1111111111');
    if (this.uniqueInstance === undefined) {
      this.uniqueInstance = new Singleton();
    }
    return this.uniqueInstance;
  }

  init() {
    console.log('Singleton init');
  }
}
